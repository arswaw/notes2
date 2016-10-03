import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {ReceivingComponent} from './receiving.component';
import {ScanWrapComponent} from './scan-wrap.component';
//services
import {AuthGuard} from '../../services/auth/auth-guard.service';

const receivingRoutes: Routes =[
    { 
        path: 'receiving', 
        children: [
            {
                path: ':id',
                component: ReceivingComponent,
                canActivate: [AuthGuard],
            },{
                path: '',
                component: ScanWrapComponent,
                canActivate: [AuthGuard],
            }
        ]
    }
];

export const ReceivingRouting: ModuleWithProviders = RouterModule.forChild(receivingRoutes);