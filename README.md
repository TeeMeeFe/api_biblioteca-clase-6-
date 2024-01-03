# api_biblioteca-clase-6-

Hecho en JavaScript, con Node.js usando express, MongoDB como una base de datos NoSQL y el OPM mongoose para el manejo de la misma. Con autenticación en API tipo token OAuth 2.0. 
Clase N°6. Profesor Rubén Romero. UVE-UTN.

# Uso y ejecución

Desde VSCode o un terminal, en el directorio de instalación, tipea el comando ´node app.js´ para ejecutar el programa.

# Uso API

La API posee las siguientes rutas y funcionalidades:

a. GET /libros - Scope: read:libros  Devuelve la lista completa de libros.

b. GET /libros/:id: - Scope: read:libros  Devuelve los detalles de un libro específico según su ID.

c. POST /libros - Scope: write:libros  Crea un nuevo libro con la información proporcionada.

d. PUT /libros/:id: - Scope: write:libros  Actualiza la información de un libro específico según su ID.

e. DELETE /libros/:id: - Scope: write:libros Elimina un libro específico según su ID.
