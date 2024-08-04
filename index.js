function getStudents(){
    fetch('https://web0-ex2.onrender.com/students')
    .then(response => response.json())
    .then(stds => {
        let students = document.getElementById('students');
        
        // Create a table element
        const table = document.createElement('table');
        // Create a table header row
        const headerRow = document.createElement('tr');
        // Create and append the ID column header
        const idHeader = document.createElement('th');
        idHeader.textContent = 'ID';
        idHeader.classList.add('id-column');
        headerRow.appendChild(idHeader);

        // Create and append the Name column header
        const nameHeader = document.createElement('th');
        nameHeader.textContent = 'Name';
        nameHeader.classList.add('name-column');
        headerRow.appendChild(nameHeader);

        // Append the header row to the table
        table.appendChild(headerRow);

        stds.forEach(std => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = std.id;
            idCell.classList.add('id-column');
            row.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = std.name;
            nameCell.classList.add('name-column');
            row.appendChild(nameCell);

            table.appendChild(row);
        });

        students.appendChild(table);
    })
}

getStudents();