export interface DataFilter {
    associationName: string;
    customFilters: CustomFilter[];
}

export interface CustomFilter {
    filterColumn: string;
    operator:string,
    filterValue: string;
}