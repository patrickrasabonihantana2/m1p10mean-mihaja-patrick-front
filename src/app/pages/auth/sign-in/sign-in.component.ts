import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurLogin } from 'src/app/models/utilisateur/utilisateur-login';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  private redirectUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['manohisoa.randria@gmail.com', Validators.required],
      mdp: ['Manohisoa', Validators.required]
    })
  }

  onSignIn(): void {
    let utilisateurLogin: UtilisateurLogin = {
      email: this.loginForm.value.email,
      mdp: this.loginForm.value.mdp
    };
    this.authService.login(utilisateurLogin).subscribe(
      utilisateur => {
        this.router.navigate(['/garage']);
      }
    );
  }
}
