import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { fadeAnimation } from 'src/app/animations';
import { routerTransition } from 'src/app/animations';
import { slideOut, childani, hamburgerani } from 'src/app/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
    animations: [fadeAnimation, routerTransition, slideOut, childani, hamburgerani] 
})
export class NavComponent implements OnInit {

	
	appTitle = 'myapp';
  
  navState:string = 'out';
  rotateleft = 'start';
  rotateright = 'start';
  hide = 'start';

  constructor(public router: Router) {
  router.events.subscribe((val) => {
    if (val instanceof NavigationEnd) {
      this.navState = 'out';
      this.rotateleft = 'start';
      this.rotateright =  'start'; 
      this.hide = 'start';
    }
  });
}



myClickFunction(event) { 
      this.navState = this.navState === 'out' ? 'in' : 'out';
      this.rotateleft = this.rotateleft === 'start' ? '45left' : 'start';
      this.rotateright = this.rotateright === 'start' ? '45right' : 'start';
      this.hide = this.hide === 'start' ? 'hide' : 'start';
   }

  ngOnInit() {
  }

}
