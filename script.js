const imagens = ['banner1.png', 'banner2.jpg', 'banner3.jpg'];
const links = ['./img/produtos/produto1.jpeg', '#', '#']
let currentIndex = 0;

const imgElement = document.getElementById('mainImage');
const antBtn = document.getElementById('antBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
    imgElement.style.opacity = 0; //Inicia o efeito de transição
    setTimeout(() => {
        imgElement.src = imagens[index];
        imgElement.style.opacity = 1; //Termina o efeito de transição
    }, 500); //O tempo deve coincidir com a duração da transição CSS
}

antBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagens.length - 1;
    showImage(currentIndex);
    document.getElementById('link_banner').href=links[currentIndex]
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < imagens.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
    document.getElementById('link_banner').href=links[currentIndex]
});

//Inicializa com a primeira imagem
showImage(currentIndex);

document.getElementById('link_banner').href=links[currentIndex]
