const modal = document.getElementById('edit-modal');
const closeModal = document.querySelector('.close');
const saveEditButton = document.getElementById('save-edit');
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

let currentTitleElement, currentReviewElement, currentAuthorElement, currentGenreElement, currentYearElement;

bookForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('book-title').value;
    const review = document.getElementById('book-review').value;
    const author = document.getElementById('book-author').value;
    const genre = document.getElementById('book-genre').value;
    const year = document.getElementById('book-year').value;
    const imageInput = document.getElementById('book-image');
    
    if (!title || !review || !author || !genre || !year) return;

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    //IMPORTANTE
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

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${author}`;

    const bookGenre = document.createElement('p');
    bookGenre.textContent = `Genre: ${genre}`;

    const bookYear = document.createElement('p');
    bookYear.textContent = `Year: ${year}`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        editBook(bookTitle, bookReview, bookAuthor, bookGenre, bookYear);
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
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookGenre);
    bookCard.appendChild(bookYear);
    bookCard.appendChild(buttonContainer);

    bookList.appendChild(bookCard);

    bookForm.reset();
});

function editBook(titleElement, reviewElement, authorElement, genreElement, yearElement) {
    currentTitleElement = titleElement;
    currentReviewElement = reviewElement;
    currentAuthorElement = authorElement;
    currentGenreElement = genreElement;
    currentYearElement = yearElement;

    document.getElementById('edit-title').value = titleElement.textContent;
    document.getElementById('edit-review').value = reviewElement.textContent;
    document.getElementById('edit-author').value = authorElement.textContent.replace('Author: ', '');
    document.getElementById('edit-genre').value = genreElement.textContent.replace('Genre: ', '');
    document.getElementById('edit-year').value = yearElement.textContent.replace('Year: ', '');
    
    modal.style.display = 'flex';
}

saveEditButton.addEventListener('click', () => {
    const newTitle = document.getElementById('edit-title').value;
    const newReview = document.getElementById('edit-review').value;
    const newAuthor = document.getElementById('edit-author').value;
    const newGenre = document.getElementById('edit-genre').value;
    const newYear = document.getElementById('edit-year').value;

    if (newTitle) currentTitleElement.textContent = newTitle;
    if (newReview) currentReviewElement.textContent = newReview;
    if (newAuthor) currentAuthorElement.textContent = `Author: ${newAuthor}`;
    if (newGenre) currentGenreElement.textContent = `Genre: ${newGenre}`;
    if (newYear) currentYearElement.textContent = `Year: ${newYear}`;

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
                bookImage.src = book.image || 'default-image.jpg';

                const bookTitle = document.createElement('h2');
                bookTitle.textContent = book.title;

                const bookReview = document.createElement('p');
                bookReview.textContent = book.review || 'No description available...';

                const bookAuthor = document.createElement('p');
                bookAuthor.textContent = `Author: ${book.author || 'Unknown'}`;

                const bookGenre = document.createElement('p');
                bookGenre.textContent = `Genre: ${book.genre || 'Unknown'}`;

                const bookYear = document.createElement('p');
                bookYear.textContent = `Year: ${book.year || 'Unknown'}`;

                const buttonContainer = document.createElement('div');
                buttonContainer.classList.add('button-container');

                const editButton = document.createElement('button');
                editButton.classList.add('edit');
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', () => {
                    editBook(bookTitle, bookReview, bookAuthor, bookGenre, bookYear);
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
                bookCard.appendChild(bookAuthor);
                bookCard.appendChild(bookGenre);
                bookCard.appendChild(bookYear);
                bookCard.appendChild(buttonContainer);

                bookList.appendChild(bookCard);
            });
        })
        .catch(error => console.error("Error loading books.json:", error));
});
