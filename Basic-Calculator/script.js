const display = document.getElementById("display");

const appendToDisplay = (value) => {
  display.value += value;
};

const clearDisplay = () => {
  display.value = "0";
};

const calculateResult = () => {
  try {
    display.value = eval(display.value); // eval funciona para cálculos simples
  } catch {
    display.value = "Error";
  }
};

// Botones de números y operadores
document.querySelectorAll(".buttons button").forEach((btn) => {
  const value = btn.getAttribute("data-value");
  if (value !== null) {
    btn.addEventListener("click", () => appendToDisplay(value));
  }
});

// Botones especiales
document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("equals").addEventListener("click", calculateResult);
