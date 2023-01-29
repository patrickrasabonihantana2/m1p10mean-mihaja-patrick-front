import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { UtilisateurLogin } from 'src/app/models/utilisateur/utilisateur-login';
import { environment } from 'src/environments/environment';
import { JsendResponse } from 'src/app/models/jsend-response';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { GlobalMessageService } from '../global-message.service';
import { Message } from 'src/app/models/message/message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private messageService: GlobalMessageService) { }

  login(utilisateurLogin: UtilisateurLogin): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = utilisateurLogin;
    const options = {
      headers: headers
    };
    return this.http.post(`${environment.serverUrl}/auth/login`, body, options)
        .pipe(
          map((response: JsendResponse) => {
            let token = response.data.token;
            localStorage.setItem('token', token);
            let utilisateur = response.data.utilisateur;
            return utilisateur;
          }),
          catchError((error: any) => {
            this.messageService.clear();
            this.messageService.add(Message.error(error.error.data.message));
            throw error;
          })
        );
  }

  inscription(utilisateur: Utilisateur): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = utilisateur;
    const options = {
      headers: headers
    };
    return this.http.post(`${environment.serverUrl}/auth/inscription`, body, options)
        .pipe(
          map((response: JsendResponse) => {
            let utilisateur = response.data.utilisateur;
            return utilisateur;
          }),
          catchError((error: any) => {
            this.messageService.clear();
            this.messageService.add(Message.error(error.error.data.message));
            throw error;
          })
        );
  }

  logout() {
    localStorage.removeItem("token");
  }
}
