function clickBotaoEnviar(){

    /*
     DOM - Document Object Model

     através do objeto document referencio qualquer elemento da página pelo seu ID
    */

    var txtEmail = document.getElementById("txtEmail").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Email: "+txtEmail+" /  Senha: "+txtSenha);
}

function verificaTecla(event){
    if (event.keyCode === 13){
        clickBotaoEnviar();
    }

}