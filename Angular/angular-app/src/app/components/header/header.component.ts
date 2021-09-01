import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'angular-app';
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log("toggle");
  }

}
