import { HttpClient } from "@angular/common/http";
import { CredenciaisDTO } from "../models/credencias.dto";
import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService{

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient, public storage: StorageService){

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

    refreshToken(){

        return this.http.post(
            /** '${API_CONFIG.baseUrl}/login',*/
            'http://localhost:8080/auth/refresh_token',
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue : string) {
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}