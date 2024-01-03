// src/app/my-component/my-component.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
  
export class MyComponentComponent implements OnInit {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  ngOnInit() {
    this.name = 'クラウド';
  }
}
