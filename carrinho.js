// DEFINIÇÃO DO CARRINHO
let botaoCarrinho = document.getElementById('btn-cart');
document.querySelector("#cart").style.display = "none";

/* botaoCarrinho.addEventListener('click', function() {
    let nomeProd = document.querySelector('h3.nome_produto').innerText;
    let precoProd = document.querySelector('p.preco-produto').innerText;
    addCarrinho(nomeProd, precoProd);
})
*/

function addCarrinho(nomeProd, precoProd) {
    let itemCarrinho = document.createElement('li');
    let nomeProduto = document.createElement('p');
    let precoProduto = document.createElement('p');

    nomeProduto.innerText = nomeProd;
    precoProduto.innerText = precoProd;

    itemCarrinho.appendChild(nomeProduto);
    itemCarrinho.appendChild(precoProduto);

    let carrinho = document.querySelector('div#cart > ul');
    carrinho.appendChild(itemCarrinho);
}

function gravar_prod() {
    let nomeProd = document.querySelector('h3.nome_produto').innerText;
    let precoProd = document.querySelector('p.preco-produto').innerText;
    addCarrinho(nomeProd, precoProd);
}

// MOSTRAR LISTA DOS PRODUTOS NO CARRINHO
let mostrarListaCarrinho = document.getElementById('mostraCarrinho');

mostrarListaCarrinho.addEventListener('click', function() {
    let carrinho = document.querySelector("#cart");
    if(carrinho.style.display === "none") {
        carrinho.style.display = "block";
    } else {
        carrinho.style.display = "none";
    }
})