import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'popup',
    templateUrl: 'popup.component.html',
    styleUrls: ['popup.component.css'],
})
export class PopUp{
    @Input() fields: Array<any>;
    @Input() show: Boolean;
    @Input() title: String;
    @Input() id: string;

    @Output() submited = new EventEmitter();

    private error: boolean;
    private errText: string;

    constructor(){
        this.error = false;
        this.errText = '';
    }

    private close(){
        this.error = false;
        this.submited.emit({fields: this.fields, close: true, id: this.id});
    }

    private submit(){
        for(let i in this.fields){
            let field = this.fields[i];
            if(field.required){
                if(field.value == ''){
                    this.error = true;
                    this.errText = 'Required field blank or not selected.'
                }
            }
        }
        if(!this.error){
            this.submited.emit({fields: this.fields, close: false, id: this.id});
        }
    }
}