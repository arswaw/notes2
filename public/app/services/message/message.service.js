"use strict";
var MessageService = (function () {
    function MessageService() {
        this.msgs = [];
    }
    MessageService.prototype.addMsg = function (msg) {
        this.msgs.push(msg);
    };
    MessageService.prototype.removeMsg = function (id) {
        for (var i in this.msgs) {
            var msg = this.msgs[i];
            if (msg.id == id) {
                this.msgs.splice(parseInt(i, 10), 1);
            }
        }
    };
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map