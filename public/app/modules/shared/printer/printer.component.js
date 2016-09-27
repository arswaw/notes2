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
var printer_service_1 = require('./printer.service');
//models
var printer_1 = require('../../../models/printer/printer');
var PrinterComponent = (function () {
    function PrinterComponent(print) {
        var _this = this;
        this.print = print;
        this.selected = new core_1.EventEmitter();
        this.printers = [];
        print.getPrinters()
            .subscribe(function (ps) { return _this.printersInit(ps); }, function (err) { return console.log(err); });
    }
    PrinterComponent.prototype.printersInit = function (printers) {
        for (var i in printers) {
            var p = printers[i];
            var printer = new printer_1.Printer(p);
            if (!printer.hide) {
                this.printers.push(printer);
            }
        }
    };
    PrinterComponent.prototype.onChange = function (event) {
        this.selected.emit({
            value: this.printerId
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PrinterComponent.prototype, "printerId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PrinterComponent.prototype, "selected", void 0);
    PrinterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'printer',
            templateUrl: 'printer.component.html',
            providers: [
                printer_service_1.PrintService
            ]
        }), 
        __metadata('design:paramtypes', [printer_service_1.PrintService])
    ], PrinterComponent);
    return PrinterComponent;
}());
exports.PrinterComponent = PrinterComponent;
//# sourceMappingURL=printer.component.js.map