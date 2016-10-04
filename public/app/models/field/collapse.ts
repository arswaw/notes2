import {CollapseChild} from './collapse-child';

export class Collapse{
    public id: string;
    public fieldId: string;
    public controlType: string = 'collapse';
    public children: Array<any>;
    constructor(options:{
        _id?: string,
        label?: string,
        fieldId: string,
        children?: Array<any>
    }){
        this.id = options._id || '';
        this.fieldId = options.fieldId;
        if(options.children == undefined){
            this.children = [];
        }else{
            this.children = this.tochildren(options.children);
        }
    }

    private tochildren(arr): Array<any>{
        let hold = [];
        for(let i in arr){
            let row = arr[i];
            hold.push(new CollapseChild(row));
        }
        return hold;
    }
}