function clickBotaoEnviar(){

    /*
     DOM - Document Object Model

     através do objeto document referencio qualquer elemento da página pelo seu ID
    */

    var txtEmail = document.getElementById("txtEmail").value;
    var txtSenha = document.getElementById("txtSenha").value;

    //console.log("Email: "+txtEmail+" /  Senha: "+txtSenha);

    // a partir do momento que eu capturo as informações, preciso agora criar uma requisicao 
    // POST para nosso backEnd
    // Fazendo o paralelo com o POSTMAN
    // Defino um URL e um método do tipo POST
    // Defino um body contendo um JSON (do tipo JSON), que tem um objeto do tipo Usuario
    // apenas com email e senha

    // corpo da mensagem
    var msgBody = {   
        email : txtEmail,
        senha : txtSenha
    }

    // agora preciso definir o cabecalho da requisicao
    var cabecalho = {
        method : 'POST',
        body   : JSON.stringify(msgBody),
        headers : {
            'Content-type':'application/json'
        }
    }

    // chamo a funcao FETCH para entrar em contato com o BackEnd
    fetch("http://localhost:8088/login", cabecalho)
        .then(res => tratarResposta(res));
}

function tratarResposta(objeto){
    console.log(objeto.status);
    if (objeto.status === 200){
        alert("UHUUUUU");
    }
    else if (objeto.status === 401){
        document.getElementById("msgResposta").innerHTML = "Senha Inv&aacute;lida";
    }
    else {
        document.getElementById("msgResposta").innerHTML = "Usu&aacute;rio n&atilde;o encontrado no Sistema";
    }
}

function verificaTecla(event){
    if (event.keyCode === 13){
        clickBotaoEnviar();
    }

}