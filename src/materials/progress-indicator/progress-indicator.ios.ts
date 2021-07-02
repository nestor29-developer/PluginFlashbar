import { Common } from './progress-indicator.common';

export class ProgressIndicator extends Common {

    createNativeView(){ 
        const obj = { 
            origin: {
                x: 200, 
                y: 50
            },
            size: {
                width: 100,
                height: 20
            }
        }
 
        // this._context = obj; 

        let plinearView;  
        plinearView = new MDCProgressView(this._context);
        plinearView.progress = 0.04;
        plinearView.progressTintColor = UIColor.yellowColor;
        plinearView.trackTintColor = UIColor.lightGrayColor;
        plinearView.cornerRadius = 20; 
        // plinearView.progress = 40;
        plinearView.mode =  MDCActivityIndicatorMode.Indeterminate; //MDCProgressViewMode
        
        plinearView.backwardProgressAnimationMode = MDCProgressViewBackwardAnimationMode.Animate;
        // MDCProgressViewBackwardAnimationMode.Animate 
        
        plinearView.animating = true;
        plinearView.shapeLayer = CAShapeLayer;
       
        // plinearView.setProgressAnimatedCompletion(0.04, true, (p1:true)=> true);
     
        // plinearView.completion = true; 
        // plinearView.frame = obj;

        // let containerScheme = new MDCContainerScheme(); 
        // plinearView.applyThemeWithScheme(containerScheme);


        console.log('plinearView: ', plinearView);
        return plinearView; 
    } 
}