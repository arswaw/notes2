export class Printer{
    public description: string;
    public name: string;
    public state: string;
    public compName: string;
    public id: number;
    public compID: number;
    public hide: boolean;
    constructor(options:{
        description: string,
        name: string,
        state: string,
        computer: {
            id: number,
            name: string
        },
        id: number
    }){
        this.description = options.description;
        this.name = options.name;
        this.state = options.state;
        this.id = options.id;
        this.compID = options.computer.id;
        this.compName = options.computer.name;
        this.hide = this.checkSkip(options.name);
    }

    private checkSkip(name): boolean{
        let re = false;
        let skips = [
            'Fax',
            'Send To',
            'Microsoft',
            'Foxit',
            '(redirected',
            'PDF'
        ]
        for(let i in skips){
            let skip = skips[i];
            let index = name.indexOf(skip);
            if(index > -1){
                re = true;
            }
        }
        return re;
    }
}