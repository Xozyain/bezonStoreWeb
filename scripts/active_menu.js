document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.header__nav a');
    const currentPage = document.location.pathname;

    menuItems.forEach(item => {
        const menuItemPath = item.getAttribute('href');

        if (currentPage === menuItemPath || (currentPage === 'index.html' && menuItemPath === 'index.html')) {
            item.classList.add('active');
        }

        item.addEventListener('mouseover', function () {
            this.classList.add('active');
        });

        item.addEventListener('mouseout', function () {
            if (!(currentPage === 'index.html' && menuItemPath === 'index.html')) {
                this.classList.remove('active');
            }
        });
    });
});