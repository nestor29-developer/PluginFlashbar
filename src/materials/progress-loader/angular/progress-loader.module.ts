import { NgModule } from "@angular/core";
import { ProgressLoaderDirective } from "./progress-loader.directive";
import { registerElement } from 'nativescript-angular';
import { isAndroid } from "tns-core-modules/platform";

@NgModule({
    declarations: [ProgressLoaderDirective],
    exports:[ProgressLoaderDirective]
})

export class ProgressLoaderModule {
}

if(isAndroid) registerElement('ProgressLoader', () => require('../progress-loader.android').ProgressLoader);
else registerElement('ProgressLoader', () => require('../progress-loader.ios').ProgressLoader);