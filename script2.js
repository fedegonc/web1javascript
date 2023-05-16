// Obtén referencias a los elementos HTML
const nuevoElementoInput = document.getElementById("nuevoElementoInput");
const agregarElementoButton = document.getElementById("agregarElementoButton");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");
const finalElementoInput = document.getElementById("finalInput");
const agregarElementoFinalButton = document.getElementById("agregarElementoFinalButton");

// Agrega un event listener al botón para agregar el nuevo elemento cuando se haga clic
agregarElementoButton.addEventListener("click", agregarElemento);

agregarElementoFinalButton.addEventListener("click", agregarElementoAlFinal);
// Array de elementos
const array = ['Teste', 'Passe', 'Leite', 'Café', 'HTML', 'JAVA', 'JS', 'CSS', 'Casa'];



// Función para agregar un nuevo elemento al array
function agregarElemento() {
  const nuevoElemento = nuevoElementoInput.value;

  // Agregar el nuevo elemento al inicio del array
  array.unshift(nuevoElemento);

  // Actualizar los resultados de búsqueda
  buscarContenido();
}

// Función para buscar el contenido en el array


function agregarElementoAlFinal() {
    const finalElemento = finalElementoInput.value;
  
    // Agregar el nuevo elemento al final del array
    array.push(finalElemento);
  
    // Actualizar los resultados de búsqueda
    buscarContenido();
  }



  function buscarContenido() {
    const busqueda = searchInput.value.toLowerCase();
  
    // Realiza la búsqueda en el array utilizando el método filter()
    const resultados = array.filter(elemento => elemento.toLowerCase().includes(busqueda));
  
    // Muestra los resultados de búsqueda
    if (resultados.length > 0) {
      resultadoBusqueda.textContent = "Resultados: " + resultados.join(", ");
    } else {
      resultadoBusqueda.textContent = "No se encontraron resultados.";
    }
  }
