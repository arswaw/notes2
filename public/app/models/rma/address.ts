export class Address{
    addr1: string;
    addr2: string;
    city: string;
    state: string;
    zip: string;
    constructor(options: {
        shipaddress1?: string,
        shipaddress2?: string,
        shipcity?: string,
        shipstate?: string,
        shipzip?: string,
        billaddress1?: string,
        billaddress2?: string,
        billcity?: string,
        billstate?: string,
        billzip?: string
    }, bill: boolean){
        if(bill){
            this.addr1 = options.billaddress1 || options.shipaddress1;
            this.addr2 = options.billaddress2 || options.shipaddress2 || '';
            this.city = options.billcity || options.shipcity;
            this.state = options.billstate || options.shipstate;
            this.zip = options.billzip || options.shipzip;
        }else{
            this.addr1 = options.shipaddress1;
            this.addr2 = options.shipaddress2 || '';
            this.city = options.shipcity;
            this.state = options.shipstate;
            this.zip = options.shipzip;
        }
    }
}