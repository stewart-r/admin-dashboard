import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  currentUser: string;

  isLoggedIn() {
    return !!this.currentUser;
  }

  login(userName: string, password: string) {
    const valid = this.validate(userName, password);
    if (valid) {
      this.currentUser = userName;
      return true;
    } else {
      return false;
    }
  }

  validate(userName: string, password: string) {
    return userName === 'admin' && password === 'admin';
  }

}
