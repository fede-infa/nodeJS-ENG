class Color{
    constructor(){
        this.red = 0,
        this.green = 0,
        this.blue = 0
    }

    random(){
        this.red = Math.floor(Math.random() * (255 - 0 + 1 ) + 0);
        this.green = Math.floor(Math.random() * (255 - 0 + 1 ) + 0);
        this.blue = Math.floor(Math.random() * (255 - 0 + 1 ) + 0);
        return `RGB ${this.red},${this.green},${this.blue}`;
    }
}

module.exports = new Color;