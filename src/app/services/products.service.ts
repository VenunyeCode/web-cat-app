import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { utils } from "utils";
import { Product } from "../models/product.model";
@Injectable({providedIn:"root"})
export class ProductsService {
    constructor(private http:HttpClient){

    }

    getAllProducts():Observable<Product[]>{
        let host = utils.host
        return this.http.get<Product[]>(host+"/products");
    }

    getSelectedProducts():Observable<Product[]>{
        let host = utils.host;
        return this.http.get<Product[]>(host+"/products?selected=true");
    }

    getAvailableProducts():Observable<Product[]>{
        let host = utils.host;
        return this.http.get<Product[]>(host+"/products?available=true");
    }

}