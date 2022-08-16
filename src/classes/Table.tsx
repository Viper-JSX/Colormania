import { ThemeConsumer } from "styled-components";
import { RGBValue } from "../typescript/types";
import ColorClass from "./Color";

class Table{
    name: string;
    date: Date;
    colors: ColorClass[] = []

    constructor(name: string){
        this.name = name;
        this.date = new Date();
    }

    edit( newTableName: string ):void{
        this.name = newTableName;
    }

    addColor(color: ColorClass):void{
        this.colors.push(color);
    }

    editColor(oldColorName: string, color: ColorClass):void{
        for(let i = 0; i < this.colors.length; i++){
            if(this.colors[i].name === oldColorName){
                this.colors[i].edit(color);
            }
        }
    }

    deleteColor(colorName: string):void{
        for(let i = 0; i < this.colors.length; i++){
            if(colorName === this.colors[i].name){
                this.colors.splice(i, 1);
                return;
            }
        }
    }

}

export default Table;