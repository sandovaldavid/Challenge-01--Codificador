var b_encriptar  = document.querySelector("#encriptar");
var panel_2 = document.querySelector(".panel-2");
var valor_b_encriptar = false;

b_encriptar.addEventListener("click", function(){
    var texto = document.getElementById("texto").value;
    document.getElementById("texto").value = "";
    if(valor_b_encriptar){
        var p = document.querySelector(".texto-panel-2");
        var b_copiar = document.querySelector("#copiar");
        p.innerHTML = encriptar_texto(texto);
        p.classList.remove("invisible");
        b_copiar.classList.remove("invisible");
    }else{
        panel_2.appendChild(construir_P(encriptar_texto(texto),"texto-panel-2"));
        construirBotonCopiar();
        valor_b_encriptar = true;
    }
    invisible_panel_img_mensaje();
    botonCopiar();
    Aparicion_Botones_texto_panel_2();
});

function encriptar_texto(texto){    
    var i = 0;
    var mensaje_encriptado = "";
    var tm_texto = texto.length;

    while(i < tm_texto){
        var letra = texto.charAt(i);

        if(letra == "a"){
            mensaje_encriptado = mensaje_encriptado+"ai";
        }
        else if(letra == "e"){
            mensaje_encriptado = mensaje_encriptado+"enter";
        }
        else if(letra == "i"){
            mensaje_encriptado = mensaje_encriptado+"imes";
        }
        else if(letra == "o"){
            mensaje_encriptado = mensaje_encriptado+"ober";
        }
        else if(letra == "u"){
            mensaje_encriptado = mensaje_encriptado+"ufat";
        }
        else{
            mensaje_encriptado = mensaje_encriptado+letra;
        }

        i++;
    }

    return mensaje_encriptado;
}

function construir_P(texto,clase){
    var p = document.createElement("p");
    p.classList.add(clase);
    p.textContent = texto;
    return p;
}