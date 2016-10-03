"use strict";
var router_1 = require('@angular/router');
//components
var receiving_component_1 = require('./receiving.component');
var scan_wrap_component_1 = require('./scan-wrap.component');
//services
var auth_guard_service_1 = require('../../services/auth/auth-guard.service');
var receivingRoutes = [
    {
        path: 'receiving',
        children: [
            {
                path: ':id',
                component: receiving_component_1.ReceivingComponent,
                canActivate: [auth_guard_service_1.AuthGuard],
            }, {
                path: '',
                component: scan_wrap_component_1.ScanWrapComponent,
                canActivate: [auth_guard_service_1.AuthGuard],
            }
        ]
    }
];
exports.ReceivingRouting = router_1.RouterModule.forChild(receivingRoutes);
//# sourceMappingURL=receiving.routing.js.map