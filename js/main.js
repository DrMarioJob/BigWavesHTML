// Mobile nav
document.querySelector('.navMbutton').addEventListener('click', () => {
    document.querySelector('.navListMenu').classList.toggle('navListMenuActive');
});

// Lang
document.querySelector('.navLang').addEventListener('click', () => {
    document.querySelector('.navLangList').classList.toggle('navLangListActive');
});

// Media modal
document.querySelector('.selectMd').addEventListener('click', () => {
    document.querySelector('.mainMdWr').classList.toggle('mainMdWrActive');
});


// Body modal
document.addEventListener("DOMContentLoaded", () => {
    const modalBody = document.querySelector(".modalBody");
    const closeModalButton = document.querySelector(".closeModalBody");
    const MODAL_HIDDEN_KEY = "modalHiddenUntil";

    const isModalHidden = () => {
        const hiddenUntil = localStorage.getItem(MODAL_HIDDEN_KEY);
        return hiddenUntil && new Date().getTime() < new Date(hiddenUntil).getTime();
    };

    if (isModalHidden()) {
        modalBody.style.display = "none";
    }

    closeModalButton.addEventListener("click", () => {
        modalBody.style.display = "none";
        const hiddenUntil = new Date().getTime() + 30 * 60 * 1000;
        localStorage.setItem(MODAL_HIDDEN_KEY, new Date(hiddenUntil).toISOString());
    });
});