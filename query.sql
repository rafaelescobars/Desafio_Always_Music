----Cambiarse a base postgres
\c postgres;

-- Create a new database called 'library'
CREATE DATABASE estudiantes;

--Conexión base library
\c estudiantes;

--Encoding UTF8
SET client_encoding TO 'UTF8';

--Crear Tablas
CREATE TABLE estudiantes(
  nombre VARCHAR(30) NOT NULL,
  rut VARCHAR(12) NOT NULL,
  curso VARCHAR(30) NOT NULL,
  nivel SMALLINT NOT NULL,
  PRIMARY KEY(rut)
);