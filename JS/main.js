const form = document.getElementById("novoItem");
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []


itens.forEach( (element) => {
   criaElemento(element);
});

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    
    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento (itemAtual);

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value="";
    quantidade.value="";


})

function criaElemento (item) {
 
    console.log(item.nome, item.quantidade)
    
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}