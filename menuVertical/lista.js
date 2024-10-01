export function meterLista(){

    const lista = document.createElement('li');
    lista.classList.add('li');

    const contenido = `
    <ol class="list-group list-group-numbered">
        <li class="list-group-item">A list item</li>
        <li class="list-group-item">A list item</li>
        <li class="list-group-item">A list item</li>
    </ol>
`;
    lista.innerHTML = contenido;

    return lista;

}