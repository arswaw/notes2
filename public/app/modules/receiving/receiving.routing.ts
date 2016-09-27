import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {ReceivingComponent} from './receiving.component';

const receivingRoutes: Routes =[
    { 
        path: 'receiving', 
        component: ReceivingComponent,
    }
];

export const ReceivingRouting: ModuleWithProviders = RouterModule.forChild(receivingRoutes);