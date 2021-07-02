import { NgModule } from "@angular/core";
import { ProgressIndicatorDirective } from "./progress-indicator.directive";
import { registerElement } from 'nativescript-angular';
import { isAndroid } from "tns-core-modules/platform";

@NgModule({
    declarations: [ProgressIndicatorDirective],
    exports:[ProgressIndicatorDirective]
})

export class ProgressIndicatorModule {
}

if(isAndroid) registerElement('ProgressIndicator', () => require('../progress-indicator.android').ProgressIndicator);
else registerElement('ProgressIndicator', () => require('../progress-indicator.ios').ProgressIndicator);

