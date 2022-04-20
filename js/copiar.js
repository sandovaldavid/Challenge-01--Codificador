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
    panel_boton_img.appendChild(panel_img_texpanel_img_tex);
}