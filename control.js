function validacion(){
    
    let flagName = true;    //para saber si le  falta @
    let flagVacios = true;    //para saber si esta vacio 

    valorNombre = document.getElementById("nombre").value;    
    valorClave = document.getElementById("key").value;
    var n = valorNombre.search("@");    
        
    if( n==-1){            
        elemento = document.getElementById('nombre');
        elemento.focus();                                            
        flagName = false;
    }    
    
    if( valorNombre == null || valorNombre.length == 0){                               
        flagName = true;
    }
    if( valorNombre == null || valorNombre.length == 0 || valorClave == null || valorClave.length == 0){                               
        flagVacios = false;
    }               
    
    if(flagName && flagVacios){
        return true;              
    }

    if(!flagName && flagVacios){
        window.alert("Usuario Invalido no tiene @");
        return false;          
    }
    if(flagName && !flagVacios){
        window.alert("los campos no debe estar en blanco");
        return false;          
    }
    if(!flagName && !flagVacios){
        window.alert("Usuario sin @, el password no debe estar en blanco");
        return false;          
    
    }

    

           
}

