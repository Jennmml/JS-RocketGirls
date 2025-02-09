const box = document.getElementById("box");

box.addEventListener("click", function() {
    box.classList.remove("rotate");

    setTimeout(() => {
        box.classList.add("rotate"); 
    }, 10);
});
