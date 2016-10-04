"use strict";
var router_1 = require('@angular/router');
//components
var repairs_component_1 = require('./repairs.component');
var repairs_list_component_1 = require('./repairs-list.component');
//services
var auth_guard_service_1 = require('../../services/auth/auth-guard.service');
var repairsRoutes = [
    {
        path: 'repairs',
        children: [
            {
                path: ':id',
                component: repairs_component_1.RepairsComponent,
                canActivate: [auth_guard_service_1.AuthGuard],
            }, {
                path: '',
                component: repairs_list_component_1.RepairsListComponent,
                canActivate: [auth_guard_service_1.AuthGuard],
            }
        ]
    }
];
exports.RepairsRouting = router_1.RouterModule.forChild(repairsRoutes);
//# sourceMappingURL=repairs.routing.js.map