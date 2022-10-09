// document.addEventListener("DOMContentLoaded", ()=> {
//     console.log("probando");
//     // Botones
//     const btnenviarProducto = document.getElementById("enviarProducto")
//     // Date Form
//     const txtnombre = document.getElementById("nombre")
//     const txtprecio = document.getElementById("precio")
//     const txtcantidad = document.getElementById("cantidad")


//     btnenviarProducto.addEventListener("click", ()=>{
//         if (txtnombre.value === "" || txtprecio.value === "" || txtcantidad === "") {
//             Swal.fire({
//                 position: "center",
//                 title: '¡Error!',
//                 text: 'El campo nombre esta vacio',
//                 icon: 'error',
//                 color: '#716add',
//                 confirmButtonText: "Aceptar"
//             })
//         } else {
//             Swal.fire({
//                 position: "center",
//                 title: 'Insert Correct!',
//                 text: 'El campo nombre esta vacio',
//                 icon: 'success',
//                 confirmButtonText: "Aceptar"
//             })
//         }
//     })
// })



// document.addEventListener("DOMContenLoaded", () =>{
//     const btnenviarProducto = document.getElementById("enviarProducto")
//     const nombre  = document.getElementById("nombre")
//     console.log("nombre",nombre.value)
//     btnenviarProducto.addEventListener("click", () =>{
//         if (nombre.value === ""){
//             Swal.fire({
//                 position: "center",
//                 title: '¡Error!',
//                 // text: 'El nombre es muy corto escriba un nombre valido',
//                 text: 'El campo nombre esta vacio',
//                 icon: 'error',
//                 // footer: "Tombo el que lo lea",
//                 // background: "#1d2630",
//                 // timer: 4060,
//                 // timerProgressBar: true,
//                 // width: "30%",
//                 // padding: "1rem",
//                 confirmButtonText: "Aceptar",
//                 // confirmButtonColor: "#0260FC",
//             });
//         }
//     });
// });