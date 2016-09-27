"use strict";
var Printer = (function () {
    function Printer(options) {
        this.description = options.description;
        this.name = options.name;
        this.state = options.state;
        this.id = options.id;
        this.compID = options.computer.id;
        this.compName = options.computer.name;
        this.hide = this.checkSkip(options.name);
    }
    Printer.prototype.checkSkip = function (name) {
        var re = false;
        var skips = [
            'Fax',
            'Send To',
            'Microsoft',
            'Foxit',
            '(redirected',
            'PDF'
        ];
        for (var i in skips) {
            var skip = skips[i];
            var index = name.indexOf(skip);
            if (index > -1) {
                re = true;
            }
        }
        return re;
    };
    return Printer;
}());
exports.Printer = Printer;
//# sourceMappingURL=printer.js.map