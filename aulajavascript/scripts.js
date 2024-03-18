
let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adicionar")
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []

function cliqueiNoBotao(){
    arrayDeTarefas.push(input.value)
    mostrarTela()
    //console.log(arrayDeTarefas)
}

function mostrarTela(){

    let novaLista = ""

    arrayDeTarefas.forEach( tarefa => {
        novaLista = novaLista + `
        
            <li class="item-tarefa">
                <p >${tarefa}</p>
            </li>
        `
    })
    listaCompleta.innerHTML = novaLista
}

botao.addEventListener("click", cliqueiNoBotao)