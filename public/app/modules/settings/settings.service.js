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
var http_1 = require('@angular/http');
//services
var util_service_1 = require('../../services/util/util.service');
var auth_service_1 = require('../../services/auth/auth.service');
//models
var text_field_1 = require('../../models/field/text-field');
var radio_field_1 = require('../../models/field/radio-field');
var SettingsService = (function () {
    function SettingsService(http, auth, util) {
        this.http = http;
        this.auth = auth;
        this.util = util;
    }
    SettingsService.prototype.getItems = function () {
        var headers = new http_1.Headers({ 'token': this.auth.getToken() });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('/items', options)
            .map(function (res) {
            var json = res.json();
            return json;
        })
            .catch(this.util.handleError);
    };
    SettingsService.prototype.searchInit = function () {
        var arr = [
            new text_field_1.TextField({ label: 'Item Id or SKU', required: true }),
            new radio_field_1.RadioField({ label: 'Type', options: [{ key: 'itemId', value: 'Item Id' }, { key: 'sku', value: 'SKU' }], required: true })
        ];
        return arr;
    };
    SettingsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService, util_service_1.UtilService])
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map