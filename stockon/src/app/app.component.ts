import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'stockon';

  showHeader: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        if (currentUrl.includes('shopping-list') || 
            currentUrl.includes('stock') ||
            currentUrl.includes('in-use') ||
            currentUrl.includes('finished') ||
            currentUrl.includes('my-profile') ||
            currentUrl.includes('add-card')) {
          this.showHeader = true;
        } else {
          this.showHeader = false;
        }
      }
    });
  }

}