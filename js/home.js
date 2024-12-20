// Спойлер "Загрузить еще"
document.querySelector(".home-section5 button").addEventListener("click", function() {
    this.classList.toggle("_open");
    let spContent = this.previousElementSibling;
    if (this.classList.contains("_open")){
        spContent.style.maxHeight = spContent.scrollHeight + "px";
    } else {
        spContent.style.maxHeight = "";
    }
});

// Слайдер
new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev'
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: {
        enabled: true,
        sticky: true
    },
    speed: 600,
    keyboard: true,
    breakpoints: {
        1201: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1441: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

// Спойлер "Автор проекта"
const spButtons = document.querySelectorAll(".swiper-slide__project-author");
spButtons.forEach(pressedSpButton => {
    pressedSpButton.addEventListener("click", function() {
        this.classList.toggle("_open");
        let spContent = this.lastElementChild;
        if (this.classList.contains("_open")){
            spContent.style.maxHeight = spContent.scrollHeight + "px";
        } else {
            spContent.style.maxHeight = "";
        }
        spButtons.forEach(anySpButton => {
            let spContent = anySpButton.lastElementChild;
            if (anySpButton != this) {
                spContent.style.maxHeight = "";
                anySpButton.classList.remove("_open");
            }
        });
    });
});