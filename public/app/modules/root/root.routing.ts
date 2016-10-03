import {ModuleWithProviders}   from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
//services
import {AuthGuard} from '../../services/auth/auth-guard.service';

const appRoutes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { 
        path: '**', 
        redirectTo:'/login' 
    },
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const RootRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);