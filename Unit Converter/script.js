const units = {
  length: ["meter", "kilometer", "centimeter", "millimeter", "mile", "yard", "foot", "inch"],
  weight: ["kilogram", "gram", "milligram", "pound", "ounce"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin"]
};

function updateUnits() {
  const type = document.getElementById("type").value;
  const from = document.getElementById("fromUnit");
  const to = document.getElementById("toUnit");

  from.innerHTML = "";
  to.innerHTML = "";

  units[type].forEach(unit => {
    from.innerHTML += `<option value="${unit}">${unit}</option>`;
    to.innerHTML += `<option value="${unit}">${unit}</option>`;
  });
}

function convert() {
  const type = document.getElementById("type").value;
  const value = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  if (isNaN(value)) return showResult("⚠️ Please enter a valid number.", true);
  if (from === to) return showResult("⚠️ Please select different units.", true);

  let result;
  if (type === "length") result = convertLength(value, from, to);
  else if (type === "weight") result = convertWeight(value, from, to);
  else result = convertTemperature(value, from, to);

  showResult(`${value} ${from} = ${result.toFixed(3)} ${to}`);
}

function convertLength(value, from, to) {
  const meters = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    mile: 1609.34,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254
  };
  return value * (meters[from] / meters[to]);
}

function convertWeight(value, from, to) {
  const kilograms = {
    kilogram: 1,
    gram: 0.001,
    milligram: 1e-6,
    pound: 0.453592,
    ounce: 0.0283495
  };
  return value * (kilograms[from] / kilograms[to]);
}

function convertTemperature(value, from, to) {
  let celsius;
  if (from === "Celsius") celsius = value;
  else if (from === "Fahrenheit") celsius = (value - 32) * 5 / 9;
  else celsius = value - 273.15;

  if (to === "Celsius") return celsius;
  if (to === "Fahrenheit") return (celsius * 9 / 5) + 32;
  return celsius + 273.15;
}

function showResult(text, isError = false) {
  const box = document.getElementById("result");
  box.textContent = text;
  box.style.display = "block";
  box.style.background = isError ? "var(--error-bg)" : "var(--success-bg)";
  box.style.color = isError ? "var(--error-text)" : "var(--success-text)";
  box.classList.add("animate");
  setTimeout(() => box.classList.remove("animate"), 500);
}

/* === Theme toggle === */
const themeToggle = document.getElementById("themeToggle");

function loadTheme() {
  const darkMode = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", darkMode);
  themeToggle.textContent = darkMode ? "🌙" : "🌞";
}

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", dark);
  themeToggle.textContent = dark ? "🌙" : "🌞";
};

loadTheme();
updateUnits();
