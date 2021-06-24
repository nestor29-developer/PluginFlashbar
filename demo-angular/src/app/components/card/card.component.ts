import { Component, OnInit, ViewChild } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";


@Component({
    selector: "card-ui",
    templateUrl: "./card.component.html"
})
export class  CardComponent implements OnInit {

    androidView = isAndroid;  

    constructor() {
        // Use the component constructor to inject providers. 
    }

    ngOnInit(): void { 
        // const progress = new 
        // Init your component properties here.
    }
  

 
}
