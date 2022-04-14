function botao(text){
    document.getElementById('visor').value += `${text}`
}
function apagar(){
    let text = document.getElementById('visor').value
    document.getElementById('visor').value= text.slice(0,-1)
}

function calcular(){
    document.getElementById('visor').value = eval(document.getElementById('visor').value)
}