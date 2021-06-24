import { NgModule } from "@angular/core";
import { ChipUIDirective } from "./chip.directive";
import { registerElement } from 'nativescript-angular';


@NgModule({
    declarations: [ChipUIDirective],
    exports:[ChipUIDirective]
})

export class ChipUIModule {
}

registerElement('ChipUI', () => require('../chip.android').ChipUI);