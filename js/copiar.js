function construirBotonCopiar(){
    var b_copiar = document.createElement("button");
    var panel_2 = document.querySelector(".panel-2");
    b_copiar.textContent = "Copiar";
    b_copiar.setAttribute("id","copiar");
    b_copiar.classList.add("boton");
    panel_2.appendChild(b_copiar);
}