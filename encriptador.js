function encriptarTexto() {
    // Oculto el contenido del placeholder
    document.getElementById("placeholder").style.display = "none";

    // Obtengo el texto original
    const textoOriginal = document.getElementById('textoOriginal').value;

    // Encripto el texto
    let textoEncriptado = textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Coloco en el output, el texto ya encriptado
    document.getElementById('textoEncriptado').textContent = textoEncriptado;

    // Muestro el botón de copiar y oculto el muñeco
    document.getElementById('copiar').style.display = 'block';
    document.getElementById('muñeco').classList.add('hidden');
}

function desencriptarTexto() {
    // Oculto el contenido del placeholder
    document.getElementById("placeholder").style.display = "none";

    // Obtengo el texto encriptado
    const textoOriginal = document.getElementById('textoOriginal').value;

    // Desencripto el texto
    let textoDesencriptado = textoOriginal
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Coloco en el output, el texto ya desencriptado
    document.getElementById('textoEncriptado').textContent = textoDesencriptado;

    // Muestro el botón de copiar y oculto el muñeco
    document.getElementById('copiar').style.display = 'block';
    document.getElementById('muñeco').classList.add('hidden');
}

function copiar() {
    const textoEncriptado = document.getElementById('textoEncriptado').textContent;
    navigator.clipboard.writeText(textoEncriptado);
}