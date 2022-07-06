function scrollToAnchor(e: Event) {
    e.preventDefault();

    const nav_link_clicked: HTMLLinkElement = e.currentTarget as HTMLLinkElement;

    document.querySelectorAll('.nav-link').forEach((nav_link: Element) => {
        const classlist: DOMTokenList = nav_link.classList;
        classlist.remove('active');

        if (nav_link.getAttribute('href') === nav_link_clicked.getAttribute('href')) {
            classlist.add('active');
        }
    });

    // @ts-ignore
    const blockID: string = nav_link_clicked.getAttribute('href').replace('#', '');

    // @ts-ignore
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

export {scrollToAnchor};
