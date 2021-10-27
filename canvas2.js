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
        //contexto.fillStyle = '#6634A2';
        //contexto.fillRect(100,100,50,50);
        //contexto.fillStyle = 'rgba(200,100,50,0.5)';
        //contexto.fillRect(10,10,120,130);

        contexto.fillStyle = 'rgba(255,0,0,0.5)';
        for(i=0;i <= 500; i+=10){
            contexto.fillRect(i,i,10,10);
        }
        contexto.fillStyle = 'rgba(70%,50%,20%,0.5)';
        for(i=500;i >= 0; i-=10){
            contexto.fillRect(i,500-i,10,10);
        }
        contexto.strokeStyle = 'rgba(100,255,40,0.8)';
        for(i=0;i <= 500; i+=20){
            contexto.strokeRect(250,i,10,10);
        }
        document.getElementById('borrar').addEventListener("click",borrar_parcial);
    }
});


function borrar_parcial(){
    let contexto = cargaContextoCanvas('micanvas');
    if(contexto){
        contexto.clearRect(60,0,400,400);
    }
}
