// Mobile nav
document.querySelector('.navMbutton').addEventListener('click', () => {
    document.querySelector('.navListMenu').classList.toggle('navListMenuActive');
    document.querySelector('.navMbutton').classList.toggle('navMbuttonActive');
});

// Lang
document.querySelector('.navLang').addEventListener('click', () => {
    document.querySelector('.navLangList').classList.toggle('navLangListActive');
    document.querySelector('.navLang').classList.toggle('navLangActive');
});

// Media modal
document.querySelector('.selectMd').addEventListener('click', () => {
    document.querySelector('.mainMdWr').classList.toggle('mainMdWrActive');
});


// Body modal
document.addEventListener("DOMContentLoaded", () => {
    const modalBody = document.querySelector(".modalBody");
    const MODAL_HIDDEN_KEY = "modalHiddenUntil";
    let hasScrolled = false;

    const isModalHidden = () => {
        const hiddenUntil = localStorage.getItem(MODAL_HIDDEN_KEY);
        return hiddenUntil && new Date().getTime() < new Date(hiddenUntil).getTime();
    };

    const showModal = () => {
        if (!isModalHidden()) {
            modalBody.style.display = "flex";
        }
    };

    const hideModal = () => {
        modalBody.style.display = "none";
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100 && !hasScrolled) {
            hasScrolled = true;
            showModal();
        } else if (window.scrollY < 100 && hasScrolled) {
            hasScrolled = false;
            hideModal();
        }
    });
});

