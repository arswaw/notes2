"use strict";
var hcheck_field_1 = require('../field/hcheck-field');
var pair_field_1 = require('../field/pair-field');
var select_field_1 = require('../field/select-field');
var static_field_1 = require('../field/static-field');
var text_field_1 = require('../field/text-field');
var textarea_field_1 = require('../field/textarea-field');
var vcheck_field_1 = require('../field/vcheck-field');
var object_field_1 = require('../field/object-field');
var Form = (function () {
    function Form(options) {
        this.controlType = 'form';
        this.id = options._id;
        this.label = options.label;
        this.formId = options.formId;
        this.page = options.page;
        if (options.fields == undefined) {
            this.fields = [];
        }
        else {
            this.fields = this.toFields(options.fields);
        }
    }
    Form.prototype.toFields = function (arr) {
        var hold = [];
        for (var i in arr) {
            var row = arr[i];
            if (row.controlType == 'object') {
                var c = this.toFields(row.children);
                row.children = c;
                hold.push(new object_field_1.ObjectField(row));
            }
            else if (row.controlType == 'hcheck') {
                hold.push(new hcheck_field_1.HCheckField(row));
            }
            else if (row.controlType == 'pair') {
                hold.push(new pair_field_1.PairField(row));
            }
            else if (row.controlType == 'select') {
                hold.push(new select_field_1.SelectField(row));
            }
            else if (row.controlType == 'static') {
                hold.push(new static_field_1.StaticField(row));
            }
            else if (row.controlType == 'text') {
                hold.push(new text_field_1.TextField(row));
            }
            else if (row.controlType == 'textarea') {
                hold.push(new textarea_field_1.TextareaField(row));
            }
            else if (row.controlType == 'vcheck') {
                hold.push(new vcheck_field_1.VCheckField(row));
            }
        }
        return hold;
    };
    return Form;
}());
exports.Form = Form;
//# sourceMappingURL=form.js.map