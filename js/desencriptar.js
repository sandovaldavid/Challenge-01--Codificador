var b_desencriptar  = document.querySelector("#desencriptar");
var b_encriptar = document.querySelector("#encriptar");
var panel_2 = document.querySelector(".panel-2");
var valor_b_desencriptar = false;

b_encriptar.addEventListener("click", function(){
    valor_b_desencriptar = true;
});

b_desencriptar.addEventListener("click", function(){
    var texto = document.getElementById("texto").value;
    document.getElementById("texto").value = "";
    if(texto_vacio(texto)){
        if(valor_b_encriptar){
            var p = document.querySelector(".texto-panel-2");
            var b_copiar = document.querySelector("#copiar");
            p.innerHTML = desencriptar_texto(texto);
            p.classList.remove("invisible");
            b_copiar.classList.remove("invisible");
        }else{
            panel_2.appendChild(construir_P(desencriptar_texto(texto),"texto-panel-2"));
            construirBotonCopiar();
            valor_b_encriptar = true;
        }
        Aparicion_Botones_texto_panel_2();
        botonCopiar();
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