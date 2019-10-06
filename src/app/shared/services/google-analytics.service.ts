import { Injectable } from '@angular/core';

declare let gtag: Function; // Declare ga as a function

@Injectable({
	providedIn: 'root'
})
export class GoogleAnalyticsService {

	constructor() { }

	public eventEmitter(
		eventCategory: string,
		eventAction: string,
		eventLabel: string = null,
		eventValue: number = null
	) {
		gtag('send', 'event', {
			eventCategory: eventCategory,
			eventLabel: eventLabel,
			eventAction: eventAction,
			eventValue: eventValue
		});
	}

}