export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}

export enum ProductActionsTypes {
    GET_ALL_PRODUCTS = "[Product] Get All Products",
    GET_SELECTED_PRODUCTS = "[Product] Get Selected Products",
    GET_AVAILABLE_PRODUCTS = "[Product] Get Available Products",
    SEARCH_PRODUCTS = "[Product] Search Products",
    NEW_PRODUCT = "[Product] New Product",
    SELECT_PRODUCT = "[Product] Select a given product",
    DELETE_PRODUCT ="[Product] Delete a product",
    EDIT_PRODUCT = "[Product] Edit a product"

}

export interface AppDataState<T> {
    dataState? : DataStateEnum,
    data? : T,
    errorMessage? : string
}

export interface ActionEvent {
    type : ProductActionsTypes,
    payload? : any
}