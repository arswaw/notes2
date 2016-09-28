"use strict";
var Info = (function () {
    function Info(arr) {
        var mlast = '';
        var nlast = '';
        var hold = [];
        var tlast = {};
        if (arr != undefined) {
            for (var i in arr) {
                var line = arr[i];
                var ent = line.columns.entity;
                var note = line.columns['custbody_internal_note'];
                var memo = line.columns['memo'];
                var tech = line.columns['custrecord_tech'];
                var tnote = line.columns['custrecord_tech_note_field'];
                var quote = line.columns['custrecord_quote'];
                var action = line.columns['custbody_zake_action'];
                var sku = line.columns['custcol_legacy_3b_sku'];
                var desc = line.columns.salesdescription;
                var stat = line.columns['statusref'];
                if (ent != undefined) {
                    var c = ent.name.split(' ');
                    c.shift();
                    this.cust = c.join(' ');
                }
                if (action != undefined) {
                    this.actionId = action.internalid;
                    this.action = action.name;
                }
                if (sku != undefined) {
                    this.sku = sku;
                }
                if (desc != undefined) {
                    this.item = desc;
                }
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
                        if (quote) {
                            tnote += ' quote';
                        }
                        hold.push(tnote);
                    }
                }
                if (stat != undefined) {
                    this.status = line.columns['statusref'].name;
                }
            }
            this.notes = hold.join('\n----------------\n');
        }
    }
    return Info;
}());
exports.Info = Info;
//# sourceMappingURL=info.js.map