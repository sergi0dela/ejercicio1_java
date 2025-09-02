const botonPillame = document.querySelector('.showme');
console.log('Botón con la clase .showme:', botonPillame);

const tituloPrincipal = document.querySelector('#pillado');
console.log('Título h1 con el id #pillado:', tituloPrincipal);

const todosLosParrafos = document.querySelectorAll('p');
console.log('Todos los elementos de párrafo:', todosLosParrafos);

const criaturasPokemon = document.querySelectorAll('.pokemon');
console.log('Todos los elementos con la clase .pokemon:', criaturasPokemon);

const elementosAtributoTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log('Todos los elementos con el atributo data-function="testMe":', elementosAtributoTestMe);

const tercerElementoTestMe = document.querySelectorAll('[data-function="testMe"]')[2];
console.log('El tercer personaje con el atributo data-function="testMe":', tercerElementoTestMe);