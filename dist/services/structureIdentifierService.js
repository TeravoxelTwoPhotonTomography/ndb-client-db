var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StructureIdentifierService = (function (_super) {
    __extends(StructureIdentifierService, _super);
    function StructureIdentifierService($resource) {
        _super.call(this, $resource);
    }
    StructureIdentifierService.prototype.resourcePath = function () {
        return "structures";
    };
    Object.defineProperty(StructureIdentifierService.prototype, "structures", {
        get: function () {
            return this._entityStore.items;
        },
        enumerable: true,
        configurable: true
    });
    StructureIdentifierService.$inject = [
        "$resource"
    ];
    return StructureIdentifierService;
}(NamedItemDataService));
