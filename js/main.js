document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        // Определяем текущую страницу
        const currentPage = location.pathname.split('/').pop();

        // Устанавливаем активное состояние для кнопок
        if (currentPage === 'login.html') {
            document.querySelector('.btn-login').classList.add('active');
        } else if (currentPage === 'register.html') {
            document.querySelector('.btn-register').classList.add('active');
        }
    });
});
