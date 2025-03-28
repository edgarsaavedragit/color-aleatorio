const boton = document.getElementById('botoncito');
const texto = document.getElementById('color');


function colorAleatorio() {
    let opciones = '0123456789ABCDEF';
    let color = '#';

    for(i=0; i<6;i++){
       let indice = Math.floor(Math.random() * 16);
        color += opciones[indice];
    }

    return color;
}

boton.addEventListener('click', function(){
    let cambiarColor = colorAleatorio();
    texto.innerText = cambiarColor;
    document.body.style.backgroundColor = cambiarColor;

})