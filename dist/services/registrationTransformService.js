var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./dataService"], function (require, exports, dataService_1) {
    "use strict";
    var RegistrationTransformService = (function (_super) {
        __extends(RegistrationTransformService, _super);
        function RegistrationTransformService($resource) {
            _super.call(this, $resource);
        }
        RegistrationTransformService.prototype.resourcePath = function () {
            return "registrationtransforms";
        };
        Object.defineProperty(RegistrationTransformService.prototype, "transforms", {
            get: function () {
                return this._entityStore.items;
            },
            enumerable: true,
            configurable: true
        });
        RegistrationTransformService.$inject = [
            "$resource"
        ];
        return RegistrationTransformService;
    }(dataService_1.NamedItemDataService));
    exports.RegistrationTransformService = RegistrationTransformService;
});
