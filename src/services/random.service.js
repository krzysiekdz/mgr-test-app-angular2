System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RandomService;
    return {
        setters:[],
        execute: function() {
            RandomService = (function () {
                function RandomService() {
                    this.id = 1;
                }
                RandomService.prototype.rand = function (mod) {
                    return Math.floor(Math.random() * 1000) % mod;
                };
                RandomService.prototype.randomObjects = function (count) {
                    var col1 = ['John', 'Paulo', 'Anthony', 'Roger', 'Graham', 'Robin', 'Terry', 'Erick', 'Michael', 'Carol', 'Simon', 'Sir'];
                    var col2 = ['Champman', 'Cleese', 'Gillman', 'Idle', 'Jones', 'Palin', 'Cohen', 'Centurion', 'Dirk', 'Lorett', 'Lancelot', 'Robin', 'Galahad'];
                    // var col3 = ['Przywódca', 'Mędrzec', 'Strażnik', 'Rewolucjonista', 'Prorok', 'Asystent', 'Wokalista', 'Urzędnik', 'Handlarz', 'Rycerz', 'Czarnoksiężnik'];
                    var col3 = ['Leader', 'Wise man', 'Warden', 'Revolutionary', 'Prophet', 'Assistant', 'Singer', 'Officer', 'Tradesman', 'Knight', 'Wizard'];
                    var col4 = [100, 200, 500, 1000, 1500, 2000, 3000, 5000, 8000, 10000];
                    var data = [];
                    for (var i = 0; i < count; i++) {
                        data.push({
                            id: this.id++,
                            c1: col1[this.rand(col1.length)],
                            c2: col2[this.rand(col2.length)],
                            c3: col3[this.rand(col3.length)],
                            c4: col4[this.rand(col4.length)]
                        });
                    }
                    return data;
                };
                RandomService.prototype.resetId = function () {
                    this.id = 1;
                };
                RandomService.prototype.setId = function (i) {
                    this.id = i;
                };
                return RandomService;
            }());
            exports_1("RandomService", RandomService);
        }
    }
});
//# sourceMappingURL=random.service.js.map