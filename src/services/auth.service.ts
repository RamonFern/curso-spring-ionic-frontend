import { HttpClient } from "@angular/common/http";
import { CredenciaisDTO } from "../models/credencias.dto";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{

    constructor(public http: HttpClient){

    }

    authenticate(creds: CredenciaisDTO){

        return this.http.post(
            /** '${API_CONFIG.baseUrl}/login',*/
            'http://localhost:8080/login',
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }
}