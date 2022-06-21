'use strict';

document.querySelectorAll('.nav-link').forEach(function (nav_link) {
    nav_link.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToAnchor(e);
    });
});
function scrollToAnchor(e) {
    var nav_link_clicked = e.currentTarget;
    document.querySelectorAll('.nav-link').forEach(function (nav_link) {
        var classlist = nav_link.classList;
        classlist.remove('active');
        if (nav_link.getAttribute('href') === nav_link_clicked.getAttribute('href')) {
            classlist.add('active');
        }
    });
    var blockID = nav_link_clicked.getAttribute('href').replace('#', '');
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
