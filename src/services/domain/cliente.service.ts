//import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { ClienteDTO } from "../../models/cliente.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient, public storage: StorageService){
    }

    findByEmail(email : string) : Observable<ClienteDTO> {
        return this.http.get<ClienteDTO>('http://localhost:8080/clientes/email?value='+ email);
            /** http://localhost:8080***${API_CONFIG.baseUrl}/.../**${email} */                          
    }

    getImageFromBucket(id : string) : Observable<any> {
       // let ur = '${API_CONFIG.bucketBaseUrl}/cp${id}.jpg'
        let url = 'https://s3-sa-east-1.amazonaws.com/curso-spring-ionic-rvf/cp'+ id + '.jpg'
        return this.http.get(url, {responseType : 'blob'});
    }
 
    insert(obj : ClienteDTO) {
        return this.http.post(
            //'${API_CONFIG.baseUrl}/clientes',
            'http://localhost:8080/clientes',
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}

 