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


