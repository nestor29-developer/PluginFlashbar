import { ElementRef } from "@angular/core";
import { Component, OnInit, ViewChild } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";


@Component({
    selector: "button-ui",
    templateUrl: "./button.component.html"
})
export class  ButtonComponent implements OnInit {

    androidView = isAndroid;
    // @ViewChild("btnui", { static: false }) btnui: ElementRef; 

    constructor() {
        // Use the component constructor to inject providers. 
    }

    ngOnInit(): void { 
        // const progress = new 
        // Init your component properties here.
    }
 
    // taping(){
    //     alert('dsfdfd');
    // }

    // element.setOnClickListener(){

    // }

 
}
