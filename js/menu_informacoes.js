let botoes = document.querySelectorAll(".btn");

for(botao of botoes){
    botao.addEventListener('click',function(e){
        let id = e.target.value;
        let paragrafo = document.querySelector(`#${id}`);
        paragrafo.style.display = "block";
        desativaParagrafos(paragrafo);
    })
}

function desativaParagrafos(atual){
    let paragrafos = document.querySelectorAll(".some");
    for(paragrafo of paragrafos){
        if(paragrafo.id != atual.id){
            paragrafo.style.display = "none";
            let scroll = document.querySelector('#clientes-descricao');
            scroll.scrollTop = 0;
        }
    }
}


let botaoInicial = document.querySelector('#primeiro');
let eventoDeClick = document.createEvent('MouseEvents');
eventoDeClick.initEvent('click',true,true);
botaoInicial.dispatchEvent(eventoDeClick);

document.getElementById("primeiro").focus();