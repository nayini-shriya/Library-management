// book-details.js

// Function to get books from localStorage
function getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        title: params.get('title'),
        author: params.get('author')
    };
}

// // Function to display book details
// function displayBookDetails() {
//     const { title, author } = getQueryParams();
//     const books = getBooks();
//     const container = document.getElementById("bookDetailsContainer");

//     // Find the book details from localStorage based on the title and author
//     const book = books.find(b => b.title === decodeURIComponent(title) && b.author === decodeURIComponent(author));

//     if (book) {
//         container.innerHTML = `
//             <h2>${book.title}</h2>
//             <p><strong>Author:</strong> ${book.author}</p>
//             <p><strong>Summary:</strong> ${book.summary}</p>
//             <p><strong>Publication Date:</strong> ${book.publicationDate}</p>
//             <button onclick="borrowBook('${encodeURIComponent(book.title)}')">Borrow</button>
//         `;
//     } else {
//         container.innerHTML = "<p>Book details not found.</p>";
//     }
// }
function displayBookDetails() {
    const { title, author } = getQueryParams();
    const summary = localStorage.getItem('selectedBookSummary'); // Retrieve summary from localStorage

    const bookDetailsContainer = document.getElementById('bookDetailsContainer');
    bookDetailsContainer.innerHTML = `
        <h2>${decodeURIComponent(title)}</h2>
        <p><strong>Author:</strong> ${decodeURIComponent(author)}</p>
        <p><strong>Summary:</strong> ${summary ? decodeURIComponent(summary) : 'No summary available.'}</p>
    `;
}
// Function to handle borrowing a book
function borrowBook(bookTitle) {
    alert(`You have borrowed "${decodeURIComponent(bookTitle)}".`); // Replace with actual borrowing logic
}

// Display book details on page load
displayBookDetails();
