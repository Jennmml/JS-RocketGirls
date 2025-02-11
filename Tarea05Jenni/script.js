const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

function changeBackgroundColor() {
    const colors = ["#ffccd5", "#f7c5cc", "#ff9aa2", "#d90429", "#ff4d6d"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 1000);

noButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noButton.style.transform = `translate(${x}px, ${y}px)`;
});

yesButton.addEventListener("click", function() {
    document.body.innerHTML = "<h1>Te amo</h1>";
});