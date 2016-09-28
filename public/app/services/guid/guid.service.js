"use strict";
var GuidService = (function () {
    function GuidService(str) {
        this.str = str || GuidService.getNewGUIDString();
    }
    GuidService.prototype.toString = function () {
        return this.str;
    };
    GuidService.getNewGUIDString = function () {
        // your favourite guid generation function could go here
        // ex: http://stackoverflow.com/a/8809472/188246
        var d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    return GuidService;
}());
exports.GuidService = GuidService;
//# sourceMappingURL=guid.service.js.map