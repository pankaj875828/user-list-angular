import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../shared/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-createupdate',
  templateUrl: './createupdate.component.html',
  styleUrls: ['./createupdate.component.css']
})
export class CreateupdateComponent implements OnInit {

  public user:User
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.user=this.userservice.getter()
  }

  createupdate(){
    if(this.user._id == undefined){
      this.userservice.createUser(this.user).subscribe(data=>{
        console.log(data)
        this.router.navigate(['/'])
      },err=>{
        console.log(err)
      })
    }else{
      this.userservice.updateUser(this.user).subscribe(data=>{
        console.log(data)
        this.router.navigate(['/'])
      },err=>{
        console.log(err)
      })
    }
  }

}
