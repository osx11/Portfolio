document.querySelectorAll('.nav-link').forEach((nav_link: HTMLElement) => {
    nav_link.addEventListener('click', function(e: Event) {
        e.preventDefault();
        scrollToAnchor(e);
    });
});

function scrollToAnchor(e: Event) {
    const nav_link_clicked: HTMLLinkElement = e.currentTarget as HTMLLinkElement;

    document.querySelectorAll('.nav-link').forEach((nav_link: HTMLElement) => {
        const classlist: DOMTokenList = nav_link.classList;
        classlist.remove('active');

        if (nav_link.getAttribute('href') === nav_link_clicked.getAttribute('href')) {
            classlist.add('active');
        }
    });

    const blockID: string = nav_link_clicked.getAttribute('href').replace('#', '');

    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}
