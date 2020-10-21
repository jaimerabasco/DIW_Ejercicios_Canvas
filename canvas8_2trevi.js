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

window.onload = function () {
    //Recibimos el elemento canvas
    contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        let img = new Image();
		img.src='https://www.romando.org/wp-content/uploads/2018/06/fontana-di-trevi_roma.jpeg';
		img.onload = function(){
			//Imagen original
			contexto.drawImage(img,0,0);
			//Imagen Escalada 1
			contexto.drawImage(img,0,500,462,640);
			//Imagen 2 Recortada
			contexto.drawImage(img,270,131,100,200,0,1200,1000,2000);
			//Imagen Mezquita Recortada y escalada
			//contexto.drawImage(img,200,0,370,200,0,600,670,400);
		}
    }
}

