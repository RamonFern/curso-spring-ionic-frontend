import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CategoriaDTO } from "../../models/categoria.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient){
    }

    findAll() : Observable<CategoriaDTO[]> {/**${API_CONFIG.baseUrl} */
        return this.http.get<CategoriaDTO[]>('http://localhost:8080/categoriass');
    }
}