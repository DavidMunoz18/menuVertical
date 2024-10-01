import { meterImagen } from './imagen.js';
import { meterLista } from './lista.js';
import { crearParrafo } from './parrafo.js';
import { crearTabla } from './tabla.js';

document.addEventListener('DOMContentLoaded', () => {
  
  const btnTabla = document.getElementById('btnTabla');
  const contenedorTabla = document.getElementById('contenedorTabla');


  const btnParrafo = document.getElementById('btnParrafo');
  const contenedorParrafo = document.getElementById('contenedorParrafo');


  const btnImagen = document.getElementById('btnImagen');
  const contenedorImg = document.getElementById('contenedorImg');

  const btnLista = document.getElementById('btnLista');
  const contenedorLista = document.getElementById('contenedorLista');


  btnTabla.addEventListener('click', () => {
   
    const tabla = crearTabla();      
    contenedorTabla.appendChild(tabla); 
  });


  btnParrafo.addEventListener('click', () => {
 
    const parrafo = crearParrafo();  
    contenedorParrafo.appendChild(parrafo);
  });


  btnImagen.addEventListener('click', () => {
 
    const imagen = meterImagen(); 
    contenedorImg.appendChild(imagen); 
  });

  btnLista.addEventListener('click', () => {

  
    const lista = meterLista();
    contenedorLista.appendChild(lista);


  });
});
