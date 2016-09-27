export class Note {
    public rmaId: string;
    public sn: string;
    public text: string;
    public user: string;
    constructor(options:{
        rmaId: string,
        sn: string,
        text: string,
        user: string
    }){
        this.rmaId = options.rmaId;
        this.sn = options.sn;
        this.text = options.text;
        this.user = options.user;
    }
}