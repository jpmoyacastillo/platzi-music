import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credential) {
    // EN CASO DE CONECTAR A BACKEND CON SERVIDOR
    // return fetch('URL_SERVIDOR');
    return new Promise ((accept, reject)=>{
      if(credential.email ==='test@test.com' && credential.password ==='12345') {
        accept('Login correcto');
      } else {
        reject('Login incorrecto');
      }
    });
  }
}
