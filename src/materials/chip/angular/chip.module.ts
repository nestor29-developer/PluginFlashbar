import { NgModule } from "@angular/core";
import { ChipUIDirective } from "./chip.directive";
import { registerElement } from 'nativescript-angular';
import { isAndroid } from "tns-core-modules/platform";

@NgModule({
    declarations: [ChipUIDirective],
    exports:[ChipUIDirective]
})

export class ChipUIModule {
}

if(isAndroid) registerElement('ChipUI', () => require('../chip.android').ChipUI);
else registerElement('ChipUI', () => require('../chip.ios').ChipUI);