import {Field} from './field';

export class SelectField extends Field<string>{
    public controlType = 'select';
    public options:{key:string, value:string}[] = [];
    
    constructor(options){
        super(options);
        this.options = options['options'] || []
        this.value = options.value || '';
    }
}