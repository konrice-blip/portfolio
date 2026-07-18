document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tabs-button");
    const contents = document.querySelectorAll(".tabs-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const tabNumber = button.getAttribute("data-for-tab");

            // 1. Remove active states from all buttons and contents
            buttons.forEach(btn => btn.classList.remove("tabs-button--active"));
            contents.forEach(content => content.classList.remove("tabs-content--active"));

            // 2. Add active state to the clicked button
            button.classList.add("tabs-button--active");

            // 3. Find and show the matching tab content
            const targetContent = document.querySelector(`.tabs-content[data-tab="${tabNumber}"]`);
            if (targetContent) {
                targetContent.classList.add("tabs-content--active");
            }
        });
    });
});