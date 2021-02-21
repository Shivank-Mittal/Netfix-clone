import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerUser, loginUser } from '../const';
import { User } from 'src/app/Model/User';
import { timeStamp } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AutService {

  constructor(private http: HttpClient) { }

  registerUser = (newUser: User) => {
    console.log(`new user is :  ${newUser}`)
    return this.http.post<any>(registerUser, newUser);
  }

  loginUser = (newUser) => {
    return this.http.post(loginUser, newUser);
  }

}
