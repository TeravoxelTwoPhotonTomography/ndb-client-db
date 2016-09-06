interface IFluorophore extends IApiNamedResourceItem<IFluorophore> {
}

interface IFluorophoreResource extends IDataServiceResource<IFluorophore> {
}

class FluorophoreService extends DataService<IFluorophore> {

    public static $inject = [
        "$resource",
        "$rootScope"
    ];

    constructor($resource: ng.resource.IResourceService, protected $rootScope: ng.IScope) {
        super($resource, $rootScope);
    }

    protected createResource(location: string): IFluorophoreResource {
        return <IFluorophoreResource>this.$resource(location + "fluorophores/:id", {id: "@id"}, {});
    }

    public get fluorophores(): any {
        return this.items;
    }
}
