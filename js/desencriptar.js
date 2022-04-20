var b_desencriptar  = document.querySelector("#desencriptar");
var ta_texto = document.querySelector("texto");

b_desencriptar.addEventListener("click", function(){
    console.log("ingreso al boton :3")
});

function desencriptar_texto(texto_encriptado){  
    var i = 0;
    var mensaje_desencriptado = "";
    var tm_texto = texto_encriptado.length;

    while(i < tm_texto){
        var letra = texto_encriptado.charAt(i);
        console.log(letra);
        if(letra == "a"){
            mensaje_desencriptado = mensaje_desencriptado+letra;
            i = i+1;
        }
        else if(letra == "e"){
            mensaje_desencriptado = mensaje_desencriptado+letra;
            i = i+4;
        }
        else if(letra == "i"){
            mensaje_desencriptado = mensaje_desencriptado+letra;
            i = i+3;
        }
        else if(letra == "o"){
            mensaje_desencriptado = mensaje_desencriptado+letra;
            i = i+3;
        }
        else if(letra == "u"){
            mensaje_desencriptado = mensaje_desencriptado+letra;
            i = i+3;
        }
        else{
            mensaje_desencriptado = mensaje_desencriptado+letra;
        }
        i++;

    }
    return mensaje_desencriptado;

}