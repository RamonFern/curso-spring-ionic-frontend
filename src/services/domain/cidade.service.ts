import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CidadeDTO } from "../../models/Cidade.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CidadeService {

    constructor(public http: HttpClient){
    }

    findAll(estado_id : string) : Observable<CidadeDTO[]> {/**${API_CONFIG.baseUrl} */
        return this.http.get<CidadeDTO[]>('http://localhost:8080/estados/'+ estado_id +'/cidades');
    }
}