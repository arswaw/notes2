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
var Subject_1 = require('rxjs/Subject');
//services
var util_service_1 = require('../util/util.service');
var AuthService = (function () {
    function AuthService(http, util) {
        this.http = http;
        this.util = util;
        this.usernameSource = new Subject_1.Subject();
        this.username = this.usernameSource.asObservable();
        this.pagesSource = new Subject_1.Subject();
        this.pages = this.pagesSource.asObservable();
        this._token = '';
        this._user = '';
        this._pages = [];
    }
    AuthService.prototype.login = function (user, pass) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('login', '{"user":"' + user + '", "pass": "' + pass + '"}', options)
            .map(function (res) {
            var body = res.json();
            return body;
        }).catch(this.util.handleError);
    };
    // setters
    AuthService.prototype.setUser = function (user) {
        this._user = user;
        this.usernameSource.next(user);
    };
    AuthService.prototype.setPages = function (pages) {
        this._pages = pages;
        this.pagesSource.next(pages);
    };
    //getters
    AuthService.prototype.getUser = function () {
        return this._user;
    };
    AuthService.prototype.getToken = function () {
        return this._token;
    };
    AuthService.prototype.getPages = function () {
        return this._pages;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, util_service_1.UtilService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map