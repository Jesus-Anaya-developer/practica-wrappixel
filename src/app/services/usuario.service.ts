import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interfaces';
import { environment } from '../../environments/environment.development';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(formData: RegisterForm) {
    console.log('Creando usuario');
    return this.http.post(`${base_url}/usuarios`, formData);
  }
}
