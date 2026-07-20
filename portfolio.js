document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tabs-button");
    const contents = document.querySelectorAll(".tabs-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const tabNumber = button.getAttribute("data-for-tab");

            buttons.forEach(btn => btn.classList.remove("tabs-button--active"));
            contents.forEach(content => {
                content.classList.remove("tabs-content--active", "tabs-content--fade-in");
            });

            button.classList.add("tabs-button--active");

            const targetContent = document.querySelector(`.tabs-content[data-tab="${tabNumber}"]`);
            if (targetContent) {
                targetContent.classList.add("tabs-content--active");
                
                setTimeout(() => {
                    targetContent.classList.add("tabs-content--fade-in");
                }, 10);
            }
        });
    });
});
