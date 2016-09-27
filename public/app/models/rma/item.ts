export class Item{
    _id: string;
    sku: string;
    name: string;
    color: string;
    qty: number;
    price: number;
    description: string;
    hide: boolean;
    selected: boolean;
    constructor(options: {
        sku?: string,
        name?: string,
        color?: string,
        qty?: number,
        price?: number,
        description: string
    }){
        this.sku = options.sku || '';
        this.name = options.name || '';
        this.color = options.color || '';
        this.qty = options.qty || 1;
        this.price = options.price || 0.00;
        this.description = options.description;
        this.hide = false;
        this.selected = false;
    }
}