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
        //rotate
        //Nos permite rotar TODO el contexto
        let x = 10;
        let y = 10;
        let width  = 200;
        let height = 200;
        

        //rotando sin trasladar el contexto, siendo siempre desde el (0,0)
        contexto.fillStyle = "#ff0000";
        contexto.fillRect(x, y, width, height);

        //rotamos el contexto
        contexto.rotate( (Math.PI / 180) * 30); //rotamos 30 grados

        //Pintamos el cuadrado rotado
        contexto.fillStyle = "rgba(0,0,255,0.5)";
        contexto.fillRect(x, y, width, height);

        contexto.rotate( -(Math.PI / 180) * 30); //rotamos 30 grados
        
        x = 310;
        y = 10;
        let centro_x = x + 0.5 * width;   // posición x del centro del rectángulo
        let centro_y = y + 0.5 * height;  // posición y del centro del rectángulo
        
        
        //Escalando trasladando el contexto para establecer la rotación desde el centro de la forma.(Muy útil para hacer animaciones de formas que rotan sobre si mismas)
        contexto.fillStyle = "#ff0000";
        contexto.fillRect(x, y, width, height);

       
        //Trasladamos el contexto 
        contexto.translate(centro_x, centro_y);
        contexto.rotate( (Math.PI / 180) * 45); //rotamos 45 grados
        contexto.translate(-centro_x, -centro_y); //Colocamos de nuevo el contexto en la posición original

        //Pintamos el cuadrado rotado
        contexto.fillStyle = "rgba(0,0,255,0.5)";
        contexto.fillRect(x, y, width, height);


        //También puedes usar el método scale para escalar
    }
});
