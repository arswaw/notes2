import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {RepairsComponent} from './repairs.component';
import { RepairsListComponent } from './repairs-list.component';
//services
import {AuthGuard} from '../../services/auth/auth-guard.service';

const repairsRoutes: Routes =[
    { 
        path: 'repairs', 
        children: [
            {
                path: ':id',
                component: RepairsComponent,
                canActivate: [AuthGuard],
            },{
                path: '',
                component: RepairsListComponent,
                canActivate: [AuthGuard],
            }
        ]
    }
];

export const RepairsRouting: ModuleWithProviders = RouterModule.forChild(repairsRoutes);