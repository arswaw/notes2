"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField(options) {
        _super.call(this, options);
        this.controlType = 'text';
        this.value = options.value || '';
    }
    return TextField;
}(field_1.Field));
exports.TextField = TextField;
//# sourceMappingURL=text-field.js.map