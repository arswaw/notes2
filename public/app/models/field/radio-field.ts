import {Field} from './field';

export class RadioField extends Field<string>{
    controlType = 'radio';
    options:{key:string, value:string}[] = [];
    
    constructor(options){
        super(options);
        this.options = options['options'] || []
        this.value = options.value || '';
    }
}