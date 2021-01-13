function criaHora(segundos) {
    const date = new Date(segundos * 1000)
    return date.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function iniciarRelogio(){
    timer =  setInterval(()=>{
        segundos++;
        relogio.innerHTML = criaHora(segundos)
    },1000);
}

document.addEventListener('click', (e)=>{
    const element = e.target

    if (element.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciarRelogio()
    }

    if (element.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.classList.add('pausado')
    }

    if (element.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
});

/*iniciar.addEventListener('click',(e)=>{
    
});

pausar.addEventListener('click',(e)=>{
    clearInterval(timer)
    relogio.classList.add('pausado')
});

zerar.addEventListener('click',(e)=>{
    
});*/