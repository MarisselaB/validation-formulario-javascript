
const submitFunction = (event) => {
    if (!validarFormulario()) {
        event.preventDefault();
    }else  {
        event.preventDefault();

        alert(
            'Los datos enviados fueron:' + '\n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}


//1.
document.getElementById('formulario').addEventListener('submit' , submitFunction)


//3. Validad formulario

function validarFormulario (){

    // VALIDACION DE NOMBRE, APELLIDO Y DOCUMENTO

    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase()+ campo.id.slice(1))

        if(campo.value.length ==''){
            mostrarError(errorCampo, 'Este campo es requerido!')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres!')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo);
        }
    } )



    //VALIDACION DE EMAIL

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        ocultarError(errorEmail);
    }else {
        mostrarError(errorEmail, 'Ingrese un correo electronico valido!')
    }

    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');



    //VALIDACION DE EDAD

    if (edad.value === ''){
        mostrarError(errorEdad , 'Este campo es requerido!')
        validacionCorrecta = false
    }else if (edad.value < 18) {
        mostrarError(errorEdad, "Debes ser mayor de 18 anos para registrarte!")
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad);
    }


    //VALIDACION DE ACTIVIDAD

    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');

    if (actividad.value === ''){
        mostrarError(errorActividad , 'Por favor selecciona una actividad!')
        validacionCorrecta = false
    }else{
        ocultarError(errorActividad);
    }



    //VALIDACION DE NIVEL DE ESTUDIO

    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if (nivelEstudio.value === ''){
        mostrarError(errorNivelEstudio , 'Por favor selecciona un nivel de estudio!')
        validacionCorrecta = false
    }else{
        ocultarError(errorNivelEstudio);
    }



    //VALIDACION DE TERMINOS Y CONDICIONES

    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if (!aceptoTerminos.checked ){
        mostrarError(errorAceptoTerminos , 'Debes aceptar los terminos y condiciones')
        validacionCorrecta = false
    }else{
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta
}



const mostrarError = (elemento , mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}


const ocultarError = (elemento) => {
    console.log(elemento);
    elemento.textContent = '';
    elemento.style.display = "none";
}

