const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnChorimeats = document.querySelector('.chorimeat');
const btnBebida = document.querySelector('.bebida');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const chorimeats = platillosArreglo.filter(chorimeat=> chorimeat.getAttribute('data-platillo') === 'chorimeat');
    const bebidas = platillosArreglo.filter(bebida => bebida.getAttribute('data-platillo') === 'bebida');
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    const postres = platillosArreglo.filter(postre=> postre.getAttribute('data-platillo') === 'postre');

    mostrarPlatillos(chorimeats, bebidas, pizzas, postres, platillosArreglo);

}

const mostrarPlatillos = (chorimeats, bebidas, pizzas, postres, todos) =>{
    btnChorimeats.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        chorimeats.forEach(chorimeats=> contenedorPlatillos.appendChild(chorimeats));
    });

    btnBebida.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
         bebidas.forEach(bebida=> contenedorPlatillos.appendChild(bebida));
    });

    btnPizza.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza=> contenedorPlatillos.appendChild(pizza));
    });
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}