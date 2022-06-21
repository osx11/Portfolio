document.querySelectorAll('.nav-link').forEach(nav_link => {
    nav_link.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToAnchor(e);
    });
});

function scrollToAnchor(e) {
    const nav_link_clicked = e.currentTarget as HTMLLinkElement;

    document.querySelectorAll('.nav-link').forEach(nav_link => {
        const classlist = nav_link.classList;
        classlist.remove('active');

        if (nav_link.getAttribute('href') === nav_link_clicked.getAttribute('href')) {
            classlist.add('active');
        }
    });

    const blockID = nav_link_clicked.getAttribute('href').replace('#', '');

    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}
