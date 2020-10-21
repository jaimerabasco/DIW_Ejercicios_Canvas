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
        //Si tengo el contexto cambio el color de dibujo a azul
        contexto.fillStyle = '#6666ff';
        //dibujo un rectángulo azul
        contexto.fillRect(10, 10, 50, 50);
        //cambio el color a amarillo con un poco de transparencia
        contexto.fillStyle = 'rgba(255,255,0,0.7)';
        //pinto un rectángulo amarillo semitransparente
        contexto.fillRect(35, 35, 100, 100);
    }
}