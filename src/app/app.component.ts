import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

declare let gtag: Function;
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'portfolio-app';

	constructor(public router: Router) {

		// subscribe to router events and send page views to Google Analytics
		this.router.events.subscribe(event => {

			if (event instanceof NavigationEnd) {
				gtag('set', 'page', event.urlAfterRedirects);
				gtag('send', 'pageview');
			}

		});
	}
}
