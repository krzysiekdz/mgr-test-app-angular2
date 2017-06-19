System.register(["angular2/core", "./header/header.component", "./init/init.component", './add/add.component'], function(exports_1, context_1) {
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
    var core_1, header_component_1, init_component_1, add_component_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (init_component_1_1) {
                init_component_1 = init_component_1_1;
            },
            function (add_component_1_1) {
                add_component_1 = add_component_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent() {
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'app-menu',
                        template: "\n   \t<div class=\"menu\">\n   \t\t<div>\n\t\t\t<menu-header></menu-header>\n\t\t\t<menu-init></menu-init>\n\t\t\t<menu-add></menu-add>\n   \t\t</div>\n   \t</div>\n   \t",
                        directives: [header_component_1.HeaderComponent, init_component_1.InitComponent, add_component_1.MenuAddComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map