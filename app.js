let numeroSecreto=0;
let intentos=1;
let numeroSorteados = [];
let numeroVariable=10;

function asignarTxtElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario==numeroSecreto){
        asignarTxtElemento('p',`Acertaste el numero en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled',true);
    }else{
        //El usuario no acerto
            if(numeroDeUsuario>numeroSecreto){
                asignarTxtElemento('p',`El numero secreto es menor (Intentos: ${intentos})`);
            }else{
                asignarTxtElemento('p',`El numero secreto es mayor (Intentos: ${intentos})`);
            }
            intentos ++;
            limpiarCaja();
    }
}

function generarNumeroSecreto() {   
    let numeroGenerado = Math.floor(Math.random()*numeroVariable)+1;

    if(numeroSorteados.length==numeroVariable){
        asignarTxtElemento('p','Ya se sortearon todos los numeros posibles');
        document.getElementById('intentar').setAttribute('disabled',true);
    }else{
        if(numeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value='';
}
function condicionesIniciales(){
    asignarTxtElemento('h1',"Juego del numero Secreto");
    asignarTxtElemento('p', `Dame un numero del 1 al ${numeroVariable}`);
    document.getElementById('intentar').removeAttribute('disabled');
    numeroSecreto=generarNumeroSecreto();
    intentos = 1;
}

function reinicairJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar menesaje 
    condicionesIniciales();
    //deshabilitar el boton 
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();