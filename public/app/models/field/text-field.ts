import {Field} from './field';

export class TextField extends Field<string>{
    controlType = 'text';
    
    constructor(options){
        super(options);
        this.value = options.value || '';
    }
}