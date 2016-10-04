"use strict";
var address_1 = require('./address');
var item_1 = require('./item');
var Rma = (function () {
    function Rma(arr) {
        this.received = false;
        if (arr.length > 0) {
            this.received = this.getReceived(arr);
            this.setAction(arr);
            this.items = [];
            this.email = arr[0].columns.email;
            this.phone = arr[0].columns.shipphone || '';
            this.market = this.mak(arr);
            this.storefront = this.sf(arr);
            this.sku = this.getSku(arr);
            this.shipping = new address_1.Address(arr[0].columns, false);
            this.billing = new address_1.Address(arr[0].columns, true);
            this.nameParse(arr[0]);
            this.parseItems(arr);
            this.orderNumber = arr[0].columns.transactionnumber;
            this.ship_via = 'ground';
            this.intID = arr[0].id;
            this.status = this.stat(arr);
            this.notesInit(arr);
        }
    }
    Rma.prototype.notesInit = function (arr) {
        var mlast = '';
        var nlast = '';
        var hold = [];
        var tlast = {};
        for (var i in arr) {
            var line = arr[i];
            var note = line.columns['custbody_internal_note'];
            var memo = line.columns['memo'];
            var tech = line.columns['custrecord_tech'];
            var tnote = line.columns['custrecord_tech_note_field'];
            if (note != undefined && note != '') {
                if (note != nlast) {
                    nlast = note;
                    hold.push(note);
                }
            }
            if (memo != undefined && memo != '') {
                if (memo != mlast) {
                    mlast = memo;
                    hold.push(memo);
                }
            }
            if (tnote != undefined && tnote != '') {
                if (tlast[tnote] == undefined) {
                    tlast[tnote] = true;
                    tnote += '\n\t-' + tech;
                    hold.push(tnote);
                }
            }
        }
        this.notes = hold.join('\n----------------\n');
    };
    Rma.prototype.stat = function (arr) {
        var hold = '';
        for (var i in arr) {
            var row = arr[i];
            if (row.columns['statusref'] != undefined) {
                hold = row.columns['statusref'].name;
            }
        }
        return hold;
    };
    Rma.prototype.mak = function (arr) {
        var hold = 0;
        for (var i in arr) {
            var row = arr[i];
            if (row.columns['custbody_marketplace'] != undefined) {
                hold = parseInt(row.columns['custbody_marketplace'].internalid, 10);
            }
        }
        return hold;
    };
    Rma.prototype.sf = function (arr) {
        var hold = 0;
        for (var i in arr) {
            var row = arr[i];
            if (row.columns['custbody_storefront_list'] != undefined) {
                hold = parseInt(row.columns['custbody_storefront_list'].internalid, 10);
            }
        }
        return hold;
    };
    Rma.prototype.getSku = function (arr) {
        var hold = '';
        for (var i in arr) {
            var row = arr[i];
            var sku = row.columns['custcol_legacy_3b_sku'];
            if (sku != undefined) {
                hold = sku;
            }
        }
        return hold;
    };
    Rma.prototype.parseItems = function (arr) {
        var obj = {};
        for (var i in arr) {
            var row = arr[i];
            var sku = row.columns['custcol_legacy_3b_sku'];
            var color = row.columns['custitem_var_color'];
            if (sku != undefined) {
                var item = new item_1.Item({
                    sku: sku,
                    name: this.itemName(row.columns.item.name),
                    qty: row.columns.quantity * -1,
                    price: row.columns.rate,
                    description: row.columns.salesdescription,
                    color: color
                });
                //this.items.push(item);
                obj[sku] = item;
            }
        }
        var keys = Object.keys(obj);
        for (var i in keys) {
            var key = keys[i];
            this.items.push(obj[key]);
        }
    };
    Rma.prototype.itemName = function (item) {
        var index = item.indexOf(':');
        if (index > -1) {
            item = item.split(':')[1].replace(/ /g, '');
        }
        return item;
    };
    Rma.prototype.nameParse = function (line) {
        var cut = line.columns.entity.name.split(' ');
        cut.shift();
        //this.firstName = cut[0];
        this.lastName = cut.pop();
        this.firstName = cut.join(' ');
        this.name = this.firstName + ' ' + this.lastName;
    };
    Rma.prototype.getReceived = function (arr) {
        var hold = false;
        arr.forEach(function (line) {
            var recieved = line.columns['custbody_received_by_warehouse'];
            if (recieved) {
                hold = true;
            }
        });
        return hold;
    };
    Rma.prototype.setAction = function (arr) {
        for (var i in arr) {
            var line = arr[i];
            this.actionId = line.columns['custbody_zake_action'].internalid;
            this.actionName = line.columns['custbody_zake_action'].name;
        }
    };
    Rma.prototype.getAction = function (arr) {
        var hold = '';
        arr.forEach(function (line) {
            hold = line.columns['custbody_zake_action'].internalid;
        });
        return hold;
    };
    Rma.prototype.getDescription = function (arr) {
        var hold = '';
        arr.forEach(function (line) {
            var sku = line.columns['salesdescription'];
            if (sku != undefined) {
                hold = sku;
            }
        });
        return hold;
    };
    return Rma;
}());
exports.Rma = Rma;
//# sourceMappingURL=rma.js.map