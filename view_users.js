// view_users.js - Displaying Registered Users

// Function to get users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Function to render users in the table
function renderUsers() {
    const users = getUsers();
    const tableBody = document.querySelector("#usersTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Render users when the page loads
renderUsers();
