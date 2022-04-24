let ponto = false

function limpar(){ document.getElementById('visor').value = '0' }

document.addEventListener('keydown',teclaPressionada)

function teclaPressionada(event){
    if(event.key == 'Backspace') apagar()
    if(event.key == 'Enter') calcular()
    if(!isNaN(parseInt(event.key))) botao(event.key)
    if(['+','-','*','/','.'].includes(event.key)) simbolo(event.key)
}

function botao(caracter){
    let text = document.getElementById('visor').value

    if(text == '0'){
        if(caracter == '0') return
        document.getElementById('visor').value = ''
    } 

    let tamanhoDoCalculo = text.split(' ').join('').length
    if(tamanhoDoCalculo >= 12) return

    document.getElementById('visor').value += caracter
}

function apagar(){
    let text = document.getElementById('visor').value
    let casas = 1

    if(text.length <= 1 || text == '0') {limpar(); return }
    if(text[text.length-1] == ' ') casas = 3
    if(text[text.length-1] == '.') ponto = false

    document.getElementById('visor').value = text.slice(0,-casas)
}

function simbolo(simbolo){
    let text = document.getElementById('visor').value

    if(text == '0' && (simbolo == '*' || simbolo == '/' || simbolo == '.') || ( text == '0' && simbolo == '+' )) return

    if(text[text.length-1] == '.') return

    if(['+','-','*','/'].includes(text[text.length-2])){
        if(text.length <= 3 || simbolo == '.') return
        ponto = false
        document.getElementById('visor').value = text.slice(0,-3)
    }
    
    if(simbolo == '.' && ponto) return
    if(simbolo != '.'){
        ponto = false
        botao(' '+simbolo+' ')
    }else {
        ponto = true
        botao(simbolo)
    }
}

function calcular(){
    let text = document.getElementById('visor').value

    if(['+','-','*','/','.'].includes(text[text.length-2])) return

    let resultado = eval(document.getElementById('visor').value)

    if(resultado < 0) resultado = '- ' + resultado*-1

    document.getElementById('visor').value = resultado
}