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
        contexto.fillStyle='#FF0000';
				//rombo 1
				contexto.beginPath();
				contexto.moveTo(50,5);
				contexto.lineTo(75,65);
				contexto.lineTo(50,125);
				contexto.lineTo(25,65);
				contexto.fill();
				//rombo 2
				contexto.fillStyle='rgba(255,0,0,0.2)';
				contexto.beginPath();
				contexto.moveTo(75,5);
				contexto.lineTo(100,65);
				contexto.lineTo(75,125);
				contexto.lineTo(50,65);
				contexto.fill();
        
    }
}

