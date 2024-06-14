document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebarToggle');
    const menuBar = document.querySelector('.menuBar');

    let sidebarOpen = false;

    sidebarToggle.addEventListener('click', function() {
        sidebarOpen = !sidebarOpen;
        if (sidebarOpen) {
            menuBar.classList.add('show');
        } else {
            menuBar.classList.remove('show');
        }
    });

    // Show sidebar initially on larger screens
    if (window.innerWidth > 768) {
        menuBar.classList.add('show');
    }
});
