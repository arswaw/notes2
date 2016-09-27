import {NgModule} from '@angular/core';
//modules
import {SharedModule} from '../shared/shared.module';
//routing
import {RepairsRouting} from './repairs.routing';
//components
import {RepairsComponent} from './repairs.component';

@NgModule({
    imports: [
        SharedModule,
        RepairsRouting
    ],
    declarations: [
        RepairsComponent
    ]
})
export class RepairsModule{}