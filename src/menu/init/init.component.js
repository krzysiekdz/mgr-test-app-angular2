System.register(["angular2/core", '../../services/model.service', '../../services/random.service', '../../services/parseValue.service', '../../services/add.service'], function(exports_1, context_1) {
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
    var core_1, model_service_1, random_service_1, parseValue_service_1, add_service_1;
    var InitComponent;
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
            },
            function (add_service_1_1) {
                add_service_1 = add_service_1_1;
            }],
        execute: function() {
            InitComponent = (function () {
                function InitComponent(addService) {
                    this.addService = addService;
                    this.initCount = '';
                }
                InitComponent.prototype.initWithData = function (count) {
                    this.addService.addFirst(count);
                };
                InitComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-init',
                        templateUrl: '../src/menu/init/init.template.html',
                        providers: [add_service_1.AddService, random_service_1.RandomService, model_service_1.ModelService, parseValue_service_1.ParseValueService],
                    }), 
                    __metadata('design:paramtypes', [add_service_1.AddService])
                ], InitComponent);
                return InitComponent;
            }());
            exports_1("InitComponent", InitComponent);
        }
    }
});
//# sourceMappingURL=init.component.js.map