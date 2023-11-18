document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.header__nav a');
    const currentPage = document.location.pathname;
    console.log(currentPage);

    menuItems.forEach(item => {
        const menuItemPath = item.getAttribute('href');
        console.log(menuItemPath)
        if ((menuItemPath === 'index.html') && currentPage === '/itmoSite/index.html') {
            item.classList.add('active');
        }
    });
});