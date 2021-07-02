import { Common } from './progress-loader.common';

const progress = com.google.android.material.progressindicator;

export class ProgressLoader extends Common {

    createNativeView(){ 
        let initProgress;    
        const arrayColor = Array.create('int', 2);
        arrayColor[0] = this.colorGreen.android;
        arrayColor[1] = this.colorRed.android;
        initProgress = new progress.CircularProgressIndicator(this._context);
        initProgress.setIndicatorColor(arrayColor);

        initProgress.setIndeterminate(true);

        return initProgress;

    }




}