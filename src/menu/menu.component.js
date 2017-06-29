System.register(["angular2/core", "./header/header.component", "./init/init.component", './add/add.component', './replace/replace.component', './update/update.component', './swap/swap.component', './fetch/fetch.component', './input/input.component', './edit/edit.component', './filter/filter.component', './search/search.component'], function(exports_1, context_1) {
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
    var core_1, header_component_1, init_component_1, add_component_1, replace_component_1, update_component_1, swap_component_1, fetch_component_1, input_component_1, edit_component_1, filter_component_1, search_component_1;
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
            },
            function (replace_component_1_1) {
                replace_component_1 = replace_component_1_1;
            },
            function (update_component_1_1) {
                update_component_1 = update_component_1_1;
            },
            function (swap_component_1_1) {
                swap_component_1 = swap_component_1_1;
            },
            function (fetch_component_1_1) {
                fetch_component_1 = fetch_component_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            },
            function (filter_component_1_1) {
                filter_component_1 = filter_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent() {
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'app-menu',
                        template: "\n   \t<div class=\"menu\">\n   \t\t<div>\n   \t\t\t<menu-header></menu-header>\n   \t\t\t<menu-init></menu-init>\n   \t\t\t<menu-add></menu-add>\n            <menu-replace></menu-replace>\n            <menu-update></menu-update>\n            <menu-swap></menu-swap>\n            <menu-fetch></menu-fetch>\n            <menu-input></menu-input>\n            <menu-edit></menu-edit>\n            <menu-filter></menu-filter>\n            <menu-search></menu-search>\n   \t\t</div>\n   \t</div>\n   \t",
                        directives: [header_component_1.HeaderComponent, init_component_1.InitComponent, add_component_1.MenuAddComponent,
                            replace_component_1.MenuReplaceComponent, update_component_1.MenuUpdateComponent, swap_component_1.MenuSwapComponent,
                            fetch_component_1.MenuFetchComponent, input_component_1.MenuInputComponent, edit_component_1.MenuEditComponent,
                            filter_component_1.MenuFilterComponent, search_component_1.MenuSearchComponent],
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