import {Component, Input, Output, EventEmitter} from '@angular/core';
//services
import {PrintService} from './printer.service';
//models
import {Printer} from '../../../models/printer/printer';


@Component({
    moduleId: module.id,
    selector: 'printer',
    templateUrl: 'printer.component.html',
    providers: [
        PrintService
    ]
})
export class PrinterComponent{
    @Input() printerId: number;
    @Output() selected = new EventEmitter();

    private printers: Printer[];

    constructor (private print: PrintService) {
        this.printers = [];
        print.getPrinters()
            .subscribe(
                ps => this.printersInit(ps),
                err => console.log(err)
            )
    }

    private printersInit(printers){
        for(let i in printers){
            let p = printers[i];
            let printer = new Printer(p);
            if(!printer.hide){
                this.printers.push(printer);
            }
        }
    }

    private onChange(event){
        this.selected.emit({
            value: this.printerId
        });
    }
}