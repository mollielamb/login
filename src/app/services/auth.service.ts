import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data = { 
    error: '', 
    message:'' 
 }; 
  constructor() { }

  login(username: string, password: string): Observable<any>{
    if(username == 'Username' && password == 'password'){
      this.data.error = 'false';
      this.data.message = 'Successful Login'
    } else {
      this.data.error = 'true'
      this.data.message = 'Username or password is incorrect'
    }

    return of(this.data);

  }
}
