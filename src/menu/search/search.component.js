System.register(["angular2/core", '../../services/model.service', '../../services/core-operations/search.service'], function(exports_1, context_1) {
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
    var core_1, model_service_1, search_service_1;
    var MenuSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            }],
        execute: function() {
            MenuSearchComponent = (function () {
                function MenuSearchComponent(ms, searchService) {
                    this.searchService = searchService;
                    this.model = ms.getModel();
                }
                MenuSearchComponent.prototype.search = function (event, text) {
                    if (event !== null && event) {
                        this.searchService.search(event.target.value);
                    }
                    else if (text) {
                        this.searchService.search(text);
                    }
                };
                MenuSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-search',
                        templateUrl: '../src/menu/search/search.template.html',
                        providers: [model_service_1.ModelService, search_service_1.SearchService],
                    }), 
                    __metadata('design:paramtypes', [model_service_1.ModelService, search_service_1.SearchService])
                ], MenuSearchComponent);
                return MenuSearchComponent;
            }());
            exports_1("MenuSearchComponent", MenuSearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map