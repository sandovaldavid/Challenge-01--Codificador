var panel_img_mensaje = document.querySelector(".panel-img-mensaje");

function invisible_panel_img_mensaje(){
    panel_img_mensaje.classList.add("fadeOut");
    setTimeout(function(){
        panel_img_mensaje.classList.add("invisible");
    },200);
}

function Aparicion_Botones_texto_panel_2(){
    var b_copiar = document.querySelector("#copiar");
    var texto_panel_2 = document.querySelector(".texto-panel-2");
    texto_panel_2.classList.remove("fadeOut");
    b_copiar.classList.remove("fadeOut");
}