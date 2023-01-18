import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public loginUser(token:string){
    localStorage.setItem('token', token);
    return true;
  }

  }
