"use strict";
var router_1 = require('@angular/router');
//components
var quality_component_1 = require('./quality.component');
exports.routing = router_1.RouterModule.forChild([
    {
        path: 'quality',
        children: [
            {
                path: '',
                component: quality_component_1.QualityComponent,
            }
        ]
    }
]);
//# sourceMappingURL=quality.routing.js.map