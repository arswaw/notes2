import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {QualityComponent} from './quality.component';

const qualityRoutes: Routes =[
    { 
        path: 'quality', 
        component: QualityComponent,
    }
];

export const QualityRouting: ModuleWithProviders = RouterModule.forChild(qualityRoutes);