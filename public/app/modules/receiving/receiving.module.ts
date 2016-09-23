import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
//modules
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        HttpModule,
        JsonpModule,
        SharedModule
    ]
})
export class ReceivingModule{}