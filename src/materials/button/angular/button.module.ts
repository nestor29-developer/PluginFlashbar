import { NgModule } from "@angular/core";
import { ButtonUIDirective } from "./button.directive";
import { registerElement } from 'nativescript-angular';


@NgModule({
    declarations: [ButtonUIDirective],
    exports:[ButtonUIDirective]
})

export class ButtonUIModule {
}

registerElement('ButtonUI', () => require('../button.android').ButtonUI);