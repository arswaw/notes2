export class Repair {
    public payed: boolean;
    public rmaId: string;
    public user: string;
    public sn: string;
    public notes: string;
    public action: string; // condition type    custcol_zake_prodt_condtion customlist_zake_item_condition
    public cond: string; // item condition   custcol_zake_item_condition
    constructor(options:{
        payed?: boolean,
        rmaId: string,
        user: string,
        sn: string,
        notes: string,
        action: string,
        cond: string
    }){
        this.payed = options.payed || false;
        this.rmaId = options.rmaId;
        this.user = options.user;
        this.sn = options.sn;
        this.notes = options.notes;
        this.action = options.action;
        this.cond = options.cond;
    }

    /*
receipt.setLineItemValue('item','custcol_zake_prodt_condtion',1, 2);
receipt.setLineItemValue('item','custcol_zake_item_condition',1, 3);
free repair
condition type 3
condition 9

paid
custcol_zake_item_condition = {number} 10
custcol_zake_prodt_condtion = {number} 4
    */

    /*private actions = {
        1: {
            name: 'Refund w/o Return',
            conditons: [2,3],
            type: 1
        },
        2: {
            name: 'Refund',
            conditons: [2,3],
            type: 1
        },
        3: {
            name: 'Exchange',
            conditons: [2,3],
            type: 2
        },
        5: {
            name: 'Repair'
            conditions: 10,
            type: 4
        },
        6: {
            name: 'Refund-Intercepted/Refused'
            type: 5,

        },
        8: {
            name: 'Free Repair'
            conditions: 9,
            type: 3
        },
        9: {
            name: 'Send Voucher'
            type: 2,
            conditions: [2,3]
        },
        10: {
            name: 'Battery Swap'
            conditions: 9,
            type: 3
        },
        11: {
            name: 'Advanced Replace',
            conditons: [2,3],
            type: 2
        }
    }

    private types = {
        Refund: 1,
        Exchange: 2,
        'Free Repair': 3,
        'Pay To Repair': 4,
        'Reject Return': 5
    }

    private conditions = {
        New: 2,
        Refurbished: 3,
        'Brown Box': 9,
        'Manufacturer Refurb': 1,
        OEM: 7,
        'Off Lease': 5,
        'Open Box': 6,
        'Pull': 4,
        'Retail Box': 8,
        'Scratch and Dent': 11,
        'White Box': 10
    }*/
}