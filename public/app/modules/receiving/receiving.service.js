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
var util_service_1 = require('../../services/util/util.service');
var auth_service_1 = require('../../services/auth/auth.service');
var ReceivingService = (function () {
    function ReceivingService(http, util, auth) {
        this.http = http;
        this.util = util;
        this.auth = auth;
    }
    ReceivingService.prototype.byTracking = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('tracking', '{"id":"' + id + '"}', options)
            .map(function (res) {
            var body = res.json();
            return body;
        }).catch(this.util.handleError);
    };
    ;
    ReceivingService.prototype.getRMA = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/rma', '{"id":"' + id + '"}', options)
            .map(function (res) {
            var body = res.json();
            return body;
        })
            .catch(this.util.handleError);
    };
    ;
    ReceivingService.prototype.received = function (obj) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/received', JSON.stringify(obj), options)
            .map(function (res) {
            var body = res.json();
            return body;
        })
            .catch(this.util.handleError);
    };
    ReceivingService.prototype.getDefaultPrinter = function () {
        var settings = this.auth.getSettings();
        if (settings.printer) {
            return settings.printer;
        }
        else {
            return 146359;
        }
    };
    ReceivingService.prototype.recInit = function () {
        var obj = {
            fields: [
                {
                    controlType: 'select',
                    label: 'Charger',
                    options: [
                        { key: 'Missing', value: 'Missing' },
                        { key: 'Present', value: 'Present' }
                    ]
                },
                {
                    controlType: 'text',
                    label: 'SN: '
                }
            ],
            columns: [
                {
                    label: 'SKU',
                    id: 'sku',
                    sort: false,
                    type: 'static'
                },
                {
                    label: 'Description',
                    id: 'description',
                    sort: false,
                    type: 'static'
                },
                {
                    label: 'Quantity',
                    id: 'qty',
                    sort: false,
                    type: 'static'
                }
            ]
        };
        return obj;
    };
    ReceivingService.prototype.getSwagColumns = function () {
        var arr = [
            {
                label: 'SKU',
                id: 'sku',
                sort: false,
                type: 'static',
            },
            {
                label: 'Description',
                id: 'description',
                sort: false,
                type: 'select',
                options: [
                    {
                        key: 'SWAGWAY X1 - Black',
                        value: 'SWAGWAY X1 - Black'
                    },
                    {
                        key: 'SWAGWAY X1 - Blue',
                        value: 'SWAGWAY X1 - Blue'
                    },
                    {
                        key: 'SWAGWAY X1 - Dark Red',
                        value: 'SWAGWAY X1 - Dark Red'
                    },
                    {
                        key: 'SWAGWAY X1 - Gold',
                        value: 'SWAGWAY X1 - Gold'
                    },
                    {
                        key: 'SWAGWAY X1 - Green',
                        value: 'SWAGWAY X1 - Green'
                    },
                    {
                        key: 'SWAGWAY X1 - Pink',
                        value: 'SWAGWAY X1 - Pink'
                    },
                    {
                        key: 'SWAGWAY X1 - Red',
                        value: 'SWAGWAY X1 - Red'
                    },
                    {
                        key: 'SWAGWAY X1 - White',
                        value: 'SWAGWAY X1 - White'
                    }
                ]
            },
            {
                label: 'Quantity',
                id: 'qty',
                sort: false,
                type: 'static'
            }
        ];
        return arr;
    };
    ReceivingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, util_service_1.UtilService, auth_service_1.AuthService])
    ], ReceivingService);
    return ReceivingService;
}());
exports.ReceivingService = ReceivingService;
//# sourceMappingURL=receiving.service.js.map