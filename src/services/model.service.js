System.register(['./dataModelObj'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dataModelObj_1;
    var ModelService;
    return {
        setters:[
            function (dataModelObj_1_1) {
                dataModelObj_1 = dataModelObj_1_1;
            }],
        execute: function() {
            ModelService = (function () {
                function ModelService() {
                    this.model = dataModelObj_1.MODEL;
                }
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