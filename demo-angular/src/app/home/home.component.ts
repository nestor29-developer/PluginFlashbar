import { Component, OnInit } from "@angular/core";
import { Flashbar } from 'nativescript-flashbar';
import { isAndroid } from "tns-core-modules/platform";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    androidView = isAndroid;

    constructor() {
        // Use the component constructor to inject providers.
        console.log('androidView', this.androidView)
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    showBottom() {
        const flashbar = new Flashbar();
        const obj = {
            message: 'Bottom Flashbar',
            duration: 4000,
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
