import { Component } from '@angular/core';
import { fadeAnimation } from './animations';
import { routerTransition } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation, routerTransition] 
})
export class AppComponent {

}

