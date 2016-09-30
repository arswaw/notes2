"use strict";
var Field = (function () {
    function Field(options) {
        this.key = options.key || '';
        this.label = options.label;
        this.id = options._id || '';
        this.fieldId = options.fieldId || '';
        this.controlType = options.controlType;
        this.required = options.required || false;
    }
    return Field;
}());
exports.Field = Field;
//# sourceMappingURL=field.js.map