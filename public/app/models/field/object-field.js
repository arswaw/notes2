"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var ObjectField = (function (_super) {
    __extends(ObjectField, _super);
    function ObjectField(options) {
        _super.call(this, options);
        this.controlType = 'object';
        this.children = options.children === undefined ? [] : options.children;
        this.editable = options.editable || false;
        this.all = options.all || false;
    }
    return ObjectField;
}(field_1.Field));
exports.ObjectField = ObjectField;
//# sourceMappingURL=object-field.js.map