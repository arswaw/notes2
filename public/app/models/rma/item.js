"use strict";
var Item = (function () {
    function Item(options) {
        this.sku = options.sku || '';
        this.name = options.name || '';
        this.color = options.color || '';
        this.qty = options.qty || 1;
        this.price = options.price || 0.00;
        this.description = options.description;
        this.hide = false;
        this.selected = false;
    }
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map