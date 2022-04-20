function construirBotonCopiar(){
    var b_copiar = document.createElement("button");
    var panel_2 = document.querySelector(".panel-2");
    b_copiar.textContent = "Copiar";
    b_copiar.setAttribute("id","copiar");
    b_copiar.classList.add("boton");
    panel_2.appendChild(b_copiar);
}

function copy(texto) {
    var input =document.createElement("input");
    input.setAttribute("value",texto.innerText);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}

function botonCopiar(){
    var b_copiar = document.querySelector("#copiar");
    var texto_panel_2 = document.querySelector(".texto-panel-2");

    b_copiar.addEventListener("click", function(){
        copy(texto_panel_2);
        texto_panel_2.classList.add("fadeOut");
        b_copiar.classList.add("fadeOut");
        setTimeout(function(){
            texto_panel_2.classList.add("invisible");
            b_copiar.classList.add("invisible");
            panel_img_mensaje.classList.remove("invisible");
            panel_img_mensaje.classList.remove("fadeOut");
        },200);
        ta_texto.focus();
    });
}