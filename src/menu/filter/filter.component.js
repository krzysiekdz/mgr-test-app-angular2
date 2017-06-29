System.register(["angular2/core", '../../services/model.service', '../../services/core-operations/filter.service'], function(exports_1, context_1) {
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
    var core_1, model_service_1, filter_service_1;
    var MenuFilterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            },
            function (filter_service_1_1) {
                filter_service_1 = filter_service_1_1;
            }],
        execute: function() {
            MenuFilterComponent = (function () {
                function MenuFilterComponent(ms, filterService) {
                    this.filterService = filterService;
                    this.filterState = false;
                    this.model = ms.getModel();
                }
                MenuFilterComponent.prototype.filterItems = function () {
                    if (this.filterState) {
                        this.filterService.unfilter();
                    }
                    else {
                        this.filterService.filter();
                    }
                };
                MenuFilterComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-filter',
                        templateUrl: '../src/menu/filter/filter.template.html',
                        providers: [model_service_1.ModelService, filter_service_1.FilterService],
                    }), 
                    __metadata('design:paramtypes', [model_service_1.ModelService, filter_service_1.FilterService])
                ], MenuFilterComponent);
                return MenuFilterComponent;
            }());
            exports_1("MenuFilterComponent", MenuFilterComponent);
        }
    }
});
//# sourceMappingURL=filter.component.js.map