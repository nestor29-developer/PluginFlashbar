import { Component, OnInit } from "@angular/core";
import { Flashbar } from 'nativescript-flashbar';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    showBottom() {
        const flashbar = new Flashbar();
        const obj = {
            message: 'Bottom Flashbar',
            duration: 25000,
            title: 'Plugin on Bottom',
            btnMessage: 'Dismiss'
        }
        flashbar.showBottom(obj); 
    }

    showTop() {
        const flashbar = new Flashbar();
        const obj = {
            message: 'Top Flashbar',
            duration: 5000,
            title: 'Plugin on Top',
            btnMessage: 'Alert Click',
            yesMessage: 'Yes Sent',
            noMessage: 'No Sent'
        }
        flashbar.showTop(obj); 
    }
}
