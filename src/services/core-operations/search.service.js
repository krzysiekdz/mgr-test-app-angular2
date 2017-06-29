System.register(['angular2/core', '../model.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, model_service_1;
    var SearchService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            }],
        execute: function() {
            SearchService = (function () {
                function SearchService(ms) {
                    this.ms = ms;
                    this.model = ms.getModel();
                }
                SearchService.prototype.search = function (txt) {
                    var col = ['c1', 'c2', 'c3', 'c4'];
                    var data = this.model.data;
                    for (var j = 0; j < data.length; j++) {
                        var item = data[j];
                        for (var i = 0; i < 4; i++) {
                            var prop = item[col[i]] + "";
                            if (txt !== "" && prop.indexOf(txt) !== -1) {
                                if (!item.search) {
                                    item.search = [null, null, null, null];
                                }
                                item.search[i] = txt;
                            }
                            else if (item.search && item.search[i]) {
                                item.search[i] = null;
                            }
                        }
                    }
                };
                SearchService.prototype.isSearchPass = function (item, i) {
                    return (item.search) && (item.search[i]);
                };
                SearchService = __decorate([
                    __param(0, core_1.Inject(model_service_1.ModelService)), 
                    __metadata('design:paramtypes', [Object])
                ], SearchService);
                return SearchService;
            }());
            exports_1("SearchService", SearchService);
        }
    }
});
//# sourceMappingURL=search.service.js.map