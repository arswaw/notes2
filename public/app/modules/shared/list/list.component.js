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
var util_service_1 = require('../../../services/util/util.service');
var ListComponent = (function () {
    function ListComponent(util) {
        this.util = util;
        this.cols = {};
        this.rows = [];
        this.select = new core_1.EventEmitter();
        this.change = new core_1.EventEmitter();
    }
    ListComponent.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key == 'rows') {
                var rows = changes[key].currentValue;
                var hold = [];
                for (var i in rows) {
                    var row = rows[i];
                    row._id = this.util.genGUID();
                    hold.push(row);
                }
                this.rows = hold;
            }
        }
    };
    ListComponent.prototype.changed = function (event) {
        this.change.emit(event);
    };
    ListComponent.prototype.clicked = function (obj) {
        this.highlight(obj);
        this.select.emit(obj);
    };
    ListComponent.prototype.sorter = function (col) {
        if (this.cols[col] == undefined) {
            this.cols[col] = false;
        }
        this.rows.sort(this.dynamicSort(col));
    };
    ListComponent.prototype.highlight = function (obj) {
        for (var i in this.rows) {
            if (this.rows[i]._id == obj._id) {
                this.rows[i].selected = true;
            }
            else {
                this.rows[i].selected = false;
            }
        }
    };
    ListComponent.prototype.dynamicSort = function (property) {
        var dir = 1;
        if (this.cols[property]) {
            dir = -1;
            this.cols[property] = false;
        }
        else {
            this.cols[property] = true;
        }
        return function (a, b) {
            var a2;
            var b2;
            if (!isNaN(a[property]) && !isNaN(b[property])) {
                a2 = parseInt(a[property], 10);
                b2 = parseInt(b[property], 10);
            }
            else {
                a2 = a[property].toLowerCase();
                b2 = b[property].toLowerCase();
            }
            var result = (a2 < b2) ? -1 : (a2 > b2) ? 1 : 0;
            return result * dir;
        };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ListComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ListComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "change", void 0);
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css'],
        }), 
        __metadata('design:paramtypes', [util_service_1.UtilService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map