let botaoCarrinho = document.getElementById('btn-cart');

botaoCarrinho.addEventListener('click', function() {
    let nomeProd = document.querySelector('h3.nome_produto').innerText;
    let precoProd = document.querySelector('.preco-produto').innerText;
    addCarrinho(nomeProd, precoProd);
})

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