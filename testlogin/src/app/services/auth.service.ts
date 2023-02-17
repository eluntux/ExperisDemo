import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  public authLogin(
    user: string,
    pass: string
  ) {
    //Url Path dummy
    return this.http.post(`${environment.apiURL}/Auth`, {
      usuario: user,
      password: pass
    });
  }
}
