import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {RepairsComponent} from './repairs.component';

const repairsRoutes: Routes =[
    { 
        path: 'repairs', 
        component: RepairsComponent,
    }
];

export const RepairsRouting: ModuleWithProviders = RouterModule.forChild(repairsRoutes);