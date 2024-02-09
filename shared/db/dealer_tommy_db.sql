-- Create database
CREATE DATABASE IF NOT EXISTS dealer_tommy_db;

-- Uso de la BD
USE dealer_tommy_db;

-- **** Desarrollo de tablas  *****
-- Tabla de Estados de Usuario
CREATE TABLE status_users (
    id_status_user INT AUTO_INCREMENT PRIMARY KEY,
    status_user_uuid VARCHAR(255) NOT NULL,
    status_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creacion de estados de usuarios
INSERT INTO status_users (status_user_uuid, status_name) VALUES ('04a9963d-1cb6-4c36-b167-741e49e37cc3', 'Activo');
INSERT INTO status_users (status_user_uuid, status_name) VALUES ('75c36e68-7f80-4f32-8397-2add0964f812', 'Inactivo');

-- Tabla de Usuarios
CREATE TABLE users (
    id_users INT AUTO_INCREMENT PRIMARY KEY,
    users_uuid VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    surename VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    user_address VARCHAR(150),
    id_status_user INT NOT NULL DEFAULT 1,
    FOREIGN KEY (id_status_user) REFERENCES status_users(id_status_user),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
