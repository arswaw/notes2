import {Field} from './field';

export class PairField extends Field<string>{
    controlType = 'pair';
    
    constructor(options){
        super(options);
        let val = options.value;
        if(val == undefined){
            this.value = '';
        }else{
            if(options.key == '' || options.key == undefined){
                let cut = options.value.split('|');
                this.key = cut[0];
                this.value = cut[1];
            }else{
                this.value = options.value;
            }
        }
    }
}