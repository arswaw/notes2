"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var StaticField = (function (_super) {
    __extends(StaticField, _super);
    function StaticField(options) {
        _super.call(this, options);
        this.controlType = 'static';
        this.value = options.value || '';
    }
    return StaticField;
}(field_1.Field));
exports.StaticField = StaticField;
//# sourceMappingURL=static-field.js.map