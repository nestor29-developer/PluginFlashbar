import { NgModule } from "@angular/core";
import { CardUIDirective } from "./card.directive";
import { registerElement } from 'nativescript-angular';


@NgModule({
    declarations: [CardUIDirective],
    exports:[CardUIDirective]
})

export class CardUIModule {
}

registerElement('CardUI', () => require('../card.android').CardUI);