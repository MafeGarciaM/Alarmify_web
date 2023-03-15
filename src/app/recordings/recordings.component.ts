import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.css'],
})
export class RecordingsComponent implements OnInit {
  constructor(private router: Router) {}

  grabando = false;

  ngOnInit(): void {}

  login() {
    this.router.navigate([`login`]);
  }

  home() {
    this.router.navigate([`home`]);
  }

  grabar() {
    this.grabando = true;
  }

  detener() {
    this.grabando = false;
  }
}
