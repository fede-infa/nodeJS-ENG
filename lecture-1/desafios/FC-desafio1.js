
function User(firstName, lastName, books, pets){
    this.firstName = firstName;
    this.lastName = lastName;
    this.bookList = books;
    this.pets = pets;
};

User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

User.prototype.addPet = function(newPet) {
    this.pets.push(newPet);
}

User.prototype.getPets = function() {
    return this.pets.length;
}

User.prototype.addBook = function(title, author) {
    let newBook = {title: title, author: author};
    this.bookList.push(newBook);
}

User.prototype.getBooks = function() {
    let booksTitles = this.bookList.map( (libro) =>{
        return libro.title;
    });

    return booksTitles;
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