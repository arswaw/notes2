"use strict";
// msg = message
var guid_service_1 = require('../../services/guid/guid.service');
var Msg = (function () {
    function Msg(options) {
        this.title = options.title;
        this.body = options.body;
        this.id = new guid_service_1.GuidService().toString();
        if (options.type == 'good') {
            this.type = 'good';
        }
        else if (options.type == 'bad') {
            this.type = 'bad';
        }
        else if (options.type == 'warning') {
            this.type = 'warn';
        }
        else if (options.type == 'info') {
            this.type = 'info';
        }
        else {
            this.type = 'bad';
            this.title += ' - type error';
            this.body += '\n - incorrect message type';
        }
    }
    return Msg;
}());
exports.Msg = Msg;
//# sourceMappingURL=msg.js.map