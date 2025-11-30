window.addEventListener('scroll', function() {
    // Проверяем, достигнут ли конец страницы
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const button = document.querySelector('.shake-button');
        button.classList.add('shake');

        // Убираем класс после завершения анимации
        setTimeout(() => {
            button.classList.remove('shake');
        }, 500); // Длительность анимации
    }
});
