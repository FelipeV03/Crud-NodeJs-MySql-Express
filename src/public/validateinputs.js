// Aca vamos hacer la validacion de los campos del formulario para que no se envien vacios

// CUSTOMER
const nombre = document.getElementById("nombre");
const pais = document.getElementById("pais");
const telefono = document.getElementById("telefono");


form.addEventListener("submit", e => {
    e.preventDefault()
    if (nombre.value === "" || pais.value ==="" || telefono.value === "") {
        Swal.fire({
            title: '¡Error!',
            text: 'Hay campos vacios verifique y vuelva a intentar',
            icon: 'error',
            footer: "Tombo el que lo lea",
            background: "#1d2630",
            timer: 7000,
            timerProgressBar: true,
            width: "30%",
            padding: "1rem",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#0260FC",
            color: "white",
        });
    } else{
        Swal.fire({
            title: '¡Añadido!',
            text: 'El registro se ha añadido correctamente',
            icon: 'success',
            footer: "Tombo el que lo lea",
            background: "#1d2630",
            timer: 4060,
            timerProgressBar: true,
            width: "30%",
            padding: "1rem",
            confirmButtonText: "Acaptar",
            confirmButtonColor: "#0260FC",
            color: "white",
        });
    }
});






// PRODUCTS
const nombrep = document.getElementById("nombre");
const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");

