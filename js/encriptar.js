var b_encriptar  = document.querySelector("#encriptar");
var panel_2 = document.querySelector(".panel-2");
var valor_b_encriptar = false;

b_encriptar.addEventListener("click", function(){
    var texto = document.getElementById("texto").value;
    var T_encriptado = Validar_Texto(texto);
    document.getElementById("texto").value = "";

    if(texto_vacio(texto)){
        if(valor_b_encriptar){
            var p = document.querySelector(".texto-panel-2");
            var b_copiar = document.querySelector("#copiar");
            p.innerHTML = T_encriptado;
            p.classList.remove("invisible");
            b_copiar.classList.remove("invisible");
        }else{
            panel_2.appendChild(construir_P(T_encriptado,"texto-panel-2"));
            construirBotonCopiar();
            valor_b_encriptar = true;
        }
        Aparicion_Botones_texto_panel_2();
        botonCopiar();
        Texto_invalido()
    }
});

function encriptar_texto(letra){    
    var mensaje_encriptado = "";

    if(letra == "a"){
        mensaje_encriptado = "ai";
    }
    else if(letra == "e"){
        mensaje_encriptado = "enter";
    }
    else if(letra == "i"){
        mensaje_encriptado = "imes";
    }
    else if(letra == "o"){
        mensaje_encriptado = "ober";
    }
    else if(letra == "u"){
        mensaje_encriptado = "ufat";
    }
    else{
        mensaje_encriptado = letra;
    }

    return mensaje_encriptado;
}

function construir_P(texto,clase){
    var p = document.createElement("p");
    p.classList.add(clase);
    p.textContent = texto;
    return p;
}