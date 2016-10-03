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
var receiving_service_1 = require('./receiving.service');
var spinner_service_1 = require('../../services/spinner/spinner.service');
//models
var rma_1 = require('../../models/rma/rma');
var ReceivingComponent = (function () {
    function ReceivingComponent(route, comms, router, spin) {
        this.route = route;
        this.comms = comms;
        this.router = router;
        this.spin = spin;
        this.page = 'receiving';
        this.sel = false;
        this.charger = '';
        this.serial = '';
        this.selected = {};
        spin.clearSpin();
        var obj = comms.recInit();
        this.columns = obj.columns;
        this.fields = obj.fields;
        this.rma = new rma_1.Rma([]);
        this.printerId = this.comms.getDefaultPrinter();
    }
    ReceivingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = parseInt(this.route.snapshot.params['id'], 10).toString();
        this.spin.spinStart('rma');
        this.comms.getRMA(this.id)
            .subscribe(function (rma) { return _this.rma = new rma_1.Rma(rma); }, function (err) { return console.log(err); }, function () { return _this.procRma(); });
    };
    ReceivingComponent.prototype.procRma = function () {
        console.log(this.rma);
        this.spin.spinStop('rma');
        if (this.swagCheck()) {
            this.columns = this.comms.getSwagColumns();
        }
    };
    ReceivingComponent.prototype.change = function (event) {
        if (event.sku != undefined) {
            for (var i in this.rma.items) {
                var item = this.rma.items[i];
                if (item._id == event._id) {
                    var sku = this.skus(event.description);
                    this.rma.items[i].sku = sku;
                }
            }
        }
    };
    ReceivingComponent.prototype.skus = function (desc) {
        var skus = {
            'SWAGWAY X1 - Black': 'HE-SBW-VTK-85370-2',
            'SWAGWAY X1 - Blue': 'HE-SBW-VTK-85370-4',
            'SWAGWAY X1 - Dark Red': 'HE-SBW-VTK-85370-6',
            'SWAGWAY X1 - Gold': 'HE-SBW-VTK-85370-8',
            'SWAGWAY X1 - Green': 'HE-SBW-VTK-85370-3',
            'SWAGWAY X1 - Pink': 'HE-SBW-VTK-85370-7',
            'SWAGWAY X1 - Red': 'HE-SBW-VTK-85370-1',
            'SWAGWAY X1 - White': 'HE-SBW-VTK-85370-5',
        };
        return skus[desc];
    };
    ReceivingComponent.prototype.received = function () {
        var _this = this;
        this.spin.spinStart('receive');
        var obj = {
            id: this.id,
            fields: [],
            sku: this.selected.sku,
            header: this.action(),
            location: this.loc(),
            printer: this.printerId,
            voucher: false,
            sn: ''
        };
        obj.fields[0] = 'SKU: ' + this.selected.sku;
        obj.fields[1] = 'NS#: ' + this.selected.name;
        obj.fields[2] = 'RA#: ' + this.id;
        obj.fields[3] = 'Desc: ' + this.selected.description;
        obj.fields[4] = 'Name: ' + this.rma.name;
        if (this.rma.actionId == '9') {
            obj.fields[5] = 'Charger: ' + this.charger;
            obj.voucher = true;
        }
        this.comms.received(obj)
            .subscribe(function (rma) { return _this.spin.spinStop('receive'); }, function (err) { return console.log(err); }, function () { return _this.router.navigate(['/receive']); });
    };
    ReceivingComponent.prototype.swagCheck = function () {
        var bol = false;
        for (var i in this.rma.items) {
            var item = this.rma.items[i];
            var index = item.sku.indexOf('HE-SBW-VTK-85370');
            if (index > -1) {
                bol = true;
            }
        }
        return bol;
    };
    ReceivingComponent.prototype.select = function (event) {
        this.sel = true;
        this.selected = event;
    };
    ReceivingComponent.prototype.printerChanged = function (event) {
        this.printerId = event.value;
    };
    ReceivingComponent.prototype.loc = function () {
        var id = this.rma.actionId;
        if (id == '9') {
            return 60;
        }
        else {
            return 48;
        }
    };
    ReceivingComponent.prototype.action = function () {
        var id = this.rma.actionId;
        if (id == '1') {
            return 'Refund';
        }
        else if (id == '2') {
            return 'Refund';
        }
        else if (id == '3') {
            return 'Exchange';
        }
        else if (id == '5') {
            return 'Repair';
        }
        else if (id == '6') {
            return 'Refused';
        }
        else if (id == '8') {
            return 'Free Repair';
        }
        else if (id == '9') {
            return 'Voucher';
        }
        else if (id == '10') {
            return 'Battery Swap';
        }
        else if (id == '11') {
            return 'Advanced';
        }
        else if (id == '12') {
            return 'Replaced';
        }
    };
    ReceivingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'receiving.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, receiving_service_1.ReceivingService, router_1.Router, spinner_service_1.SpinnerService])
    ], ReceivingComponent);
    return ReceivingComponent;
}());
exports.ReceivingComponent = ReceivingComponent;
//# sourceMappingURL=receiving.component.js.map