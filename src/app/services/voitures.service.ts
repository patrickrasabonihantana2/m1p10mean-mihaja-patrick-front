import { GlobalMessageService } from 'src/app/services/global-message.service';
import { Observable, catchError, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Voiture } from '../models/voiture';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JsendResponse } from '../models/jsend-response';
import { Message } from '../models/message/message';

@Injectable({
  providedIn: 'root'
})
export class VoituresService {

  constructor(
          private http: HttpClient,
          private messageService: GlobalMessageService) { }

  getVoitures(): Observable<Voiture[]> {
    const token: string = localStorage.getItem("token") || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const options = {
      headers: headers
    };
    return this.http.get(`${environment.apiUrl}/voiture`, options)
        .pipe(
          map((response: JsendResponse) => {
            return response.data.voitures;
          }),
          catchError((error: any) => {
            this.messageService.add(Message.error(error.error.data.message));
            throw error;
          })
        );
  }
}
