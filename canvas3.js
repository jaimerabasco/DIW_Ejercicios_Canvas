//Comprobamos que encontramos un elemento y podemos extraer su contexto con getContext(), que indica compatibilidad con canvas
function cargaContextoCanvas(idCanvas){
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext){
        let contexto = elemento.getContext('2d');
        if(contexto){
            return contexto;
        }
    }
    return false;
}


window.addEventListener("DOMContentLoaded",function(){
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        //cuadradosAleatorios();
        setInterval(cuadradosAleatorios,500,contexto);
    }
});

function aleatorio(inferior, superior){
    let numPosib = superior - inferior;
    let random = Math.random() * numPosib;
    random = Math.floor(random);
    return parseInt(inferior)+random;
}

function colorAleatorio(){
    return "rgb(" + aleatorio(0,255) + "," + aleatorio(0,255) + "," + aleatorio(0,255) + ")";
}

function cuadradosAleatorios(contexto){
    for(i=0; i<500; i+=10){
        for(j=0; j <= 500; j+=10){
            contexto.fillStyle = colorAleatorio();
            contexto.fillRect(i,j,10,10);
        }
    }
}
