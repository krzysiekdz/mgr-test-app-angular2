System.register(["angular2/core", '../services/random.service', '../services/model.service'], function(exports_1, context_1) {
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
    var core_1, random_service_1, model_service_1;
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
            }],
        execute: function() {
            ContentComponent = (function () {
                function ContentComponent(r, ms) {
                    this.r = r;
                    this.model = ms.getModel();
                    this.model.data = r.randomObjects(5);
                    console.log(this.model);
                }
                ContentComponent.prototype.show = function () {
                    console.log(this.model.data);
                    this.model.data.push(this.r.randomObjects(1)[0]);
                };
                ContentComponent = __decorate([
                    core_1.Component({
                        selector: 'app-content',
                        templateUrl: '../src/content/content.template.html',
                        providers: [random_service_1.RandomService, model_service_1.ModelService]
                    }), 
                    __metadata('design:paramtypes', [random_service_1.RandomService, model_service_1.ModelService])
                ], ContentComponent);
                return ContentComponent;
            }());
            exports_1("ContentComponent", ContentComponent);
        }
    }
});
//# sourceMappingURL=content.component.js.map