"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//modules
var shared_module_1 = require('../shared/shared.module');
//routing
var repairs_routing_1 = require('./repairs.routing');
//components
var repairs_component_1 = require('./repairs.component');
var RepairsModule = (function () {
    function RepairsModule() {
    }
    RepairsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                repairs_routing_1.RepairsRouting
            ],
            declarations: [
                repairs_component_1.RepairsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RepairsModule);
    return RepairsModule;
}());
exports.RepairsModule = RepairsModule;
//# sourceMappingURL=repairs.module.js.map