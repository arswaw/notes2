import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'scanner',
    templateUrl: 'scanner.component.html',
    styleUrls: ['scanner.component.css']
})
export class ScannerComponent {
    @Input() header: string;
    @Output() scan = new EventEmitter();

    private input: string;


    onEnter(){
        this.scan.emit({
            value: this.input
        });
    }

}