import {NgModule} from '@angular/core';
//modules
import {SharedModule} from '../shared/shared.module';
//routing
import {QualityRouting} from './quality.routing';
//components
import {QualityComponent} from './quality.component';

@NgModule({
    imports: [
        SharedModule,
        QualityRouting
    ],
    declarations: [
        QualityComponent
    ]
})
export class QualityModule{}