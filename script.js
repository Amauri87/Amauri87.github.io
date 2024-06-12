// Mostra a animação de carregamento ao atualizar a página
window.addEventListener("beforeunload", function() {
    document.querySelector('.loader').style.display = 'block';
});

// Oculta a animação de carregamento e mostra o conteúdo quando a página é completamente carregada
window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').classList.remove('hidden'); // Exibe os elementos do conteúdo
    }, 2000); // Tempo em milissegundos (aqui definido como 9 segundos)
});
