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


//window.onload = function(){
window.addEventListener("DOMContentLoaded",function(){
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
       //Dibujo de la tarjeta
       contexto.fillStyle = 'rgb(255,0,0)';
       contexto.fillRect(0,0,300,200);
       contexto.strokeRect(0,0,300,200);

       contexto.fillStyle = 'white';
       contexto.fillRect(10,60,280,130);
       contexto.strokeStyle='rgb(128,128,128)';
       contexto.strokeRect(10,60,280,130);

       //Dibujar el texto
       contexto.font = "bold 1.8em sans-serif";
       contexto.fillText('Hola mi nombre es', 20, 40);
       contexto.fillStyle = 'black';
       contexto.textAlign = 'center';
       contexto.font = 'bold 90px Verdana';
       contexto.fillText('Jaime', 150, 150);
    }
});
