
window.onscroll = function(){
    console.log('scrolling...');
}

//otro js video 148

//seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');
/* btnEnviar.addEventListener('click',function(evento) {
    console.log(evento);
 // evento.preventDefault();
  console.log('enviando formuluario');
}); */

//149 
// eventos de los inputs y texrarea

const datos ={
    nombre: '',
    email: '',
    mensaje: ''
}; 



const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formuluario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input', leerTexto);

//evento de submit

formuluario.addEventListener('submit', function(evento) {
    evento.preventDefault();

//validar formulario

    const{ nombre, email, mensaje } = datos;
    if(nombre === '' || email ==='' || mensaje===''){
        mostrarAlerta('todos los campos son obligatorios', true);
      return; // corta la ejecucion del codigo   
    }


/* 
    console.log(nombre);
    console.log(email);
    console.log(mensaje); */

     // crear alerta de enviar correctamente
     mostrarAlerta('mensaje enviado correctamente');
});

//muestra una alerta de que se envio correctamente

function mostrarAlerta(mensaje, error=null){
    const alerta = document.createElement('p');
    alerta.textContent= mensaje;
   
    if ( error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('mensaje');
    }
    formuluario.appendChild(alerta);
  
    setTimeout(() => {
     alerta.remove();
    }, 5000);
  }

// function mostrarMensaje(mensaje){
//     const mensaje2 = document.createElement('p');
//     mensaje2.textContent= mensaje;
//     mensaje2.classList.add('mensaje');
  
//     formuluario.appendChild(mensaje2);
  
//     setTimeout(() => {
//      mensaje2.remove();
//     }, 5000);
//   }


function leerTexto(e){
    // console.log(e.target.value);
   // console.log(e.target);
   datos[ e.target.id] = e.target.value;
    console.log(datos);
}


// function mostrarError(mensaje){
//   const error = document.createElement('p');
//   error.textContent= mensaje;
//   error.classList.add('error');

//   formuluario.appendChild(error);

//   setTimeout(() => {
//    error.remove();
//   }, 5000);
// }

