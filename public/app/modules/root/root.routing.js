"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
exports.appRoutingProviders = [];
exports.RootRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=root.routing.js.map