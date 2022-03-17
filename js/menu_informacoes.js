let botoes = document.querySelectorAll(".btn");
let paragrafos = document.querySelectorAll(".some");
let ultimoClickado;

for(botao of botoes){
    botao.addEventListener('click',function(e){
        let id = e.target.value;
        let paragrafo = document.querySelector(`#${id}`);
        paragrafo.style.display = "block";
        e.target.classList.add("selecionado");
        desativaAnteriores(paragrafo, e);
    })
}

function desativaAnteriores(paragrafoAtual, e){

    for(paragrafo of paragrafos){
        if(paragrafo.id != paragrafoAtual.id){
            paragrafo.style.display = "none";
            let scroll = document.querySelector('#clientes-descricao');
            scroll.scrollTop = 0;
        }
    }
    
    for (botao of botoes) {
        if(botao != e.target){
            botao.classList.remove("selecionado");
        }
    }


}


let botaoInicial = document.querySelector('#primeiro');
let eventoDeClick = document.createEvent('MouseEvents');
eventoDeClick.initEvent('click',true,true);
botaoInicial.dispatchEvent(eventoDeClick);

document.getElementById("primeiro").classList.add("selecionado");
