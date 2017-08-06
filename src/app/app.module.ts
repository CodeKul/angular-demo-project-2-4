import { AuthGuardGuard } from './auth-guard.guard';
import { RegistrationService } from './registration.service';
import { appRouting } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    FormsModule
  ],
  providers: [RegistrationService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
