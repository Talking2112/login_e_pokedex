//Referenciar elementos

const botaoBuscar = document.getElementById("botao-buscar")
const campoEntrada = document.getElementById("entrada")

//Evento ao clicar, fazer a requisição
botaoBuscar.addEventListener("click", async ()=> {
    const busca = campoEntrada.value.tolowerCase().trim()
    if(!busca) return; //se estiver vazio

    try{
        //Faz a req
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
    if(!resposta.ok) throw new Error("Pokemon não encontrado!")
        //Converter JSON
    const dados = await resposta.json()

        //Atualizar os dados da interface
    document.getElementById("nome"),textContent = dados.name
    }
})