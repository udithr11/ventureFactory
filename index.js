function hamburger() {
    var dropdown = document.getElementById('dropdown');
    var body = document.body;

    dropdown.style.display = 'block' ;
    // body.style.overflow =  'hidden'; 
}

function close_btn(){
    var dropdown = document.getElementById('dropdown');
    var body = document.body;

    dropdown.style.display = 'none'; 
    // body.style.overflow = 'visible' ; 
}

var lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    var firstSpace = document.getElementById('first_space');
    var navBar = document.getElementById('nav_bar');

    var currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        navBar.style.transition = 'top 1s ease';
        navBar.style.top = '0'; 
    } else {
        
        if (currentScrollPosition === 0) {
            navBar.style.transition = 'top 1s ease';
            navBar.style.top = ''; 
        }
    }

    lastScrollPosition = currentScrollPosition;
});


  window.addEventListener('load', function () {
        if (window.location.hash) {
            // Smooth scroll to the element if the hash is present
            document.querySelector(window.location.hash).scrollIntoView({ behavior: 'smooth' });
            
            // Remove the hash from the URL without causing the page to scroll
            history.replaceState(null, null, '#');
            window.scrollTo(0, 0);

        }
    });