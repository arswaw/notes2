import {Address} from './address';
import {Item} from './item';

export class Rma {
    public received: boolean;
    public actionId: string;
    public actionName: string;
    public firstName: string;
    public lastName: string;
    public name: string;
    public email: string;
    public phone: string;
    public orderNumber: string;
    public ship_via: string;
    public intID: string;
    public status: string;
    public market: number;
    public storefront: number;
    public shippingAmount: number;
    public shipping: Address;
    public billing: Address;
    public items: Item[];
    constructor(arr: Array<any>){
        this.received = false;
        if(arr.length > 0){
            this.received = this.getReceived(arr);
            this.setAction(arr);
            this.items = [];
            this.email = arr[0].columns.email;
            this.phone = arr[0].columns.shipphone || '';
            this.market = this.mak(arr);
            this.storefront = this.sf(arr);
            this.shipping = new Address(arr[0].columns, false);
            this.billing = new Address(arr[0].columns, true);
            this.nameParse(arr[0]);
            this.parseItems(arr);
            this.orderNumber = arr[0].columns.transactionnumber;
            this.ship_via = 'ground';
            this.intID = arr[0].id;
            this.status = this.stat(arr);
        }
    }

    private stat(arr){
        var hold = '';
        for(let i in arr){ 
            let row = arr[i];
            if(row.columns['statusref'] != undefined){
                hold = row.columns['statusref'].name;
            }
        }
        return hold;
    }

    private mak(arr){
        var hold = 0;
        for(let i in arr){ 
            let row = arr[i];
            if(row.columns['custbody_marketplace'] != undefined){
                hold = parseInt(row.columns['custbody_marketplace'].internalid, 10);
            }
        }
        return hold;
    }

    private sf(arr): number{
        var hold = 0;
        for(let i in arr){ 
            let row = arr[i];
            if(row.columns['custbody_storefront_list'] != undefined){
                hold = parseInt(row.columns['custbody_storefront_list'].internalid, 10);
            }
        }
        return hold;
    }

    private parseItems(arr){
        let obj = {};

        for(let i in arr){
            let row = arr[i];
            let sku = row.columns['custcol_legacy_3b_sku'];
            let color = row.columns['custitem_var_color'];
            if(sku != undefined){
                let item = new Item({
                    sku: sku,
                    name: this.itemName(row.columns.item.name),
                    qty: row.columns.quantity * -1,
                    price: row.columns.rate,
                    description: row.columns.salesdescription,
                    color: color
                });

                //this.items.push(item);
                obj[sku] = item;
            }
        }
        let keys = Object.keys(obj);
        for(let i in keys){
            let key = keys[i];
            this.items.push(obj[key]);
        }
    }

    private itemName(item){
        var index = item.indexOf(':');
        if(index > -1){
            item = item.split(':')[1].replace(/ /g, '');
        }
        return item;
    }

    private nameParse(line){
        let cut = line.columns.entity.name.split(' ');
        cut.shift();
        //this.firstName = cut[0];
        this.lastName = cut.pop();
        this.firstName = cut.join(' ');
        this.name = this.firstName+' '+this.lastName;
    }

    private getReceived(arr){
        var hold = false;
        arr.forEach(function(line){
            var recieved = line.columns['custbody_received_by_warehouse'];
            if(recieved){
                hold = true;
            }
        });
        return hold;
    }

    private setAction(arr){
        for(var i in arr){
            var line = arr[i];
            this.actionId = line.columns['custbody_zake_action'].internalid;
            this.actionName = line.columns['custbody_zake_action'].name;
        }
    }

    private getAction(arr){
        var hold = '';
        arr.forEach(function(line){
            hold = line.columns['custbody_zake_action'].internalid;
        });
        return hold;
    }

    private getDescription(arr){
        var hold = '';
        arr.forEach(function(line){
            var sku = line.columns['salesdescription'];
            if(sku != undefined){
                hold = sku;
            }
        });
        return hold;
    }
}