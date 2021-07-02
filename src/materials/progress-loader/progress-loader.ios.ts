import { Common } from './progress-loader.common'; 

export class ProgressLoader extends Common {

    createNativeView(){ 
        let pcircularView;       
    
        pcircularView = new MDCActivityIndicator(this._context);
        // determinate
        pcircularView.sizeToFit();
        pcircularView.indicatorMode = MDCActivityIndicatorMode.Indeterminate;
        // pcircularView.progress = 0.5;
        pcircularView.radius = 40;
        pcircularView.strokeWidth = 10;
        
        pcircularView.startAnimating();


        console.log('pcircularView: ', pcircularView);
        return pcircularView;

    }




}