import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateupdateComponent } from './createupdate/createupdate.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import {UserService} from '../app/shared/user.service'
import {FormsModule} from '@angular/forms'
import {Ng2OrderModule} from 'ng2-order-pipe'
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import {AuthGuard} from '../app/auth.guard'
import { HomeComponent } from './home/home.component';

const AppRoutes:Routes=[
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',component:ListComponent,canActivate:[AuthGuard]},
  {path:'createupdate',component:CreateupdateComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateupdateComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
