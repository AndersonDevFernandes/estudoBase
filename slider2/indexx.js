// Script para o slider
const featuredImg = document.getElementById('featured-img');
const thumbnails = document.querySelectorAll('.image-thumb');
let currentIndex = 0;

// Função para atualizar a imagem em destaque
function updateFeaturedImage(index) {
    const imageSrc = thumbnails[index].getAttribute('data-src');
    featuredImg.src = imageSrc;
}

// Adiciona evento de clique às miniaturas
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateFeaturedImage(currentIndex);
    });
});

// Função para o loop automático
function autoSlide() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateFeaturedImage(currentIndex);
}

// Inicia o loop automático a cada 3 segundos
setInterval(autoSlide, 3000);