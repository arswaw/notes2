"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var SelectField = (function (_super) {
    __extends(SelectField, _super);
    function SelectField(options) {
        _super.call(this, options);
        this.controlType = 'select';
        this.options = [];
        this.options = options['options'] || [];
        this.value = options.value || '';
    }
    return SelectField;
}(field_1.Field));
exports.SelectField = SelectField;
//# sourceMappingURL=select-field.js.map