"use strict";
var RmaSum = (function () {
    function RmaSum(options) {
        var cols = options.columns;
        this.tranid = cols.transactionnumber || cols.tranid;
        this.name = this.customer(cols.entity.name);
        this.sku = cols['custcol_legacy_3b_sku'] || cols['custitem_legacy_3b_sku'];
        this.description = this.truncate(cols.salesdescription);
        this.status = cols.statusref.name;
        this.trandate = cols.trandate;
        this.internal = this.truncate(cols['custbody_internal_note']);
        this.hide = false;
    }
    RmaSum.prototype.customer = function (n) {
        var c = n.split(' ');
        c.shift();
        return c.join(' ');
    };
    RmaSum.prototype.truncate = function (n) {
        var limit = 50;
        var trail = '...';
        if (n != undefined) {
            return n.length > limit ? n.substring(0, limit) + trail : n;
        }
        else {
            return '';
        }
    };
    return RmaSum;
}());
exports.RmaSum = RmaSum;
//# sourceMappingURL=rma-sum.js.map