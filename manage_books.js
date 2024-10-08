// Function to get books from localStorage
function getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

// Function to save books to localStorage
function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

// Function to add a book to localStorage
function saveBook(book) {
    const books = getBooks();
    books.push(book);
    saveBooks(books);
}

// Function to delete a book from localStorage
function deleteBook(bookTitle) {
    let books = getBooks();
    books = books.filter(book => book.title !== decodeURIComponent(bookTitle));
    saveBooks(books);
    renderBooks(); // Re-render the table after deletion
}

// Function to render the books in the admin table
function renderBooks() {
    const books = getBooks();
    const tableBody = document.querySelector("#booksTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    books.forEach((book) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.summary}</td>
            <td>${book.publicationDate}</td>
            <td>
                <button onclick="deleteBook('${encodeURIComponent(book.title)}')">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Event listener for form submission
document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const summary = document.getElementById('summary').value.trim();
    const publicationDate = document.getElementById('publicationDate').value; // Changed to date type

    // Create a new book object
    const newBook = {
        title: title,
        author: author,
        summary: summary,
        publicationDate: publicationDate
    };

    // Save the book to localStorage
    saveBook(newBook);

    // Clear the form
    document.getElementById('addBookForm').reset();

    alert('Book added successfully!');

    // Re-render the book list
    renderBooks();
});

// Initial render of books when the page loads
renderBooks();
