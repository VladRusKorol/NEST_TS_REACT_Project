export interface ICar {
    id: number;
    name: string;
    vin: string;
}

export interface IListAuto {
    CarId: number | string;
    numberPlate: string;
    active: boolean;
}

