let mainNav = document.getElementById('main-nav');
let navBarToggle = document.getElementById('js-navbar-toggle');
let headerInner = document.getElementById('header-inner');
let headerLogo = document.getElementById('header-logo-container');
let bodySection = document.getElementById('body-section');

navBarToggle.addEventListener('click', function () {
    console.log('test');
    mainNav.classList.toggle('active');
    headerInner.classList.toggle('active');
    headerLogo.classList.toggle('active');
    bodySection.classList.toggle('active');
});


