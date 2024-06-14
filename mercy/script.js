document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebarToggle');
    const menuBar = document.querySelector('.menuBar');
    const closeButton = document.querySelector('.closeButton');
    const body = document.querySelector('body');

    let sidebarOpen = false;

    // Function to toggle sidebar
    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
        if (sidebarOpen) {
            menuBar.classList.add('show');
        } else {
            menuBar.classList.remove('show');
        }
    }

    // Toggle sidebar on sidebar toggle button click
    sidebarToggle.addEventListener('click', function() {
        toggleSidebar();
    });

    // Close sidebar on close button click
    closeButton.addEventListener('click', function() {
        menuBar.classList.remove('show');
        sidebarOpen = false; // Ensure sidebarOpen is updated
    });

    // Close sidebar when tapping outside of it on mobile
    body.addEventListener('click', function(event) {
        if (sidebarOpen && !menuBar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            toggleSidebar();
        }
    });
    

    // Show sidebar initially on larger screens. uncomment if needed
   // if (window.innerWidth > 768) {
    //    menuBar.classList.add('show');
   // }
});
