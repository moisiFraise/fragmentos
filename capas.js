const btnVoltar = document.getElementById('btnVoltar');
const btnIrJogo = document.getElementById('btnIrJogo');
const capaItems = document.querySelectorAll('.capa-item');
let livroSelecionado = null;

btnVoltar.addEventListener('click', () => {
    window.location.href = 'index.html';
});

btnIrJogo.addEventListener('click', () => {
    if (livroSelecionado) {
        console.log('Ir para o jogo do livro:', livroSelecionado);
        // Depois será redirecionado para a tela do jogo
    }
});

capaItems.forEach(item => {
    item.addEventListener('click', () => {
        capaItems.forEach(i => i.classList.remove('selecionado'));
        item.classList.add('selecionado');
        livroSelecionado = item.dataset.livro;
        btnIrJogo.classList.remove('hidden');
    });
});
