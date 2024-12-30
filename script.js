document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Проверяем сохраненную тему при загрузке
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }

    // Обработчик переключения темы
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});
