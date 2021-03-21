import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from '../user'
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:User;
  public baseUri=environment.nodejsUri
  public headers = new HttpHeaders().set('content-type','application/json');
  constructor(private http:HttpClient) { }

  createUser(user:User){
    return this.http.post(this.baseUri+'/create',user,{headers:this.headers})
  }
  GetUser(){
    return this.http.get(this.baseUri+'/',{headers:this.headers})
  }
  updateUser(user:User){
    return this.http.put(this.baseUri+'/update',user,{headers:this.headers})
  }
  deleteUser(id:User){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers})
  }
  setter(user:User){
    this.user=user
  }
  getter(){
    return this.user
  }
}
