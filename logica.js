
const icono = document.querySelector('.icono');
const elemetos1 = document.getElementById('oferta');
const elemetos2 = document.getElementById('menu');
const lista =document.querySelector('#pedidocarrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
//////////////////////////////////////////////////

const header = document.querySelector("header");
//////////////////////
const botonesPlatillos = document.querySelectorAll('.botones-platillos button');
const platillos = document.querySelectorAll('.platillo');
//////////////////////////

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '30px', 
	duration: 2500,
	reset: true
})
sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});
sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});

/////////////////////////
/////////////////////////


botonesPlatillos.forEach((boton) => {
    boton.addEventListener('click', () => {
        // Obtén la categoría del botón
        const categoria = boton.getAttribute('data-category');

        // Oculta todos los platillos
        platillos.forEach((platillo) => {
            platillo.style.display = 'none';
        });

        // Muestra solo los platillos de la categoría seleccionada
        if (categoria === 'todos') {
            platillos.forEach((platillo) => {
                platillo.style.display = 'block';
            });
        } else {
            const platillosFiltrados = document.querySelectorAll(`[data-platillo="${categoria}"]`);
            platillosFiltrados.forEach((platillo) => {
                platillo.style.display = 'block';
            });
        }
    });
});
/////////////////////////
///////////////////////// Boton de carrito


cargarEventListeners();

function cargarEventListeners(){
    elemetos1.addEventListener('click', comprarElemento);
    elemetos2.addEventListener('click', comprarElemento); 
    icono.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('venta')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento ={
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h4').textContent,
        precio: elemento.querySelector('.menu-right').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')

     }
     insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {

    const row =document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src="${elemento.imagen}" witdh=15 >
    </td>

    <td>
    ${elemento.titulo}
    </td>
   
    <td>
    ${elemento.precio}
    </td>

    <td>
    <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>
    `;
    
    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
        
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito(e) {
    e.preventDefault(); // Evitar que el navegador siga el enlace
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}