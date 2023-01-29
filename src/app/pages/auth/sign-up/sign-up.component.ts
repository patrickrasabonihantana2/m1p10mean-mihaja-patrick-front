import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message/message';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalMessageService } from 'src/app/services/global-message.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  inscriptionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: GlobalMessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      mdp: ['', Validators.required],
      mdpConfirm: ['', Validators.required]
    })
  }

  onSignUp(): void {
    if(this.inscriptionForm.value.mdp == this.inscriptionForm.value.mdpConfirm) {
      let utilisateur: Utilisateur = {
        nom: this.inscriptionForm.value.nom,
        prenom: this.inscriptionForm.value.prenom,
        login: {
          email: this.inscriptionForm.value.email,
          mdp: this.inscriptionForm.value.mdp
        }
      };
      this.authService.inscription(utilisateur).subscribe(
        utilisateur => {
          this.router.navigate(['/auth/login']);
        }
      );
    } else {
      this.messageService.clear();
      this.messageService.add(Message.error('Mot de passe different'));
    }
  }

}
