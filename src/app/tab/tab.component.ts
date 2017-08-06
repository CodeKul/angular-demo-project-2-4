import { Router } from '@angular/router';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor(
    private router: Router,
    private regSer: RegistrationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.regSer.logout(() => {
      this.router.navigate(['']);
    });
  }
}
