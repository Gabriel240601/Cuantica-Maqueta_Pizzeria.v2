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