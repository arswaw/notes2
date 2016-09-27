export class RmaSum{
    public tranid: string;
    public name: string;
    public sku: string;
    public description: string;
    public status: string;
    public trandate: string;
    public internal: string;
    public hide: boolean;
    constructor(options){
        let cols = options.columns;
        this.tranid = cols.transactionnumber || cols.tranid;
        this.name = this.customer(cols.entity.name);
        this.sku = cols['custcol_legacy_3b_sku'] || cols['custitem_legacy_3b_sku'];
        this.description = this.truncate(cols.salesdescription);
        this.status = cols.statusref.name;
        this.trandate = cols.trandate;
        this.internal = this.truncate(cols['custbody_internal_note']);
        this.hide = false;
    }
    
    customer(n: string): string{
        let c = n.split(' ');
        c.shift();
        return c.join(' ');
    }
    
    truncate(n: string): string{
        let limit = 50;
        let trail = '...';

        if(n!= undefined){
            return n.length > limit ? n.substring(0, limit) + trail : n;
        }else{
            return '';
        }
    }
}