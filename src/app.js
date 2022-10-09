// Este archivo es el encargado de poder ejecutar todo el servidor

// MODULOS
// Requerimos todas los modulos que vamos a utilizar en nuestro proyecto

// Aca hacemos el requerimiento de express
const express = require ("express");
// Aca lo inicializamos
const app = express();
// Este modulo se encarga de unir directorios
const path = require("path")
// Este modulo se encarga de darnos estilos para neustra consola
const colors = require("colors")
// Este modulo nos ayuda a registrar las peticiones de los usuarios antes de procesarlas
const morgan = require("morgan")
// Este modulo nos ayuda a conectarnos a una base de datos MySql
const mysql = require("mysql")
// Este modulo nos ayuda a que al momento de realizar peticiones a la base de datos MySql nos sea mucho mas sencillo
const myconnection = require("express-myconnection")
// Este modulo nos va ayudar con las alertas
const Swal = require("sweetalert2")







// Importando rutas
// Aca vamos a importas las rutas colocando la ubicacion de nuestro archivo el cual va atener las rutas
const customerRoutes = require('./routes/rutas');
// const { dirname } = require("path");
// const { urlencoded } = require("express");
// const { Script } = require("vm");





// SETTINGS
// Aca van los ajustes de nuestra aplicaccion como el puerto que motor de plantillas va a utilizar las vistas etc
// Aca especificamops el puerto que queremos que utilice nustro servido ya que este es el que tomara cuando
// despleguemos nuestra aplicacion en un servidor real
app.set('port', process.env.PORT || 3000);
// Aca especificamos la motor de plantillas que vamos a utilizar
app.set('view engine', 'ejs');
// Aca especificamos donde se encuntran las carpetas de las vistas
app.set('views', path.join(__dirname, 'views'));




// MIDDLEWARES
// Son funciones que se ejecutan antes de que vengan las peticiones de los usuarios
app.use(morgan('dev'));
// Aca ponemos las credenciales de nuestra base de datos para que se realice la conexion
app.use(myconnection(mysql, {
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "crudMysqlNodeJSExpress"
    // Aca especificamos como vamos a estar conectandonos al servidor
},'single'));

// Aca le estamos diciendo uqe desde un modulo de express estamos requiriendo un metodo que nos permite poder
// entender todos los datos que vengan desde el formulario
// y le estamos dando como configuracion extended false porque no vamos a recibir imagenes o datos codificados
app.use(express.urlencoded({extended: false}))





// RUTAS
// Aca vamos a escribir todas las urls que los ususarios le van a pedir al servidor
// Aca le decimos al servidor que cada ves que un usuario llegue a la ruta inicial del servidor
// ejecute las rutas en este caso customerRoutes y ya el servido estaria utilizando las rutas que vamos a escribir
app.use('/', customerRoutes);





// ARCHIVOS ESTATICOS
// Aca le vamos a especificar a nuestro servidor cuales son nuestros archivos esticos osea los del frontend

// Aca le decimos que use nuestros archjos estaticos y tambien le decimos en donde estan nuestros archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
// console.log("debuger", path.join(__dirname, 'public'));



// SERVIDOR
// STARTING SERVER
// Aca inicialiamos el servidor
// Aca utilizamos el puerto que establecimos arriba
app.listen(app.get('port'), () =>{
    // Aca le decimos que si conecta nos de un mensaje por la consola
    console.log("(っ◔◡◔)っ","▌│█║▌║▌║Puerto 3000 abierto║▌║▌║█│▌".rainbow,"(ง︡'-'︠)ง");
});
// Ponemos el puerto en el que queremos que este nuestro servido
// app.listen(3000, () =>{
//     // Aca le decimos que si conecta nos de un mensaje por la consola
//     console.log("(っ◔◡◔)っ","▌│█║▌║▌║Puerto 3000 abierto║▌║▌║█│▌".rainbow,"(ง︡'-'︠)ง");
// });