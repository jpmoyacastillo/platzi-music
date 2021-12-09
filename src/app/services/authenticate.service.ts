import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private storage: Storage,
  ) { }
  async loginUser(credential) {
    // EN CASO DE CONECTAR A BACKEND CON SERVIDOR
    // return fetch('URL_SERVIDOR');
    const user = await this.storage.get('user');
      return new Promise ((accept, reject)=>{
        // if(credential.email ==='test@test.com' && credential.password ==='12345') {
        //   accept('Login correcto');
        // } else {
        //   reject('Login incorrecto');
        // }
        if (user.email === credential.email && user.password === btoa(credential.password)) {
          accept('Login correcto');
        } else {
          reject('Login incorrecto');
        }
      });
  }
  async registerUser(userData) {
    userData.password = btoa(userData.password);
    await this.storage.create();
    await this.storage.set('user', userData);
  }
}
