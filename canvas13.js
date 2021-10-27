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


function aleatorio(inferior, superior){
    let numPosib = superior - inferior;
    let random = Math.random() * numPosib;
    random = Math.floor(random);
    return parseInt(inferior)+random;
}

function colorAleatorio(){
    return "rgb(" + aleatorio(0,255) + "," + aleatorio(0,255) + "," + aleatorio(0,255) + ")";
}

function dibujar(){
    let contexto = cargaContextoCanvas('micanvas');
    //En primer lugar, cada vez que dibujemos frame a frame, vamos a borrar lo dibujado anteriormente
    contexto.clearRect(0, 0, micanvas.width, micanvas.height);
    //Guardamos el contexto. Para entender mejor este método, comenta y descomenta junto con restore y analiza el resultado
    contexto.save();
    
    //Creamos una variable tiempo para establecer el ángulo de rotación, y por tanto también la velocidad de giro
    let time = new Date();
   
    //Trasladamos el contexto para posicionar la forma a dibujar
    contexto.translate(150,150);
     
    //Establecemos los angulos de rotación con los milisegundos. Cada vez que realiza el frame, tiene en cuenta los milisegundos
    contexto.rotate((360*Math.PI/180) * time.getMilliseconds()/1000)
     
    //Devolvemos el contexto a la posición original
    contexto.translate(-150,-150);
     
     
    //Creamos un degradado
    let lineGrad = contexto.createLinearGradient(150,81,150,268);
    lineGrad.addColorStop(0,'#ffbc40');
    lineGrad.addColorStop(1,'#ffd890');
    contexto.fillStyle = lineGrad;
    contexto.fillRect(50,50,200,200);
    contexto.fill();
    contexto.lineWidth = 2;
    contexto.strokeStyle = colorAleatorio();
    contexto.strokeRect(50,50,200,200);
    contexto.stroke();
     
    //Ojo 1
    contexto.fillStyle = 'rgba(150,150,150,0.5)';
    contexto.fillRect(100,120,10,20);
    contexto.fill();
     
    //Ojo 2. Puedes usar caminos, arcos, ....
    contexto.fillRect(190,120,10,20);
     
    //reestablecer
    contexto.restore();
    
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