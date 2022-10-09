-- Creando la base de datos
CREATE DATABASE crudMysqlNodeJSExpress;

-- Utilizando la base de datos
USE crudMysqlNodeJSExpress;

-- Crear tablas

-- CLIENTES
CREATE TABLE customer (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    pais VARCHAR(255) NOT NULL,
    telefono VARCHAR(10) NOT NULL
);

-- PRODUCTOS
CREATE TABLE product (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio VARCHAR(255) NOT NULL,
    cantidad VARCHAR(255) NOT NULL
);

-- VENTAS
CREATE TABLE sales (
    nventa INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_customer VARCHAR(255) NOT NULL,
    nombre_product VARCHAR(255) NOT NULL,
    cantidad_product VARCHAR(255) NOT NULL
);


-- Mostrar tablas
SHOW TABLES;

-- Describir la tablas
DESCRIBE customer