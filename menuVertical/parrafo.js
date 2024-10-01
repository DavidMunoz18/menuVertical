export function crearParrafo(){

    const parrafo = document.createElement('p');
    parrafo.classList.add('p');

    const contenido =

    '<p>Esto es un texto de prueba</p>';

    parrafo.innerHTML = contenido;

    return parrafo;


  }