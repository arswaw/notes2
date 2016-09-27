import {Field} from './field';

export class StaticField extends Field<string>{
    controlType = 'static';
    
    constructor(options){
        super(options);
        this.value = options.value || '';
    }
}