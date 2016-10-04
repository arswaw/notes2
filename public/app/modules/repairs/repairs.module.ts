import {NgModule} from '@angular/core';
//modules
import {SharedModule} from '../shared/shared.module';
//routing
import {RepairsRouting} from './repairs.routing';
//components
import {RepairsComponent} from './repairs.component';
//services
import {RepairsService} from './repairs.service';

@NgModule({
    imports: [
        SharedModule,
        RepairsRouting
    ],
    declarations: [
        RepairsComponent
    ],
    providers: [
        RepairsService
    ]
})
export class RepairsModule{}