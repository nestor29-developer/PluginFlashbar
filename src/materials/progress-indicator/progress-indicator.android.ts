import { ProgressIndicatorCommon } from './progress-indicator.common';

const progress = com.google.android.material.progressindicator;

export class ProgressIndicator extends ProgressIndicatorCommon {

    createNativeView(){ 
        let initProgress;  
        initProgress = new progress.LinearProgressIndicator(this._context)
        initProgress.setTrackColor(this.colorBlack.android); 
        initProgress.setShowAnimationBehavior(3); 
        initProgress.setIndeterminate(true); 
        return initProgress; 
    } 
}