import {Field} from './field';

export class ObjectField extends Field<any>{
    public controlType = 'object';
    public children: Array<any>;
    public editable: boolean;
    public all: boolean;
    constructor(options){
        super(options);
        this.children = options.children === undefined ? [] : options.children;
        this.editable = options.editable || false;
        this.all = options.all || false;
    }
}