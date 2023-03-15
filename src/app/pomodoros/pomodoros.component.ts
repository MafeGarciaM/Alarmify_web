import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pomodoros',
  templateUrl: './pomodoros.component.html',
  styleUrls: ['./pomodoros.component.css'],
})
export class PomodorosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate([`login`]);
  }

  home() {
    this.router.navigate([`home`]);
  }
}
