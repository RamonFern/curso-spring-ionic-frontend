import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';


@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {


  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "rua Estefânio Saldanha",
        numero: "3996",
        complemento: "Bairro da Princesa",
        bairro: "Centro",
        cep: "65150-000",
        cidade: {
          id: "1",
          nome: "Rosário",
          estado: {
            id: "1",
            nome: "Maranhão"
          }
        }
      },
      {
        id: "2",
        logradouro: "rua da mangabeira",
        numero: "36",
        complemento: "Paraisópolis",
        bairro: "Coalho",
        cep: "12211-928",
        cidade: {
          id: "2",
          nome: "São Paulo",
          estado: {
            id: "2",
            nome: "São Paulo"
          }
        }
      }

    ]
  }

}
