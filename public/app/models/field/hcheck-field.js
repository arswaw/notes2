"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var HCheckField = (function (_super) {
    __extends(HCheckField, _super);
    function HCheckField(options) {
        _super.call(this, options);
        this.controlType = 'hcheck';
        this.value = options.value || false;
    }
    return HCheckField;
}(field_1.Field));
exports.HCheckField = HCheckField;
//# sourceMappingURL=hcheck-field.js.map