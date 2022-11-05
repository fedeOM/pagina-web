
let nombre = document.querySelector(".input-name")
let password = document.querySelector(".input-password")
let error = document.querySelector(".error")
let password2 = document.querySelector(".input-password2")




//Estos son Eventos los vas a ver mas adelante pero te lo dejo, por ahora hacelo como te dijieron
//Pero para ver el evento en consola, necesitas saber esto, porque no se si viste que cada vez que apretas el btn se recarga la pagina
//para evitar eso y ver el console.log en consola, necesitas del evento del mouse , en este caso el click y 'prevenir' la recarga de la pagina
 
const btn = document.querySelector('.primary-btn')
btn.addEventListener('click' , (e) =>{
    e.preventDefault()//Prevenimos el evento

    console.log(nombre.value)
    console.log(password.value)

    var mensajeserror = []//LET

    if(nombre.value === null || nombre.value === ""){  //Esta perfecto lo del if y lo del metodo push, pero no hace falta poner si es null, eso esta al pepe, sacalo dsp
        mensajeserror.push("Ingresa tu nombre!")
    }
    else if(password.value === null || password.value === ""){ //No uses if 2 veces usa else if, tambien si()
        mensajeserror.push("Ingresa tu contrasena!")
    }
    else if(password.value != password2.value){
        mensajeserror.push("Las contraseñas no coinciden")
    }

    error.innerHTML = mensajeserror.join(", ")

    
})

