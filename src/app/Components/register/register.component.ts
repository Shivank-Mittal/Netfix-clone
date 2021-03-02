import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutService } from 'src/app/Services/auth-service/aut.service';
import { User, UserAddress, UserContact } from '../../Model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() isRegesterdsetter: EventEmitter<any> = new EventEmitter();

  subs: Subscription[] = [];
  maxDate = new Date();
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

  registerUserConatct = {
    name: "",
    birthDate: "",
    gender: ""
  }
  registerUserAddress = {
    country: "",
    area: "",
    city: "",
    number: ""
  }

  constructor(private auth: AutService) { }

  ngOnInit(): void {
  }

  registerUser() {
    if (this.registerUserData.password === this.registerUserData.confirm_password) {
      let user = {
        ...this.registerUserData.getUserData(), ...this.registerUserConatct, ...this.registerUserAddress
      }
      console.log(user)
      // ! use below code when calling the api
      // this.subs.push(
      //   this.auth.registerUser(user).subscribe(
      //     (data) => { console.log(data) },
      //     (error) => { console.log(error) }
      //   )
      // )
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach(sub => sub.unsubscribe())
  }

  signIn(): void {
    this.isRegesterdsetter.emit();
  }

}
