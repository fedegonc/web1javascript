// Obtén referencias a los elementos HTML
const nuevoElementoInput = document.querySelector("#nuevoElementoInput");
const agregarElementoButton = document.querySelector("#agregarElementoButton");
const resultadoBusqueda = document.querySelector("#resultadoBusqueda");
const finalElementoInput = document.querySelector("#finalInput");
const agregarElementoFinalButton = document.querySelector("#agregarElementoFinalButton");

// Agrega un event listener al botón para agregar el nuevo elemento cuando se haga clic
agregarElementoButton.addEventListener("click", agregarElemento);

agregarElementoFinalButton.addEventListener("click", agregarElementoAlFinal);

// Array de elementos
const array = ["Teste", "Passe", "Leite", "Café", "HTML", "JAVA", "JS", "CSS", "Casa"];

// Función para agregar un nuevo elemento al array
function agregarElemento() {
  const nuevoElemento = nuevoElementoInput.value;

  // Agregar el nuevo elemento al inicio del array
  array.unshift(nuevoElemento);

  // Actualizar los resultados de búsqueda
  buscarContenido();
}

// Función para agregar un nuevo elemento al final del array
function agregarElementoAlFinal() {
  const finalElemento = finalElementoInput.value;

  // Agregar el nuevo elemento al final del array
  array.push(finalElemento);

  // Actualizar los resultados de búsqueda
  buscarContenido();
}

// Función para buscar el contenido en el array
function buscarContenido() {
  const busqueda = searchInput.value.toLowerCase();
  const resultados = [];

  for (let i = 0; i < array.length; i++) {
    const elemento = array[i].toLowerCase();
    if (elemento.includes(busqueda)) {
      resultados.push(elemento);
    }
  }

  if (resultados.length > 0) {
    resultadoBusqueda.textContent = "Resultados: " + resultados.join(", ");
  } else {
    resultadoBusqueda.textContent = "No se encontraron resultados.";
  }
}
