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
    var SwapService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            }],
        execute: function() {
            SwapService = (function () {
                function SwapService(ms) {
                    this.ms = ms;
                    this.model = ms.getModel();
                }
                SwapService.prototype.swapFirst = function () {
                    var data = this.model.data;
                    if (data.length > 1) {
                        var i = 0;
                        var j = 1;
                        this.swap(i, j);
                    }
                };
                SwapService.prototype.swapMid = function () {
                    var data = this.model.data;
                    if (data.length > 1) {
                        var i = Math.floor(data.length / 2) - 1;
                        var j = i + 1;
                        this.swap(i, j);
                    }
                };
                SwapService.prototype.swapLast = function () {
                    var data = this.model.data;
                    if (data.length > 1) {
                        var i = data.length - 2;
                        var j = i + 1;
                        this.swap(i, j);
                    }
                };
                SwapService.prototype.swap = function (i, j) {
                    var data = this.model.data;
                    var temp = data[i];
                    this.model.data[i] = data[j];
                    this.model.data[j] = temp;
                };
                SwapService = __decorate([
                    __param(0, core_1.Inject(model_service_1.ModelService)), 
                    __metadata('design:paramtypes', [Object])
                ], SwapService);
                return SwapService;
            }());
            exports_1("SwapService", SwapService);
        }
    }
});
//# sourceMappingURL=swap.service.js.map