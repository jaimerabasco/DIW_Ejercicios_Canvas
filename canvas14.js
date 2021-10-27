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

let x=0, y=30, velocidad=2;

function dibujar(){
    let contexto = cargaContextoCanvas('micanvas');
    //En primer lugar, cada vez que dibujemos frame a frame, vamos a borrar lo dibujado anteriormente
    contexto.clearRect(0, 0, micanvas.width, micanvas.height);
    
    // Establecemos cuanto se va a mover el rectángulo sobre el eje x en cada frame. Lo estableces en la declaración de ámbito global del variable
    x += velocidad;

        if(x <= 0 || x >= 475){
            velocidad = -velocidad;
        }
    
    contexto.fillStyle = "#0000ff";
    contexto.fillRect(x, y, 50, 50);
    //Informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.
    //El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
    window.requestAnimationFrame(dibujar);
     
}

//window.onload = function(){
window.addEventListener("DOMContentLoaded",function(){
    let contexto = cargaContextoCanvas('micanvas');
    
    if (contexto) {
        dibujar();
    }
});