import { NgModule } from "@angular/core";
import { ProgressIndicatorDirective } from "./progress-indicator.directive";
import { registerElement } from 'nativescript-angular';


@NgModule({
    declarations: [ProgressIndicatorDirective],
    exports:[ProgressIndicatorDirective]
})

export class ProgressIndicatorModule {
}

registerElement('ProgressIndicator', () => require('../progress-indicator.android').ProgressIndicator);