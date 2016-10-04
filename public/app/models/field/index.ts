export class Index{
    public id: string;
    public indexId: string;
    public source: string;
    public dest: string;
    public map:{key:string, value:string}[] = [];
    constructor(options:{
        _id?: string,
        indexId: string,
        source: string,
        dest: string,
        map: {key:string, value:string}[]
    }){
        this.id = options._id || '';
        this.indexId = options.indexId;
        this.source = options.source;
        this.dest = options.dest;
        this.map = options.map;
    }
}