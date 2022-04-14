let ponto = false

document.addEventListener('keydown',teclaPressionada)

function teclaPressionada(event){
    if(['+','-','*','/','.'].includes(event.key)) simbolo(event.key)
}

function botao(simbolo){
    text = document.getElementById('visor').value

    if(text[text.length-1] == '0') document.getElementById('visor').value = text.slice(0,-1)
    if(text.split(' ').join('').length >= 12) return

    document.getElementById('visor').value += simbolo
}

function limpar(){ document.getElementById('visor').value = '0' }

function apagar(){
    let text = document.getElementById('visor').value
    let casas = 1

    if(text.length == 0 || text == '0') {limpar(); return }
    if(text[text.length-1] == ' ') casas = 3
    if(text[text.length-1] == '.') ponto = false

    document.getElementById('visor').value = text.slice(0,-casas)
}

function simbolo(simbolo){
    let text = document.getElementById('visor').value

    if(text[text.length-1] == '0' && (simbolo == '*' || simbolo == '/' || simbolo == '.') || ( text[text.length-1] == '0' && simbolo == '+' )) return

    if(text[text.length-1] == '.') return

    if(['+','-','*','/'].includes(text[text.length-2])){
        if(text.length == 1 || simbolo == '.') return
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
    if(text.length < 1 || ['+','-','*','/','.'].includes( text[text.length-1])) return
    document.getElementById('visor').value = eval(document.getElementById('visor').value)
}