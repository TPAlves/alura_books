const botaoOrdenarPreco = document.querySelector("#btnOrdenarPorPreco");

botaoOrdenarPreco.addEventListener("click", ordenarPreco);

function ordenarPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    livrosOrdenados = aplicarDesconto(livrosOrdenados);
    exibirLivros(livrosOrdenados);
    //  exibirValorTotal(livrosOrdenados);

}