import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {SettingsComponent} from './settings.component';

const settingsRoutes: Routes =[
    { 
        path: 'settings', 
        component: SettingsComponent,
    }
];

export const SettingsRouting: ModuleWithProviders = RouterModule.forChild(settingsRoutes);