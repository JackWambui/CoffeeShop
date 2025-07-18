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
        
        // Create a table row for an employee
        function createEmployeeRow(employee) {
            const tr = document.createElement('tr');
            
            // Determine status class based on status value
            let statusClass = '';
            if (employee.status === 'Active') {
                statusClass = 'status-active';
            } else if (employee.status === 'Inactive') {
                statusClass = 'status-inactive';
            } else if (employee.status === 'On Leave') {
                statusClass = 'status-on-leave';
            }
            
            tr.innerHTML = `
                <td>${employee.id}</td>
                <td>${employee.empId}</td>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.email}</td>
                <td>${employee.position}</td>
                <td>${employee.department}</td>
                <td><span class="${statusClass}">${employee.status}</span></td>
                <td>${employee.startDate}</td>
                <td>
                    <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
                </td>
            `;
            
            return tr;
        }
        
        // Add a new employee
        function addEmployee() {
    const form = document.forms['employeeForm'];
    const empId = form.employeeId.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const position = form.position.value;
    const status = form.status.value;
    const startDate = form.startDate.value;
    
    if (!empId || !firstName || !lastName || !email || !position) {
        alert("Please fill in all required fields");
        return;
    }
    // Map position to department
    const departmentMap = {
        "Manager": "Management",
        "Barista": "Coffee Preparation",
        "Cashier": "Front Desk",
        "Kitchen Staff": "Kitchen",
        "Dish Washer": "Cleaning"
    };
    
    const department = departmentMap[position] || "General";
    
    // Create new employee object
    const newEmployee = {
        id: sampleEmployees.length + 1,
        empId,
        firstName,
        lastName,
        email,
        position,
        department,
        status,
        startDate
    };

            
            // Add to sample data
            sampleEmployees.push(newEmployee);
            
            // Create and append new row
            const tbody = document.getElementById("employeeTableBody");
            const row = createEmployeeRow(newEmployee);
            tbody.appendChild(row);
            
            // Reset form
            form.reset();
            form.startDate.value = "2025-07-17"; // Reset to today's date
            
            // Show success message
            alert("Employee added successfully!");
        }
        
        // Edit an employee
        function editEmployee(button) {
            const row = button.parentNode.parentNode;
            const cells = row.cells;
            
            // Get current values
            const empId = cells[1].textContent;
            const firstName = cells[2].textContent;
            const lastName = cells[3].textContent;
            const email = cells[4].textContent;
            const position = cells[5].textContent;
            const department = cells[6].textContent;
            const status = cells[7].querySelector('span').textContent;
            const startDate = cells[8].textContent;
            
            // Replace with input fields
            cells[1].innerHTML = `<input type="text" value="${empId}">`;
            cells[2].innerHTML = `<input type="text" value="${firstName}">`;
            cells[3].innerHTML = `<input type="text" value="${lastName}">`;
            cells[4].innerHTML = `<input type="email" value="${email}">`;
            cells[5].innerHTML = `
                <select>
                    <option value="Manager" ${position === "Manager" ? "selected" : ""}>Manager</option>
                    <option value="Developer" ${position === "Developer" ? "selected" : ""}>Developer</option>
                    <option value="Designer" ${position === "Designer" ? "selected" : ""}>Designer</option>
                    <option value="HR Specialist" ${position === "HR Specialist" ? "selected" : ""}>HR Specialist</option>
                    <option value="Marketing" ${position === "Marketing" ? "selected" : ""}>Marketing</option>
                </select>
            `;
            cells[6].innerHTML = `
                <select>
                    <option value="IT" ${department === "IT" ? "selected" : ""}>IT</option>
                    <option value="Human Resources" ${department === "Human Resources" ? "selected" : ""}>Human Resources</option>
                    <option value="Marketing" ${department === "Marketing" ? "selected" : ""}>Marketing</option>
                    <option value="Sales" ${department === "Sales" ? "selected" : ""}>Sales</option>
                    <option value="Finance" ${department === "Finance" ? "selected" : ""}>Finance</option>
                </select>
            `;
            cells[7].innerHTML = `
                <select>
                    <option value="Active" ${status === "Active" ? "selected" : ""}>Active</option>
                    <option value="Inactive" ${status === "Inactive" ? "selected" : ""}>Inactive</option>
                    <option value="On Leave" ${status === "On Leave" ? "selected" : ""}>On Leave</option>
                </select>
            `;
            cells[8].innerHTML = `<input type="date" value="${startDate}">`;
            
            // Change buttons to save/cancel
            cells[9].innerHTML = `
                <button class="btn btn-success" onclick="saveEmployee(this)"><i class="fas fa-save"></i> Save</button>
                <button class="btn btn-danger" onclick="cancelEdit(this)"><i class="fas fa-times"></i> Cancel</button>
            `;
        }
        
        // Save edited employee
        function saveEmployee(button) {
            const row = button.parentNode.parentNode;
            const cells = row.cells;
            
            // Get new values
            const empId = cells[1].querySelector('input').value;
            const firstName = cells[2].querySelector('input').value;
            const lastName = cells[3].querySelector('input').value;
            const email = cells[4].querySelector('input').value;
            const position = cells[5].querySelector('select').value;
            const status = cells[7].querySelector('select').value;
            const startDate = cells[8].querySelector('input').value;
            
            // Update the row
            cells[1].textContent = empId;
            cells[2].textContent = firstName;
            cells[3].textContent = lastName;
            cells[4].textContent = email;
            cells[5].textContent = position;
            cells[6].textContent = department;
            
            // Determine status class based on status value
            let statusClass = '';
            if (status === 'Active') {
                statusClass = 'status-active';
            } else if (status === 'Inactive') {
                statusClass = 'status-inactive';
            } else if (status === 'On Leave') {
                statusClass = 'status-on-leave';
            }
            
            cells[7].innerHTML = `<span class="${statusClass}">${status}</span>`;
            cells[8].textContent = startDate;
            
            // Restore buttons
            cells[9].innerHTML = `
                <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
            `;
            
            // Show success message
            alert("Employee updated successfully!");
        }
        
        // Cancel edit
        function cancelEdit(button) {
            const row = button.parentNode.parentNode;
            const cells = row.cells;
            
            // Restore original buttons
            cells[9].innerHTML = `
                <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
            `;
            
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
