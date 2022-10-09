// *Este es un mensaje claciclo*
// Swal.fire("Bienvenidos")

// *Un título con un texto debajo*
// Swal.fire(
//     'The Internet?', // Aca establecemos le titulo de nuestra alerta
//     'That thing is still around?', // Aca establecemos el texto que queremos en nuestra alerta
//     'question' // Aca establecemos el icono que tenga nuestra alerta
// )

// *Un modal con un título, un icono de error, un texto y un pie de página*
// Swal.fire({
//     icon: 'error', // Aca establecems el icono de nuestra alerta
//     title: 'Oops...', // Aca establecems el titulo de neustra alerta
//     text: 'Something went wrong!', // Aca establecemos el texto que queremos en nuestra alerta
//     footer: '<a href="">Why do I have this issue?</a>' // Aca establecemos el piede de pagina de l;a alerta en caso de que la encecitemos
// })


// OPCIONES
// Propiedades de SweetAlert
// Swal.fire({
//     title: "Bienvenidos", // Se utiliza para los titulos en las alertas
//     text: "Hola mundo", // Se utiliza apra poner texto dentro de las alertas
//     // html: '<h1 style="color:red;" >hola mundo</h1>', // Se utiliza para utilizar codigo HTML en las alertas
//     icon: "success", //Se utiliza par aponerle un icono a la alerta y hay diferentes tipos de iconos como "error" "warning" "info" "question" "undefined"
//     confirmButtonText: "Siuuuuu", // Se utiliza para cambiar el texto del boton de confirmar de la alerta
//     footer: "Tombo el que lo lea", // Se usa para ponerle algo en el pie de pagina de nuestra alerta en este se puede utilizar tanto texto como codigo HTML
//     width: "20%", // Se usa para cambiar el ancho de la alerta se recoenmda unsar % y no px ya que dejaria de ser responsive
//     padding: "1rem", // Se usa para cambiar el pading de la alerta si queremos que no tenga margenes solo escribimos 0 sin comillas
//     background: "#1d2630", // Se utiliza para cambiar el fondo de la alerta
//     // grow: "fullscreen", // Se utiliza para especificar como queremos que crezca nuestra alerta hay diferentes valores colum, fullscreen, row
//     backdrop: true, // Se utiliza para que se vea o no el fondo detras de le alerta
//     timer: 9000, // Se utiliza para establecer el tiempo que queremos que dure la alerta antes de cerrarse
//     timerProgressBar: true, // Se utiliza para mostrarle al usuario cuanto flata para uqe se cierre la alerta
//     // toast: true, // Se utiliza para que la alerta sea mas pequeña y se pueda poner en distitos lugares
//     position: "center", // Se utiliza paraa poder cambair ade posicion la alerta hay diferentes valores center, top, bottom
//     // y tambien se le puede decir ai a la derecha o izquierda -start, -end
//     allowOutsideClick: false, // Se utiliza en el caso de que se quiera permitir que el ususario le de afuera de la alerta para cerrarla
//     allowEscapeKey: false, // Se utiliza en el caso de que se quiera permitir que el ususario utilice la tecla esc para cerrla
//     allowEnterkey: false, // Se utiliza en el caso de que se quiera permitir que el ususario pueda dar Enter en la alerta para cerrarla
//     stopkeydownPropagation : false, // Se utiliza en el caso de que se quiera permitir que el ususario utilice eventos de teclado dentro de la alerta que afecten a la pagina

//     // input : "select", // Se utiliza para ponerle inputs a nuestra alerta
//     // inputPlaceholder: "Nombre", // Se utiliza para ponerle un placeholder al input de la alerta
//     // inputValue : "",
//     // inputOptions : { // se utiliza para ponerle ociones a los inputs y nos permite recibir un objeto
//     //     Andres: "Andres",
//     //     Felipe: "Felipe",
//     //     Valeria: "Valeria",
//     // },

//     customClass: { // Se utiliza para ponerle nuestras propias clases y estilos a nuestra alerta
//     // Estas son las propiedades que debe tener nuestro objeto para hacer cambios en la alerta
//     // container : "", // Contenedor
//     // popup : "", // Ventana emergente
//     // header : "", // Header
//     // title : "", // Titulo
//     // closeButton: "", // Boton de cerrar
//     // icon : "", // Icono
//     // image : "", // Imagen
//     // content : "", // Contenido
//     // input : "", // Input
//     // actions : "", // Conetnedor de botones
//     // confirmButton : "", // Boton de confirmar
//     // cancelButton : "", // Boton de cancelar
//     // footer : "", // Pie de pagina
//     },

//     showConfirmButton: true, // Se utiliza para quitar o poner el boton de confirmar de la alerta
//     confirmButtonColor: "#5ACD0F", // Se utiliza para ponerle color al boton de confirmado de nuestra alerta
//     confirmButtonAriaLabel: "Confirmar", // Se utiliza para las personas que nececitan navegar en la pagina de una forma especial solo le ponemos un texto que describa de que va el boton

//     showCancelButton: true, // Se utiliza para quitar o poner el boton de cancelar de la alerta
//     cancelButtonText: "Nouuuuu", // Se utiliza para cambiar el texto del boton de cancelar de la alerta
//     cancelButtonColor: "#ED1C25",
//     cancelButtonArialLabel: "Cancelar", // Se utiliza para las personas que nececitan navegar en la pagina de una forma especial solo le ponemos un texto que describa de que va el boton

//     buttonsStyling: true, // Se utiliza para poder personalizar con nuestros propios estilos de CSS si lo tenemos en false nos quita los estilos de SweetAlert y nos deja sin estilos para perzonalizarlo a nuestro estilo
//     showCloseButton: true, // Se utiliza para mostrar el boton para cerrar la alerta
//     closeButtonArialLabel : "Cerrar", // Se utiliza para las personas que nececitan navegar en la pagina de una forma especial solo le ponemos un texto que describa de que va el boton

//     imageUrl: "img/energia.png", // Se utiliza para poner una imagen en la alerta
//     imageWidth: "50px", // Se utiliza para modificar el ancho de la imagen en la alerta
//     // imageHeight: "", // Se utiliza para modificar la altura de la imagen en la alerta
//     imageAlt: "Imagen alerta", // Se utiliza para ponerle texto alternativo a la imagen


// });







// **Este codico es una promesa que nos devuelve el valor de el input de una alerta**
// Este codigo hace que se ejecute una funcion al iniciar la pagina
// Y que cuando se ejecute la alerta y acabe se ejecute el if
// Para que al final obtenga valores del input y nos los muestre
// Funcion autoinvocada
// (async() => { // Lo que tengamos denro de las llaves se va a ejecutar de forma automatica
//     // Aca vamos a ejecutar una funcion para que cuando seleccionemos un valor suceda algo
//     // Tambien le decimos que queremos extaraer un valor y pa eso ponemos el const
//     const {value: nombre} = await Swal.fire({
//         title: "Bienvenidos",
//         text: "Hola mundo",
//         icon: "success",
//         confirmButtonText: "Siuuuuu",
//         footer: "Tombo el que lo lea",
//         background: "#1d2630",
//         backdrop: true,
//         timer: 9000,
//         timerProgressBar: true,
//         position: "center",
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         allowEnterkey: false,
//         stopkeydownPropagation : false,
//         input : "select",
//         inputPlaceholder: "Nombre",
//         inputValue : "",
//         inputOptions : {
//             Andres: "Andres",
//             Felipe: "Felipe",
//             Valeria: "Valeria",
//         },
//     });
//     // En este punto utilizando await le decimos que cuando se ejecute el codigo de ariiba se ejcute el if

//     // Hacemos una condicion para despues de que se ejecute la alerta
//     if (nombre){
//         // alert(nombre);
//         Swal.fire({
//             title: "El nombre que elejiste es:",
//             icon: "success",
//             html: `<h1>${nombre}</h1>`,
//         });
//     }
// })()









Swal.fire ( {
    title : 'Esta es la tabla de Clientes' ,
    html : ' <a href="/" style="text-decoration: none;" class="boton">Volver al inicio</a> ' ,
    icon : undefined ,
    footer : " Anuncio " ,
    width :'350px',
    padding : '3rem',
    background : 'while',
    grow : false ,
    backdrop : false ,
    timer : 5000 ,
    timerProgressBar : true ,
    toast : true,
    position : 'bottom-end' ,
    allowoutsideClick : false ,
    allowEscapekey : false ,
    stopkeydownPropagation : false ,
    showConfirmButton : false ,
    showCancelButton : false ,
    showCloseButton : false ,
});





Swal.fire ( {
    title:'CRUD APLICATION' ,
    icon : 'info',
    timer : 3000 ,
    background: "#1d2630",
    timerProgressBar : true ,
    padding : '1rem',
    grow : 'row',
    backdrop : true,
    toast : true,
    position: 'top-end',
    allowOutsideClick : false,
    allowEscapekey : false,
    stopKeydownPropagation : false,
    showConfirmButton : true,
    showCancelButton : false,
    showCloseButton : false,
    showConfirmButton : false ,
});