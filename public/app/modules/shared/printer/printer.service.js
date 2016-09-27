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
var util_service_1 = require('../../../services/util/util.service');
var auth_service_1 = require('../../../services/auth/auth.service');
var PrintService = (function () {
    function PrintService(http, util, auth) {
        this.http = http;
        this.util = util;
        this.auth = auth;
    }
    PrintService.prototype.getPrinters = function () {
        var headers = new http_1.Headers({ 'token': this.auth.getToken() });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('print')
            .map(function (res) {
            var body = res.json();
            return body;
        })
            .catch(this.util.handleError);
    };
    PrintService.prototype.print = function (print) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('print', JSON.stringify(print), options)
            .map(function (res) {
            var body = res.json();
            return body;
        })
            .catch(this.util.handleError);
    };
    PrintService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, util_service_1.UtilService, auth_service_1.AuthService])
    ], PrintService);
    return PrintService;
}());
exports.PrintService = PrintService;
//# sourceMappingURL=printer.service.js.map