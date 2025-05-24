const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

slides.forEach((slide, i) => {
    slide.addEventListener('click', () => {
        slides.forEach((s, j) => {
            if (i !== j) {
                s.classList.remove('active');
            }
            else {
                s.classList.add('active');
            }
        });

    });
});
