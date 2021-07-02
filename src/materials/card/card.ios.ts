import { Common } from './card.common'; 

export class CardUI extends Common {

    createNativeView(){    
        const rect = {
            origin: {
                x: 80, 
                y: 100
            },
            size: {
                width: 200,
                height: 100
            }
        } 
        let card;  
        let view =UIView.new();  
        this._context = rect;
        card = new MDCCard(this._context);  
        let containerScheme = MDCContainerScheme.new(); 
        // containerScheme.colorScheme = colorSchemes;
        card.backgroundColor =  UIColor.redColor;
        // card.setText = "miaaa";
        card.layer.shadowOpacity = 1.5; 
        card.layer.shadowRadius = 6.5;  
        card.layer.shadowElevationForState = 25; 
        card.layer.masksToBounds = false; 
        card.layer.borderWidth = 4;
        card.layer.borderColor = UIColor.greenColor; 
        // card.layer.shadowColor = UIColor.redColor;
        card.layer.cornerRadius = 50;
        card.accessibilityLabel = "Event description"; 
        card.accessibilityValue = "Hello";
        card.isAccessibilityElement = true; 
        // card.applyThemeWithScheme(containerScheme); 
        console.log('card', card); 
        // card.applyTheme(withScheme: containerScheme)
        card.setNeedsLayout();
        card.layoutIfNeeded();
        // view.addSubview(card);
        return card;  
    } 


    // scheme with theme 


        // const objCornersWithFamilyAndSize = {
        //     cornerFamily: MDCShapeCornerFamily.Rounded, 
        //     cornerSize: 20
        // }

        // const objShapeCat = {
        //     cornersWithFamily: MDCShapeCornerFamily.Rounded,
        //     andSize: 20,
        //     bottomLeftCorner: MDCCornerTreatment.prototype,
        //     bottomRightCorner: MDCCornerTreatment.prototype,
        //     topLeftCorner: MDCCornerTreatment.prototype,
        //     topRightCorner: MDCCornerTreatment.prototype,
        //     initCornersWithFamilyAndSize: objCornersWithFamilyAndSize
        // } 

        // const shapeCategory = new MDCShapeCategory(objShapeCat); 
 
        // const shemeModel  = {
        //     colorScheme: {
        //         backgroundColor: UIColor.blueColor,
        //         elevationOverlayColor: UIColor.blackColor,
        //         elevationOverlayEnabledForDarkMode: true,
        //         errorColor: UIColor.redColor,
        //         onBackgroundColor: UIColor.clearColor,
        //         onPrimaryColor: UIColor.whiteColor,
        //         onSecondaryColor: UIColor.clearColor,
        //         onSurfaceColor: UIColor.greenColor,
        //         primaryColor: UIColor.blueColor,
        //         primaryColorVariant: UIColor.brownColor,
        //         secondaryColor: UIColor.orangeColor,
        //         surfaceColor: UIColor.grayColor
        //     },
        //     shapeScheme: {
        //         // largeComponentShape: shapeCategory.bottomLeftCorner,
        //         // mediumComponentShape: shapeCategory.bottomRightCorner,
        //         // smallComponentShape: shapeCategory.topRightCorner
        //     },
        //     typographyScheme: {
        //         body1: UIFont.smallSystemFontSize,
        //         body2: UIFont.smallSystemFontSize,
        //         button: UIFont.buttonFontSize,
        //         caption: UIFont.labelFontSize,
        //         headline1: UIFont.smallSystemFontSize,
        //         headline2: UIFont.smallSystemFontSize,
        //         headline3: UIFont.smallSystemFontSize,
        //         headline4: UIFont.smallSystemFontSize,
        //         headline5: UIFont.smallSystemFontSize,
        //         headline6: UIFont.smallSystemFontSize,
        //         overline: UIFont.labelFontSize,
        //         subtitle1: UIFont.smallSystemFontSize,
        //         subtitle2: UIFont.smallSystemFontSize,
        //         useCurrentContentSizeCategoryWhenApplied: true
        //     }
        // }


     
}