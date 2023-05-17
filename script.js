// Obtén referencias a los elementos HTML
const birthdayInput = document.querySelector('#birthdayInput');
const calculateButton = document.querySelector('#calculateButton');
const resultElement = document.querySelector('#result');

// Agrega un event listener al botón para que llame a la función cuando se haga clic
calculateButton.addEventListener('click', calcularDiasRestantes);

// Función para calcular los días restantes hasta el cumpleaños
function calcularDiasRestantes() {
  // Obtén la fecha de cumpleaños del input
  const birthday = new Date(birthdayInput.value);
  
  // Obtiene la fecha actual
  const today = new Date();
  
  // Calcula la diferencia en milisegundos entre las dos fechas y conviértela a días
  const differenceInTime = birthday.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  
  // Actualiza el contenido del elemento de resultado
  resultElement.textContent = `Faltan ${differenceInDays} días para tu cumpleaños.`;
}

// Obtén referencias a los elementos HTML para calcular la potencia
const baseInput = document.querySelector('#baseInput');
const exponenteInput = document.querySelector('#exponenteInput');
const resultadoElement = document.querySelector('#resultado');

// Agrega un event listener al botón para calcular la potencia cuando se haga clic
document.querySelector('#calcularButton').addEventListener('click', calcularPotencia);

// Función para calcular la potencia
function calcularPotencia() {
  // Obtener los números base y exponente del input
  const base = parseFloat(baseInput.value);
  const exponente = parseFloat(exponenteInput.value);
  
  // Calcular el resultado
  const resultado = Math.pow(base, exponente);
  
  // Mostrar el resultado
  resultadoElement.textContent = `El resultado de ${base} elevado a la ${exponente} es: ${resultado}`;
}



