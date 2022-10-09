// En este archivo vamos a escribir todas las urls que nuestra aplicacion del servidor va a poder manejar

// Aca vamos a importar el modulo express
const express = require('express');
// Aca vamos a importar un metodo de express llamado Router y este es el que no ayuda con las tutas para poder reutilizarlas
const router = express.Router();
// Aca importamos el archivo que tienen nuestros controtroladores para utilizarlos
const customerController = require("../controllers/Controller")




// RUTAS
// Aca vamos va colocar todas las rutas de nuestro servidor
// router.get('/', (req, res) =>{
//     res.send("Hola mundo")
// });

// Aca utilizamos el objeto que importamos
router.get('/', customerController.list);

router.get('/product', customerController.listProduct);

// router.get('/product', customerController.listProduct);

// Aca le decimos que escuche la ruta add de neustro formulario
// y que cuando alguien acceda a esa ubicacion ejecute la funcion
router.post('/add', customerController.save);

router.post('/addproduct', customerController.saveProduct);

// router.post('/addproduct', customerController.saveProduct);

// Aca le decimos que escuche la ruta delete de neustro formulario
// y que cuando alguien acceda a esa ubicacion ejecute la funcion
router.get('/delete/:id', customerController.delete);

router.get('/deleteproduct/:id', customerController.deleteProduct);

// router.get('/deleteproduct/:id', customerController.deleteProduct);

// Aca le decimos que escuche la ruta update de neustro formulario
// y que cuando alguien acceda a esa ubicacion ejecute la funcion
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

router.get('/updateproduct/:id', customerController.editProduct);
router.post('/updateproduct/:id', customerController.updateProduct);

// router.get('/updateproduct/:id', customerController.editProduct);
// router.post('/updateproduct/:id', customerController.updateProduct);






// Exportamos el modulo Router
module.exports = router;
