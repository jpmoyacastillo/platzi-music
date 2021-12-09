import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
registerForm: FormGroup;
  validationMessages = {
    nombre: [
      {type: 'required', message: 'Ingresa solo tu nombre'},
      {type: 'pattern', message: 'Ej: Pedro'},
    ],
    apellido: [
      {type: 'required', message: 'Ingresa solo tu apellido'},
      {type: 'pattern', message: 'Ej: Picapiedra'},
    ],
    email: [
      {type: 'required', message: 'El email es requerido'},
      {type: 'pattern', message: 'Ojo! este no es un email válido'},
    ],
    password: [
      {type: 'required', message: 'El password es requerido'},
      {type: 'pattern', message: 'Minimo 5 letras para el password'},
    ]
  };
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage,
    ) {this.registerForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])),
      apellido: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),
    });
  }

  ngOnInit() {
  }

  register(userData) {
    this.authService.registerUser(userData).then(() =>{
      this.navCtrl.navigateBack('/login');
    });
  }
  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
