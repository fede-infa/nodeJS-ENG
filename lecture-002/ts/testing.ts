
abstract class Person {
    protected name: string;
    protected constructor(theName: string) {
        this.name = theName;
    }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }

    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}`
    }
}

let fede = new Employee('Fede', 'R&D');
let seba = new Employee('Seba', 'Q&A');

console.log(fede);
console.log(seba);