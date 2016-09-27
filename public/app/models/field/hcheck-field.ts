import {Field} from './field';

export class HCheckField extends Field<boolean>{
    controlType = 'hcheck';
    
    constructor(options){
        super(options);
        this.value = options.value || false;
    }
}