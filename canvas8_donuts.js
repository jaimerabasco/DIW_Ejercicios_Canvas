// Comprobamos que encontramos un elemento y podemos extraer su contexto con getContext(), que indica compatibilidad con canvas
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

window.addEventListener('DOMContentLoaded', function(){
    let contexto = cargaContextoCanvas('micanvas');
    if(contexto){
        let img = new Image();
        img.src = 'donuts.png';
        img.addEventListener('load', function(){
            //Imagen original
            contexto.drawImage(img,0,0);
            //Imagen escalada 1
            contexto.drawImage(img,0,700,600,400);
            //Imagen recortada 430-200 ancho 340
            contexto.drawImage(img,430,200,340,300,0,1200,680,600);
        });   
    }
});


