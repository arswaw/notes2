"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var TextareaField = (function (_super) {
    __extends(TextareaField, _super);
    function TextareaField(options) {
        _super.call(this, options);
        this.controlType = 'textarea';
        this.value = options.value || '';
    }
    return TextareaField;
}(field_1.Field));
exports.TextareaField = TextareaField;
//# sourceMappingURL=textarea-field.js.map