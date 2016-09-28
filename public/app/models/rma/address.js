"use strict";
var Address = (function () {
    function Address(options, bill) {
        if (bill) {
            this.addr1 = options.billaddress1 || options.shipaddress1;
            this.addr2 = options.billaddress2 || options.shipaddress2 || '';
            this.city = options.billcity || options.shipcity;
            this.state = options.billstate || options.shipstate;
            this.zip = options.billzip || options.shipzip;
        }
        else {
            this.addr1 = options.shipaddress1;
            this.addr2 = options.shipaddress2 || '';
            this.city = options.shipcity;
            this.state = options.shipstate;
            this.zip = options.shipzip;
        }
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map