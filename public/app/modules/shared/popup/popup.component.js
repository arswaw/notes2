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
var PopUp = (function () {
    function PopUp() {
        this.submited = new core_1.EventEmitter();
        this.error = false;
        this.errText = '';
    }
    PopUp.prototype.close = function () {
        this.error = false;
        this.submited.emit({ fields: this.fields, close: true, id: this.id });
    };
    PopUp.prototype.submit = function () {
        for (var i in this.fields) {
            var field = this.fields[i];
            if (field.required) {
                if (field.value == '') {
                    this.error = true;
                    this.errText = 'Required field blank or not selected.';
                }
            }
        }
        if (!this.error) {
            this.submited.emit({ fields: this.fields, close: false, id: this.id });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PopUp.prototype, "fields", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PopUp.prototype, "show", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PopUp.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PopUp.prototype, "id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PopUp.prototype, "submited", void 0);
    PopUp = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'popup',
            templateUrl: 'popup.component.html',
            styleUrls: ['popup.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], PopUp);
    return PopUp;
}());
exports.PopUp = PopUp;
//# sourceMappingURL=popup.component.js.map