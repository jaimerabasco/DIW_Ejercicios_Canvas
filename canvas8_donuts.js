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

let contexto;

//window.onload = function () {
window.addEventListener("DOMContentLoaded",function(){
    //Recibimos el elemento canvas
    contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        let img = new Image();
		img.src='donuts.png';
		img.onload = function(){
			//Imagen original
			contexto.drawImage(img,0,0);
			//Imagen Escalada 1
			contexto.drawImage(img,0,700,600,400);
			//Imagen 2 Recortada 430-200 ancho 340
			contexto.drawImage(img,430,200,340,300,0,1200,340,300);
			//Imagen Mezquita Recortada y escalada
			contexto.drawImage(img,430,200,340,300,0,1700,680,600);
		}
    }
});

