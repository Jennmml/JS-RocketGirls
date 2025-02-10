const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

/*se obtiene un valor aleatorio entre 0 y el ancho de la ventana
 del navegador, menos 100 píxeles.*/

noButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    /*uso transform: translate(x, y) para mover el botón a la nueva posición generada,
    cambia la posición del botón sin afectar su flujo del DOM.*/
    noButton.style.transform = `translate(${x}px, ${y}px)`;
});

yesButton.addEventListener("click", function() {
    document.body.innerHTML = `<h1>Te amo</h1>`;
});