import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData={email:'',password:''}
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.authservice.loginUser(this.loginUserData).subscribe(
      (res:any)=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/'])
      },
      (err)=>{console.log(err)}
    )
  }
}
