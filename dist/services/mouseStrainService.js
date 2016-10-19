var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./dataService"], function (require, exports, dataService_1) {
    "use strict";
    var MouseStrainService = (function (_super) {
        __extends(MouseStrainService, _super);
        function MouseStrainService($resource) {
            _super.call(this, $resource);
        }
        MouseStrainService.prototype.resourcePath = function () {
            return "mousestrains";
        };
        Object.defineProperty(MouseStrainService.prototype, "mouseStrains", {
            get: function () {
                return this._entityStore.items;
            },
            enumerable: true,
            configurable: true
        });
        MouseStrainService.$inject = [
            "$resource"
        ];
        return MouseStrainService;
    }(dataService_1.NamedItemDataService));
    exports.MouseStrainService = MouseStrainService;
});
