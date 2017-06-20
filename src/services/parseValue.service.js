System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ParseValueService;
    return {
        setters:[],
        execute: function() {
            ParseValueService = (function () {
                function ParseValueService() {
                }
                ParseValueService.prototype.parseValue = function (value, min, max) {
                    value = parseInt(value);
                    if (value != value)
                        return min;
                    if (value >= min && value <= max) {
                        return value;
                    }
                    return min;
                };
                return ParseValueService;
            }());
            exports_1("ParseValueService", ParseValueService);
        }
    }
});
//# sourceMappingURL=parseValue.service.js.map