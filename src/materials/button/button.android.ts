import { ButtonUICommon } from './button.common';

const button = com.google.android.material.button;

const shape = com.google.android.material.shape;

export class ButtonUI extends ButtonUICommon {

    createNativeView(){  
        let initProgress;  
       
        initProgress = new button.MaterialButton(this._context)
       

        
        initProgress.setText('Click Here'); 
        initProgress.setTextColor(this.colorBlue.android);
        initProgress.setTextAppearance(android.R.style.Theme_Black);
        initProgress.setElevation(0.5); 
        initProgress.setBackgroundColor(this.colorOrange.android);
        // initProgress.setBackgroundTintList(android.R.color.black);
        // initProgress.setStyle(android.R.style.Widget_Button);
        initProgress.setIconResource(android.R.drawable.ic_menu_add);
        initProgress.setIconSize(120);
        initProgress.setIconTintResource(android.R.color.black);
        initProgress.setRippleColorResource(android.R.color.holo_green_dark);
        initProgress.setIconGravity(4);
        initProgress.setIconPadding(8);
        initProgress.setStrokeColorResource(android.R.color.darker_gray);
        
        initProgress.setShapeAppearanceModel(new shape.ShapeAppearanceModel().withCornerSize(2));
        console.log(initProgress.getShapeAppearanceModel());


        initProgress.setStrokeWidth(20);
        // initProgress.setChipMinHeight(-1700);
       
        return initProgress;

    }

    // initNativeView() {
    //     console.log('initNativeView');
    //   }
    //   disposeNativeView() {
    //     console.log('disposeNativeView');
    //   }

    //   loadView() {
    //     console.log('loadView');
    //   }

    //   setNativeView() {
    //     console.log('setNativeView');
    //   }

    //   onloadView() {
    //     console.log('onloadView');
    //   }

    //   layoutNativeView() {
    //     console.log('layoutNativeView');
    //   }


}