const textarea = document.querySelector("textarea");

const mensaje = document.querySelector("mensaje");
const copia = document.querySelector("copiar");
copia.style.display = "none"

textarea.addEventListener("keyup", (e) =>{
    let  scHeight = e.target.scrollHeight;
    textarea.style.height = "auto";
    textarea.style.height = `${scHeight}px`;
});

function validarTexto(){
    let textoEscrito = document.querySelector("textarea").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        //alert("Solo son permitidas letras minúsculas y sin acentos")location.reload();
        //return true;
    }
}


