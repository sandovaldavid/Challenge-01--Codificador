var b_desencriptar  = document.querySelector("#desencriptar");
var b_encriptar = document.querySelector("#encriptar");
var ta_texto = document.querySelector("texto");
var panel_img_mensaje = document.querySelector(".panel-img-mensaje");
var panel_2 = document.querySelector(".panel-2");
var valor_b_desencriptar = false;

b_encriptar.addEventListener("click", function(){
    valor_b_desencriptar = true;
});

b_desencriptar.addEventListener("click", function(){
    var texto = document.getElementById("texto").value;
    document.getElementById("texto").value = "";
    if(valor_b_encriptar){
        var p = document.querySelector(".texto-panel-2");
        p.innerHTML = desencriptar_texto(texto);
    }else{
        panel_img_mensaje.classList.add("invisible");
        panel_2.appendChild(construir_P(desencriptar_texto(texto),"texto-panel-2"));
        valor_b_encriptar = true;
    }
});

function desencriptar_texto(texto_encriptado){  
    var i = 0;
    var mensaje_desencriptado = "";
    var tm_texto = texto_encriptado.length;

    while(i < tm_texto){
        var letra = texto_encriptado.charAt(i);
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