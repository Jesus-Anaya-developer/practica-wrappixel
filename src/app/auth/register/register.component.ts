import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControlOptions } from '@angular/forms';
//import swal from 'sweetalert';

import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm: FormGroup = this.fb.group({

    nombre: ['jesus', [
      Validators.required,
      Validators.minLength(3),
    ]],

    email: ['jesus@gmail.com', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],

    password: ['Jesus12345', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,}$/)]],

    password2: ['Jesus12345', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,}$/)]],

    terminos: [true, Validators.requiredTrue]
  }, {
    validators: this.passwordsIguales('password', 'passwordConfirm')
  } as FormControlOptions);

  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) { }

  crearUsuario() {
    this.usuarioService.crearUsuario(this.registerForm.value)
      .subscribe({
        next: (resp: any) => {
          console.log('Usuario creado');
          console.log(resp);
        },
        error: (err: any) => {
          console.warn(err.error.msg);
        }
      });


  }

  campoNoValido(campo: string): boolean {

    if (this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }

  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ((pass1 !== pass2) && this.formSubmitted) {
      return true;
    } else {
      return false;
    }

  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {

    return (formGroup: FormGroup) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null)
      } else {
        pass2Control?.setErrors({ noEsIgual: true })
      }
    }
  }


}
