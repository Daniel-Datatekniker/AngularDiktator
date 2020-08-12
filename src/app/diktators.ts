import { dashCaseToCamelCase } from '@angular/compiler/src/util';

export class Diktators {
    name :string;
    lastname : string;
    description : string;
    birth : Date;
    constructor(n : string, l : string, d : string, b : Date)
    {
        this.name = n;
        this.lastname =l;
        this.description = d;
        this.birth = b;
    }

}
