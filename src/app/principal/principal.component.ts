import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate([`login`]);
  }

  pomodoro() {
    this.router.navigate([`pomodoro`]);
  }

  user() {
    this.router.navigate([`usuario`]);
  }

  recordings() {
    this.router.navigate([`recordings`]);
  }

  password() {
    this.router.navigate([`password`]);
  }
}
