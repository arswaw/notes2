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
//services
var settings_service_1 = require('./settings.service');
var SettingsComponent = (function () {
    function SettingsComponent(settings) {
        this.settings = settings;
        this.categories = [];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.catInit();
    };
    SettingsComponent.prototype.catInit = function () {
        var _this = this;
        this.categories = [
            {
                "label": "Repair Items",
                "type": "category",
                "active": false
            },
            {
                "label": "Users",
                "type": "category",
                "active": false
            }
        ];
        this.settings.getItems().subscribe(function (val) { return _this.itemsInit(val); }, function (err) { return console.log(err); });
    };
    SettingsComponent.prototype.itemsInit = function (items) {
        console.log(items);
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tech-notes',
            templateUrl: 'settings.component.html'
        }), 
        __metadata('design:paramtypes', [settings_service_1.SettingsService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map