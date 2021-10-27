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
        contexto.beginPath();
        contexto.arc(75,75,60,Math.PI,Math.PI*0.5,false);

        contexto.arc(75,75,40,Math.PI*0.5,Math.PI,false);

        contexto.closePath();
        //contexto.stroke();
        contexto.fill();

        contexto.beginPath();
        contexto.fillStyle = 'orange';
        contexto.arc(75,75,15,0,Math.PI*2,false);
        contexto.fill();
        
    }
});
