import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router'
import { User } from '../user';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router,public authservice:AuthService) { }

  ngOnInit(): void {
  }

  NewUser(event:any){
    event.preventDefault();
    this.userservice.setter(new User())
    this.router.navigate(['/createupdate'])
  }
}
