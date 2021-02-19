import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutService } from 'src/app/Services/auth-service/aut.service';
import { User } from '../../Model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  subs: Subscription[] = [];
  registerUserData =
    {
      email: "",
      password: "",
      confirm_password: "",
      getUserData: function (): User {
        return {
          email: this.email,
          password: this.password
        }
      }
    }

  constructor(private auth: AutService) { }

  ngOnInit(): void {
  }

  registerUser() {
    if (this.registerUserData.password === this.registerUserData.confirm_password) {
      this.subs.push(
        this.auth.registerUser(this.registerUserData.getUserData()).subscribe(
          (data) => { console.log(data) },
          (error) => { console.log(error) }
        )
      )
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach(sub => sub.unsubscribe())
  }

}
