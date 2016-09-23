export class Page {
    public label: string;
    public pageId: string;
    public icon: string;
    constructor(options:{
        label: string,
        pageId: string,
        icon: string
    }){
        this.label = options.label;
        this.pageId = options.pageId;
        this.icon = options.icon;
    }
}