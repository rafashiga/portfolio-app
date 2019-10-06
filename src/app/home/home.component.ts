import { GoogleAnalyticsService } from './../shared/services/google-analytics.service';
import { Component, OnInit, HostListener, Inject } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

	ngOnInit() {
	}

	SendGaEvent() {
		this.googleAnalyticsService.eventEmitter('instaPage', 'visit', 'user', 1);
	}

}
