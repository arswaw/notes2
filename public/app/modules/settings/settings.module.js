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
var settings_routing_1 = require('./settings.routing');
//components
var settings_component_1 = require('./settings.component');
//services
var settings_service_1 = require('./settings.service');
var util_service_1 = require('../../services/util/util.service');
var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                settings_routing_1.SettingsRouting
            ],
            declarations: [
                settings_component_1.SettingsComponent
            ],
            providers: [
                settings_service_1.SettingsService,
                util_service_1.UtilService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsModule);
    return SettingsModule;
}());
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=settings.module.js.map