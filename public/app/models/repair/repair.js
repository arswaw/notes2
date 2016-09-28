"use strict";
var Repair = (function () {
    function Repair(options) {
        this.payed = options.payed || false;
        this.rmaId = options.rmaId;
        this.user = options.user;
        this.sn = options.sn;
        this.notes = options.notes;
        this.action = options.action;
        this.cond = options.cond;
    }
    return Repair;
}());
exports.Repair = Repair;
//# sourceMappingURL=repair.js.map