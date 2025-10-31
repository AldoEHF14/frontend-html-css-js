const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange','pink',
    'black','gray','brown','gold','maroon','turquoise','aquamarine','salmon'];

const colorBox = document.getElementById('colorBox');
const optionsDiv = document.getElementById('options');
const result= document.getElementById('result');

let correctColor;
function newGame() {
    correctColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.background = correctColor;
    optionsDiv.innerHTML = '';
    result.textContent = '';
    const shuffled = [...colors].sort(() => 0.5 - Math.random());
    const options = shuffled.slice(0, 3);
    if (!options.includes(correctColor)) options[0] = correctColor;
    options.sort(() => 0.5 - Math.random());
    options.forEach(c => {
        const btn = document.createElement('button');
        btn.textContent = c;
        btn.onclick = () => checkAnswer(c);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(color){
    if(color === correctColor){
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {    
        result.textContent = `Try Again!`;
        result.style.color = 'red';
    }
    setTimeout(newGame, 1000);
}

newGame();