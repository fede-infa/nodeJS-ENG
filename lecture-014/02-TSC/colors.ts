import { isExportSpecifier, ModuleResolutionKind } from "typescript";

class Colors{
    protected color:string;

    constructor(){
        this.color = ''
    }

    private randomRGB(): number{
        return Math.floor(Math.random() * (255 - 0 + 1 ) + 0)
    }

    public randomColor(): string{
        return `RGB ${this.randomRGB()}, ${this.randomRGB()}, ${this.randomRGB()}`
    }
}
