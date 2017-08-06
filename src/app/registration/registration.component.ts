import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: NgForm;

  constructor(
    private router: Router,
    private regSer: RegistrationService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.form = form;
    console.log(form.value);
    // tslint:disable-next-line:semicolon
    this.regSer.register(form.value.email, form.value.password)
    this.regSer.checkState(user => {
      if (user) {
        this.router.navigate(['']);
      }
    });
  }
}
