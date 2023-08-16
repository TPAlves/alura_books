const botoes = document.querySelectorAll("button.btn");

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    // console.log(elementoBtn);
    const categoria = elementoBtn.value;
    // console.log(elementoBtn);
    let livrosFiltrados =
        categoria == 'disponivel' ? filtrarLivrosPorDisponiveis() : filtrarLivrosPorCategoria(categoria);

    // console.table(livrosFiltrados);
    // exibirValorTotal(livrosFiltrados);
    livrosFiltrados = aplicarDesconto(livrosFiltrados);
    exibirLivros(livrosFiltrados);

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        // console.log(valorTotal);
        exibirValorTotalLivrosDisponiveis(valorTotal);
    }
}

function filtrarLivrosPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarLivrosPorDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosDisponiveis(valorTotal) {
    elementoValorTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.replace(".", ",")}</span></p>
  </div>`;
}
