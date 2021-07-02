import { Common } from './button.common'; 

export class ButtonUI extends Common {

    createNativeView(){  
        
        let buttonView;
        const obj = { 
            origin: {
                x: 100, 
                y: 5
            },
            size: {
                width: 50,
                height: 12
            }
        }
 
        this._context = obj; 
        buttonView = new MDCButton(this._context);
        buttonView.accessibilityLabel = "Save";
        buttonView.minimumSize = CGSizeMake(this.width, this.height);
        // buttonView.backgroundColor = UIColor.blueColor; 
        buttonView.animated = true;
        buttonView.setTitle = "Save";
        // buttonView.titleLabel.textColor = UIColor.yellowColor; 
        // buttonView.inkColor =  UIColor.yellowColor; 
        buttonView.setImage = UIImage.actionsImage;

 
    

        // with theme customize
        let shapeScheme = new MDCShapeScheme({defaults: 20}); 
        // shapeScheme.smallComponentShape.topLeftCorner = 2;
        let containerScheme = new MDCContainerScheme(); 
        containerScheme.colorScheme.primaryColor = UIColor.lightGrayColor;
        containerScheme.shapeScheme = shapeScheme;  
        // buttonView.applyOutlinedThemeWithScheme(containerScheme);
        buttonView.applyContainedThemeWithScheme(containerScheme);


        // text
        let textField = new MDCTextField(this._context);
        textField.textColor = UIColor.blueColor;
        textField.text = "SAVE";
        textField.minimumFontSize = 24; 
        // textField.titleFont = UIFont.buttonFontSize;
        // textField.borderStyle = UITextBorderStyle.Bezel;
        buttonView.addSubview(textField);
       

        console.log('buttonView: ', buttonView);
        return buttonView;
    }



}