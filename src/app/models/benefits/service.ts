export class Service {
  constructor(
    public id: Number,
    public id_sucursal: Number,
    public name: string,
    public duration: Number,
    public price: Number,
    public image: string,
    public servicioType: string
  ) {}

  static describe(): Array<string> {
    let service: string[] = [
      'ID',
      'Sucursal',
      'Nombre',
      'Duracion (mins)',
      'Precio',
      'Tipo de servico',
      'Acciones',
    ];
    
    return service;
  }
}
