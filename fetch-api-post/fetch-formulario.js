const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('me diste un click')
    let datos = new FormData(formulario);
    console.log(datos);
    console.log(datos.get('usuario'));
    console.log(datos.get('pass'));
})  