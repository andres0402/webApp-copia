export class Taller {
  constructor(
    public id: Number,
    public name: string,
    public ciudad: string,
    public tipo: string
  ) {}

  static describe(): Array<string> {
    let service: string[] = [
      'ID',
      'Nombre',
      'Ciudad',
      'Tipo',
      'Acciones',
    ];

    return service;
  }
}
