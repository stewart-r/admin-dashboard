import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authSvc: AuthService
  ) { }

  username: string;
  password: string;
  loginFailed: boolean;

  ngOnInit() {
  }

  submit() {
    if (this.authSvc.login(this.username, this.password)) {
      this.router.navigate(['/blog-dashboard']);
    } else {
      this.loginFailed = true;
    }
  }

}
