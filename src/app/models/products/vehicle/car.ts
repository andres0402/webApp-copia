import { Vehicle } from './vehicle';

export class Car implements Vehicle {

  constructor(
    public id: Number,
    public exemplar: string,
    public type: string,
    public brand: string,
    public color: string,
    public plate: string,
    public price: Number,
    public model: string,
    public kilometers: Number,
    public description: string,
    public photoUrl: string,
    public doors: Number

  ) { }

  static describe(): Array<string> {
    let car: string[] = ["Id",
      "Tipo",
      "Marca",
      "Ejemplar",
      "Modelo",
      "Color",
      "Placa",
      "Puertas",
      "Kilometraje",
      "Precio",
      "Descripción",
      "Acciones"
    ]

    return car

  }
}
