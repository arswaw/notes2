"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var PairField = (function (_super) {
    __extends(PairField, _super);
    function PairField(options) {
        _super.call(this, options);
        this.controlType = 'pair';
        var val = options.value;
        if (val == undefined) {
            this.value = '';
        }
        else {
            if (options.key == '' || options.key == undefined) {
                var cut = options.value.split('|');
                this.key = cut[0];
                this.value = cut[1];
            }
            else {
                this.value = options.value;
            }
        }
    }
    return PairField;
}(field_1.Field));
exports.PairField = PairField;
//# sourceMappingURL=pair-field.js.map