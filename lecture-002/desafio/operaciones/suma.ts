
export class Suma{
    private number1: number;
    private number2: number;

    constructor(num1: number, num2: number){
        this.number1 = num1;
        this.number2 = num2;
    }

    resultado(): number{
        return this.number1 + this.number2;
    }
}