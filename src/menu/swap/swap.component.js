System.register(["angular2/core", '../../services/model.service', '../../services/random.service', '../../services/parseValue.service', '../../services/core-operations/swap.service'], function(exports_1, context_1) {
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
    var core_1, model_service_1, random_service_1, parseValue_service_1, swap_service_1;
    var MenuSwapComponent;
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
            function (swap_service_1_1) {
                swap_service_1 = swap_service_1_1;
            }],
        execute: function() {
            MenuSwapComponent = (function () {
                function MenuSwapComponent(swapService) {
                    this.swapService = swapService;
                }
                MenuSwapComponent.prototype.swapFirst = function () {
                    this.swapService.swapFirst();
                };
                MenuSwapComponent.prototype.swapMid = function () {
                    this.swapService.swapMid();
                };
                MenuSwapComponent.prototype.swapLast = function () {
                    this.swapService.swapLast();
                };
                MenuSwapComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-swap',
                        templateUrl: '../src/menu/swap/swap.template.html',
                        providers: [swap_service_1.SwapService, random_service_1.RandomService, model_service_1.ModelService, parseValue_service_1.ParseValueService],
                    }), 
                    __metadata('design:paramtypes', [swap_service_1.SwapService])
                ], MenuSwapComponent);
                return MenuSwapComponent;
            }());
            exports_1("MenuSwapComponent", MenuSwapComponent);
        }
    }
});
//# sourceMappingURL=swap.component.js.map