System.register(["angular2/core", '../../services/model.service', '../../services/random.service', '../../services/parseValue.service', '../../services/core-operations/update.service'], function(exports_1, context_1) {
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
    var core_1, model_service_1, random_service_1, parseValue_service_1, update_service_1;
    var MenuUpdateComponent;
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
            function (update_service_1_1) {
                update_service_1 = update_service_1_1;
            }],
        execute: function() {
            MenuUpdateComponent = (function () {
                function MenuUpdateComponent(updateService) {
                    this.updateService = updateService;
                    this.updateCount = '';
                }
                MenuUpdateComponent.prototype.updateFirst = function (count) {
                    this.updateService.updateFirst(count);
                };
                MenuUpdateComponent.prototype.updateMid = function (count) {
                    this.updateService.updateMid(count);
                };
                MenuUpdateComponent.prototype.updateLast = function (count) {
                    this.updateService.updateLast(count);
                };
                MenuUpdateComponent.prototype.partialUpdate = function (every) {
                    this.updateService.partialUpdate(every);
                };
                MenuUpdateComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-update',
                        templateUrl: '../src/menu/update/update.template.html',
                        providers: [update_service_1.UpdateService, random_service_1.RandomService, model_service_1.ModelService, parseValue_service_1.ParseValueService],
                    }), 
                    __metadata('design:paramtypes', [update_service_1.UpdateService])
                ], MenuUpdateComponent);
                return MenuUpdateComponent;
            }());
            exports_1("MenuUpdateComponent", MenuUpdateComponent);
        }
    }
});
//# sourceMappingURL=update.component.js.map