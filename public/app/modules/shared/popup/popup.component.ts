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

    private close(){
        this.submited.emit({fields: this.fields, close: true, id: this.id});
    }

    private submit(){
        this.submited.emit({fields: this.fields, close: false, id: this.id});
    }
}