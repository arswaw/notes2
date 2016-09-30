export class Field<T>{
    public id: string;
    public fieldId: string;
    public label: string;
    public controlType: string;
    public key: string;
    public value: T;
    public required: boolean;
    constructor(options:{
        label:string,
        controlType:string,
        _id?:string,
        fieldId?:string,
        key?:string,
        value?: T,
        required?: boolean,
    }){
        this.key = options.key || '';
        this.label = options.label;
        this.id = options._id || '';
        this.fieldId = options.fieldId || '';
        this.controlType = options.controlType
        this.required = options.required || false;
    }
}