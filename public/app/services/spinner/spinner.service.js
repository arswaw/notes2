"use strict";
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var SpinnerService = (function () {
    function SpinnerService() {
        this.names = [];
        this.spin = false;
        this._spinner = new BehaviorSubject_1.BehaviorSubject(false);
        this.spinner = this._spinner.asObservable();
    }
    SpinnerService.prototype.sStart = function () {
        this.spin = true;
        this._spinner.next(true);
    };
    SpinnerService.prototype.sStop = function () {
        this.spin = false;
        this._spinner.next(false);
    };
    SpinnerService.prototype.inArr = function (name) {
        var found = false;
        for (var i in this.names) {
            var row = this.names[i];
            if (row == name) {
                found = true;
            }
        }
        return found;
    };
    SpinnerService.prototype.spinStart = function (name) {
        console.log('start: ' + name);
        var running = this.inArr(name);
        if (!running) {
            this.names.push(name);
            if (!this.spin) {
                this.sStart();
            }
        }
    };
    SpinnerService.prototype.spinStop = function (name) {
        console.log('stop: ' + name);
        var running = this.inArr(name);
        if (running) {
            var index = this.names.indexOf(name);
            var cut = this.names.splice(index, 1);
            if (this.names.length == 0) {
                this.sStop();
            }
        }
    };
    SpinnerService.prototype.clearSpin = function () {
        this.names = [];
        this.sStop();
    };
    return SpinnerService;
}());
exports.SpinnerService = SpinnerService;
//# sourceMappingURL=spinner.service.js.map