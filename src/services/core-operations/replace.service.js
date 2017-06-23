System.register(['angular2/core', '../model.service', '../random.service', '../parseValue.service'], function(exports_1, context_1) {
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
    var core_1, model_service_1, random_service_1, parseValue_service_1;
    var ReplaceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            },
            function (random_service_1_1) {
                random_service_1 = random_service_1_1;
            },
            function (parseValue_service_1_1) {
                parseValue_service_1 = parseValue_service_1_1;
            }],
        execute: function() {
            ReplaceService = (function () {
                function ReplaceService(r, ms, parse) {
                    this.r = r;
                    this.ms = ms;
                    this.parse = parse;
                    this.min = 1;
                    this.max = 5000;
                    this.model = ms.getModel();
                }
                ReplaceService.prototype.replaceFirst = function (count) {
                    var c = this.parse.parseValue(count, this.min, this.max);
                    var data = this.model.data;
                    if (data.length >= c) {
                        var newData = this.r.randomObjects(c);
                        for (var i = 0; i < c; i++) {
                            data[i] = newData[i];
                        }
                    }
                };
                ReplaceService.prototype.replaceMid = function (count) {
                    var c = this.parse.parseValue(count, this.min, this.max);
                    var data = this.model.data;
                    if (data.length >= c) {
                        var newData = this.r.randomObjects(c);
                        var start = Math.floor(data.length / 2) - Math.floor(c / 2);
                        var end = start + c;
                        for (var i = start, j = 0; i < end; i++, j++) {
                            data[i] = newData[j];
                        }
                    }
                };
                ReplaceService.prototype.replaceLast = function (count) {
                    var c = this.parse.parseValue(count, this.min, this.max);
                    var data = this.model.data;
                    if (data.length >= c) {
                        var newData = this.r.randomObjects(c);
                        var start = data.length - c;
                        var end = start + c;
                        for (var i = start, j = 0; i < end; i++, j++) {
                            data[i] = newData[j];
                        }
                    }
                };
                ReplaceService = __decorate([
                    __param(0, core_1.Inject(random_service_1.RandomService)),
                    __param(1, core_1.Inject(model_service_1.ModelService)),
                    __param(2, core_1.Inject(parseValue_service_1.ParseValueService)), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], ReplaceService);
                return ReplaceService;
            }());
            exports_1("ReplaceService", ReplaceService);
        }
    }
});
//# sourceMappingURL=replace.service.js.map