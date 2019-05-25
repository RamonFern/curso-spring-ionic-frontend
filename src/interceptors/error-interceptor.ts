
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../services/storage.service";
import { AlertController } from "ionic-angular";





@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    constructor(public storage: StorageService, public alertCtrl: AlertController) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .catch((error, caught) => {

            let errorObj = error;
            if( errorObj.error ) {
                errorObj = errorObj.error;
            }
            if(!errorObj.status){
                errorObj = JSON.parse(errorObj);
            }

            console.log("Erro detectado pelo interceptor:");
            console.log(errorObj);
            switch(errorObj.status){
               
                case 401:
                    this.handle401();
                    break;
                case 403:
                    this.handle403();
                    break;
                default:
                    console.log("Erro: sem implementação...kkk");//resolver probelma aqui...
                    console.log(errorObj);
            };

            return Observable.throw(errorObj);
        }) as any;
    }
   
    handle403() {
        this.storage.setLocalUser(null);
    }
    handle401() {
        const alert = this.alertCtrl.create({
            title: 'Erro 401: falha de autenticação',
            subTitle: 'Email ou senha incorretos',
            buttons: ['OK']
          });
          alert.present();
        }
    }
    
     
    
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};