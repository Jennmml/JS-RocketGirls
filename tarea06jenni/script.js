async function fetchFoxImage() {
    try {
        const response = await fetch('https://randomfox.ca/floof/');
        if (!response.ok) {
            throw new Error('Error al obtener la imagen');
        }
        const data = await response.json();
        document.getElementById('fox-image').src = data.image;
        document.getElementById('fox-image').hidden = false;
    } catch (error) {
        console.error(error);
        alert('No se pudo cargar la imagen. Inténtalo de nuevo.');
    }
}