System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ModelService;
    return {
        setters:[],
        execute: function() {
            ModelService = (function () {
                function ModelService() {
                    this.model = {
                        data: []
                    };
                }
                ModelService.prototype.getData = function () {
                    return this.model.data;
                };
                ModelService.prototype.setData = function (data) {
                    this.model.data = data;
                };
                ModelService.prototype.getModel = function () {
                    return this.model;
                };
                return ModelService;
            }());
            exports_1("ModelService", ModelService);
        }
    }
});
//# sourceMappingURL=model.service.js.map