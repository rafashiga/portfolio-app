import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	isSticky = false;
	theme = 'dark mode';
	isDarkMode = false;

	constructor() { 
		if(localStorage.getItem('theme') === 'dark'){
			this.themeToggle();
		}
	}

	ngOnInit() {
	}

	@HostListener('window:scroll', ['$event'])
	onWindowScroll(e) {
		if (window.pageYOffset > 200) {
			let element = document.getElementById('navbar');
			element.classList.add('sticky');
			this.isSticky = true;
		} else {
			let element = document.getElementById('navbar');
			element.classList.remove('sticky');
			this.isSticky = false;
		}
	}

	themeToggle() {
		this.transation();
		if (!this.isDarkMode) {
			document.documentElement.setAttribute('data-theme', 'dark');
			this.theme = 'light mode';
			this.isDarkMode = true;
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			this.theme = 'dark mode';
			this.isDarkMode = false;
			localStorage.removeItem('theme');
		}
	}

	transation() {
		document.documentElement.classList.add('transition');
		window.setTimeout(() => {
			document.documentElement.classList.remove('transition');
		}, 1000);
	}

}
