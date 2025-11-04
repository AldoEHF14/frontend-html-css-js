const paletteEL = document.getElementById("palette");
const generateBtn = document.getElementById("generate");

function randomColor() {
    return'#' + 
    Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function generatePalette() {
    paletteEL.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const color = randomColor();
        const row = document.createElement("div");
        row.className = "color-row";
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;
        const code = document.createElement("div");
        code.className = "color-code";
        code.innerText = color;
        row.appendChild(box);
        row.appendChild(code);
        row.addEventListener("click", () => {
            navigator.clipboard.writeText(color).then(() => {
                alert(`Color ${color} copied to clipboard!`);
            });
        });
        paletteEL.appendChild(row); 
    }
}

generatePalette();
generateBtn.addEventListener("click", generatePalette);