import { Injectable,Injector } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUri=environment.registerUri
  loginUri=environment.loginUri
  constructor(private http:HttpClient,private injector:Injector,private router:Router) { }

  registerUser(user){
    return this.http.post(this.registerUri,user)
  }
  loginUser(user){
    return this.http.post(this.loginUri,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
