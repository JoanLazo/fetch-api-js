const contenido = document.querySelector('#contenido');
// Consumiento informacion de un archivo tipo txt

// function traer(){
// // contenido.innerHTML = `<p>Hola</p>`;
// fetch('texto.txt')
// .then(data => data.text())
// .then(data => {
//     console.log(data);
//     contenido.innerHTML = `${data}`;
// })
// }

// Consumiendo informacion de un link api

function traer(){
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then( data => {
        console.log(data.results['0'])
        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
        <p>Nombre: ${data.results['0'].name.first}</p>`
    }) 
}
    
// // Creando una tabla con Json
// function traer(){
//     fetch('tabla.json')
//     .then( res => res.json() )
//     .then( data => {
//         tabla(data)
//     }) 
// }
// function tabla(data){
//     // console.log(data)
//     // contenido.innerHTML = ''
//     for(let valor of data){
//         // console.log(i.nombre)
//         contenido.innerHTML += `
//         <tr>
//         <th scope="row">${valor.id}</th>
//         <td>${valor.nombre}</td>
//         <td>${valor.email}</td>
//         <td>${valor.estado ? 'Activo': 'Eliminado'}</td>
//       </tr>`

//     }
// }