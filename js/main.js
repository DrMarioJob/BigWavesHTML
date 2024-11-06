// Mobile nav
document.querySelector('.navMbutton').addEventListener('click', () => {
    document.querySelector('.navListMenu').classList.toggle('navListMenuActive');
});

// Lang
document.querySelector('.navLang').addEventListener('click', () => {
    document.querySelector('.navLangList').classList.toggle('navLangListActive');
});

// Moon Rock slider
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.prMainIcoMoon div');
    const slides = document.querySelectorAll('.prMainContMoon div');
    let currentIndex = 0;
    let autoSlideInterval;

    const updateActiveSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));

        slides[index].classList.add('active');
        thumbnails[index].classList.add('active');
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateActiveSlide(currentIndex);
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index;
            updateActiveSlide(currentIndex);
            startAutoSlide();
        });
    });

    updateActiveSlide(currentIndex);
    startAutoSlide();
});

// Awwa slider
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.prMainIcoAwwa div');
    const slides = document.querySelectorAll('.prMainContAwwa div');
    let currentIndex = 0;
    let autoSlideInterval;

    const updateActiveSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));

        slides[index].classList.add('active');
        thumbnails[index].classList.add('active');
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateActiveSlide(currentIndex);
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index;
            updateActiveSlide(currentIndex);
            startAutoSlide();
        });
    });

    updateActiveSlide(currentIndex);
    startAutoSlide();
});

// Virgin slider
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.prMainIcoVirgin div');
    const slides = document.querySelectorAll('.prMainContVirgin div');
    let currentIndex = 0;
    let autoSlideInterval;

    const updateActiveSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));

        slides[index].classList.add('active');
        thumbnails[index].classList.add('active');
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateActiveSlide(currentIndex);
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index;
            updateActiveSlide(currentIndex);
            startAutoSlide();
        });
    });

    updateActiveSlide(currentIndex);
    startAutoSlide();
});