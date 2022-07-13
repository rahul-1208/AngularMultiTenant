import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  u = new User();
  constructor(private http : HttpClient) { }

  public loginFromUser(user:User):Observable<any>{
    console.log(user.fiid);
    return this.http.post<any>("http://localhost:8081/login", user);
  }
}
