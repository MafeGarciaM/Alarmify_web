import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { PrincipalComponent } from './principal/principal.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { PomodorosComponent } from './pomodoros/pomodoros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModifyPasswordComponent } from './modify-password/modify-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModifyUserComponent,
    PrincipalComponent,
    RecordingsComponent,
    PomodorosComponent,
    ModifyPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
