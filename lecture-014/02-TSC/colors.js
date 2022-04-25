"use strict";
class Colors {
    constructor() {
        this.color = '';
    }
    randomRGB() {
        return Math.floor(Math.random() * (255 - 0 + 1) + 0);
    }
    randomColor() {
        return `RGB ${this.randomRGB()}, ${this.randomRGB()}, ${this.randomRGB()}`;
    }
}
