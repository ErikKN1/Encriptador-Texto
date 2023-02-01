// encriptar


var botonUno = document.querySelector("#btn-encriptar");
var botonCopiar = document.querySelector("#btn-copy");

var encriptacionExitosa = "Texto encriptado con exito:";
var desencriptacionExitosa = "Texto desencriptado con exito";


var si = "";
var no = "none";

function resultado(ver){
  document.getElementById("container-resultado").style.display = ver;  
  document.getElementById("btn-copy").style.display = ver;
  document.getElementById("resultado").style.display = ver;
}

document.getElementById("container-imagen").style.display = "";

resultado(no);

function encriptar(){
  document.getElementById("container-imagen").style.display = "none";
  var msjEncriptado = "";
  var mensaje = document.querySelector("#introducir-texto").value;
  var mayus = /[A-Z]/g;
  var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

  if(mensaje == ""){
    Swal.fire(
      '¿Campo vacio?',
      'Necesita ingresar texto',
      'error'
    )
    // alert("no debe estar vacio");
    document.getElementById("container-imagen").style.display = "";
    document.getElementById("titulo-resultado").style.display = "";
    resultado(no)
  }else if (mensaje.match(mayus) != mensaje.match(mayus)){
    Swal.fire(
      '¿Mayusculas?',
      'No se admiten mayusculas',
      'error'
    )

      // alert("No puede contener mayusculas");
      document.getElementById("container-imagen").style.display = "";
  }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
    Swal.fire(
      '¿Caracteres especiales?',
      'No se aceptan acentos y/o caracteres especiales',
      'error'
    )
      // alert("no puede contener acentos ni caracteres especiales");
      document.getElementById("container-imagen").style.display = "";
  }else{
    for(var i = 0; i < mensaje.length; i++){
    if(mensaje[i] == "a"){
      var encriptando = mensaje[i].replace("a","ai",);
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "e"){
      var encriptando = mensaje[i].replace("e","enter");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "i"){
      var encriptando = mensaje[i].replace("i","imes");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "o"){
      var encriptando = mensaje[i].replace("o","ober");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "u"){
      var encriptando = mensaje[i].replace("u","ufat");
      msjEncriptado = msjEncriptado + encriptando;
  }else{
      msjEncriptado = msjEncriptado + mensaje[i];
    }
  }
  document.getElementById("resultado").style.visibility = "visible";
  document.getElementById("btn-copy").style.visibility = "visible";

      document.getElementById("titulo-resultado").innerHTML=encriptacionExitosa;
      document.getElementById("resultado").innerHTML=msjEncriptado;
      document.getElementById("introducir-texto").value = "";
      resultado(si)
  }
}


// Desencriptar

var botonDos = document.querySelector("#btn-desencriptar");
var mensaje = document.querySelector("#introducir-texto").value




function desencriptar(){
    document.getElementById("container-imagen").style.display = "none";
    var msjDesencriptado = "";
    var mensaje = document.querySelector("#introducir-texto").value;
    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(mensaje == ""){

      Swal.fire(
        '¿Campo vacio?',
        'Necesita ingresar texto',
        'error'
      )
        // alert("Necesita ingresar texto");
        resultado(no)
        document.getElementById("container-imagen").style.display = "";
    }else if (mensaje.match(mayus)!= mensaje.match(mayus)){
      Swal.fire(
        '¿Mayusculas?',
        'No se admiten mayusculas',
        'error'
      )
        
        // alert("No se admiten mayusculas")
        resultado(no)
        document.getElementById("container-imagen").style.display = "";
    }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
      Swal.fire(
        '¿Caracteres especiales?',
        'No se aceptan acentos y/o caracteres especiales',
        'error'
      )
        // alert("No se aceptan acentos y/o caracteres especiales")    
        resultado(no);
        document.getElementById("container-imagen").style.display = "";
    }else{
    msjDesencriptado = mensaje.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
    document.getElementById("resultado").innerHTML=msjDesencriptado;
    document.getElementById("titulo-resultado").innerHTML=desencriptacionExitosa;
  
    resultado(si)
    document.getElementById("introducir-texto").value = ""
    }
    
    
    
}

  // boton copiar

  function copiarPortapapeles(){
    var copiado = document.getElementById("resultado");
    copiado.select();
    document.execCommand('copy');  
    // alert("texto copiado")
     Swal.fire({
       icon: 'success',
       title: 'Exito...',
       text: 'Texto copiado en portapapeles!',
     
     })

    

}
 
 botonCopiar.onclick = copiarPortapapeles;


