import { AuthGuardGuard } from './auth-guard.guard';
import { TabComponent } from './tab/tab.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'tab', component: TabComponent, canActivate: [AuthGuardGuard] },
    { path: '**', pathMatch: 'full', redirectTo: '/' }
];

// tslint:disable-next-line:eofline
export const appRouting = RouterModule.forRoot(routes)