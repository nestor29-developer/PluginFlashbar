import { Common } from './flashbar.common';  

export class Flashbar extends Common {

    showTop(obj) {
 
        // var imgPath = NSBundle.mainBundle.pathForResourceOfType("~/img/bcp-logo", "jpeg");
        // var imgUrl = NSURL.fileURLWithPath(imgPath);
        // var imgUrl = NSURL.URLWithString('~/img/bcp-logo-small.jpg'); 
        // var imgData = NSData.dataWithContentsOfURL(imgUrl);
        // var imgUrl = NSURL.alloc().initWithString("");
        // var imgData = NSData.dataWithContentsOfURL(imgUrl);
        const objnotification = {
            title: obj.title,
            body: obj.message,
            duration: obj.duration,
            onTap(){
                alert('Tapped !!!')
            },
            onTimeout(){
                alert('Time out !!!')
            } 
        }
        const notification = new LNRNotification(objnotification); 
        const notificationManager = LNRNotificationManager.new();
        notificationManager.notificationsBackgroundColor = UIColor.brownColor;
        notificationManager.notificationsTitleTextColor = UIColor.purpleColor;
        notificationManager.notificationsBodyTextColor = UIColor.darkGrayColor;
        notificationManager.notificationsSeperatorColor = UIColor.grayColor;
        notificationManager.notificationsBodyFont = UIFont.boldSystemFontOfSize(16);
        notificationManager.notificationsTitleFont = UIFont.boldSystemFontOfSize(24);
        notificationManager.notificationsIcon = UIImage.actionsImage;  
        // notificationManager.notificationsIcon = UIImage.imageWithData(imgData);

        notificationManager.showNotificationWithNotification(notification);
        
    }

}
