import { Component, OnInit } from "@angular/core";
// import {  } from '';
import { isAndroid } from "tns-core-modules/platform";


@Component({
    selector: "progress-indicator",
    templateUrl: "./progress-indicator.component.html"
})
export class  ProgressIndicatorComponent implements OnInit {

    androidView = isAndroid;

    constructor() {
        // Use the component constructor to inject providers. 
    }

    ngOnInit(): void { 
        // const progress = new 
        // Init your component properties here.
    }
 
}
