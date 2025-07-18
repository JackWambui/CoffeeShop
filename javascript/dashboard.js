
        // Simple JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Menu item click handling
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all items
                    menuItems.forEach(i => i.classList.remove('active'));
                    
                    // Add active class to clicked item
                    this.classList.add('active');
                });
            });
            
            // Logout button functionality
            const logoutBtn = document.querySelector('.logout-btn');
            if(logoutBtn) {
                logoutBtn.addEventListener('click', function() {
                    if(confirm('Are you sure you want to log out?')) {
                        // Redirect to login page
                        window.location.href = 'admin_login.html';
                    }
                });
            }
        });
    