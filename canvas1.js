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
        contexto.fillStyle = '#6634A2';
        contexto.fillRect(100,100,50,50);
        contexto.fillStyle = 'rgba(200,100,50,0.5)';
        contexto.fillRect(10,10,120,130);

    }
});
