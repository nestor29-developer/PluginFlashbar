import { Component, OnInit } from "@angular/core"; 
import { isAndroid } from "tns-core-modules/platform";


@Component({
    selector: "progress-loader",
    templateUrl: "./progress-loader.component.html"
})
export class  ProgressLoaderComponent implements OnInit {

    androidView = isAndroid;

    constructor() {
        // Use the component constructor to inject providers. 
    }

    ngOnInit(): void { 
        // const progress = new 
        // Init your component properties here.
    }
 
}
