System.register(["angular2/core", '../../services/model.service', '../../services/random.service'], function(exports_1, context_1) {
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
    var core_1, model_service_1, random_service_1;
    var HeaderComponent;
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
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(ms, r) {
                    this.ms = ms;
                    this.r = r;
                    this.title = "AngularJS 2";
                    this.model = ms.getModel();
                }
                HeaderComponent.prototype.clear = function () {
                    this.model.data = [];
                    this.r.resetId();
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-header',
                        template: "\n   \t<div class=\"div-header\">\n        <span class=\"label label-info header\">\n        \t{{ title }}\n        </span>    \n        <button class=\"btn btn-default btn-clear\" name=\"clear\" (click)=\"clear()\">\n        \tclear\n        </button> \n    </div>\n   \t",
                        providers: [model_service_1.ModelService, random_service_1.RandomService],
                    }), 
                    __metadata('design:paramtypes', [model_service_1.ModelService, random_service_1.RandomService])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map