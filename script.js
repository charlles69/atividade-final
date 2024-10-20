
const form = document.getElementById('form');
const userTableBody = document.getElementById('userTableBody');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    
    const newRow = document.createElement('tr');

    
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    newRow.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = email;
    newRow.appendChild(emailCell);

    
    userTableBody.appendChild(newRow);

    
    form.reset();
});
