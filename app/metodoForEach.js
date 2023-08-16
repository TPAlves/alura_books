const elementoValorTotalLivros = document.querySelector("#valor_total_livros_disponiveis");

function exibirLivros(livros) {
    elementoValorTotalLivros.innerHTML = "";
    elementoParaInserirLivros.innerHTML = "";
    livros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidadeLivro(livro);
        let disponibilidade = livro.quantidade <= 0 ? "livro__imagens indisponivel" : "livro__imagens";
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `;
    });
}

// function exibirValorTotal(livros) {
//     let valorFinal = 0;
//     livros.forEach(livro => {
//         if (livro.quantidade > 0) {
//             valorFinal += livro.preco;
//         }
//     });

//     elementoValorLivros.textContent =
//         valorFinal.toLocaleString('pt-br', { style: "currency", currency: "BRL" });
// }

// function verificarDisponibilidadeLivro(livro) {
//     if (livro.quantidade <= 0) {
//         return 'livro__imagens indisponivel';
//     }

//     return 'livro__imagens';
// }