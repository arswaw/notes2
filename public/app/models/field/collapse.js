"use strict";
var collapse_child_1 = require('./collapse-child');
var Collapse = (function () {
    function Collapse(options) {
        this.controlType = 'collapse';
        this.id = options._id || '';
        this.fieldId = options.fieldId;
        if (options.children == undefined) {
            this.children = [];
        }
        else {
            this.children = this.tochildren(options.children);
        }
    }
    Collapse.prototype.tochildren = function (arr) {
        var hold = [];
        for (var i in arr) {
            var row = arr[i];
            hold.push(new collapse_child_1.CollapseChild(row));
        }
        return hold;
    };
    return Collapse;
}());
exports.Collapse = Collapse;
//# sourceMappingURL=collapse.js.map