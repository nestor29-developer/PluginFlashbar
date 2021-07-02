import { Common } from './chip.common'; 

export class ChipUI extends Common {

    createNativeView(){    
        let chipView; 

        const obj = { 
            origin: {
                x: 10, 
                y: 180
            },
            size: {
                width: 200,
                height: 100
            }
        }
        
        this._context = obj;
        // CHIP VIEW
        chipView = new MDCChipView(this._context); 
        chipView.titleLabel.text = "Tap me";
        chipView.setTitleColor = UIColor.purpleColor; 
        chipView.sizeToFit();
        // chipView.invalidateIntrinsicContentSize();
        chipView.backgroundColorForState = UIColor.blueColor;
 
        // chipView.addTarget(
        //     new self.touchUpInside({
        //         selector(tap) {
        //           alert('sdsd');
        //         },
        //       })
        // );

        // console.log('chipView: ', chipView);

        // INPUT CHIP
        let chipField = new MDCChipField(this._context);
        chipField.textField.placeholderLabel.text = "Write here in this chip field.";
        chipField.showChipsDeleteButton = true;
        chipField.sizeToFit();  

        console.log('chipField: ', chipField);
        // chipView.addSubview(chipField);
        return chipField; 


        //CHIP CHOISE
        // let layout = MDCChipCollectionViewFlowLayout.new()
        // const objnew = {
        // frame: obj,
        // collectionViewLayout: layout
        // } 
        // let collectionView = new UICollectionView(objnew);
        // collectionView.allowsMultipleSelection = true;
        // console.log('collectionView: ', collectionView);
        // chipView.addSubview(collectionView);

        // let cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath("identifier", this._context);
        // let chipView2 = cell.chipView;
        // configure the chipView to be a choice chip


        // let containerScheme = new MDCContainerScheme(); 
        // chipView.applyTheme(containerScheme); // is not a function. 
 
    } 
    
    
    
}