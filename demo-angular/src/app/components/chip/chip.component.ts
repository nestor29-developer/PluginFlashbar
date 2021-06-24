import { Component, OnInit, ViewChild } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";


@Component({
    selector: "chip-ui",
    templateUrl: "./chip.component.html"
})
export class  ChipComponent implements OnInit {

    androidView = isAndroid;  

    constructor() {
        // Use the component constructor to inject providers. 
    }

    ngOnInit(): void { 
        // const progress = new 
        // Init your component properties here.
    }
  

 
}
