
var imagenes=[1,2,3,4,5,6,7,8,9,10];

var cont=0;

/** Funcion que establece los limites de las Imagenes entre 10 y 0*/
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

/** Funcion que establece la ubicacion de las Imagenes y la enlaza con
 * el Id del Documento
 */
function imagen() {
    var ubicacion="images/"+imagenes[cont]+".jpg";
    console.log(ubicacion);
    document.getElementById("foto").src=ubicacion;
}

/** Funcion que controla el contador hacia atras se enlaza con la funcion
 * Imagen para mostrarla
 */
function atras() {
    cont--;
    console.log(cont);
    limites()
    imagen()
}
/** Funcion que controla el contador hacia Adelante se enlaza con la funcion
 * Imagen para mostrarla
 */
function adelante() {
    cont++;
    console.log(cont);
    limites()
    imagen()
}
/** Funcion que devuelve una numero aletorio con parametros */
function aletorio(n) {
        return(Math.round(Math.random()*n+1));
}
/** Funcion que sirve para mostrar las Imagenes Aletorias
 *  y Deshabilitar el Boton Anterior
 */
function mostrar() {
    document.getElementById("anterior").disabled=true;
    console.log(aletorio(4));
    var ima="images/"+imagenes[aletorio(4)]+".jpg";
    document.getElementById("foto").src=ima;
}

function validarCamposObligatorios()
{
        var bandera= true
        for (var i = 0; i < document.forms[0].elements.length; i++){
            var elemento = document.forms[0].elements[i]
            if (elemento.value == '' && elemento.type == 'text' ){
                
                if (elemento.id == 'cedula'){
                    document.getElementById('mensajeCedula').innerHTML= '<br>La cedula esta vacia </br>'	
                } else if (elemento.id == 'nombre'){
                    document.getElementById('mensajeNombre').innerHTML= '<br>La cedula esta vacia </br>'	
                } else if (elemento.id == 'telefono'){
                    document.getElementById('mensajeTelefono').innerHTML= '<br>La cedula esta vacia </br>'	
                } else if (elemento.id == 'apellido'){
                    document.getElementById('mensajeApellido').innerHTML= '<br>La cedula esta vacia </br>'	
                }  else if (elemento.id == 'fecha'){
                    document.getElementById('mensajeFecha').innerHTML= '<br>La cedula esta vacia </br>'	
                } else if (elemento.id == 'correo'){
                    document.getElementById('mensajeCorreo').innerHTML= '<br>La cedula esta vacia </br>'	
                } else if (elemento.id == 'contra'){
                    document.getElementById('mensajeContra').innerHTML= '<br>La cedula esta vacia </br>'	
                }
                    
                    elemento.style.border  = '2px red solid'
                    /*** Llamar al Span */
                    elemento.className = 'error'

                    bandera=false
            }
        }

        if (!bandera){
            alert('Revise sus campos ingresados')
        }
        return bandera
}

function validaCedula(elemento) {
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;
		if (cad.charAt(longitud - 1) == total) {
            document.getElementById("mensajeCedula").innerHTML = ("Cedula Válida");
			//alert('Revise sus campos ingresados')

        } else {
            document.getElementById("mensajeCedula").innerHTML = ("Cedula Inválida");
            document.getElementById("cedula").style.border='2px solid red';
        }
    }
	if ( cad.length<10){
		//alert("EL CAMPO CÉDULA DEBE TENER 10 CARACTERES ");
        document.getElementById("mensajeCedula").innerHTML = ("UN CÉDULA VALIDA TIENE UNA LONGUITUD DE 10 CARACETERES ");
        document.getElementById("cedula").style.border='2px solid red';
   }
}
/**Funcion que valida 10 caracteres y Solo Numeros */
function validaTelefono(elemento) {
    var key= window.Event ? elemento.which: elemento.keyCode
    var long=document.getElementById("telefono").value.length;
    if (long >= 10) {
        var alerta=document.getElementById("mensajeTelefono");
        alerta.innerHTML= '<br>No se puede Exceder de 10 Caracteres</br>';
        document.getElementById("telefono").style.border='2px solid red';
    }
    return ((key >=48 && key<=57)||(key==8))
}

/**Funcion para la Validacion de la Cedula */
function validarFecha(){	
	var dtCh= "/";
	var minYear=1900;
	var maxYear=2100;
	function isInteger(s){
		var i;
		for (i = 0; i < s.length; i++){
			var c = s.charAt(i);
			if (((c < "0") || (c > "9"))) return false;
		}
		return true;
	}

function stripCharsInBag(s, bag){
		var i;
		var returnString = "";
		for (i = 0; i < s.length; i++){
			var c = s.charAt(i);
			if (bag.indexOf(c) == -1) returnString += c;
		}
		return returnString;
}

function daysInFebruary (year){
		return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
	
function DaysArray(n) {
		for (var i = 1; i <= n; i++) {
			this[i] = 31
			if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
			if (i==2) {this[i] = 29}
		}
		return this
	}
	function isDate(dtStr){
		var daysInMonth = DaysArray(12)
		var pos1=dtStr.indexOf(dtCh)
		var pos2=dtStr.indexOf(dtCh,pos1+1)
		var strDay=dtStr.substring(0,pos1)
		var strMonth=dtStr.substring(pos1+1,pos2)
		var strYear=dtStr.substring(pos2+1)
		strYr=strYear
		if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
		if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
		for (var i = 1; i <= 3; i++) {
			if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
		}
		month=parseInt(strMonth)
		day=parseInt(strDay)
		year=parseInt(strYr)
		if (pos1==-1 || pos2==-1){
			return false
		}
		if (strMonth.length<1 || month<1 || month>12){
			return false
		}
		if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
			return false
		}
		if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
			return false
		}
		if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
			return false
		}
		return true
	}
	var fecha = document.getElementById("fecha").value.trim();
	if(isDate(fecha)){
		//return true;
		//document.getElementById("mensajeFecha").innerHTML = "<br>Fecha Válida</br>";	
	}else{
		document.getElementById("mensajeFecha").innerHTML = "<br>Fecha Inválida</br>";
		document.getElementById("fecha").style.border='2px Solid red';
	}
}


/** Funcion para validar Solo Letras y el Boton Retroceso */
function validaLetras(elemento) {
    var key=window.Event ? elemento.which: elemento.keyCode
    return((key>=65&&key<=90)|| (key>=97&&key<=122)||(key==8))
}

/** Funcion para validar el Correo de la Universidad */
function validaCorreo() {
    
    var correo = document.getElementById("correo").value.trim();
	
	var coValido="@est.ups.edu.ec";
	var coValido2="@ups.edu.ec";

	var corr1 = correo.substr(correo.length-15);
	
	var corr2 = correo.substr(correo.length-11);
	
	if(corr1 != coValido || corr2 != coValido2  ){
        document.getElementById("mensajeCorreo").innerHTML = ("DIRECCION DE CORREO INVÁLIDA ");
        document.getElementById("correo").style.border='2px solid red';
		
	}
	
	
	 if (corr1 ==  coValido){
			if( correo.length < 18 ){
                document.getElementById("mensajeCorreo").innerHTML = (" LA DIRECCION DEBE CONTENER AL MENOS 3 VALORES ALFANUMÉRICOS ");
                document.getElementById("correo").style.border='2px solid red';
			}else{
                document.getElementById("mensajeCorreo").innerHTML = (" LA DIRECCION DE CORREO ES VÁLIDA");
                document.getElementById("Correo").style.border='2px solid red';
			}
			
	}	
	
	else if (corr2 == coValido2 ){

			if( correo.length<14 ){
                document.getElementById("mensajeCorreo").innerHTML = (" LA DIRECCION DEBE CONTENER AL MENOS 3 VALORES ALFANUMÉRICOS ");
                document.getElementById("correo").style.border='2px solid red';
			}else{
				document.getElementById("mensajeCorreo").innerHTML = (" LA DIRECCION DE CORREO ES VÁLIDA ");
			}	
	}
	
	if(correo.length == 0){
    document.getElementById("mensajeCorreo").innerHTML = (" EL CAMPO DE CORReO ESTA VACÍO ");
    document.getElementById("correo").style.border='2px solid red';
		}
		if(correo.length < 10){
	document.getElementById("mensajeCorreo").innerHTML = (" ");
	
		}
}

function validaContra(elemento) {
    var key=window.Event ? elemento.which: elemento.keyCode
    var len=document.getElementById("contra").value.length;
    if(len >= 8)
    {		
        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter_raro = false;
        
        for(var i = 0;i<contra;i++)
        {
            if((key>=65&&key<=90))
            {
                mayuscula = true;
            } else if(key>=97&&key<=122)
            {
                minuscula = true;
            } else if(key>=48&&key<=57)
            {
                numero = true;
            }else
            {
                caracter_raro = true;
            }
        }
                if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true){
                    document.getElementById("mensajeContra").innerHTML="<br>Contrasena Correcta</br>";
                } else{
                    document.getElementById("mensajeContra").innerHTML="<br>Contrasena Incorrecta</br>";
                    document.getElementById("contra").style.border='2px Solid red';
                }
                document.getElementById("mensajeContra").innerHTML="<br>Es Menos de 8 Caracteres</br>";
                document.getElementById("contra").style.border='2px Solid red';
    }
    
}