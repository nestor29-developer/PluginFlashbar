
declare class LNRNotification extends NSObject {

	static alloc(): LNRNotification; // inherited from NSObject

	static new(): LNRNotification; // inherited from NSObject

	body: string;

	duration: number;

	onTap: () => void;

	onTimeout: () => void;

	title: string;

	constructor(o: { title: string; body: string; duration: number; onTap: () => void; onTimeout: () => void; });

	initWithTitleBodyDurationOnTapOnTimeout(title: string, body: string, duration: number, onTap: () => void, onTimeout: () => void): this;
}

declare class LNRNotificationManager extends NSObject {

	static alloc(): LNRNotificationManager; // inherited from NSObject

	static new(): LNRNotificationManager; // inherited from NSObject

	activeNotification: LNRNotificationView;

	readonly isNotificationActive: boolean;

	notificationsBackgroundColor: UIColor;

	notificationsBodyFont: UIFont;

	notificationsBodyTextColor: UIColor;

	notificationsIcon: UIImage;

	notificationsSeperatorColor: UIColor;

	notificationsTitleFont: UIFont;

	notificationsTitleTextColor: UIColor;

	dismissActiveNotificationWithCompletion(completion: () => void): boolean;

	dismissNotificationViewWithNotificationViewDismissAnimationCompletion(notificationView: LNRNotificationView, dismissAnimationCompletion: () => void): boolean;

	showNotificationWithNotification(notification: LNRNotification): void;
}

declare class LNRNotificationQueue extends NSObject {

	static alloc(): LNRNotificationQueue; // inherited from NSObject

	static new(): LNRNotificationQueue; // inherited from NSObject

	constructor(o: { notificationManager: LNRNotificationManager; });

	initWithNotificationManager(notificationManager: LNRNotificationManager): this;

	queueNotificationWithNotification(notification: LNRNotification): void;
}

declare class LNRNotificationView extends UIView implements UIGestureRecognizerDelegate {

	static alloc(): LNRNotificationView; // inherited from NSObject

	static appearance(): LNRNotificationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): LNRNotificationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): LNRNotificationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LNRNotificationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LNRNotificationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LNRNotificationView; // inherited from UIAppearance

	static new(): LNRNotificationView; // inherited from NSObject

	isDisplayed: boolean;

	notification: LNRNotification;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissWithCompletion(completion: () => void): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var LNRSimpleNotificationsVersionNumber: number;

declare var LNRSimpleNotificationsVersionString: interop.Reference<number>;
