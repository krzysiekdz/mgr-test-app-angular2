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
    var UpdateService;
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
            UpdateService = (function () {
                function UpdateService(r, ms, parse) {
                    this.r = r;
                    this.ms = ms;
                    this.parse = parse;
                    this.min = 1;
                    this.max = 5000;
                    this.model = ms.getModel();
                }
                UpdateService.prototype.updateFirst = function (count) {
                    var c = this.parse.parseValue(count, this.min, this.max);
                    var data = this.model.data;
                    if (data.length >= c) {
                        var newData = this.r.randomObjects(c);
                        for (var i = 0; i < c; i++) {
                            this.update(data[i], newData[i]);
                        }
                    }
                };
                UpdateService.prototype.updateMid = function (count) {
                    var c = this.parse.parseValue(count, this.min, this.max);
                    var data = this.model.data;
                    if (data.length >= c) {
                        var newData = this.r.randomObjects(c);
                        var start = Math.floor(data.length / 2) - Math.floor(c / 2);
                        var end = start + c;
                        for (var i = start, j = 0; i < end; i++, j++) {
                            this.update(data[i], newData[j]);
                        }
                    }
                };
                UpdateService.prototype.updateLast = function (count) {
                    var c = this.parse.parseValue(count, this.min, this.max);
                    var data = this.model.data;
                    if (data.length >= c) {
                        var newData = this.r.randomObjects(c);
                        var start = data.length - c;
                        var end = start + c;
                        for (var i = start, j = 0; i < end; i++, j++) {
                            this.update(data[i], newData[j]);
                        }
                    }
                };
                UpdateService.prototype.partialUpdate = function (every) {
                    var e = this.parse.parseValue(every, this.min, 100);
                    var data = this.model.data;
                    var count = Math.ceil(data.length / e);
                    if (data.length > 0) {
                        var newData = this.r.randomObjects(count);
                        for (var i = 0, j = 0; i < data.length; i += e, j++) {
                            this.update(data[i], newData[j]);
                        }
                    }
                };
                UpdateService.prototype.update = function (item, newItem) {
                    item.id = newItem.id;
                    item.c1 = newItem.c1;
                    item.c2 = newItem.c2;
                    item.c3 = newItem.c3;
                    item.c4 = newItem.c4;
                };
                UpdateService = __decorate([
                    __param(0, core_1.Inject(random_service_1.RandomService)),
                    __param(1, core_1.Inject(model_service_1.ModelService)),
                    __param(2, core_1.Inject(parseValue_service_1.ParseValueService)), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], UpdateService);
                return UpdateService;
            }());
            exports_1("UpdateService", UpdateService);
        }
    }
});
//# sourceMappingURL=update.service.js.map