import { NgModule } from "@angular/core";
import { ButtonUIDirective } from "./button.directive";
import { registerElement } from 'nativescript-angular';
import { isAndroid } from "tns-core-modules/platform";

@NgModule({
    declarations: [ButtonUIDirective],
    exports:[ButtonUIDirective]
})

export class ButtonUIModule {
}

if(isAndroid) registerElement('ButtonUI', () => require('../button.android').ButtonUI);
else registerElement('ButtonUI', () => require('../button.ios').ButtonUI);