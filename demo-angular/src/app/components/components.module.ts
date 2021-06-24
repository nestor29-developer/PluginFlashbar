import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentsRoutingModule } from "./components-routing.module";
import { FlashBarComponent } from "./flashbar/flashbar.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProgressIndicatorComponent } from "./progress-indicator/progress-indicator.component"; 
import { ProgressLoaderComponent } from "./progress-loader/progress-loader.component";
import { ButtonComponent } from "./button/button.component";
import { CardComponent } from "./card/card.component";
import { ChipComponent } from "./chip/chip.component";
import { CardUIModule } from "nativescript-plugins/materials/card/angular"
import { ProgressIndicatorModule } from 'nativescript-plugins/materials/progress-indicator/angular';
import { ProgressLoaderModule } from 'nativescript-plugins/materials/progress-loader/angular';
import { ButtonUIModule } from "nativescript-plugins/materials/button/angular"
import { ChipUIModule } from "nativescript-plugins/materials/chip/angular" 

@NgModule({ 
    imports: [
        ComponentsRoutingModule,
        NativeScriptCommonModule,
        ProgressIndicatorModule,
        ProgressLoaderModule,
        ButtonUIModule,
        CardUIModule,
        ChipUIModule
    ],
    declarations: [
        FlashBarComponent,
        ProgressIndicatorComponent,
        ProgressLoaderComponent,
        ButtonComponent,
        CardComponent,
        ChipComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports:[
        
    ]
})
export class ComponentModule { }
