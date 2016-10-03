import {Location} from './location';

export class ItemDetail {
    public createdDate: string;
    public sku: string;
    public desc: string;
    public intId: string;
    public itemId: string;
    public locations: Array<Location>;
    
    constructor(options:{
        createddate: string,
        custitem_legacy_3b_sku: string,
        displayname: string,
        id: string,
        itemid: string,
        locations: Array<any>
    }){
       this.createdDate = options.createddate;
       this.sku = options.custitem_legacy_3b_sku;
       this.desc = options.displayname;
       this.intId = options.id;
       this.itemId = options.itemid;
       this.locations = this.getLocs(options.locations);
    }

    private getLocs(arr): Array<Location>{
        let hold = [];
        for(let i in arr){
            let loc = new Location(arr[i]);
            if(loc.qty > 0){
                hold.push(loc);
            }
        }
        return hold;
    }
}