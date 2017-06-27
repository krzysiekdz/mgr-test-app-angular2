System.register(['angular2/core', '../model.service', '../random.service', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, model_service_1, random_service_1, http_1;
    var FetchService;
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
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            FetchService = (function () {
                function FetchService(http, ms, r) {
                    this.http = http;
                    this.r = r;
                    this.dataUrl = 'http://localhost:8080/data-files/data';
                    this.model = ms.getModel();
                }
                FetchService.prototype.fetch = function (count) {
                    var dataUrl = this.dataUrl + count + '.json';
                    // var model = this.model;
                    this.http.get(dataUrl)
                        .map(function (res) { return res.json(); })
                        .subscribe(this.updateData.bind(this));
                    // var inputInit = document.getElementsByName('input-init')[0];
                    // Observable.fromEvent(inputInit, 'keyup')
                    // 	.map(e => e.target.value)
                    // 	.filter(str => str.length > 3)
                    // 	.debounceTime(400)
                    // 	.distinctUntilChanged()
                    // 	.flatMap(searchTerm => {
                    // 		var promise = $.getJSON(dataUrl);
                    // 		// return Observable.fromPromise(promise);
                    // 		return promise;
                    // 	})
                    // 	.subscribe(data => console.log(data));
                };
                FetchService.prototype.updateData = function (data) {
                    this.model.data = data;
                    this.r.setId(data.length + 1);
                    // console.log(this.model);
                };
                FetchService = __decorate([
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Inject(model_service_1.ModelService)),
                    __param(2, core_1.Inject(random_service_1.RandomService)), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], FetchService);
                return FetchService;
            }());
            exports_1("FetchService", FetchService);
        }
    }
});
//# sourceMappingURL=fetch.service.js.map