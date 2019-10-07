import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { fadeAnimation } from 'src/app/animations';
import { routerTransition } from 'src/app/animations';
import { slideOut, childani } from 'src/app/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
    animations: [fadeAnimation, routerTransition, slideOut, childani] 
})
export class NavComponent implements OnInit {

	
	appTitle = 'myapp';
	

  constructor(private router: Router) {
  router.events.subscribe((val) => {
    if (val instanceof NavigationEnd) {
      this.navState = 'out';
    }
  });
}

 navState:string = 'out';

myClickFunction(event) { 
      this.navState = this.navState === 'out' ? 'in' : 'out';
   }

  ngOnInit() {
  }

}
