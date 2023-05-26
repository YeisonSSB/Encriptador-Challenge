const textarea = document.querySelector("textarea");
const mensaje = document.querySelector("mensaje");
const copia = document.querySelector("copiar");
copia.style.display = "none"

textarea.addEventListener("keyup", (e) =>{
    let  scHeight = e.target.scrollHeight;
    textarea.style.height = "auto";
    textarea.style.height = `${scHeight}px`;
});
