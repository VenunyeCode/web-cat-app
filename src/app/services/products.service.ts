import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { utils } from "utils";
import { Product } from "../models/product.model";
@Injectable({providedIn:"root"})
export class ProductsService {
    constructor(private http:HttpClient){}

    getAllProducts():Observable<Product[]>{
        let host = (Math.random() > 0.2) ? utils.host : utils.unreachableHost
        return this.http.get<Product[]>(host+"/products");
    }

    getProductById(id : number) : Observable<Product>{
        let host = utils.host;
        return this.http.get<Product>(host + "/products/" + id);
    }

    getSelectedProducts():Observable<Product[]>{
        let host = utils.host;
        return this.http.get<Product[]>(host+"/products?selected=true");
    }

    getAvailableProducts():Observable<Product[]>{
        let host = utils.host;
        return this.http.get<Product[]>(host+"/products?available=true");
    }
    

    searchProducts(keyword : string) : Observable<Product[]>{
        let host = utils.host;
        return this.http.get<Product[]>(host + "/products?name_like="+keyword);
    }

    selectProduct(p : Product) : Observable<Product>{
        let host = utils.host;
        p.selected = !p.selected;
        return this.http.put<Product>(host + "/products/"+p.id, p);
    }

    deleteProduct(p : Product) : Observable<void> {
        let host = utils.host;
        return this.http.delete<void>(host + "/products/" + p.id);
    }

    saveProduct(p : Product) : Observable<Product> {
        let host = utils.host;
        return this.http.post<Product>(host + "/products", p)
    }

    updateProduct(p : Product) : Observable<Product> {
        let host = utils.host;
        return this.http.put<Product>(host + "/products/"+p.id, p);
    }

    

}