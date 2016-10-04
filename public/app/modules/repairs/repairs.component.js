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
var RepairsComponent = (function () {
    function RepairsComponent(comms, spin, route) {
        this.comms = comms;
        this.spin = spin;
        this.route = route;
        this.page = 'repairs';
        this.serial = '';
        this.additional = '';
        this.info = [this.comms.getInfo()];
        this.review = [this.comms.getReview()];
        this.notes = [this.comms.getBlankNotes()];
        this.spin.clearSpin();
    }
    RepairsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = parseInt(this.route.snapshot.params['id'], 10).toString();
        this.spin.spinStart('rma');
        this.comms.getRMA(this.id)
            .subscribe(function (rma) { return _this.procRma(rma); }, function (err) { return console.log(err); }, function () { return _this.spin.spinStop('rma'); });
    };
    RepairsComponent.prototype.procRma = function (rma) {
        console.log(rma);
    };
    RepairsComponent.prototype.submit = function () {
        console.log('submit');
    };
    RepairsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'repairs.component.html',
            styleUrls: ['repairs.component.css'],
        }), 
        __metadata('design:paramtypes', [repairs_service_1.RepairsService, spinner_service_1.SpinnerService, router_1.ActivatedRoute])
    ], RepairsComponent);
    return RepairsComponent;
}());
exports.RepairsComponent = RepairsComponent;
//# sourceMappingURL=repairs.component.js.map