// Mobile nav
document.querySelector('.navMbutton').addEventListener('click', () => {
    document.querySelector('.navListMenu').classList.toggle('navListMenuActive');
});

// Lang
document.querySelector('.navLang').addEventListener('click', () => {
    document.querySelector('.navLangList').classList.toggle('navLangListActive');
});