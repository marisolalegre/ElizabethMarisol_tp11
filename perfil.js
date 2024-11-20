let perfil= " ";
let mensaje= "";

if(perfil = "administrador"){
    console.log(mensaje="Usted tiene todos los privilegios de uso del sistema");
 
}elseif(perfil = "Asistente")
{
console.log(mensaje="“Usted sólo tiene permisos de registrar, modificar y consultar datos");}

elseif(perfil = "Invitado")
{
    console.log(mensaje="Usted sólo tiene permisos de consultar datos");
}

else{("Debe especificar un perfil válido");}