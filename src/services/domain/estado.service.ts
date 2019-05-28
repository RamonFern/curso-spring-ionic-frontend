import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EstadoDTO } from "../../models/Estado.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class EstadoService {

    constructor(public http: HttpClient){
    }

    findAll() : Observable<EstadoDTO[]> {/**${API_CONFIG.baseUrl} */
        return this.http.get<EstadoDTO[]>('http://localhost:8080/estados');
    }
}