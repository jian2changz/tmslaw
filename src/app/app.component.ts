import { Component, ViewChild } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { fadeAnimation } from './animations';
import { routerTransition } from './animations';
import { slideOut } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation, routerTransition, slideOut] 
})
export class AppComponent {


 
}

