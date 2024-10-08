document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.querySelector('#userTable tbody');
    const bookTableBody = document.querySelector('#bookTable tbody');
    const addBookForm = document.getElementById('addBookForm');

    // Load users from localStorage
    function loadUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        userTableBody.innerHTML = ''; // Clear existing rows
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.username}</td>
                <td>••••••••</td>
                <td>
                    <button class="deleteUser" data-index="${index}">Delete</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    // Load books from localStorage
    function loadBooks() {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        bookTableBody.innerHTML = ''; // Clear existing rows
        books.forEach((book, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>
                    <button class="deleteBook" data-index="${index}">Delete</button>
                </td>
            `;
            bookTableBody.appendChild(row);
        });
    }

    // Add new book
    addBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('bookTitle').value;
        const author = document.getElementById('bookAuthor').value;
        const category = document.getElementById('bookCategory').value;

        const books = JSON.parse(localStorage.getItem('books')) || [];
        books.push({ title, author, category });
        localStorage.setItem('books', JSON.stringify(books));
        alert('Book added successfully!');

        addBookForm.reset();
        loadBooks();
    });

    // Delete user
    userTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('deleteUser')) {
            const index = e.target.dataset.index;
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.splice(index, 1); // Remove user
            localStorage.setItem('users', JSON.stringify(users));
            loadUsers();
            alert('User deleted successfully!');
        }
    });

    // Delete book
    bookTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('deleteBook')) {
            const index = e.target.dataset.index;
            const books = JSON.parse(localStorage.getItem('books')) || [];
            books.splice(index, 1); // Remove book
            localStorage.setItem('books', JSON.stringify(books));
            loadBooks();
            alert('Book deleted successfully!');
        }
    });

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to login page
    });

    // Initial load
    loadUsers();
    loadBooks();
});
