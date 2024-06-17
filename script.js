javascript
// Get the form and table elements
const form = document.getElementById('expense-form');
const table = document.getElementById('expenses-table');
const tbody = document.getElementById('expenses-tbody');

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('expense-date').value;
    const category = document.getElementById('expense-category').value;
    const amount = document.getElementById('expense-amount').value;

    // Add the expense to the table
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${date}</td>
        <td>${category}</td>
        <td>${amount}</td>
        <td>${amount}</td>
    `;
    tbody.appendChild(row);

    // Calculate the total expenses
    const totalExpenses = Array.from(tbody.children).reduce((acc, row) => acc + parseFloat(row.children[2].textContent), 0);
    document.getElementById('total-expenses').textContent = `Total: $${totalExpenses.toFixed(2)}`;
});

// Calculate the total expenses when the page loads
const totalExpenses = Array.from(tbody.children).reduce((acc, row) => acc + parseFloat(row.children[2].textContent), 0);
document.getElementById('total-expenses').textContent = `Total: $${totalExpenses.toFixed(2)}`;