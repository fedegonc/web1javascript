// Obtén referencias a los elementos HTML
const birthdayInput = document.getElementById('birthdayInput');
const calculateButton = document.getElementById('calculateButton');
const resultElement = document.getElementById('result');

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
const baseInput = document.getElementById('baseInput');
const exponenteInput = document.getElementById('exponenteInput');
const resultadoElement = document.getElementById('resultado');

// Agrega un event listener al botón para calcular la potencia cuando se haga clic
document.getElementById('calcularButton').addEventListener('click', calcularPotencia);

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


   // Array de datos


// script.js

// Obtener los elementos del DOM
var searchInput = document.getElementById("searchInput");
var resultadoBusqueda = document.getElementById("resultadoBusqueda");

// Asignar el evento de búsqueda al input
searchInput.addEventListener("input", buscarContenido);

function buscarContenido() {
  // Obtener el valor de búsqueda ingresado por el usuario
  var busqueda = searchInput.value;

  // Array de elementos en los que se realizará la búsqueda
  var array = ['Teste', 'Passe', 'Leite', 'Café', 'HTML', 'JAVA', 'JS', 'CSS', 'Casa'];

  // Variable para almacenar los resultados de búsqueda
  var resultados = [];

  // Realizar la búsqueda en el array
  for (var i = 0; i < array.length; i++) {
    if (array[i].includes(busqueda)) {
      resultados.push(array[i]);
    }
  }

  // Mostrar los resultados de búsqueda
  resultadoBusqueda.textContent = "Resultados: " + resultados.join(", ");
}




