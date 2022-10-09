// Este archivo es el que se encarga de responder cuando vienen a nustra ruta del servidor

// Creamos un objeto y es el que vamos a ir cambiando para cada uno de los metodos que vayamos a utilizar
const controller = {};


// LISTAR
// Aca utilizamos el metodo list el cual por ahora se va a encargar de envar el console.log
controller.list = (req, res) =>{
    // Aca pedimos una conexion a MySql para poder realizaar consultas
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customer', (err, customer) =>{
            // Aca le decimos que si hay lagun error lo mustre
            if (err) {
                res.json(err);
            }else{ // Aca le decimos que si no hay ningun error nos piente en el navegador una vista
                // console.log(customers); // Con esto podemos ver los customers desde la consola
                res.render('customers', {
                    data: customer // Aca le decimos que como datos le pasamos los cutustomers
                });
            }
        });
    });
};

controller.listProduct = (req, res) =>{
    // Aca pedimos una conexion a MySql para poder realizaar consultas
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM product', (err, product) =>{
            // Aca le decimos que si hay lagun error lo mustre
            if (err) {
                res.json(err);
            }else{ // Aca le decimos que si no hay ningun error nos piente en el navegador una vista
                // console.log(customers); // Con esto podemos ver los customers desde la consola
                res.render('products', {
                    data: product // Aca le decimos que como datos le pasamos los cutustomers
                });
            }
        });
    });
};


// INSERTAR
controller.save = (req, res) =>{
    // Aca asignamos a una constante los datos que nos llegan del formulario para evitar problemas de seguridad
    const data = req.body
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO customer set ?', [data], (err, customer) =>{
            // console.log(customers)
            res.redirect('/')
        });
    });
    // console.log(req.body);
    // res.send("Hola mundo");
};


controller.saveProduct = (req, res) =>{
    // Aca asignamos a una constante los datos que nos llegan del formulario para evitar problemas de seguridad
    const data = req.body
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO product set ?', [data], (err, product) =>{
            // console.log(req.body)
            res.redirect('/product')
        });
    });
    // console.log(req.body);
    // res.send("Hola mundo");
};



// ACTUALIZAR
// Aca hacemos que nos traiga los datos de la bd al formulario de la actualizacion de datos
controller.edit =  (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) =>{
            res.render("customer_edit", {
                data: customer[0]
            });
        });
    });
};
// Aca hacemos la actualizacion de los datos
controller.update =  (req, res) =>{
    const { id } = req.params;
    // Aca recibimos los datos del formulario osea los nuevos datos del comprador
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer,id], (err, rows)=>{
            res.redirect('/');
        });
    });
};


// Aca hacemos que nos traiga los datos de la bd al formulario de la actualizacion de datos
controller.editProduct =  (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM product WHERE id = ?', [id], (err, product) =>{
            res.render("products_edit", {
                data: product[0]
            });
        });
    });
};
// Aca hacemos la actualizacion de los datos
controller.updateProduct =  (req, res) =>{
    const { id } = req.params;
    // Aca recibimos los datos del formulario osea los nuevos datos del comprador
    const newProduct = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE product set ? WHERE id = ?', [newProduct,id], (err, rows)=>{
            console.log(req.body)
            res.redirect('/product');
        });
    });
};


// ELIMINAR
controller.delete = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) => {
        // Aca le decimos con una consulta de sql que limine un campo de la base de datos y que se guie por la contante
        // que noe sllega del formulario
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/')
        });
    });
    // console.log(req.params.id);
    // res.send("Eliminado")
};


controller.deleteProduct = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) => {
        // Aca le decimos con una consulta de sql que limine un campo de la base de datos y que se guie por la contante
        // que noe sllega del formulario
        conn.query('DELETE FROM product WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/product')
        });
    });
    // console.log(req.params.id);
    // res.send("Eliminado")
};






// Exportamos el controlador
module.exports = controller