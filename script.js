document.addEventListener('DOMContentLoaded', () => {
    // All books are initially available
    const books = [
        { id: 1, title: "JavaScript Essentials", author: "John Doe", description: "A complete guide to JavaScript", available: true },
        { id: 2, title: "HTML & CSS Basics", author: "Jane Smith", description: "Learn HTML & CSS from scratch", available: true },
        { id: 3, title: "Advanced CSS", author: "Alice Johnson", description: "Master advanced CSS techniques", available: true },
        { id: 4, title: "Introduction to Programming", author: "Mark Williams", description: "An introduction to basic programming concepts", available: true },
        { id: 5, title: "Database Management", author: "Emma Watson", description: "Understand database management systems", available: true }
    ];

    const bookList = document.getElementById('bookList');
    const authorFilter = document.getElementById('authorFilter');

    // Populate author filter dropdown
    const authors = [...new Set(books.map(book => book.author))];
    authors.forEach(author => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        authorFilter.appendChild(option);
    });

    // Function to display books
    const displayBooks = (filterAuthor = 'all') => {
        bookList.innerHTML = ''; // Clear current book list

        const filteredBooks = filterAuthor === 'all' ? books : books.filter(book => book.author === filterAuthor);

        filteredBooks.forEach(book => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <a href="book-details.html?id=${book.id}">
                    <strong>${book.title}</strong> by ${book.author}
                </a>
                <button ${!book.available ? 'disabled' : ''}>${book.available ? 'Borrow' : 'Unavailable'}</button>
            `;
            bookList.appendChild(listItem);

            // Borrow functionality
            const borrowBtn = listItem.querySelector('button');
            if (book.available) {
                borrowBtn.addEventListener('click', () => {
                    book.available = false;
                    borrowBtn.textContent = 'Unavailable';
                    borrowBtn.disabled = true;
                    alert(`You have borrowed "${book.title}"`);
                });
            }
        });
    };

    // Display all books initially
    displayBooks();

    // Filter books when the user selects an author
    authorFilter.addEventListener('change', (e) => {
        const selectedAuthor = e.target.value;
        displayBooks(selectedAuthor);
    });

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
