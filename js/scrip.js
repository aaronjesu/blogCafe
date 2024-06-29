//querySelector
const heading = document.querySelector('.header__text h2')// 0 o 1 elementos
heading.textContent='Nuevo Hendini';
console.log(heading);

//querySelectorAll

const enlaces= document.querySelectorAll('.navegacion a');
enlaces(0).textContent='Nuevo Texto para Enlace';
enlaces(0).classList.add('nueva-clase'); //agrega nueva clase
enlaces(0).classList.remove('navegacion__enlace'); //remueve una clase

//getElementById

const heading2= document.getElementById('heading');
console.log(heading2);

//generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//agregar el href
nuevoEnlace.href='nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

//agregar la clase

nuevoEnlace.classList.add('navegacion__enlace'); 



<a href="nosotros.html" class="nuevo-enlace">Nosotros</a> 

console.log(nuevoEnlace);

//AGREGAR AL DOCUMENTO
const navegacion= document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


//otro js video 147

console.log(nuevoEnlace);

//eventos

console.log(1);

window.addEventListener('Load',function(){// load espera a que el js y los archivos que dependen del html esten listos
    console.log(2);
});

//otro forma que lo de arriba

window.onload=function(){
    console.log(3);
}

document.addEventListener(' DOMContentLoaded', function(){ //solo espera por el HTML, pero no espera Css o imagenes
    console.log(4);
});
console.log(5);

//llama al scroll
window.onscroll=function(){
    console.log('scrolling...');
}

//otro js video 148

//seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelectorAll();