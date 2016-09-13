interface IApiItem {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
interface IApiIdNumberItem extends IApiItem {
    idNumber: number;
}
interface IApiNamedItem extends IApiItem {
    name: string;
}
interface IMyResourceClass<T extends IApiItem> extends ng.resource.IResourceClass<ng.resource.IResource<T>> {
    update(obj: any, data: T): any;
}
declare abstract class DataService<T extends IApiItem> {
    protected $resource: ng.resource.IResourceService;
    static $inject: string[];
    protected _entityStore: IEntityStore<T>;
    resourcesAreAvailable: boolean;
    private apiLocation;
    protected dataSource: ng.resource.IResourceClass<ng.resource.IResource<T>>;
    constructor($resource: ng.resource.IResourceService);
    setLocation(resourceLocation: string): Promise<void>;
    refreshData(): Promise<void>;
    update(data: T): void;
    createItem(data: any): Promise<T>;
    find(id: string): T;
    getDisplayName(item: T, defaultValue?: string): string;
    getDisplayNameForId(id: string, defaultValue?: string): string;
    protected abstract resourcePath(): string;
    protected createCustomResourceMethods(): any;
    protected apiUrl: string;
    protected mapQueriedItem(obj: any): T;
    protected registerNewItem(obj: any): T;
    protected registerNewItems(items: any): any;
    protected where(fcn: WhereFunction<T>): T;
    protected whereAll(fcn: WhereFunction<T>): Array<T>;
    private createResource(location);
}
declare abstract class NumberedItemDataService<T extends IApiIdNumberItem> extends DataService<T> {
    findWithIdNumber(id: number): T;
}
declare abstract class NamedItemDataService<T extends IApiNamedItem> extends DataService<T> {
    findWithName(name: string): T;
}
