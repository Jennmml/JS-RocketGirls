const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noButton.style.transform = `translate(${x}px, ${y}px)`;
});

yesButton.addEventListener("click", function() {
    document.body.innerHTML = "<h1>Te amo</h1>";
});