const input = document.getElementById('taskinput');
const list = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const themeToggle = document.getElementById('themeToggle');

function saveTasks() {
  const tasks = [];
  list.querySelectorAll('li').forEach(li => {
    tasks.push({
      text: li.querySelector('span').textContent,
      date: li.querySelector('small').textContent,
      done: li.classList.contains('done')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(t => createTask(t.text, t.date, t.done));
}

function createTask(text, date = new Date().toLocaleString(), done = false) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const small = document.createElement('small');
  span.textContent = text;
  small.textContent = date;

  li.appendChild(span);
  li.appendChild(small);

  if (done) li.classList.add('done');

  li.onclick = () => { li.classList.toggle('done'); saveTasks(); };
  li.ondblclick = () => { li.remove(); saveTasks(); };

  list.appendChild(li);
  saveTasks();
}

function handleKey(event) {
  if (event.key === 'Enter') {
    const text = input.value.trim();
    if (!text) return;
    createTask(text);
    input.value = '';
  }
}

function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const filter = filterSelect.value;
  list.querySelectorAll('li').forEach(li => {
    const matchesSearch = li.textContent.toLowerCase().includes(search);
    const isDone = li.classList.contains('done');
    const matchesFilter =
      filter === 'all' ||
      (filter === 'done' && isDone) ||
      (filter === 'pending' && !isDone);

    li.style.display = matchesSearch && matchesFilter ? '' : 'none';
  });
}

document.getElementById('clearAll').onclick = () => {
  list.innerHTML = '';
  localStorage.removeItem('tasks');
};

searchInput.addEventListener('input', applyFilters);
filterSelect.addEventListener('change', applyFilters);

/* === Tema oscuro/claro === */
function loadTheme() {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark', darkMode);
  themeToggle.textContent = darkMode ? '🌙' : '🌞';
}

themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', dark);
  themeToggle.textContent = dark ? '🌙' : '🌞';
};

loadTheme();
loadTasks();
