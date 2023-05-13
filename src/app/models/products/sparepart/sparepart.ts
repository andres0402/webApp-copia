export class Sparepart {
    constructor(
        public id: Number,
        public name: string,
        public brand: string,
        public description: string,
        public serial: Number,
        public price: Number,
        public stock: Number,
        public photoUrl: string,
        public state: string) { }

    static describe(): Array<string> {
        let sparepart: string[] = [
            "Id",
            "Nombre",
            "Marco",
            "Descripción",
            "Serial",
            "Precio",
            "Cantidad en inventario",
            "Estado",
            "Acciones"
        ];
        return sparepart;
    }
}
