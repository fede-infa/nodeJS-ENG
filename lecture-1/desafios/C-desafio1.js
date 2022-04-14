class User{
    constructor(firstName, lastName, books, pets){
        this.firstName = firstName,
        this.lastName = lastName,
        this.books = books,
        this.pets = pets
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    addPet(newPet){
        this.pets.push(newPet);
    }

    getPets(){
        return this.pets.length;
    }

    addBook(newTitle, newAuthor){
        let newBook = {title: newTitle, author: newAuthor};
        this.books.push(newBook);
    }

    getBooks(){
        let bookTitles = this.books.map( book =>{
            return book.title;
        })
        return bookTitles;
    }
}


// new data
let testPets = ['Viggo', 'Luna'];
let testBooks = [{title: 'Season of Storms', author: 'Andrzej Sapkqski'}, {title: 'Baptism of fire', author: 'Andrzej Sapkqski'}]

let fede = new User('Federico', 'Infantino', testBooks, testPets);

// getters & setters

console.log(`The user name is: ${fede.getFullName()}`);
console.log(`Amount of pets: ${fede.getPets()}`);

fede.addPet('Jazmin');
console.log(`Amount of pets after adding one: ${fede.getPets()}`);

fede.addBook('Time of contempt', 'Andrzej Sapkqski');
console.table(fede.getBooks());