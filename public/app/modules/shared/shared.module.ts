import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
//components
import {DynaForm} from './dyna-form/dyna-form.component';
import {PopUp} from './popup/popup.component';
import {HeaderComponent} from './header/header.component';
import {ListComponent} from './list/list.component';
import {PrinterComponent} from './printer/printer.component';
import {ScannerComponent} from './scanner/scanner.component';



@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        DynaForm,
        HeaderComponent,
        ListComponent,
        PrinterComponent,
        ScannerComponent,
        PopUp
    ],
    providers: [
        HttpModule,
        JsonpModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        DynaForm,
        HeaderComponent,
        ListComponent,
        PrinterComponent,
        ScannerComponent,
        PopUp
    ]
})

export class SharedModule { }