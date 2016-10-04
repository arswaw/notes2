import {HCheckField} from './hcheck-field';
import {PairField} from './pair-field';
import {SelectField} from './select-field';
import {StaticField} from './static-field';
import {TextField} from './text-field';
import {TextareaField} from './textarea-field';
import {VCheckField} from './vcheck-field';
import {ObjectField} from './object-field';
import {RadioField} from './radio-field';
import {Collapse} from './collapse';

export class Form{
    public id: string;
    public label: string;
    public fieldId: string;
    public controlType: string = 'form';
    public children: Array<any>;
    constructor(options:{
        _id?: string,
        label: string,
        fieldId: string,
        children?: Array<any>
    }){
        this.id = options._id || '';
        this.label = options.label;
        this.fieldId = options.fieldId;
        if(options.children == undefined){
            this.children = [];
        }else{
            this.children = this.tochildren(options.children);
        }
    }

    private tochildren(arr): Array<any>{
        let hold = [];
        for(let i in arr){
            let row = arr[i];
            if(row.controlType == 'object'){
                let c = this.tochildren(row.children);
                row.children = c;
                hold.push(new ObjectField(row));
            }else if(row.controlType == 'hcheck'){
                hold.push(new HCheckField(row));
            }else if(row.controlType == 'pair'){
                hold.push(new PairField(row));
            }else if(row.controlType == 'select'){
                hold.push(new SelectField(row));
            }else if(row.controlType == 'static'){
                hold.push(new StaticField(row));
            }else if(row.controlType == 'text'){
                hold.push(new TextField(row));
            }else if(row.controlType == 'textarea'){
                hold.push(new TextareaField(row));
            }else if(row.controlType == 'vcheck'){
                hold.push(new VCheckField(row));
            }else if(row.controlType == 'radio'){
                hold.push(new RadioField(row));
            }else if(row.controlType == 'form'){
                hold.push(new Form(row));
            }else if(row.controlType == 'collapse'){
                hold.push(new Collapse(row));
            }
        }
        return hold;
    }
}