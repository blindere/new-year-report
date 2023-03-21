window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;
    var scrollToTop = document.querySelector('.scroll-to-top');

    if (scrollPosition > 300) {
        scrollToTop.classList.add('active');
    } else {
        scrollToTop.classList.remove('active');
    }
});

document.querySelector('.scroll-to-top').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


