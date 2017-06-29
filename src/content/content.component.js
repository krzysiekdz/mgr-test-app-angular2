System.register(["angular2/core", '../services/random.service', '../services/model.service', '../services/core-operations/search.service'], function(exports_1, context_1) {
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
    var core_1, random_service_1, model_service_1, search_service_1;
    var ContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (random_service_1_1) {
                random_service_1 = random_service_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            }],
        execute: function() {
            ContentComponent = (function () {
                function ContentComponent(r, ms, searchService) {
                    this.r = r;
                    this.searchService = searchService;
                    this.selectedItem = null;
                    this.model = ms.getModel();
                }
                ContentComponent.prototype.isSearchPass = function (item, i) {
                    return this.searchService.isSearchPass(item, i);
                };
                ContentComponent.prototype.selectItem = function (item) {
                    if (item === this.selectedItem) {
                        this.selectedItem = null;
                    }
                    else {
                        this.selectedItem = item;
                    }
                };
                ContentComponent.prototype.isSelected = function (item) {
                    return this.selectedItem === item;
                };
                ContentComponent.prototype.removeItem = function (item) {
                    var data = this.model.data;
                    var index = data.findIndex(function (it) { return it.id === item.id; });
                    if (index > -1) {
                        data.splice(index, 1);
                    }
                };
                ContentComponent = __decorate([
                    core_1.Component({
                        selector: 'app-content',
                        templateUrl: '../src/content/content.template.html',
                        providers: [random_service_1.RandomService, model_service_1.ModelService, search_service_1.SearchService]
                    }), 
                    __metadata('design:paramtypes', [random_service_1.RandomService, model_service_1.ModelService, search_service_1.SearchService])
                ], ContentComponent);
                return ContentComponent;
            }());
            exports_1("ContentComponent", ContentComponent);
        }
    }
});
//# sourceMappingURL=content.component.js.map