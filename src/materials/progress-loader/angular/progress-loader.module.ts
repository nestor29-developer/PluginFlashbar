import { NgModule } from "@angular/core";
import { ProgressLoaderDirective } from "./progress-loader.directive";
import { registerElement } from 'nativescript-angular';


@NgModule({
    declarations: [ProgressLoaderDirective],
    exports:[ProgressLoaderDirective]
})

export class ProgressLoaderModule {
}

registerElement('ProgressLoader', () => require('../progress-loader.android').ProgressLoader);