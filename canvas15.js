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

let px, py;
let iniAmin, oAnim, fondo;

//let contexto = cargaContextoCanvas('micanvas');

function dibujar(){
    let contexto = cargaContextoCanvas('micanvas');
    
    contexto.clearRect(0, 0, micanvas.width, micanvas.height);
    
    x += velocidad;

    if(x <= 50 || x >= 100){
        velocidad = -velocidad;
    }
    

    contexto.beginPath();
    contexto.arc(75,75,60,Math.PI,Math.PI*(x/100*2), false);
    contexto.stroke();

    window.requestAnimationFrame(dibujar);
     
}

// Dibuja un planeta rojo de rad y color dadas en el punto de la órbita
function planeta(centro, rad, color, contexto){
    contexto.arc(centro, 0, rad, 0, 2*Math.PI);
    contexto.fillStyle = color;
    contexto.fill();
    contexto.strokeStyle = color;
    contexto.stroke();
}



//Calcula la posición de un planeta en un punto de la órbita
//gira el canvas y lo coloca en un extremo del diámetro horizontal pero girado
function orbita(tiempo, velocidad, rad, radio_orbita, color, dib, contexto){
    if (dib){
        dibOrbita(radio_orbita, color, contexto)
    }
    contexto.beginPath();
    contexto.rotate(velocidad*tiempo*Math.PI/2000);
    planeta(radio_orbita, rad, color, contexto);
}

//Dibuja la orbita del planeta
function dibOrbita(radios_orbita, color, contexto){
    contexto.beginPath();
    contexto.strokeStyle=color;
    contexto.arc(0, 0, radios_orbita, 0, 2*Math.PI);
    contexto.stroke();
}

// Mueve el planeta en función del tiempo
function mover(time){
    let contexto = cargaContextoCanvas('micanvas');
    let rad_Tierra = 10, rad_Luna = 2, rad_Marte= 7, vel_Tierra = 5, vel_Luna = 65, vel_Marte = 2.6;
    let radio_orb_Tierra = 100, radio_orb_Luna = 20, radio_orb_Marte = 150;
    let tiempo_planeta = Math.round((time - iniAnim)/10);
    //controla la velocidad de la animación
    let vis = true;
    contexto.putImageData(fondo, 0,0);

    // Planeta azul
    contexto.save();
    orbita(tiempo_planeta, vel_Tierra, rad_Tierra, radio_orb_Tierra, "blue", vis, contexto);
 
    // Planeta rosa 
    contexto.translate(radio_orb_Tierra, 0);
    orbita(tiempo_planeta, vel_Luna, rad_Luna, radio_orb_Luna, "pink", vis, contexto);
 
    // Planeta rojo
    contexto.restore();
    contexto.save();
    orbita(tiempo_planeta, vel_Marte, rad_Marte, radio_orb_Marte, "red", vis, contexto);
 
    contexto.restore();
    oAnim = window.requestAnimationFrame(mover);
}



window.addEventListener("DOMContentLoaded",function(){
    let contexto = cargaContextoCanvas('micanvas');
    
    if (contexto) {
        let rS = 15;
        px=micanvas.width/2;
        py=micanvas.height/2;
        contexto.translate(px,py);
        //Sol
        planeta(0, rS, "yellow", contexto);
        contexto.beginPath();
        fondo = contexto.getImageData(0,0,micanvas.width, micanvas.height);
        iniAnim = window.performance.now();
        oAnim = window.requestAnimationFrame(mover)
    }
});