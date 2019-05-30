import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService {

    constructor(public http: HttpClient) {
    }

    findByCategoria(categoria_id : string) {
        //return this.http.get('${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}');
        return this.http.get('http://localhost:8080/produtos/?categorias='+ categoria_id);
    }

    getSmallImageFromBucket(id : string) : Observable<any> {
        //let url = '${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg'
        let url = 'https://s3-sa-east-1.amazonaws.com/curso-spring-ionic-rvf/prod'+ id + '-small.jpg'
        return this.http.get(url, {responseType : 'blob'});

    }

}