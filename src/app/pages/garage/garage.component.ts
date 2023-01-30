import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {
  utilisateur: Utilisateur;

  constructor(
          private authService: AuthService,
          private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUtilisateur();
  }

  getCurrentUtilisateur(): void {
    let currUtilsiateur = this.authService.utilisateur;
    if(currUtilsiateur) {
      this.utilisateur = currUtilsiateur;
    } else {
      this.authService.findCurrentUtilisateur().subscribe(
        data => {
          console.log(data);
          this.utilisateur = data;
        }
      );
    }
  }

  onSignOut(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
