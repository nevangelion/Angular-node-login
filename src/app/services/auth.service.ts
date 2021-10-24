import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

   signUp(user: { email: string; password: string; }) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user: any){
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn(){
   return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
