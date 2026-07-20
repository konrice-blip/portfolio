document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tabs-button");
    const contents = document.querySelectorAll(".tabs-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const tabNumber = button.getAttribute("data-for-tab");

            // 1. Remove active states AND fade classes from all buttons and contents
            buttons.forEach(btn => btn.classList.remove("tabs-button--active"));
            contents.forEach(content => {
                content.classList.remove("tabs-content--active", "tabs-content--fade-in");
            });

            // 2. Add active state to the clicked button
            button.classList.add("tabs-button--active");

            // 3. Find and trigger the smooth show sequence
            const targetContent = document.querySelector(`.tabs-content[data-tab="${tabNumber}"]`);
            if (targetContent) {
                // First, make the element structure exist in the DOM layout
                targetContent.classList.add("tabs-content--active");
                
                // Then, give the browser a microscopic 10ms heartbeat to notice it's there
                // before dropping the opacity fade transition on it.
                setTimeout(() => {
                    targetContent.classList.add("tabs-content--fade-in");
                }, 10);
            }
        });
    });
});