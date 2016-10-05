"use strict";
var Index = (function () {
    function Index(options) {
        this.map = [];
        this.id = options._id || '';
        this.indexId = options.indexId;
        this.source = options.source;
        this.dest = options.dest;
        this.map = options.map;
    }
    return Index;
}());
exports.Index = Index;
//# sourceMappingURL=index.js.map