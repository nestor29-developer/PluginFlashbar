import { Component, OnInit } from "@angular/core"; 

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {


    items: Array<any> = [
        {'name':'Flashbar', 'route':'flashbar'},
        {'name':'Progress Linear', 'route':'progress-indicator'},
        {'name':'Progress Loader', 'route':'progress-loader'},
        {'name':'Button', 'route':'button-ui'},
        {'name':'Card', 'route':'card-ui'},
        {'name':'Chips', 'route':'chip-ui'},

        ];

    constructor() {
        // Use the component constructor to inject providers. 
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

 
  
}
