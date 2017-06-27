System.register(["angular2/core", '../../services/model.service', '../../services/random.service', '../../services/core-operations/fetch.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, model_service_1, random_service_1, fetch_service_1, http_1;
    var MenuFetchComponent;
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
            function (fetch_service_1_1) {
                fetch_service_1 = fetch_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MenuFetchComponent = (function () {
                function MenuFetchComponent(fetchService) {
                    this.fetchService = fetchService;
                }
                MenuFetchComponent.prototype.fetch = function (count) {
                    this.fetchService.fetch(count);
                };
                MenuFetchComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-fetch',
                        templateUrl: '../src/menu/fetch/fetch.template.html',
                        providers: [fetch_service_1.FetchService, random_service_1.RandomService, model_service_1.ModelService, http_1.HTTP_PROVIDERS],
                    }), 
                    __metadata('design:paramtypes', [fetch_service_1.FetchService])
                ], MenuFetchComponent);
                return MenuFetchComponent;
            }());
            exports_1("MenuFetchComponent", MenuFetchComponent);
        }
    }
});
//# sourceMappingURL=fetch.component.js.map