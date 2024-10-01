export function meterImagen() {
    const imagen = document.createElement('img'); // Crear un nuevo elemento <img>
    imagen.classList.add('img'); // Agregar la clase 'img' para aplicar estilos

    // Utiliza una URL directa a la imagen
    imagen.src = "cris.jpg";

    // Si quieres establecer un texto alternativo, puedes hacerlo así:
    imagen.alt = "Cristiano Ronaldo"; // Texto alternativo para la imagen

    return imagen; // Devolver el elemento de imagen creado
}
