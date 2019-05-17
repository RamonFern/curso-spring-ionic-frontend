import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/cliente.service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  cliente : ClienteDTO;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
   let localUser = this.storage.getLocalUser();
   if(localUser && localUser.email) {
     this.clienteService.findByEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response;
        //buscar imagem
        this.getImageIfExists();
      }, 
        error => {});
   }
  }

  getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id)
    .subscribe(response => {
      this.cliente.imageUrl = 'https://s3-sa-east-1.amazonaws.com/curso-spring-ionic-rvf/cp'+ this.cliente.id + '.jpg';
     // this.cliente.imageUrl = '${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg';
    }, 
    error => {});
  }

}
