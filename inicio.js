let item = document.querySelector('li.item:first-child');

item.addEventListener('click', function() {
    document.getElementById('campo_busca').focus();
})

window.onload = function() {
    document.getElementById('campo_busca').focus();
}