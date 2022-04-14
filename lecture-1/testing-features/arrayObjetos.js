 function Usuario(nombre, apellido, libros, mascotas){
                this.nombre = nombre;
                this.apellido = apellido;
                this.libros = libros;
                this.mascotas = mascotas; 
            };
            
            Usuario.prototype.getFullName = function(){
                return `${this.nombre} ${this.apellido}`;
            };

            Usuario.prototype.addMascota = function (nuevaMascota){
                this.mascotas.push(nuevaMascota);
            };

            Usuario.prototype.getMascotas = function(){
                return this.mascotas.length;
            }

            Usuario.prototype.addBook = function(nombreLibro, autor){
                // let newBook = {nombre: `${nombreLibro}` ,autor: `${autor}`}
                // Previamente se hizo con stringTemplate cuando la forma mas eficiente es la siguiente:
                let newBook = {nombre: nombreLibro ,autor: autor};
                this.libros.push(newBook)
            }

            Usuario.prototype.getBooks = function(){
                let titulosLibros = this.libros.map( (libro) =>{
                    return libro.nombre;
                });

                return titulosLibros;
            }

            // Creacion instancia usuario
            let libros = [{nombre: 'The fellowship of the ring', autor: 'J.R.R. Tolkien'}];
            let mascotas = ['perro'];
            let usuario = new Usuario('Federico', 'Infantino', libros, mascotas);

            // Testeo getters & setters
            console.log(`El nombre del usuario es: ${usuario.getFullName()} y la cantidad de mascotas que tiene es de: ${usuario.getMascotas()}`)
            
            usuario.addBook('Fahrenheit 451', 'Ray Bradbury');
            console.log(`Libros`)
            console.table(usuario.getBooks());
            
            usuario.addMascota('conejo');
            console.log(`La cantidad de mascotas ahora es de: ${usuario.getMascotas()}`);
