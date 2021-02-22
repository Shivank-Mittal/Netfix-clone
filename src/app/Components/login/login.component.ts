import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutService } from 'src/app/Services/auth-service/aut.service';
import { User } from '../../Model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  subs: Subscription[] = [];
  loginUserData =
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

  constructor(private auth: AutService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {

    //! Use below code in production
    // if (this.loginUserData.password === this.loginUserData.confirm_password) {
    //   this.subs.push(
    //     this.auth.loginUser(this.loginUserData.getUserData()).subscribe(
    //       (data) => { console.log(data) },
    //       (error) => { console.log(error) },
    //       () => this.router.navigate(['/welcome'])
    //     )
    //   )
    // }

    this.router.navigate(['/welcome']);
  }


}
