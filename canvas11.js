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

        //Podemos realizar transformaciones de sobre nuestros dibujos de canvas. 
        //Las más habituales, y que nos dan herramientas para realizar animaciones más completas: translate, rotate
        //Translate
        //Pintamos un rectángulo
        contexto.fillStyle = "#ff0000";
        contexto.fillRect(0,0, 150, 150);
       
        //Trasladamos el contexto 
        //Muy importante, trasladamos el contexto entero. Es decir, el punto de inicio de TODO el contexto se traslada del 0,0 al 100,50
        contexto.translate(100, 50);

        //Pintamos otro cuadrado
        contexto.fillStyle = "rgba(0,0,255,0.5)";
        contexto.fillRect(0,0, 150, 150);

        // Save te permite guardar el "estado" actual del canvas.
        //Estos pueden ser restaurados en cualquier momento por restore. Esta técnica es muy útil para las animaciones, para poder intercambiar estados
        //mientras dibujamos de forma dinámica
        contexto.save();

        contexto.fillStyle = 'green';
        contexto.fillRect(10, 10, 100, 100);

        // Restauramos el contexto. Ahora los rectángulos vuelven a tener el estado que guardamos. En este caso azules con transparencia.
        // Si comentas el restore, observarás que dibuja con el "estilo" verde
        contexto.restore();

        contexto.fillRect(200, 0, 150, 150);

    }
});
