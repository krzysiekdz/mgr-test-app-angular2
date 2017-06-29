System.register(['angular2/core', '../services/model.service'], function(exports_1, context_1) {
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
    var core_1, model_service_1;
    var EditDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            }],
        execute: function() {
            EditDirective = (function () {
                function EditDirective(el, renderer, ms) {
                    this.el = el;
                    this.renderer = renderer;
                    this.model = ms.getModel();
                }
                EditDirective.prototype.onInput = function (e) {
                    var data = this.model.data;
                    if (data.length > 0) {
                        data[0].c1 = e.target.value;
                    }
                    // console.log(this.el.nativeElement);
                    // this.renderer.setElementStyle(this.el.nativeElement, 'width', '100px');
                };
                EditDirective = __decorate([
                    core_1.Directive({
                        selector: '[editFirstDataElement]',
                        host: {
                            '(input)': 'onInput($event)',
                        },
                        providers: [model_service_1.ModelService],
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, model_service_1.ModelService])
                ], EditDirective);
                return EditDirective;
            }());
            exports_1("EditDirective", EditDirective);
        }
    }
});
//# sourceMappingURL=edit.directive.js.map