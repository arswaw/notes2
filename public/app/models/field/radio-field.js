"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var RadioField = (function (_super) {
    __extends(RadioField, _super);
    function RadioField(options) {
        _super.call(this, options);
        this.controlType = 'radio';
        this.options = [];
        this.options = options['options'] || [];
        this.value = options.value || '';
    }
    return RadioField;
}(field_1.Field));
exports.RadioField = RadioField;
//# sourceMappingURL=radio-field.js.map