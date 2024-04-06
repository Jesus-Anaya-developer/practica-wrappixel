import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControlOptions } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements AfterViewInit {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  public loginForm: FormGroup = this.fb.group({

    email: [localStorage.getItem('email') || '', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],

    password: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,}$/)]],

    remember: [false]
  }, {

  } as FormControlOptions);

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token" + response.credential);
    this.usuarioService.loginGoogle(response.credential)
      .subscribe(resp => {
        this.router.navigateByUrl('/dashboard');
      });
  }

  googleInit() {
    google.accounts.id.initialize({
      client_id: "305258200671-4dp28hp1796snc712e4jn55jha2gaefu.apps.googleusercontent.com",
      callback: (response: any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  login() {

    console.log(this.loginForm.value);

    this.usuarioService.login(this.loginForm.value)
      .subscribe({
        next: resp => {
          console.log(resp);
          //this.router.navigateByUrl('/dashboard');
          // * Guardar email en localStorage
          if (this.loginForm.get('remember')?.value) {
            localStorage.setItem('email', this.loginForm.get('email')?.value);
          } else {
            localStorage.removeItem('email');
          }

        },
        error: err => {
          Swal.fire('Error', err.error.msg, 'error');
        }
      });
  }


}
