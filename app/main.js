var livros = [];
const endpointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
const elementoParaInserirLivros = document.querySelector("#livros");
//const elementoValorLivros = document.querySelector("#valor");

getBuscarLivrosApi();


async function getBuscarLivrosApi() {
    const resposta = await fetch(endpointAPI);
    livros = await resposta.json();
    let livrosComDesconto = aplicarDesconto(livros);
    //console.log(livros);


    exibirLivros(livrosComDesconto);
    // exibirValorTotal(livros);
}


