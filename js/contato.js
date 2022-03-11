let consultorInput = document.querySelector("#consultor");
    let enviarButton = document.querySelector("#enviar-mensagem");

    enviarButton.addEventListener("click", (e) => {
        if(consultorInput.value == ""){
            alert("Escolha um consultor!");
            consultorInput.focus();
            e.preventDefault();
        }
    });

let emailInput = document.querySelector("#email");

emailInput.addEventListener("change", (e) => {
    let regexEl = /^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/;

    if(!(regexEl.test(emailInput.value))){
        alert("Informe um email válido!");
        emailInput.focus();
    }
});