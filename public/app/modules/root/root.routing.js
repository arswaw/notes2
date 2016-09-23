"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: 'receiving',
        loadChildren: 'app/modules/receiving/receiving.module#ReceivingModule'
    },
    {
        path: 'repairs',
        loadChildren: 'app/modules/repairs/repairs.module#RepairsModule'
    },
    {
        path: 'settings',
        loadChildren: 'app/modules/settings/settings.module#SettingsModule'
    },
    { path: '*', redirectTo: '/login' },
];
exports.RootRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=root.routing.js.map