import { Common } from './flashbar.common';


export class Flashbar extends Common {

    showTop(obj) {
        const notificationManager = LNRNotificationManager.new();
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
        notificationManager.notificationsBackgroundColor = UIColor.brownColor;
        notificationManager.notificationsTitleTextColor = UIColor.purpleColor;
        notificationManager.notificationsBodyTextColor = UIColor.darkGrayColor;
        notificationManager.notificationsSeperatorColor = UIColor.grayColor;
        notificationManager.notificationsBodyFont = UIFont.boldSystemFontOfSize(16);
        notificationManager.notificationsTitleFont = UIFont.boldSystemFontOfSize(24);
        notificationManager.notificationsIcon = UIImage.actionsImage; 
        // notificationManager.notificationsImage
        

        notificationManager.showNotificationWithNotification(notification);
        
    }

}
