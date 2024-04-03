import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControlOptions } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup = this.fb.group({

    email: ['jesus@gmail.com', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],

    password: ['Jesus12345', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,}$/)]],

    remember: [true]
  }, {

  } as FormControlOptions);

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  login() {

    console.log(this.loginForm.value);

    this.usuarioService.login(this.loginForm.value)
      .subscribe({
        next: resp => {
          console.log(resp);
          this.router.navigateByUrl('/dashboard');
        },
        error: err => {
          Swal.fire('Error', err.error.msg, 'error');
        }
      });
  }

}
