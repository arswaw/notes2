//librarys
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule}  from '@angular/platform-browser';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {HttpModule,JsonpModule} from '@angular/http';
//components
import {RootComponent} from './root.component';
import {LoginComponent} from './login.component';
//modules
import {QualityModule} from '../quality/quality.module';
import {ReceivingModule} from '../receiving/receiving.module';
import {RepairsModule} from '../repairs/repairs.module';
import {SharedModule} from '../shared/shared.module';
import {SettingsModule} from '../settings/settings.module';
//routing
import {RootRouting} from './root.routing';

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
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [RootComponent]
})
export class RootModule {}