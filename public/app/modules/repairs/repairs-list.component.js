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
var router_1 = require('@angular/router');
//services
var repairs_service_1 = require('./repairs.service');
var spinner_service_1 = require('../../services/spinner/spinner.service');
//models
var rma_sum_1 = require('../../models/rma-sum/rma-sum');
var RepairsListComponent = (function () {
    function RepairsListComponent(router, comms, spin) {
        this.router = router;
        this.comms = comms;
        this.spin = spin;
        this.page = 'repairs-list';
        spin.clearSpin();
    }
    RepairsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spin.spinStart('rmas');
        this.comms.getRMAs().subscribe(function (rmas) { return _this.tableInit(rmas); }, function (error) { return console.log(error); }, function () { return _this.spin.spinStop('rmas'); });
    };
    RepairsListComponent.prototype.scan = function (event) {
        this.router.navigate(['repairs', event.value]);
    };
    RepairsListComponent.prototype.select = function (event) {
        this.router.navigate(['repairs', event.tranid]);
    };
    RepairsListComponent.prototype.tableInit = function (rows) {
        var obj = {};
        var arr = [
            {
                label: 'TranID',
                id: 'tranid',
                type: 'static',
                sort: false
            },
            {
                label: 'Customer',
                id: 'name',
                type: 'static',
                sort: false
            },
            {
                label: 'SKU',
                id: 'sku',
                type: 'static',
                sort: false
            },
            {
                label: 'Description',
                id: 'description',
                type: 'static',
                sort: false
            },
            {
                label: 'Status',
                id: 'status',
                type: 'static',
                sort: false
            },
            {
                label: 'Date',
                id: 'trandate',
                type: 'static',
                sort: false
            },
            {
                label: 'Internal Note',
                id: 'internal',
                type: 'static',
                sort: false
            }
        ];
        this.columns = arr;
        var hold = [];
        for (var i in rows) {
            var row = rows[i];
            var sum = new rma_sum_1.RmaSum(row);
            obj[sum.sku] = sum;
            hold.push(sum);
        }
        console.log(obj);
        this.rows = hold;
    };
    RepairsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'repairs-list.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, repairs_service_1.RepairsService, spinner_service_1.SpinnerService])
    ], RepairsListComponent);
    return RepairsListComponent;
}());
exports.RepairsListComponent = RepairsListComponent;
//# sourceMappingURL=repairs-list.component.js.map