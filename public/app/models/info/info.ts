export class Info {
    public cust: string;
    public sku: string;
    public item: string;
    public action: string;
    public actionId: string;
    public notes: string;
    public status: string;
    constructor(arr?: Array<any>){
        let mlast = '';
        let nlast = '';
        let hold = [];
        let tlast = {};
        if(arr != undefined){
            for(let i in arr){
                let line = arr[i];
                let ent = line.columns.entity;
                let note = line.columns['custbody_internal_note'];
                let memo = line.columns['memo'];
                let tech = line.columns['custrecord_tech'];
                let tnote = line.columns['custrecord_tech_note_field'];
                let quote = line.columns['custrecord_quote'];
                let action = line.columns['custbody_zake_action'];
                let sku = line.columns['custcol_legacy_3b_sku'];
                let desc = line.columns.salesdescription;
                let stat = line.columns['statusref'];
                if(ent != undefined){
                    let c = ent.name.split(' ');
                    c.shift();
                    this.cust = c.join(' ');
                }
                if(action != undefined){
                    this.actionId = action.internalid;
                    this.action = action.name;
                }
                if(sku != undefined){
                    this.sku = sku;
                }
                if(desc != undefined){
                    this.item = desc;
                }
                if(note != undefined && note != ''){
                    if(note != nlast){
                        nlast = note;
                        hold.push(note);
                    }
                }
                if(memo != undefined && memo != ''){
                    if(memo != mlast){
                        mlast = memo;
                        hold.push(memo);
                    }
                }
                if(tnote != undefined && tnote != ''){
                    if(tlast[tnote] == undefined){
                        tlast[tnote] = true;
                        tnote += '\n\t-'+tech;
                        if(quote){
                            tnote += ' quote';
                        }
                        hold.push(tnote);
                    }
                }
                if(stat != undefined){
                    this.status = line.columns['statusref'].name;
                }
            }
            this.notes = hold.join('\n----------------\n');
        }
    }
}