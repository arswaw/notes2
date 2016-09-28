"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var VCheckField = (function (_super) {
    __extends(VCheckField, _super);
    function VCheckField(options) {
        _super.call(this, options);
        this.controlType = 'vcheck';
        this.value = options.value || false;
    }
    return VCheckField;
}(field_1.Field));
exports.VCheckField = VCheckField;
//# sourceMappingURL=vcheck-field.js.map