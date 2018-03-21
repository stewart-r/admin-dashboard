import { Injectable } from '@angular/core';

const FAKE_TKN = 'mock jwt token';

@Injectable()
export class AuthService {

  constructor() { }

  currentUser: string;
  token: string;

  isLoggedIn() {
    return !!this.currentUser;
  }

  login(userName: string, password: string) {
    const valid = this.validate(userName, password);
    if (valid) {
      return true;
    } else {
      return false;
    }
  }

  validate(userName: string, password: string) {
    // in the real world we'd validate against an auth server to retrieve a real token...
    if (userName === 'admin' && password === 'admin') {
      this.currentUser = userName;
      this.token = FAKE_TKN;
      return true;
    } else {
      return false;
    }
  }

}
