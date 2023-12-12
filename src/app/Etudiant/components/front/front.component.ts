import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  constructor(private yourComponent: AppComponent) {}

  ngOnInit() {
    // Hide the navigation bar in the other component
    this.yourComponent.showNavBar = false;
  }
}
