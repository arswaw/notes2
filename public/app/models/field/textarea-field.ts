import {Field} from './field';

export class TextareaField extends Field<string>{
    controlType = 'textarea';
    
    constructor(options){
        super(options);
        this.value = options.value || '';
    }
}