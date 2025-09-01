CREATE DATABASE biblioteca;
use biblioteca;

create table libros(
id_libro int primary key auto_increment,
titulo varchar(50),
año_publicacion date,
categoria varchar(50),
ISBN bigint
);

create table ejemplares(
id_ejemplar int primary key auto_increment,
id_libro int,
estado enum('Disponible','No disponible'),
foreign key (id_libro) references libros(id_libro)
);

create table usuarios(
id_usuario int primary key auto_increment,
nombre varchar(30),
apellido varchar(30),
telefono bigint,
tipo enum('Profesor','Estudiante')
);

create table prestamo(
id_prestamo int primary key auto_increment,
id_usuario int,
fecha_prestamo date,
fecha_devolucion_prevista date,
fecha_devolucion_real date,
foreign key (id_usuario) references usuarios(id_usuario)

);

create table detalle_prestamo(
id_detalle int primary key auto_increment,
id_ejemplar int,
id_prestamo int,
foreign key (id_ejemplar) references ejemplares(id_ejemplar),
foreign key (id_prestamo) references prestamo(id_prestamo)
);


-- 1. INSERTS EN TABLA LIBROS 

INSERT INTO libros (titulo, año_publicacion, categoria, ISBN) VALUES
('Cien Años de Soledad', '1967-05-30', 'Novela', 9780307474728),
('1984', '1949-06-08', 'Distopía', 9780451524935),
('Don Quijote de la Mancha', '1605-01-16', 'Clásico', 9788491050293),
('La Odisea', '0800-01-01', 'Épico', 9780140268867),
('El Principito', '1943-04-06', 'Infantil', 9780156013987),
('Fahrenheit 451', '1953-10-19', 'Distopía', 9781451673319),
('Crimen y Castigo', '1866-01-01', 'Novela', 9780140449136),
('La Iliada', '0750-01-01', 'Épico', 9780140275360);


-- 2. INSERTS EN TABLA EJEMPLARES 

INSERT INTO ejemplares (id_libro, estado) VALUES
(1, 'Disponible'),
(1, 'No disponible'),
(2, 'Disponible'),
(3, 'Disponible'),
(4, 'No disponible'),
(5, 'Disponible'),
(6, 'Disponible'),
(7, 'No disponible');


-- 3. INSERTS EN TABLA USUARIOS 

INSERT INTO usuarios (nombre, apellido, telefono, tipo) VALUES
('Ana', 'Gómez', 3001234567, 'Estudiante'),
('Luis', 'Martínez', 3109876543, 'Profesor'),
('Sofía', 'Ramírez', 3154567890, 'Estudiante'),
('Carlos', 'Pérez', 3112223344, 'Profesor'),
('María', 'López', 3005556677, 'Estudiante'),
('Jorge', 'Fernández', 3128889999, 'Profesor'),
('Lucía', 'Torres', 3201112233, 'Estudiante'),
('Pedro', 'Santos', 3134445566, 'Profesor');


-- 4. INSERTS EN TABLA PRESTAMO 

INSERT INTO prestamo (id_usuario, fecha_prestamo, fecha_devolucion_prevista, fecha_devolucion_real) VALUES
(1, '2025-08-01', '2025-08-15', NULL),
(2, '2025-07-20', '2025-08-05', '2025-08-03'),
(3, '2025-08-10', '2025-08-25', NULL),
(4, '2025-08-05', '2025-08-18', NULL),
(5, '2025-07-15', '2025-07-30', '2025-07-28'),
(6, '2025-08-12', '2025-08-26', NULL),
(7, '2025-08-14', '2025-08-29', NULL),
(8, '2025-08-02', '2025-08-16', '2025-08-14');


-- 5. INSERTS EN TABLA DETALLE_PRESTAMO 

INSERT INTO detalle_prestamo (id_ejemplar, id_prestamo) VALUES
(2, 1),
(3, 2),
(4, 3),
(5, 4),
(6, 5),
(7, 6),
(8, 7),
(1, 8);



-- Consulta para buscar cuales son los prestamos activos sin fecha de devolucion real 
SELECT p.id_prestamo, u.nombre, u.apellido, l.titulo, p.fecha_prestamo, p.fecha_devolucion_prevista
FROM prestamo p
JOIN usuarios u ON p.id_usuario = u.id_usuario
JOIN detalle_prestamo dp ON p.id_prestamo = dp.id_prestamo
JOIN ejemplares e ON dp.id_ejemplar = e.id_ejemplar
JOIN libros l ON e.id_libro = l.id_libro
WHERE p.fecha_devolucion_real IS NULL;

-- Consultar todos los libros disponibles por categoria
SELECT l.categoria, l.titulo, e.id_ejemplar
FROM libros l
JOIN ejemplares e ON l.id_libro = e.id_libro
WHERE e.estado = 'Disponible'
ORDER BY l.categoria, l.titulo;

-- Consultar cantidad de prestamos por usuario
SELECT u.id_usuario, u.nombre, u.apellido, COUNT(p.id_prestamo) AS cantidad_prestamos
FROM usuarios u
LEFT JOIN prestamo p ON u.id_usuario = p.id_usuario
GROUP BY u.id_usuario, u.nombre, u.apellido
ORDER BY cantidad_prestamos DESC;

-- Libros que estan prestados actualmente

SELECT DISTINCT l.titulo, e.id_ejemplar, u.nombre, u.apellido
FROM libros l
JOIN ejemplares e ON l.id_libro = e.id_libro
JOIN detalle_prestamo dp ON e.id_ejemplar = dp.id_ejemplar
JOIN prestamo p ON dp.id_prestamo = p.id_prestamo
JOIN usuarios u ON p.id_usuario = u.id_usuario
WHERE p.fecha_devolucion_real IS NULL;



