"use strict";
var location_1 = require('./location');
var ItemDetail = (function () {
    function ItemDetail(options) {
        this.createdDate = options.createddate;
        this.sku = options.custitem_legacy_3b_sku;
        this.desc = options.displayname;
        this.intId = options.id;
        this.itemId = options.itemid;
        this.locations = this.getLocs(options.locations);
    }
    ItemDetail.prototype.getLocs = function (arr) {
        var hold = [];
        for (var i in arr) {
            var loc = new location_1.Location(arr[i]);
            if (loc.qty > 0) {
                hold.push(loc);
            }
        }
        return hold;
    };
    return ItemDetail;
}());
exports.ItemDetail = ItemDetail;
//# sourceMappingURL=item-detail.js.map