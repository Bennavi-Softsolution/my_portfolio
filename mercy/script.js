document.addEventListener('DOMContentLoaded', function () {
    const drawer = document.getElementById('myDrawer');
    const toggleButtonMobile = document.querySelector('.openDrawerMobileButton');
    const closeButton = document.querySelector('.closeDrawerMobileButton');

    toggleButtonMobile.addEventListener('click', function () {
        drawer.classList.toggle('open');
        toggleButtonMobile.classList.toggle('open');
    });

    closeButton.addEventListener('click', function () {
        drawer.classList.remove('open');
        toggleButtonMobile.classList.remove('open');
    });
    

    // Optional: Close drawer if clicked outside
    document.addEventListener('click', function (event) {
        if (!drawer.contains(event.target) && event.target !== toggleButtonMobile) {
            drawer.classList.remove('open');
            toggleButtonMobile.classList.remove('open');
        }
    });
});





