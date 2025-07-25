        const sampleEmployees = [
            {id: 1, empId: "EMP-001", firstName: "John", lastName: "Doe", email: "john.doe@company.com", position: "Manager", department: "IT", status: "Active", startDate: "2024-01-15"},
            {id: 2, empId: "EMP-002", firstName: "Jane", lastName: "Smith", email: "jane.smith@company.com", position: "Developer", department: "IT", status: "Active", startDate: "2024-02-20"},
            {id: 3, empId: "EMP-003", firstName: "Robert", lastName: "Johnson", email: "robert.j@company.com", position: "HR Specialist", department: "Human Resources", status: "Active", startDate: "2023-11-05"},
            {id: 4, empId: "EMP-004", firstName: "Emily", lastName: "Davis", email: "emily.d@company.com", position: "Designer", department: "Marketing", status: "On Leave", startDate: "2023-09-12"}
        ];
        
        // Initialize table with sample data
        function initializeTable() {
            const tbody = document.getElementById("employeeTableBody");
            tbody.innerHTML = "";
            
            sampleEmployees.forEach(emp => {
                const row = createEmployeeRow(emp);
                tbody.appendChild(row);
            });
        }
        
      // Add this function to generate employee IDs
function generateEmployeeId() {
    return "EMP-" + (sampleEmployees.length + 1).toString().padStart(3, '0');
}

// Add this function to generate password display
function generatePasswordDisplay() {
    return Math.random().toString(36).slice(2, 10);
}

// Update sample data with password and empId
const sampleEmployees = [
    {id: 1, empId: "EMP-001", firstName: "John", lastName: "Doe", email: "john.doe@company.com", password: "O98f6bcd", position: "Manager", startDate: "2024-01-15"},
    {id: 2, empId: "EMP-002", firstName: "Jane", lastName: "Smith", email: "jane.smith@company.com", password: "X45ghe23", position: "Barista", startDate: "2024-02-20"},
    {id: 3, empId: "EMP-003", firstName: "Robert", lastName: "Johnson", email: "robert.j@company.com", password: "P72kjd81", position: "Cashier", startDate: "2023-11-05"},
    {id: 4, empId: "EMP-004", firstName: "Emily", lastName: "Davis", email: "emily.d@company.com", password: "L63mnq09", position: "Kitchen Staff", startDate: "2023-09-12"}
];

// Update createEmployeeRow function
function createEmployeeRow(employee) {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${employee.empId}</td>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.email}</td>
        <td>${employee.password}</td>
        <td>${employee.position}</td>
        <td>${employee.startDate}</td>
        <td>
            <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
            <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
        </td>
    `;
    
    return tr;
}

// Update submitModalEmployee function
function submitModalEmployee() {
    const firstName = document.getElementById("modalFirstName").value;
    const lastName = document.getElementById("modalLastName").value;
    const email = document.getElementById("modalEmail").value;
    const position = document.getElementById("modalPosition").value;
    const startDate = document.getElementById("modalStartDate").value || new Date().toISOString().split('T')[0];
    
    if (!firstName || !lastName || !email || !position) {
        alert("Please fill in all required fields");
        return;
    }
    
    const newEmployee = {
        id: sampleEmployees.length + 1,
        empId: generateEmployeeId(),
        firstName,
        lastName,
        email,
        password: generatePasswordDisplay(),
        position,
        startDate
    };

    sampleEmployees.push(newEmployee);
    const row = createEmployeeRow(newEmployee);
    document.getElementById("employeeTableBody").appendChild(row);
    
    closeEmployeeModal();
    alert("Employee added successfully!");
}

// Update editEmployee function
function editEmployee(button) {
    const row = button.parentNode.parentNode;
    const cells = row.cells;
    
    const empId = cells[0].textContent;
    const firstName = cells[1].textContent;
    const lastName = cells[2].textContent;
    const email = cells[3].textContent;
    const position = cells[5].textContent;
    const startDate = cells[6].textContent;
    
    cells[0].innerHTML = `<input type="text" value="${empId}">`;
    cells[1].innerHTML = `<input type="text" value="${firstName}">`;
    cells[2].innerHTML = `<input type="text" value="${lastName}">`;
    cells[3].innerHTML = `<input type="email" value="${email}">`;
    cells[5].innerHTML = `
        <select>
            <option value="Manager" ${position === "Manager" ? "selected" : ""}>Manager</option>
            <option value="Barista" ${position === "Barista" ? "selected" : ""}>Barista</option>
            <option value="Cashier" ${position === "Cashier" ? "selected" : ""}>Cashier</option>
            <option value="Kitchen Staff" ${position === "Kitchen Staff" ? "selected" : ""}>Kitchen Staff</option>
            <option value="Dish Washer" ${position === "Dish Washer" ? "selected" : ""}>Dish Washer</option>
        </select>
    `;
    cells[6].innerHTML = `<input type="date" value="${startDate}">`;
    
    cells[7].innerHTML = `
        <button class="btn btn-success" onclick="saveEmployee(this)"><i class="fas fa-save"></i> Save</button>
        <button class="btn btn-danger" onclick="cancelEdit(this)"><i class="fas fa-times"></i> Cancel</button>
    `;
}

// Update saveEmployee function
function saveEmployee(button) {
    const row = button.parentNode.parentNode;
    const cells = row.cells;
    
    const empId = cells[0].querySelector('input').value;
    const firstName = cells[1].querySelector('input').value;
    const lastName = cells[2].querySelector('input').value;
    const email = cells[3].querySelector('input').value;
    const position = cells[5].querySelector('select').value;
    const startDate = cells[6].querySelector('input').value;
    
    cells[0].textContent = empId;
    cells[1].textContent = firstName;
    cells[2].textContent = lastName;
    cells[3].textContent = email;
    cells[5].textContent = position;
    cells[6].textContent = startDate;
    
    cells[7].innerHTML = `
        <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
    `;
    
    // Update sample data
    const id = parseInt(row.rowIndex);
    const employee = sampleEmployees.find(emp => emp.id === id);
    if (employee) {
        employee.empId = empId;
        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.email = email;
        employee.position = position;
        employee.startDate = startDate;
    }
    
    alert("Employee updated successfully!");
}

// Update cancelEdit function
function cancelEdit(button) {
    const row = button.parentNode.parentNode;
    const id = parseInt(row.rowIndex);
    const employee = sampleEmployees.find(emp => emp.id === id);
    
    if (employee) {
        const cells = row.cells;
        cells[0].textContent = employee.empId;
        cells[1].textContent = employee.firstName;
        cells[2].textContent = employee.lastName;
        cells[3].textContent = employee.email;
        cells[5].textContent = employee.position;
        cells[6].textContent = employee.startDate;
        
        cells[7].innerHTML = `
            <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
            <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
        `;
    }
}
            
            // Reinitialize the row with sample data
            const id = parseInt(cells[0].textContent);
            const employee = sampleEmployees.find(emp => emp.id === id);
            
            if (employee) {
                cells[1].textContent = employee.empId;
                cells[2].textContent = employee.firstName;
                cells[3].textContent = employee.lastName;
                cells[4].textContent = employee.email;
                cells[5].textContent = employee.position;
                cells[6].textContent = employee.department;
                
                // Determine status class based on status value
                let statusClass = '';
                if (employee.status === 'Active') {
                    statusClass = 'status-active';
                } else if (employee.status === 'Inactive') {
                    statusClass = 'status-inactive';
                } else if (employee.status === 'On Leave') {
                    statusClass = 'status-on-leave';
                }
                
                cells[7].innerHTML = `<span class="${statusClass}">${employee.status}</span>`;
                cells[8].textContent = employee.startDate;
            }
        }
        
        // Delete an employee
        function deleteEmployee(button) {
            if (confirm("Are you sure you want to delete this employee?")) {
                const row = button.parentNode.parentNode;
                const id = parseInt(row.cells[0].textContent);
                
                // Remove from sample data
                const index = sampleEmployees.findIndex(emp => emp.id === id);
                if (index !== -1) {
                    sampleEmployees.splice(index, 1);
                }
                
                // Remove from table
                row.parentNode.removeChild(row);
                alert("Employee deleted successfully!");
            }
        }
        
        // Initialize the table when page loads
        window.onload = initializeTable;
        
        // Hamburger menu toggle
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
function openEmployeeModal() {
  document.getElementById("employeeModal").style.display = "block";
}

function closeEmployeeModal() {
  document.getElementById("employeeModal").style.display = "none";
}

function submitModalEmployee() {

  const firstName = document.getElementById("modalFirstName").value;
  const lastName = document.getElementById("modalLastName").value;
  const email = document.getElementById("modalEmail").value;
  const position = document.getElementById("modalPosition").value;

  const startDate = document.getElementById("modalStartDate").value;

  if (!empId || !firstName || !lastName || !email || !position) {
    alert("Please fill in all required fields");
    return;
  }

  const departmentMap = {
    "Manager": "Management",
    "Barista": "Coffee Preparation",
    "Cashier": "Front Desk",
    "Kitchen Staff": "Kitchen",
    "Dish Washer": "Cleaning"
  };

  const department = departmentMap[position] || "General";

  const newEmployee = {
    id: sampleEmployees.length + 1,
    firstName,
    lastName,
    email,
    position,
    department,
    startDate
  };

  sampleEmployees.push(newEmployee);
  const row = createEmployeeRow(newEmployee);
  document.getElementById("employeeTableBody").appendChild(row);

  closeEmployeeModal();
  alert("Employee added successfully!");
}
