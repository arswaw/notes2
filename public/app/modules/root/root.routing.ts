import {ModuleWithProviders}   from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'receiving',
        loadChildren: 'app/modules/receiving/receiving.module#ReceivingModule'
        //canLoad: [AuthGuard]
    },
    {
        path: 'repairs',
        loadChildren: 'app/modules/repairs/repairs.module#RepairsModule'
    },
    {
        path: 'settings',
        loadChildren: 'app/modules/settings/settings.module#SettingsModule'
    },
    { path: '*', redirectTo:'/login' },
];

export const RootRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);