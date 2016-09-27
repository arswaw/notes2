import {Component, Input} from '@angular/core';
import {Field} from '@models/field/field';

@Component({
    moduleId: module.id,
    selector: 'dyna-form',
    templateUrl: 'dyna-form.component.html',
    styleUrls: ['dyna-form.component.css'],
    directives: [DynaForm]
})
export class DynaForm {
    @Input() fields: Array<any>;
}