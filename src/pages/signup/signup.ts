import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup =this.formBuilder.group({
        nome: ['sophia', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['sophia@gmail.com', [Validators.required, Validators.email]],
        tipo: ['1', [Validators.required]],
        cpfOuCnpj: ['1212121212', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha: ['123', [Validators.required]],
        logradouro: ['Rua via', [Validators.required]],
        numero: ['21', [Validators.required]],
        complemento: ['apto 203', []],
        bairro: ['Paraiso', []],
        cep: ['65150000', [Validators.required]],
        telefone1: ['33451539', [Validators.required]],
        telefone2: [' ', []],
        telefone3: [' ', []],
        estadoId: [null, [Validators.required]],
        cidadeId: [null, [Validators.required]]   
      });
  }

  

 
  signupUser() {
    console.log("enviou o form...");
  }
}
