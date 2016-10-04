"use strict";
var hcheck_field_1 = require('./hcheck-field');
var pair_field_1 = require('./pair-field');
var select_field_1 = require('./select-field');
var static_field_1 = require('./static-field');
var text_field_1 = require('./text-field');
var textarea_field_1 = require('./textarea-field');
var vcheck_field_1 = require('./vcheck-field');
var object_field_1 = require('./object-field');
var radio_field_1 = require('./radio-field');
var collapse_1 = require('./collapse');
var Form = (function () {
    function Form(options) {
        this.controlType = 'form';
        this.id = options._id || '';
        this.label = options.label;
        this.fieldId = options.fieldId;
        if (options.children == undefined) {
            this.children = [];
        }
        else {
            this.children = this.tochildren(options.children);
        }
    }
    Form.prototype.tochildren = function (arr) {
        var hold = [];
        for (var i in arr) {
            var row = arr[i];
            if (row.controlType == 'object') {
                var c = this.tochildren(row.children);
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
            else if (row.controlType == 'radio') {
                hold.push(new radio_field_1.RadioField(row));
            }
            else if (row.controlType == 'form') {
                hold.push(new Form(row));
            }
            else if (row.controlType == 'collapse') {
                hold.push(new collapse_1.Collapse(row));
            }
        }
        return hold;
    };
    return Form;
}());
exports.Form = Form;
//# sourceMappingURL=form.js.map