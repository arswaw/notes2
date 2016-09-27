import {NgModule} from '@angular/core';
//modules
import {SharedModule} from '../shared/shared.module';
//routing
import {ReceivingRouting} from './receiving.routing';
//components
import {ReceivingComponent} from './receiving.component';

@NgModule({
    imports: [
        SharedModule,
        ReceivingRouting
    ],
    declarations: [
        ReceivingComponent
    ]
})
export class ReceivingModule{}