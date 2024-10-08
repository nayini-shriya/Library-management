
// Function to get books from localStorage
function getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

// Function to render books in the table
function renderBooks() {
    const books = getBooks();
    const tableBody = document.querySelector("#booksTable tbody");
    tableBody.innerHTML = ""; // Clear existing table rows

    books.forEach((book) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button onclick="viewBookDetails('${encodeURIComponent(book.title)}', '${encodeURIComponent(book.author)}', '${encodeURIComponent(book.summary)}')">View Details</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle viewing book details
function viewBookDetails(title, author, summary) {
    // Store summary in localStorage temporarily for display on the details page
    localStorage.setItem('selectedBookSummary', summary);
    // Redirect to the book details page with title and author as query parameters
    window.location.href = `book-details.html?title=${title}&author=${author}`;
}

function logout() {
    // Clear user session or local storage if necessary
    alert("You have logged out successfully.");
    // Redirect to the login page or another page
    window.location.href = 'index.html'; // Change this to your login page
}

// Initial render of books
renderBooks();
