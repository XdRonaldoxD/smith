function gologin(){

var connect,form,reponse,result;
form ="variable=contendio";
connect =window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
/* Un metodos que acciona que dea un cambio en ajax donde hay un envio o respuesta al servidor*/
connect.onreadystatechange = function(){
  /* readyState son 4 tipos de estado e. 1° es cuando se activa 2cuando envia lso datos
  3 cuando php recibe los datos y 4 cuando devuelve los datos */
if(connect.readyState==4 && connect.status ==200){

if(connect.responseText==1){
  result =  "<div class=alert alert-dismissible alert-success>";
  result += "<button type=button class=close data-dismiss=alert>x</button>";
  result += " <h4>Conectado</h4>";
  result += " <p><strong>Estamos intentado redireccionando.....</strong></p>";
  result += " </div>";

    __("_ajax_login_").innerHtml=result;
    location.reload();
}else  {

  __("_AJAX_LOGIN_").innerHtml=connect.responseText;
}


}else if (connect.readyState!=4) {
  result =  "<div class=alert alert-dismissible alert-warning>";
  result += "<button type=button class=close data-dismiss=alert>x</button>";
  result += " <h4>Procesando....</h4>";
  result += " <p><strong>Estamos intentado Logearte.....</strong></p>";
  result += " </div>";
  /*Modifica el html que esta dentro del result */
  __("_ajax_login_").innerHtml=result;
}
}
/*Para que la coneccion estea siempre habierto  */
connect.open("POST","ajax.php?mode=login",true);
connect.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
connect.send(form);
}

function runScriptLogin(e){
  if(e.keyCode==13){
    gologin();
  }
}
