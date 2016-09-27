//librarys
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule}  from '@angular/platform-browser';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {HttpModule,JsonpModule} from '@angular/http';
import {Observable} from 'rxjs/Rx';
//components
import {RootComponent} from './root.component';
import {LoginComponent} from './login.component';
//modules
import {QualityModule} from '../quality/quality.module';
import {ReceivingModule} from '../receiving/receiving.module';
import {RepairsModule} from '../repairs/repairs.module';
import {SharedModule} from '../shared/shared.module';
import {SettingsModule} from '../settings/settings.module';
//services
import {AuthService} from '../../services/auth/auth.service';
import {UtilService} from '../../services/util/util.service';
//routing
import {appRoutingProviders, RootRouting} from './root.routing';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        HttpModule,
        JsonpModule,
        QualityModule,
        ReceivingModule,
        RepairsModule,
        SharedModule,
        SettingsModule,
        RootRouting
    ],
    declarations: [
        RootComponent,
        LoginComponent
    ],
    providers: [
        appRoutingProviders,
        AuthService,
        UtilService,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [RootComponent]
})
export class RootModule {}