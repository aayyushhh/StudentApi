
document.getElementById('studentForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

   
    const studentData = {
        StudentName: document.getElementById('name').value,
        StudentAge: parseInt(document.getElementById('age').value), 
        StudentBranch: document.getElementById('branch').value,
        StudentEmail: document.getElementById('email').value
    };

    try {
        console.log("Sending the following data:", studentData);

        
        const response = await fetch('https://localhost:7146/api/Student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData), 
        });

        if (response.ok) {
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                const result = await response.json();
                alert('Student data saved successfully!');
                console.log(result);
            } else {
                alert('Student data saved successfully with no JSON response.');
            }
        } else {
            const errorResponse = await response.json();
            alert('Failed to save student data. ' + (errorResponse.message || 'Unknown error'));
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while saving student data.');
    }
});


document.getElementById('getAllStudentsBtn').addEventListener('click', async function() {
    try {
        const response = await fetch('https://localhost:7146/api/Student', {
            method: 'GET'
        });
        if (response.ok) {
            const students = await response.json();
            console.log("Students data:", students);
            displayStudentsInTable(students);
        } else {
            alert('Failed to fetch students.');
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching students.');
    }
});


function displayStudentsInTable(students) {
    const tableBody = document.getElementById('studentsTableBody');

    if (!tableBody) {
        console.error("Table body element not found!");
        return;
    }

    
    tableBody.innerHTML = "";

    if (students.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="5">No students found.</td>`;
        tableBody.appendChild(row);
        return;
    }

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.studentId || 'N/A'}</td>
            <td>${student.studentName || 'N/A'}</td>
            <td>${student.studentAge || 'N/A'}</td>
            <td>${student.studentBranch || 'N/A'}</td>
            <td>${student.studentEmail || 'N/A'}</td>
        `;
        tableBody.appendChild(row);
    });
}



document.getElementById('searchStudentBtn').addEventListener('click', async function() {
    const studentId = document.getElementById('searchStudentId').value;

    if (!studentId) {
        alert('Please enter a Student ID to search.');
        return;
    }

    try {
        const response = await fetch(`https://localhost:7146/api/Student/${studentId}`, { method: 'GET' });

        if (response.ok) {
            const student = await response.json();
            console.log("Student data:", student);
            displayStudentInTable([student]); 
        } else {
            alert('Student not found.');
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while searching for the student.');
    }
});

function displayStudentInTable(students) {
    const tableBody = document.getElementById('studentsTableBody');

    if (!tableBody) {
        console.error("Table body element not found!");
        return;
    }

    tableBody.innerHTML = "";

    if (students.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="5">No students found.</td>`;
        tableBody.appendChild(row);
        return;
    }

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.studentId || 'N/A'}</td>
            <td>${student.studentName || 'N/A'}</td>
            <td>${student.studentAge || 'N/A'}</td>
            <td>${student.studentBranch || 'N/A'}</td>
            <td>${student.studentEmail || 'N/A'}</td>
        `;
        tableBody.appendChild(row);
    });
}



document.getElementById('deleteStudentBtn').addEventListener('click', async function() {
    const studentId = document.getElementById('deleteStudentId').value;

    if (!studentId) {
        alert('Please enter a Student ID to delete.');
        return;
    }

    try {
        const response = await fetch(`https://localhost:7146/api/Student/${studentId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert(`Student with ID ${studentId} has been deleted.`);
            // Optionally, refresh the student list
            document.getElementById('getAllStudentsBtn').click();
        } else {
            alert('Failed to delete the student.');
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while deleting the student.');
    }
});
