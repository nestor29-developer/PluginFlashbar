import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ButtonComponent } from "./button/button.component";
import { CardComponent } from "./card/card.component";
import { ChipComponent } from "./chip/chip.component";
import { FlashBarComponent } from "./flashbar/flashbar.component";
import { ProgressIndicatorComponent } from "./progress-indicator/progress-indicator.component";
import { ProgressLoaderComponent } from "./progress-loader/progress-loader.component";

 

const routes: Routes = [
    { path: "home/flashbar", component: FlashBarComponent },
    { path: "home/progress-indicator", component: ProgressIndicatorComponent },
    { path: "home/progress-loader", component: ProgressLoaderComponent },
    { path: "home/button-ui", component: ButtonComponent },
    { path: "home/card-ui", component: CardComponent },
    { path: "home/chip-ui", component: ChipComponent }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ComponentsRoutingModule { }
