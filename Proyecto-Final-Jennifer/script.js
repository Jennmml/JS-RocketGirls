const modal = document.getElementById('edit-modal');
const closeModal = document.querySelector('.close');
const saveEditButton = document.getElementById('save-edit');
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

let currentTitleElement, currentReviewElement;

bookForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('book-title').value;
    const review = document.getElementById('book-review').value;
    const imageInput = document.getElementById('book-image');
    
    if (!title || !review) return;

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookImage = document.createElement('img');
    if (imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            bookImage.src = e.target.result;
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        bookImage.src = 'default-image.jpg';
    }

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = title;

    const bookReview = document.createElement('p');
    bookReview.textContent = review;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        editBook(bookTitle, bookReview);
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        bookCard.remove();
    });

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    bookCard.appendChild(bookImage);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookReview);
    bookCard.appendChild(buttonContainer);

    bookList.appendChild(bookCard);

    bookForm.reset();
});

function editBook(titleElement, reviewElement) {
    currentTitleElement = titleElement;
    currentReviewElement = reviewElement;
    document.getElementById('edit-title').value = titleElement.textContent;
    document.getElementById('edit-review').value = reviewElement.textContent;
    modal.style.display = 'flex';
}

saveEditButton.addEventListener('click', () => {
    const newTitle = document.getElementById('edit-title').value;
    const newReview = document.getElementById('edit-review').value;

    if (newTitle) currentTitleElement.textContent = newTitle;
    if (newReview) currentReviewElement.textContent = newReview;

    modal.style.display = 'none';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
 
            data.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-card');

                const bookImage = document.createElement('img');
                bookImage.src = book.image || 'default-image.jpg'; // Usar una imagen predeterminada si no hay imagen

                const bookTitle = document.createElement('h2');
                bookTitle.textContent = book.title;

                const bookReview = document.createElement('p');
                bookReview.textContent = book.review || 'Aquí va la descripción del libro...';

                const buttonContainer = document.createElement('div');
                buttonContainer.classList.add('button-container');

                const editButton = document.createElement('button');
                editButton.classList.add('edit');
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', () => {
                    editBook(bookTitle, bookReview);
                });

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    bookCard.remove();
                });

                buttonContainer.appendChild(editButton);
                buttonContainer.appendChild(deleteButton);

                bookCard.appendChild(bookImage);
                bookCard.appendChild(bookTitle);
                bookCard.appendChild(bookReview);
                bookCard.appendChild(buttonContainer);

                document.getElementById('book-list').appendChild(bookCard);
            });
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
});
