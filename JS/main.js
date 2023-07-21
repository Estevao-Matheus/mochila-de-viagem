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
     
    const existe = itens.find (element => element.nome === nome.value)

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id;
        console.log(existe.id);
        atualizaElemento(itemAtual);
        console.log(existe)
    }else {
        
        itemAtual.id = itens.lenght;
        criaElemento (itemAtual);
        itens.push(itemAtual)
        console.log(itens.lenght);   
    }
   
      
    

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value="";
    quantidade.value="";


})

function criaElemento (item) {
 
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}

function atualizaElemento (item) {

    console.log (item);
    document.querySelector("[data-id='"+ item.id+"']").innerHTML = item.quantidade;
}