let x= 0
let select= 0
let mostra= document.querySelector("#mostra")

function AbreVideo(e){
    
    // mostra algo
    mostra.value= select
    
    // pega o endereço da imagem
    let isso= document.querySelectorAll(".vd")
    let url= isso[e].getAttribute("src")
    // mostra opçao de fechar elemento 
    let ex= document.querySelector("#fecha")
    ex.style.display= "block"
    // mostra opçao de minimizar
    let min= document.querySelector("#min")
    min.style.display= "block"

    // cria elemento com a imagem criada
    let cont= document.createElement("img")
    cont.setAttribute("class", "pop")
    cont.setAttribute("src", url)
    cont.style.position= "fixed"

    // coloca elemento detro do body
    let body= document.querySelector("body")
    body.appendChild(cont)
    
    // verifica se esta selecionado
    if (select == 1){
        cont.setAttribute("src", url)
        cont.setAttribute("class", "popM")
        min.style.top= "70vh"
        min.style.left= "70vw"
        min.style.scale= "0.5"
        min.style.rotate= "180deg"
        ex.style.top= "65vh"
        ex.style.scale= "0.5"

        min.addEventListener("click", maximizar)

    }

    
    // apaga elemento
    function apaga(){
        cont.remove()
        ex.style.display= "none"
        min.style.display= "none"
        min.style.top= "50px"
        min.style.left= "50px"
        min.style.scale= "1"
        ex.style.top= "0vh"
        ex.style.scale= "1"
        select = 0
    }

    // relaciona clicar no "x" há funçao "apagar"
    ex.addEventListener("click", apaga)

    // maximiza elemento
    function maximizar(){
        cont.setAttribute("class", "popM")
        // min.style.top= "50px"
        // min.style.left= "50px"
        // min.style.scale= "1"
        // ex.style.top= "0vh"
        // ex.style.scale= "1"
        cont.style.width= "100vw"
        cont.style.height= "100vh"
        min.style.rotate= "00deg"
        select = 0
    }

    // minimiza elemento
    function minimiza(){
        cont.setAttribute("class", "popM")
        min.style.top= "70vh"
        min.style.left= "70vw"
        min.style.scale= "0.5"
        min.style.rotate= "180deg"
        ex.style.top= "65vh"
        ex.style.scale= "0.5"
        select = 1
    }

    // relaciona clicar no ">" há funçao "minimiza"
    min.addEventListener("click", minimiza)
}

// Menu retratil
function menu(){
    let menu= document.querySelector("#menu")
    let main= document.querySelector("main")
    let hambur= document.querySelector("#hambur")

    switch(x){
        case 0:
            menu.style.left= "-20vw"
            main.style.width= "95vw"
            hambur.style.rotate= "90deg"
            x += 1 
            break
        case 1:  
            menu.style.left= "00vw"
            main.style.width= "78vw"
            hambur.style.rotate= "00deg"
            x -= 1 
            break 
        default:
            mostra.value= "erro!"
    }

}