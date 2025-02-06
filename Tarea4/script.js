function agregarElemento() {
    const input = document.getElementById("itemInput");
    const lista = document.getElementById("lista");

    if (input.value.trim() === "") 
        return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", () => {
        li.style.background = li.style.background === "lightblue" ? "#e0e0e0" : "lightblue";
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.addEventListener("click", () => li.remove());
    
    li.appendChild(btnEliminar);
    lista.appendChild(li);
    input.value = "";
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        agregarElemento();
    }
});
