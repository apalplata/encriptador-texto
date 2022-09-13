const inputTexto = document.querySelector(".input-texto");
const outputTexto = document.querySelector(".output-texto");

function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    outputTexto.value = textoEncriptado;
    outputTexto.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    outputTexto.value = textoEncriptado;
    inputTexto.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function botonCopiar(){
    outputTexto.select();
    navigator.clipboard.writeText(outputTexto.value);
    outputTexto.value = "";
    alert("Texto copiado");
}