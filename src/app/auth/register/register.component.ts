import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({

    nombre: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.required
    ]],

    email: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],

    password: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.required,
      Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,}$/)]],

    passwordConfirm: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.required,
      Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,}$/)]],

    terminos: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder) { }

  crearUsuario() {
    this.formSubmitted = true;
    console.log(this.registerForm.value);
  }

  campoNoValido(campo: string): boolean {
    return this.registerForm.get(campo)?.invalid && this.formSubmitted || false;
  }

}
