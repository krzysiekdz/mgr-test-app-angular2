System.register(["angular2/core", '../../services/model.service', '../../directives/edit.directive'], function(exports_1, context_1) {
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
    var core_1, model_service_1, edit_directive_1;
    var MenuEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            },
            function (edit_directive_1_1) {
                edit_directive_1 = edit_directive_1_1;
            }],
        execute: function() {
            MenuEditComponent = (function () {
                function MenuEditComponent(ms) {
                    this.model = ms.getModel();
                    // this.model.data[0] = {c1: 'ala'};
                }
                MenuEditComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-edit',
                        templateUrl: '../src/menu/edit/edit.template.html',
                        providers: [model_service_1.ModelService],
                        directives: [edit_directive_1.EditDirective],
                    }), 
                    __metadata('design:paramtypes', [model_service_1.ModelService])
                ], MenuEditComponent);
                return MenuEditComponent;
            }());
            exports_1("MenuEditComponent", MenuEditComponent);
        }
    }
});
//# sourceMappingURL=edit.component.js.map