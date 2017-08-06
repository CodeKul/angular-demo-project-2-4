import { RegistrationService } from './../registration.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private regSer: RegistrationService
  ) { }

  ngOnInit() {
  }

  login(email, pass) {
    this.regSer.login(email, pass);
    this.regSer.checkState(user => {
      if (user) {
         console.log(user);
        this.router.navigate(['/tab']);
      }
    });
  }
}
