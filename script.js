(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const input = document.getElementById('search-input');
  const year = document.getElementById('year');

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    const isLight = theme === 'light';
    toggle.textContent = isLight ? '☾' : '☼';
    toggle.setAttribute('aria-label', isLight ? 'Включить тёмную тему' : 'Включить светлую тему');
    toggle.title = isLight ? 'Включить тёмную тему' : 'Включить светлую тему';
  };

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('snow-start-theme'); } catch (_) {}
  const preferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferred);

  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    try { localStorage.setItem('snow-start-theme', next); } catch (_) {}
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey &&
        !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) &&
        !document.activeElement.isContentEditable) {
      event.preventDefault();
      input.focus();
    }
  });

  year.textContent = new Date().getFullYear();
})();