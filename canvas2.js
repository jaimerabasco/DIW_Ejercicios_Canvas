//Comprobamos que encontramos un elemento y podemos extraer su contexto con getContext(), que indica compatibilidad con canvas
function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return FALSE;
}

window.onload = function () {
    //Recibimos el elemento canvas
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        //cambio el color de relleno de los rectángulos
        contexto.fillStyle = 'rgba(255,0,0,0.5)';
        for (i = 0; i <= 500; i += 10) {
            // fillRect(x,y,width,height) dibuja un rectángulo relleno de color
            contexto.fillRect(i, i, 10, 10);
        }
        //cambio el color de la línea de borde del rectángulo
        contexto.strokeStyle = 'rgba(70%,50%,20%,0.5)';
        for (i = 500; i >= 0; i -= 10) {
            //strokeRect(x,y,width,height) dibuja el borde de un rectángulo
            contexto.strokeRect(i, 500 - i, 10, 10);
        }
    }
}

function borrar_parcial() {
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        //clearRect(x,y,width,height) borra un área rectangular del canvas dejándola transparente
        contexto.clearRect(60, 0, 42, 150);
    }
}