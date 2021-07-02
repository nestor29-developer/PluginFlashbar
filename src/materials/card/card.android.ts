import { Common } from './card.common'; 

export class CardUI extends Common {

    createNativeView(){  
        let initProgress; 
        const card = com.google.android.material.card;
        // const shape = com.google.android.material.shape; 
           
        initProgress = new card.MaterialCardView(this._context)
        initProgress.setCardBackgroundColor(this.colorBrown.android);
        initProgress.setCardElevation(1.5);
        // initProgress.setCardForegroundColor(this.colorBlue.android);
        initProgress.setStrokeColor(this.colorBlue.android);
        initProgress.setStrokeWidth(80);
        initProgress.setCheckedIconResource(android.R.drawable.ic_dialog_alert);
        initProgress.setCheckedIconSize(120);
        // initProgress.checkedIconMargin(4);
        initProgress.setClickable(true);
        // initProgress.setCheckedIconTint(android.R.color.white);
        initProgress.setCheckable(true);
        initProgress.setChecked(true);
        initProgress.setDragged(true); 
         
        return initProgress; 
    } 


}