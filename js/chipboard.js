// Спойлер "Почему ЛДСП системы?"
const chipboardButtons = document.querySelectorAll(".reasons__reason");
chipboardButtons.forEach(pressedSpButton => {
    pressedSpButton.addEventListener("click", function() {
        this.classList.toggle("_open");
        let spContent = this.lastElementChild;
        if (this.classList.contains("_open")){
            spContent.style.maxHeight = spContent.scrollHeight + "px";
        } else {
            spContent.style.maxHeight = "";
        }
        chipboardButtons.forEach(anySpButton => {
            let spContent = anySpButton.lastElementChild;
            if (anySpButton != this) {
                spContent.style.maxHeight = "";
                anySpButton.classList.remove("_open");
            }
        });
    });
});