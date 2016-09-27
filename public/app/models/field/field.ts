export class Field<T>{
    id: string;
    label: string;
    controlType: string;
    key: string;
    value: T;
    required: boolean;
    constructor(options:{
        label:string,
        controlType:string,
        _id?:string,
        key?:string,
        value?: T,
        required?: boolean,
    }){
        this.key = options.key || '';
        this.label = options.label;
        this.id = options._id || '';
        this.controlType = options.controlType
        this.required = options.required || false;
    }
}