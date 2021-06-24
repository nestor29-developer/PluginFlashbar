import { ChipUICommon } from './chip.common';

const card = com.google.android.material.chip;

// const shape = Widget.MaterialComponents.Chip;

export class ChipUI extends ChipUICommon {

    createNativeView(){  
        let initProgress;    
        initProgress = new card.Chip(this._context);
        initProgress.setChipText('Filter 1');
        initProgress.setTextColor(this.colorBlue.android); 
        // initProgress.setTextAppearanceResource(2);
        // initProgress.setTextEndPaddingResource(1);
        initProgress.setChipBackgroundColorResource(android.R.color.transparent);

        
        // initProgress.setChipEndPadding(50);
        // initProgress.ensureAccessibleTouchTarget(4);

        initProgress.setCheckable(true);
        initProgress.setChipIconVisible(true);
        // initProgress.setChipIconTintResource(android.R.color.darker_gray);
        initProgress.setChipIconSize(80);
        initProgress.setChipStartPadding(120);
        initProgress.setCheckedIconTintResource(android.R.color.holo_red_dark);
        // initProgress.setCloseIconContentDescription('sdsdsdsds');
        // initProgress.setSingleLine(true); if is false does not support here
       
        initProgress.setCloseIconResource(android.R.drawable.ic_delete);
        initProgress.setCloseIconSize(80);
        initProgress.setCloseIconVisible(true);
        initProgress.setCloseIconTintResource(android.R.color.holo_red_dark);
        // initProgress.setCloseIconStartPadding(-80.5);
        initProgress.setCloseIconEndPadding(600);


        initProgress.setChipStrokeWidth(5);
        initProgress.setChipMinHeight(-1700);
        
        return initProgress;

    } 


}