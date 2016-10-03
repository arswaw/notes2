export class Location{
    public name: string;
    public qty: number;
    constructor(options:{
        location_display: string,
        quantityavailable: number
    }){
        this.name = options.location_display;
        this.qty = options.quantityavailable;
    }
}