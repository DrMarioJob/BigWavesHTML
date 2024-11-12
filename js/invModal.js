document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        if (event.target.closest(".invInfo")) {
            const button = event.target.closest(".invInfo");
            const infoId = button.getAttribute("data-info");
            const modal = document.getElementById(`invModal${infoId}`);
            if (modal) {
                document.querySelectorAll(".invModal").forEach(modal => modal.classList.remove("active"));
                modal.classList.add("active");
            }
        }
    });

    document.body.addEventListener("click", (event) => {
        if (event.target.closest(".closeModalInv")) {
            const button = event.target.closest(".closeModalInv");
            const modal = button.closest(".invModal");
            if (modal) {
                modal.classList.remove("active");
            }
        }
    });

    document.querySelectorAll(".invModal").forEach(modal => modal.classList.remove("active"));

    $(".owl-carousel").on('initialized.owl.carousel changed.owl.carousel', function () {
        document.querySelectorAll(".invModal").forEach(modal => modal.classList.remove("active"));
    });

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({

        });
    });
});
