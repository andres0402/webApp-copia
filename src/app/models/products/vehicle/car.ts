import { Vehicle } from "./vehicle";

export class Car implements Vehicle {
    constructor(public id: Number, public type: string, public brand: string, public color: string,
        public plate: string, public price: Number, public model: string, public year: Number,
        public kilometers: Number, public description: string, public photoUrl: string, public doors: Number, public exemplar: string) {
    }
    
    
}
