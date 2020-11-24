const display = document.getElementById("display");

function digitar (event) {
  display.value += event.target.innerHTML;
}

function limparDisplay () {
  display.value = 0;
}

function calcular () {
  const displayValue = display.value;
  
  if (displayValue.includes("+")) {
    somar();
  } else if (displayValue.includes("-")) {
    subtrair();
  } else if (displayValue.includes("x")) {
    multiplicar();
  } else if(displayValue.includes("/")) {
    dividir();
  }
}

function somar () {
  const values = parsearValores("+");
  const result = parseInt(values.value_1) + parseInt(values.value_2);

  display.value = result;
}

function subtrair () {
  const values = parsearValores("-");
  const result = parseInt(values.value_1) - parseInt(values.value_2);

  display.value = result;
}

function multiplicar () {
  const values = parsearValores("x");
  const result = parseInt(values.value_1) * parseInt(values.value_2);

  display.value = result;
}

function dividir () {
  const values = parsearValores("/");
  const result = parseInt(values.value_1) / parseInt(values.value_2);

  display.value = result;
}

function parsearValores (op) {
  const displayValue = display.value;
  const index = displayValue.indexOf(op);

  return {
    value_1: displayValue.substring(0),
    value_2: displayValue.substring(index + 1)
  };
}