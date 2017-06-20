System.register(['angular2/core', './model.service', './random.service', './parseValue.service'], function(exports_1, context_1) {
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
    var AddService;
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
            AddService = (function () {
                function AddService(r, ms, parse) {
                    this.r = r;
                    this.ms = ms;
                    this.parse = parse;
                    this.min = 1;
                    this.max = 5000;
                    this.model = ms.getModel().model;
                }
                AddService.prototype.addFirst = function (count) {
                    var c = this.parse.parseValue(count, this.min, this.max);
                    var newData = this.r.randomObjects(c);
                    this.model.data = newData.concat(this.model.data);
                };
                AddService.prototype.addMid = function (count) {
                    var c = this.parse.parseValue(count, this.min, this.max);
                    var newData = this.r.randomObjects(c);
                    var mid = Math.floor(this.model.data.length / 2);
                    var args = [mid, 0]; //position mid, 0 removes - for splice function 
                    args = args.concat(newData); //mid, 0 + newData -> args for splice
                    Array.prototype.splice.apply(this.model.data, args);
                };
                AddService.prototype.addLast = function (count) {
                    var c = this.parse.parseValue(count, this.min, this.max);
                    var newData = this.r.randomObjects(c);
                    this.model.data = this.model.data.concat(newData);
                };
                AddService = __decorate([
                    __param(0, core_1.Inject(random_service_1.RandomService)),
                    __param(1, core_1.Inject(model_service_1.ModelService)),
                    __param(2, core_1.Inject(parseValue_service_1.ParseValueService)), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], AddService);
                return AddService;
            }());
            exports_1("AddService", AddService);
        }
    }
});
//# sourceMappingURL=add.service.js.map