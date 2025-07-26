
        // Sample employee data with IDs, passwords, and status
        const sampleEmployees = [
            {id: 1, empId: "EMP-001", firstName: "John", lastName: "Doe", email: "john.doe@company.com", password: "O98f6bcd", position: "Manager", startDate: "2024-01-15", status: "Active"},
            {id: 2, empId: "EMP-002", firstName: "Jane", lastName: "Smith", email: "jane.smith@company.com", password: "X45ghe23", position: "Barista", startDate: "2024-02-20", status: "Active"},
            {id: 3, empId: "EMP-003", firstName: "Robert", lastName: "Johnson", email: "robert.j@company.com", password: "P72kjd81", position: "Cashier", startDate: "2023-11-05", status: "On Leave"},
            {id: 4, empId: "EMP-004", firstName: "Emily", lastName: "Davis", email: "emily.d@company.com", password: "L63mnq09", position: "Kitchen Staff", startDate: "2023-09-12", status: "Active"},
            {id: 5, empId: "EMP-005", firstName: "Michael", lastName: "Brown", email: "michael.b@company.com", password: "Q12wty45", position: "Dish Washer", startDate: "2024-03-10", status: "Inactive"}
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
        
        // Generate employee IDs
        function generateEmployeeId() {
            return "EMP-" + (sampleEmployees.length + 1).toString().padStart(3, '0');
        }

        // Generate password display
        function generatePassword() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let password = '';
            for (let i = 0; i < 8; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return password;
        }

        // Create table row for an employee
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
                <td>${employee.empId}</td>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.email}</td>
                <td>
                    <div class="password-field">
                        <input type="password" value="${employee.password}" readonly>
                        <span class="toggle-password" onclick="togglePassword(this)"><i class="fas fa-eye"></i></span>
                    </div>
                </td>
                <td>${employee.position}</td>
                <td>${employee.startDate}</td>
                <td><span class="${statusClass}">${employee.status}</span></td>
                <td>
                    <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
                </td>
            `;
            
            return tr;
        }
        
        // Toggle password visibility
        function togglePassword(element) {
            const input = element.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                element.innerHTML = '<i class="fas fa-eye-slash"></i>';
            } else {
                input.type = "password";
                element.innerHTML = '<i class="fas fa-eye"></i>';
            }
        }

        // Open modal for adding new employee
        function openEmployeeModal() {
            document.getElementById("employeeModal").style.display = "block";
            // Clear form
            document.getElementById("modalFirstName").value = "";
            document.getElementById("modalLastName").value = "";
            document.getElementById("modalEmail").value = "";
            document.getElementById("modalPosition").value = "";
            document.getElementById("modalStartDate").value = "";
            document.getElementById("modalStatus").value = "Active";
        }

        // Close modal
        function closeEmployeeModal() {
            document.getElementById("employeeModal").style.display = "none";
        }

        // Submit new employee
        function submitModalEmployee() {
            const firstName = document.getElementById("modalFirstName").value;
            const lastName = document.getElementById("modalLastName").value;
            const email = document.getElementById("modalEmail").value;
            const position = document.getElementById("modalPosition").value;
            const startDate = document.getElementById("modalStartDate").value || new Date().toISOString().split('T')[0];
            const status = document.getElementById("modalStatus").value;
            
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
                password: generatePassword(),
                position,
                startDate,
                status
            };

            sampleEmployees.push(newEmployee);
            const row = createEmployeeRow(newEmployee);
            document.getElementById("employeeTableBody").appendChild(row);
            
            closeEmployeeModal();
            alert("Employee added successfully!");
        }

        // Edit employee
        function editEmployee(button) {
            const row = button.parentNode.parentNode;
            const cells = row.cells;
            
            const empId = cells[0].textContent;
            const firstName = cells[1].textContent;
            const lastName = cells[2].textContent;
            const email = cells[3].textContent;
            const password = cells[4].querySelector('input').value;
            const position = cells[5].textContent;
            const startDate = cells[6].textContent;
            const status = cells[7].querySelector('span').textContent;
            
            cells[0].innerHTML = `<input type="text" value="${empId}">`;
            cells[1].innerHTML = `<input type="text" value="${firstName}">`;
            cells[2].innerHTML = `<input type="text" value="${lastName}">`;
            cells[3].innerHTML = `<input type="email" value="${email}">`;
            cells[4].innerHTML = `
                <div class="password-field">
                    <input type="password" value="${password}">
                    <span class="toggle-password" onclick="togglePassword(this)"><i class="fas fa-eye"></i></span>
                </div>
            `;
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
                <select>
                    <option value="Active" ${status === "Active" ? "selected" : ""}>Active</option>
                    <option value="Inactive" ${status === "Inactive" ? "selected" : ""}>Inactive</option>
                    <option value="On Leave" ${status === "On Leave" ? "selected" : ""}>On Leave</option>
                </select>
            `;
            
            cells[8].innerHTML = `
                <button class="btn btn-success" onclick="saveEmployee(this)"><i class="fas fa-save"></i> Save</button>
                <button class="btn btn-danger" onclick="cancelEdit(this)"><i class="fas fa-times"></i> Cancel</button>
            `;
        }

        // Save edited employee
        function saveEmployee(button) {
            const row = button.parentNode.parentNode;
            const cells = row.cells;
            const id = row.rowIndex;
            
            const empId = cells[0].querySelector('input').value;
            const firstName = cells[1].querySelector('input').value;
            const lastName = cells[2].querySelector('input').value;
            const email = cells[3].querySelector('input').value;
            const password = cells[4].querySelector('input').value;
            const position = cells[5].querySelector('select').value;
            const startDate = cells[6].querySelector('input').value;
            const status = cells[7].querySelector('select').value;
            
            // Update sample data
            const employee = sampleEmployees.find(emp => emp.id === id);
            if (employee) {
                employee.empId = empId;
                employee.firstName = firstName;
                employee.lastName = lastName;
                employee.email = email;
                employee.password = password;
                employee.position = position;
                employee.startDate = startDate;
                employee.status = status;
            }
            
            // Update row display
            cells[0].textContent = empId;
            cells[1].textContent = firstName;
            cells[2].textContent = lastName;
            cells[3].textContent = email;
            cells[4].innerHTML = `
                <div class="password-field">
                    <input type="password" value="${password}" readonly>
                    <span class="toggle-password" onclick="togglePassword(this)"><i class="fas fa-eye"></i></span>
                </div>
            `;
            cells[5].textContent = position;
            cells[6].textContent = startDate;
            
            // Determine status class
            let statusClass = '';
            if (status === 'Active') {
                statusClass = 'status-active';
            } else if (status === 'Inactive') {
                statusClass = 'status-inactive';
            } else if (status === 'On Leave') {
                statusClass = 'status-on-leave';
            }
            
            cells[7].innerHTML = `<span class="${statusClass}">${status}</span>`;
            cells[8].innerHTML = `
                <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
            `;
            
            alert("Employee updated successfully!");
        }

        // Cancel edit
        function cancelEdit(button) {
            const row = button.parentNode.parentNode;
            const id = row.rowIndex;
            const employee = sampleEmployees.find(emp => emp.id === id);
            
            if (employee) {
                const cells = row.cells;
                cells[0].textContent = employee.empId;
                cells[1].textContent = employee.firstName;
                cells[2].textContent = employee.lastName;
                cells[3].textContent = employee.email;
                cells[4].innerHTML = `
                    <div class="password-field">
                        <input type="password" value="${employee.password}" readonly>
                        <span class="toggle-password" onclick="togglePassword(this)"><i class="fas fa-eye"></i></span>
                    </div>
                `;
                cells[5].textContent = employee.position;
                cells[6].textContent = employee.startDate;
                
                let statusClass = '';
                if (employee.status === 'Active') {
                    statusClass = 'status-active';
                } else if (employee.status === 'Inactive') {
                    statusClass = 'status-inactive';
                } else if (employee.status === 'On Leave') {
                    statusClass = 'status-on-leave';
                }
                
                cells[7].innerHTML = `<span class="${statusClass}">${employee.status}</span>`;
                cells[8].innerHTML = `
                    <button class="btn btn-primary" onclick="editEmployee(this)"><i class="fas fa-edit"></i> Edit</button>
                    <button class="btn btn-danger" onclick="deleteEmployee(this)"><i class="fas fa-trash"></i> Delete</button>
                `;
            }
        }

        // Delete employee
        function deleteEmployee(button) {
            if (confirm("Are you sure you want to delete this employee?")) {
                const row = button.parentNode.parentNode;
                const id = row.rowIndex;
                
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
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('employeeModal');
            if (event.target === modal) {
                closeEmployeeModal();
            }
        };
  