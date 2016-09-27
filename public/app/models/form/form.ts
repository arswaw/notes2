import {HCheckField} from '../field/hcheck-field';
import {PairField} from '../field/pair-field';
import {SelectField} from '../field/select-field';
import {StaticField} from '../field/static-field';
import {TextField} from '../field/text-field';
import {TextareaField} from '../field/textarea-field';
import {VCheckField} from '../field/vcheck-field';
import {ObjectField} from '../field/object-field';

export class Form{
    public id: string;
    public label: string;
    public formId: string;
    public controlType: string = 'form';
    public page: string;
    public fields: Array<any>;
    constructor(options:{
        _id: string,
        label: string,
        formId: string,
        page: string,
        fields?: Array<any>
    }){
        this.id = options._id;
        this.label = options.label;
        this.formId = options.formId;
        this.page = options.page;
        if(options.fields == undefined){
            this.fields = [];
        }else{
            this.fields = this.toFields(options.fields);
        }
    }

    private toFields(arr): Array<any>{
        let hold = [];
        for(let i in arr){
            let row = arr[i];
            if(row.controlType == 'object'){
                let c = this.toFields(row.children);
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
            }
        }
        return hold;
    }
}