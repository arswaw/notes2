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
var spinner_service_1 = require('../../services/spinner/spinner.service');
var SettingsComponent = (function () {
    function SettingsComponent(settings, spin) {
        this.settings = settings;
        this.spin = spin;
        this.categories = {
            items: false,
            users: false
        };
        this.items = [];
        this.itemsCols = [];
        this.searchFields = [];
        this.searchPopup = false;
        spin.clearSpin();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.catInit();
        this.searchFields = this.settings.searchInit();
    };
    SettingsComponent.prototype.catInit = function () {
        var _this = this;
        this.spin.spinStart('items');
        this.settings.getItems().subscribe(function (val) { return _this.itemsInit(val); }, function (err) { return console.log(err); }, function () { return _this.spin.spinStop('items'); });
    };
    SettingsComponent.prototype.itemsInit = function (items) {
        console.log(items);
        this.itemsCols = [
            {
                label: 'Description',
                id: 'desc',
                sort: false,
                type: 'static'
            },
            {
                label: 'Item Id',
                id: 'itemId',
                sort: false,
                type: 'static'
            }
        ];
        this.items = items;
    };
    SettingsComponent.prototype.select = function (event) {
        this.selected = event;
    };
    SettingsComponent.prototype.selectPart = function (event) {
    };
    SettingsComponent.prototype.search = function (event) {
        this.searchPopup = false;
    };
    SettingsComponent.prototype.addItem = function () {
        console.log('item');
        this.searchPopup = true;
    };
    SettingsComponent.prototype.addPart = function () {
        console.log('part');
        this.searchPopup = true;
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tech-notes',
            templateUrl: 'settings.component.html'
        }), 
        __metadata('design:paramtypes', [settings_service_1.SettingsService, spinner_service_1.SpinnerService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map