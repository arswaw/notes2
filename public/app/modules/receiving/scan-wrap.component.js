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
var ScanWrapComponent = (function () {
    function ScanWrapComponent(router, data) {
        this.router = router;
        this.data = data;
    }
    ScanWrapComponent.prototype.scanned = function (event) {
        var _this = this;
        var num = event.value;
        if (num.length > 17) {
            this.data.byTracking(num)
                .subscribe(function (res) { return _this.tracking(res); }, function (err) { return console.log(err); });
        }
        else {
            this.router.navigate(['/receiving', num]);
        }
    };
    ScanWrapComponent.prototype.tracking = function (obj) {
        var id = obj[0].columns.transactionnumber;
        this.router.navigate(['/receiving', id]);
    };
    ScanWrapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'scan-wrap.component.html',
            providers: [
                receiving_service_1.ReceivingService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, receiving_service_1.ReceivingService])
    ], ScanWrapComponent);
    return ScanWrapComponent;
}());
exports.ScanWrapComponent = ScanWrapComponent;
//# sourceMappingURL=scan-wrap.component.js.map