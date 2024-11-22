document.addEventListener("DOMContentLoaded", () => {
    // Открытие модального окна по клику на invInfo
    document.body.addEventListener("click", (event) => {
        const invInfoBlock = event.target.closest(".invAllRow");
        if (invInfoBlock) {
            const infoId = invInfoBlock.getAttribute("data-info");
            const modal = document.getElementById(`invModal${infoId}`);
            if (modal) {
                document.querySelectorAll(".invModal").forEach(modal => modal.classList.remove("active"));
                modal.classList.add("active");
            }
        }
    });

    // Закрытие модального окна по клику на closeModalInv
    document.body.addEventListener("click", (event) => {
        const closeButton = event.target.closest(".closeModalInv");
        if (closeButton) {
            const modal = closeButton.closest(".invModal");
            if (modal) {
                modal.classList.remove("active");
            }
        }
    });

    // Закрытие активного модального окна по клику вне него и вне invInfo
    document.body.addEventListener("click", (event) => {
        const activeModal = document.querySelector(".invModal.active");
        if (activeModal && !event.target.closest(".invModal") && !event.target.closest(".invAllRow")) {
            activeModal.classList.remove("active");
        }
    });

    // Убираем все активные модальные окна при загрузке страницы
    document.querySelectorAll(".invModal").forEach(modal => modal.classList.remove("active"));

    // Убираем все активные модальные окна при изменении состояния owl-carousel
    $(".owl-carousel").on('initialized.owl.carousel changed.owl.carousel', function () {
        document.querySelectorAll(".invModal").forEach(modal => modal.classList.remove("active"));
    });

    // Инициализация owl-carousel
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({});
    });
});
