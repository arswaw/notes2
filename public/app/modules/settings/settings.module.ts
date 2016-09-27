import {NgModule} from '@angular/core';
//modules
import {SharedModule} from '../shared/shared.module';
//routing
import {SettingsRouting} from './settings.routing';
//components
import {SettingsComponent} from './settings.component';
//services
import {SettingsService} from './settings.service';
import {UtilService} from '../../services/util/util.service';

@NgModule({
    imports: [
        SharedModule,
        SettingsRouting
    ],
    declarations: [
        SettingsComponent
    ],
    providers: [
        SettingsService,
        UtilService
    ]
})
export class SettingsModule{}