"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
//services
var auth_guard_service_1 = require('../../services/auth/auth-guard.service');
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login'
    },
];
exports.appRoutingProviders = [
    auth_guard_service_1.AuthGuard
];
exports.RootRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=root.routing.js.map