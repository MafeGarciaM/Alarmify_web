import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.css'],
})
export class ModifyPasswordComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate([`login`]);
  }

  home() {
    this.router.navigate([`home`]);
  }
}
