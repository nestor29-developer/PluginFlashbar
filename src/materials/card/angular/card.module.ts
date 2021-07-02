import { NgModule } from "@angular/core";
import { CardUIDirective } from "./card.directive";
import { registerElement } from 'nativescript-angular';
import { isAndroid } from "tns-core-modules/platform";

@NgModule({
    declarations: [CardUIDirective],
    exports:[CardUIDirective]
})

export class CardUIModule {
}
if(isAndroid) registerElement('CardUI', () => require('../card.android').CardUI);
else registerElement('CardUI', () => require('../card.ios').CardUI);
