import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  firstView = true;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
  login() {
    this.auth.authLogin(this.email, this.password).subscribe((data: any) => {
      console.log(data);
    });
  }

  changeView(){
    if(this.firstView===true) this.firstView=false;
    else this.firstView=true;
  }
}
