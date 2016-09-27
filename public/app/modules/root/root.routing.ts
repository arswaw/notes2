import {ModuleWithProviders}   from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';


const appRoutes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [

];

export const RootRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);