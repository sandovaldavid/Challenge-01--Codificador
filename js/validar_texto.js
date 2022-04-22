
var mensaje_error = document.querySelector("#mensaje-error");
var valor_T = true;
function Validar_Texto(texto){
    var i = 0;
    var tm_texto = texto.length;
    var Texto_encriptado = "";
    while(i<tm_texto){
        letra_codigo = texto.charCodeAt(i);
        letra = texto.charAt(i);
        if(((letra_codigo > 31 && letra_codigo < 65) || (letra_codigo > 90 && letra_codigo < 126)) && (letra_codigo !=94 && letra_codigo != 96)){
            Texto_encriptado = Texto_encriptado + encriptar_texto(letra); 
            i++;
            valor_T = true;
        }else{
            error();
            valor_T = false;
            break;
        }
    }

    if(valor_T){
        mensaje_error.classList.remove("error");
        return Texto_encriptado;
    }else{
        Texto_encriptado = "";
        return Texto_encriptado;
    }

}

function error(){
    var mensaje_error = document.querySelector("#mensaje-error");
    mensaje_error.classList.add("error");
}

function Texto_invalido(){
    var b_copiar = document.querySelector("#copiar");
    var texto_panel_2 = document.querySelector(".texto-panel-2");

        if(!valor_T){
            texto_panel_2.classList.add("invisible");
            b_copiar.classList.add("invisible");
            panel_img_mensaje.classList.remove("invisible");
            panel_img_mensaje.classList.remove("fadeOut");
        }

        ta_texto.focus();
}