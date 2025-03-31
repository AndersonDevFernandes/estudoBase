let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;

function showSlide(index) {
    // Oculta todas as imagens
    slides.forEach(slide => slide.classList.remove('active'));

    // Mostra a imagem atual
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Função para o slider automático
function autoSlide() {
    nextSlide();
}

// Inicia o slider automático a cada 3 segundos
setInterval(autoSlide, 3000);

// Inicializa o slider com a primeira imagem
showSlide(currentSlide);