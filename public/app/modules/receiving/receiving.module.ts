import {NgModule} from '@angular/core';
//modules
import {SharedModule} from '../shared/shared.module';
//routing
import {ReceivingRouting} from './receiving.routing';
//components
import {ReceivingComponent} from './receiving.component';
import {ScanWrapComponent} from './scan-wrap.component';
//services
import {ReceivingService} from './receiving.service';

@NgModule({
    imports: [
        SharedModule,
        ReceivingRouting
    ],
    declarations: [
        ReceivingComponent,
        ScanWrapComponent
    ],
    providers: [
        ReceivingService
    ]
})
export class ReceivingModule{}