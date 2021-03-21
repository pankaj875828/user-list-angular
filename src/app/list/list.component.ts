import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../user'
import {Router} from "@angular/router"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users:User[];
  public name:String
  public p:Number
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.readUser();
  }

  readUser(){
    this.userservice.GetUser().subscribe(data=>{
      console.log(data)
      this.users=data['msg']
    },err=>{
      console.log(err)
    })
  }
  doUpdate(user){
    this.userservice.setter(user)
    this.router.navigate(['/createupdate'])
  }
  doDelete(user){
    this.userservice.deleteUser(user._id).subscribe(data=>{
      this.users.splice(this.users.indexOf(user),1);
    })
  }
  Search(){
    if(this.name!=""){
      this.users=this.users.filter(res=>{return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())})
    }else if(this.name == ""){
      this.ngOnInit();
    }
  }
  key="id"
  reverse:boolean=false
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse
  }
}
