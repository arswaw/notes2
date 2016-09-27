import {Field} from './field';

export class VCheckField extends Field<boolean>{
    controlType = 'vcheck';
    
    constructor(options){
        super(options);
        this.value = options.value || false;
    }
}