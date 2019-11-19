var imagenes=[1,2,3,4,5,6,7,8,9,10];

var cont=0;

function limites() {
    if (cont >= 9){
        document.getElementById("siguiente").disabled = true;
        document.getElementById("anterior").disabled = false;
    }else if(cont == 0){
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = true;
    }else{
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = false;
    }
}

function imagen() {
    var ubicacion="images/"+imagenes[cont]+".jpg";
    console.log(ubicacion);
    document.getElementById("foto").src=ubicacion;
}

function atras() {
    cont--;
    console.log(cont);
    limites()
    imagen()
}

function adelante() {
    cont++;
    console.log(cont);
    limites()
    imagen()
}

function aletorio(n) {
        return(Math.round(Math.random()*n+1));
}

function mostrar() {
    document.getElementById("anterior").disabled=true;
    console.log(aletorio(4));
    var ima="images/"+imagenes[aletorio(4)]+".jpg";
    document.getElementById("foto").src=ima;
}