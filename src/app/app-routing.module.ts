import { ModifyPasswordComponent } from './modify-password/modify-password.component';
import { PrincipalComponent } from './principal/principal.component';
import { PomodorosComponent } from './pomodoros/pomodoros.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'usuario',
    component: ModifyUserComponent,
    pathMatch: 'full',
  },
  {
    path: 'recordings',
    component: RecordingsComponent,
    pathMatch: 'full',
  },
  {
    path: 'pomodoro',
    component: PomodorosComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PrincipalComponent,
    pathMatch: 'full',
  },
  {
    path: 'password',
    component: ModifyPasswordComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
