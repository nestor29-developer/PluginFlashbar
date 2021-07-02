
declare class MDCActivityIndicator extends UIView {

	static alloc(): MDCActivityIndicator; // inherited from NSObject

	static appearance(): MDCActivityIndicator; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCActivityIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCActivityIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCActivityIndicator; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCActivityIndicator; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCActivityIndicator; // inherited from UIAppearance

	static new(): MDCActivityIndicator; // inherited from NSObject

	animating: boolean;

	cycleColors: NSArray<UIColor>;

	delegate: MDCActivityIndicatorDelegate;

	indicatorMode: MDCActivityIndicatorMode;

	progress: number;

	radius: number;

	strokeWidth: number;

	trackEnabled: boolean;

	traitCollectionDidChangeBlock: (p1: MDCActivityIndicator, p2: UITraitCollection) => void;

	setIndicatorModeAnimated(mode: MDCActivityIndicatorMode, animated: boolean): void;

	setProgressAnimated(progress: number, animated: boolean): void;

	startAnimating(): void;

	startAnimatingWithTransitionCycleStartIndex(startTransition: MDCActivityIndicatorTransition, cycleStartIndex: number): void;

	stopAnimating(): void;

	stopAnimatingWithTransition(stopTransition: MDCActivityIndicatorTransition): void;
}

interface MDCActivityIndicatorDelegate extends NSObjectProtocol {

	activityIndicatorAnimationDidFinish?(activityIndicator: MDCActivityIndicator): void;

	activityIndicatorModeTransitionDidFinish?(activityIndicator: MDCActivityIndicator): void;
}
declare var MDCActivityIndicatorDelegate: {

	prototype: MDCActivityIndicatorDelegate;
};

declare const enum MDCActivityIndicatorMode {

	Indeterminate = 0,

	Determinate = 1
}

declare class MDCActivityIndicatorTransition extends NSObject {

	static alloc(): MDCActivityIndicatorTransition; // inherited from NSObject

	static new(): MDCActivityIndicatorTransition; // inherited from NSObject

	animation: (p1: number, p2: number) => void;

	completion: () => void;

	duration: number;

	constructor(o: { animation: (p1: number, p2: number) => void; });

	initWithAnimation(animation: (p1: number, p2: number) => void): this;
}

declare const enum MDCAnimationTimingFunction {

	Standard = 0,

	Deceleration = 1,

	Acceleration = 2,

	Sharp = 3,

	EaseInOut = 0,

	EaseOut = 1,

	EaseIn = 2,

	Translate = 0,

	TranslateOnScreen = 1,

	TranslateOffScreen = 2,

	FadeIn = 1,

	FadeOut = 2
}

declare class MDCBasicColorScheme extends NSObject implements MDCColorScheme, NSCopying {

	static alloc(): MDCBasicColorScheme; // inherited from NSObject

	static new(): MDCBasicColorScheme; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly primaryColor: UIColor; // inherited from MDCColorScheme

	readonly primaryDarkColor: UIColor; // inherited from MDCColorScheme

	readonly primaryLightColor: UIColor; // inherited from MDCColorScheme

	readonly secondaryColor: UIColor; // inherited from MDCColorScheme

	readonly secondaryDarkColor: UIColor; // inherited from MDCColorScheme

	readonly secondaryLightColor: UIColor; // inherited from MDCColorScheme

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { primaryColor: UIColor; });

	constructor(o: { primaryColor: UIColor; primaryLightColor: UIColor; primaryDarkColor: UIColor; });

	constructor(o: { primaryColor: UIColor; primaryLightColor: UIColor; primaryDarkColor: UIColor; secondaryColor: UIColor; secondaryLightColor: UIColor; secondaryDarkColor: UIColor; });

	constructor(o: { primaryColor: UIColor; secondaryColor: UIColor; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPrimaryColor(primaryColor: UIColor): this;

	initWithPrimaryColorPrimaryLightColorPrimaryDarkColor(primaryColor: UIColor, primaryLightColor: UIColor, primaryDarkColor: UIColor): this;

	initWithPrimaryColorPrimaryLightColorPrimaryDarkColorSecondaryColorSecondaryLightColorSecondaryDarkColor(primaryColor: UIColor, primaryLightColor: UIColor, primaryDarkColor: UIColor, secondaryColor: UIColor, secondaryLightColor: UIColor, secondaryDarkColor: UIColor): this;

	initWithPrimaryColorSecondaryColor(primaryColor: UIColor, secondaryColor: UIColor): this;

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

declare class MDCBasicFontScheme extends NSObject implements MDCFontScheme {

	static alloc(): MDCBasicFontScheme; // inherited from NSObject

	static new(): MDCBasicFontScheme; // inherited from NSObject

	body1: UIFont;

	body2: UIFont;

	button: UIFont;

	caption: UIFont;

	headline1: UIFont;

	headline2: UIFont;

	headline3: UIFont;

	headline4: UIFont;

	headline5: UIFont;

	headline6: UIFont;

	overline: UIFont;

	subtitle1: UIFont;

	subtitle2: UIFont;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class MDCButton extends UIButton implements MDCElevatable, MDCElevationOverriding {

	static alloc(): MDCButton; // inherited from NSObject

	static appearance(): MDCButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MDCButton; // inherited from UIButton

	static new(): MDCButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): MDCButton; // inherited from UIButton

	accessibilityTraitsIncludesButton: boolean;

	adjustsFontForContentSizeCategoryWhenScaledFontIsUnavailable: boolean;

	disabledAlpha: number;

	enableRippleBehavior: boolean;

	enableTitleFontForState: boolean;

	hitAreaInsets: UIEdgeInsets;

	inkColor: UIColor;

	inkMaxRippleRadius: number;

	inkStyle: MDCInkStyle;

	maximumSize: CGSize;

	mdc_adjustsFontForContentSizeCategory: boolean;

	minimumSize: CGSize;

	shapeGenerator: MDCShapeGenerating;

	traitCollectionDidChangeBlock: (p1: MDCButton, p2: UITraitCollection) => void;

	underlyingColorHint: UIColor;

	uppercaseTitle: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly mdc_currentElevation: number; // inherited from MDCElevatable

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void; // inherited from MDCElevatable

	mdc_overrideBaseElevation: number; // inherited from MDCElevationOverriding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyContainedThemeWithScheme(scheme: MDCContainerScheming): void;

	applyOutlinedThemeWithScheme(scheme: MDCContainerScheming): void;

	applyTextThemeWithScheme(scheme: MDCContainerScheming): void;

	backgroundColorForState(state: UIControlState): UIColor;

	borderColorForState(state: UIControlState): UIColor;

	borderWidthForState(state: UIControlState): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	elevationForState(state: UIControlState): number;

	imageTintColorForState(state: UIControlState): UIColor;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setBackgroundColor(backgroundColor: UIColor): void;

	setBackgroundColorForState(backgroundColor: UIColor, state: UIControlState): void;

	setBorderColorForState(borderColor: UIColor, state: UIControlState): void;

	setBorderWidthForState(borderWidth: number, state: UIControlState): void;

	setElevationForState(elevation: number, state: UIControlState): void;

	setEnabledAnimated(enabled: boolean, animated: boolean): void;

	setImageTintColorForState(imageTintColor: UIColor, state: UIControlState): void;

	setShadowColorForState(shadowColor: UIColor, state: UIControlState): void;

	setTitleFontForState(font: UIFont, state: UIControlState): void;

	shadowColorForState(state: UIControlState): UIColor;

	titleFontForState(state: UIControlState): UIFont;
}

declare class MDCButtonColorThemer extends NSObject {

	static alloc(): MDCButtonColorThemer; // inherited from NSObject

	static applyColorSchemeToButton(colorScheme: MDCColorScheme, button: MDCButton): void;

	static applySemanticColorSchemeToButton(colorScheme: MDCColorScheming, button: MDCButton): void;

	static applySemanticColorSchemeToFlatButton(colorScheme: MDCColorScheming, flatButton: MDCButton): void;

	static applySemanticColorSchemeToFloatingButton(colorScheme: MDCColorScheming, floatingButton: MDCFloatingButton): void;

	static applySemanticColorSchemeToRaisedButton(colorScheme: MDCColorScheming, raisedButton: MDCButton): void;

	static new(): MDCButtonColorThemer; // inherited from NSObject
}

declare class MDCButtonShapeThemer extends NSObject {

	static alloc(): MDCButtonShapeThemer; // inherited from NSObject

	static applyShapeSchemeToButton(shapeScheme: MDCShapeScheming, button: MDCButton): void;

	static new(): MDCButtonShapeThemer; // inherited from NSObject
}

declare class MDCButtonTypographyThemer extends NSObject {

	static alloc(): MDCButtonTypographyThemer; // inherited from NSObject

	static applyTypographySchemeToButton(typographyScheme: MDCTypographyScheming, button: MDCButton): void;

	static new(): MDCButtonTypographyThemer; // inherited from NSObject
}

declare class MDCCard extends UIControl implements MDCElevatable, MDCElevationOverriding {

	static alloc(): MDCCard; // inherited from NSObject

	static appearance(): MDCCard; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCCard; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCCard; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCCard; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCCard; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCCard; // inherited from UIAppearance

	static new(): MDCCard; // inherited from NSObject

	cornerRadius: number;

	enableRippleBehavior: boolean;

	readonly inkView: MDCInkView;

	interactable: boolean;

	readonly rippleView: MDCStatefulRippleView;

	shapeGenerator: MDCShapeGenerating;

	traitCollectionDidChangeBlock: (p1: MDCCard, p2: UITraitCollection) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly mdc_currentElevation: number; // inherited from MDCElevatable

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void; // inherited from MDCElevatable

	mdc_overrideBaseElevation: number; // inherited from MDCElevationOverriding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyOutlinedThemeWithScheme(scheme: MDCContainerScheming): void;

	applyThemeWithScheme(scheme: MDCContainerScheming): void;

	borderColorForState(state: UIControlState): UIColor;

	borderWidthForState(state: UIControlState): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setBorderColorForState(borderColor: UIColor, state: UIControlState): void;

	setBorderWidthForState(borderWidth: number, state: UIControlState): void;

	setShadowColorForState(shadowColor: UIColor, state: UIControlState): void;

	setShadowElevationForState(shadowElevation: number, state: UIControlState): void;

	shadowColorForState(state: UIControlState): UIColor;

	shadowElevationForState(state: UIControlState): number;
}

declare const enum MDCCardCellHorizontalImageAlignment {

	Right = 0,

	Center = 1,

	Left = 2
}

declare const enum MDCCardCellState {

	Normal = 0,

	Highlighted = 1,

	Selected = 2,

	Dragged = 3
}

declare const enum MDCCardCellVerticalImageAlignment {

	Top = 0,

	Center = 1,

	Bottom = 2
}

declare class MDCCardCollectionCell extends UICollectionViewCell implements MDCElevatable, MDCElevationOverriding {

	static alloc(): MDCCardCollectionCell; // inherited from NSObject

	static appearance(): MDCCardCollectionCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCCardCollectionCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCCardCollectionCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCCardCollectionCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCCardCollectionCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCCardCollectionCell; // inherited from UIAppearance

	static new(): MDCCardCollectionCell; // inherited from NSObject

	cornerRadius: number;

	dragged: boolean;

	enableRippleBehavior: boolean;

	readonly inkView: MDCInkView;

	interactable: boolean;

	readonly rippleView: MDCStatefulRippleView;

	selectable: boolean;

	shapeGenerator: MDCShapeGenerating;

	readonly state: MDCCardCellState;

	traitCollectionDidChangeBlock: (p1: MDCCardCollectionCell, p2: UITraitCollection) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly mdc_currentElevation: number; // inherited from MDCElevatable

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void; // inherited from MDCElevatable

	mdc_overrideBaseElevation: number; // inherited from MDCElevationOverriding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyOutlinedThemeWithScheme(scheme: MDCContainerScheming): void;

	applyThemeWithScheme(scheme: MDCContainerScheming): void;

	borderColorForState(state: MDCCardCellState): UIColor;

	borderWidthForState(state: MDCCardCellState): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	horizontalImageAlignmentForState(state: MDCCardCellState): MDCCardCellHorizontalImageAlignment;

	imageForState(state: MDCCardCellState): UIImage;

	imageTintColorForState(state: MDCCardCellState): UIColor;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setBorderColorForState(borderColor: UIColor, state: MDCCardCellState): void;

	setBorderWidthForState(borderWidth: number, state: MDCCardCellState): void;

	setHorizontalImageAlignmentForState(horizontalImageAlignment: MDCCardCellHorizontalImageAlignment, state: MDCCardCellState): void;

	setImageForState(image: UIImage, state: MDCCardCellState): void;

	setImageTintColorForState(imageTintColor: UIColor, state: MDCCardCellState): void;

	setShadowColorForState(shadowColor: UIColor, state: MDCCardCellState): void;

	setShadowElevationForState(shadowElevation: number, state: MDCCardCellState): void;

	setVerticalImageAlignmentForState(verticalImageAlignment: MDCCardCellVerticalImageAlignment, state: MDCCardCellState): void;

	shadowColorForState(state: MDCCardCellState): UIColor;

	shadowElevationForState(state: MDCCardCellState): number;

	verticalImageAlignmentForState(state: MDCCardCellState): MDCCardCellVerticalImageAlignment;
}

declare class MDCCardsColorThemer extends NSObject {

	static alloc(): MDCCardsColorThemer; // inherited from NSObject

	static applyOutlinedVariantWithColorSchemeToCard(colorScheme: MDCColorScheming, card: MDCCard): void;

	static applyOutlinedVariantWithColorSchemeToCardCell(colorScheme: MDCColorScheming, cardCell: MDCCardCollectionCell): void;

	static applySemanticColorSchemeToCard(colorScheme: MDCColorScheming, card: MDCCard): void;

	static applySemanticColorSchemeToCardCell(colorScheme: MDCColorScheming, cardCell: MDCCardCollectionCell): void;

	static new(): MDCCardsColorThemer; // inherited from NSObject
}

declare class MDCCardsShapeThemer extends NSObject {

	static alloc(): MDCCardsShapeThemer; // inherited from NSObject

	static applyShapeSchemeToCard(shapeScheme: MDCShapeScheming, card: MDCCard): void;

	static applyShapeSchemeToCardCell(shapeScheme: MDCShapeScheming, cardCell: MDCCardCollectionCell): void;

	static new(): MDCCardsShapeThemer; // inherited from NSObject
}

declare class MDCChipCollectionViewCell extends UICollectionViewCell {

	static alloc(): MDCChipCollectionViewCell; // inherited from NSObject

	static appearance(): MDCChipCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCChipCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCChipCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCChipCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCChipCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCChipCollectionViewCell; // inherited from UIAppearance

	static new(): MDCChipCollectionViewCell; // inherited from NSObject

	alwaysAnimateResize: boolean;

	readonly chipView: MDCChipView;

	createChipView(): MDCChipView;
}

declare class MDCChipCollectionViewFlowLayout extends UICollectionViewFlowLayout {

	static alloc(): MDCChipCollectionViewFlowLayout; // inherited from NSObject

	static new(): MDCChipCollectionViewFlowLayout; // inherited from NSObject
}

declare class MDCChipField extends UIView {

	static alloc(): MDCChipField; // inherited from NSObject

	static appearance(): MDCChipField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCChipField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCChipField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCChipField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCChipField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCChipField; // inherited from UIAppearance

	static new(): MDCChipField; // inherited from NSObject

	chipHeight: number;

	chips: NSArray<MDCChipView>;

	contentEdgeInsets: UIEdgeInsets;

	delegate: MDCChipFieldDelegate;

	delimiter: MDCChipFieldDelimiter;

	minTextFieldWidth: number;

	showChipsDeleteButton: boolean;

	showPlaceholderWithChips: boolean;

	readonly textField: MDCTextField;

	addChip(chip: MDCChipView): void;

	clearTextInput(): void;

	deselectAllChips(): void;

	focusTextFieldForAccessibility(): void;

	removeChip(chip: MDCChipView): void;

	removeSelectedChips(): void;

	selectChip(chip: MDCChipView): void;
}

declare var MDCChipFieldDefaultContentEdgeInsets: UIEdgeInsets;

declare var MDCChipFieldDefaultMinTextFieldWidth: number;

interface MDCChipFieldDelegate extends NSObjectProtocol {

	chipFieldDidAddChip?(chipField: MDCChipField, chip: MDCChipView): void;

	chipFieldDidBeginEditing?(chipField: MDCChipField): void;

	chipFieldDidChangeInput?(chipField: MDCChipField, input: string): void;

	chipFieldDidEndEditing?(chipField: MDCChipField): void;

	chipFieldDidRemoveChip?(chipField: MDCChipField, chip: MDCChipView): void;

	chipFieldDidTapChip?(chipField: MDCChipField, chip: MDCChipView): void;

	chipFieldHeightDidChange?(chipField: MDCChipField): void;

	chipFieldShouldAddChip?(chipField: MDCChipField, chip: MDCChipView): boolean;

	chipFieldShouldBecomeFirstResponder?(chipField: MDCChipField): boolean;

	chipFieldShouldReturn?(chipField: MDCChipField): boolean;
}
declare var MDCChipFieldDelegate: {

	prototype: MDCChipFieldDelegate;
};

declare const enum MDCChipFieldDelimiter {

	None = 0,

	Return = 1,

	Space = 2,

	DidEndEditing = 4,

	Default = 5,

	All = 4294967295
}

declare class MDCChipView extends UIControl implements MDCElevatable, MDCElevationOverriding {

	static alloc(): MDCChipView; // inherited from NSObject

	static appearance(): MDCChipView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCChipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCChipView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCChipView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCChipView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCChipView; // inherited from UIAppearance

	static new(): MDCChipView; // inherited from NSObject

	accessoryPadding: UIEdgeInsets;

	accessoryView: UIView;

	adjustsFontForContentSizeCategoryWhenScaledFontIsUnavailable: boolean;

	contentPadding: UIEdgeInsets;

	enableRippleBehavior: boolean;

	hitAreaInsets: UIEdgeInsets;

	imagePadding: UIEdgeInsets;

	readonly imageView: UIImageView;

	mdc_adjustsFontForContentSizeCategory: boolean;

	minimumSize: CGSize;

	rippleAllowsSelection: boolean;

	readonly selectedImageView: UIImageView;

	shapeGenerator: MDCShapeGenerating;

	titleFont: UIFont;

	readonly titleLabel: UILabel;

	titlePadding: UIEdgeInsets;

	traitCollectionDidChangeBlock: (p1: MDCChipView, p2: UITraitCollection) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly mdc_currentElevation: number; // inherited from MDCElevatable

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void; // inherited from MDCElevatable

	mdc_overrideBaseElevation: number; // inherited from MDCElevationOverriding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	backgroundColorForState(state: UIControlState): UIColor;

	borderColorForState(state: UIControlState): UIColor;

	borderWidthForState(state: UIControlState): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	elevationForState(state: UIControlState): number;

	inkColorForState(state: UIControlState): UIColor;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setBackgroundColorForState(backgroundColor: UIColor, state: UIControlState): void;

	setBorderColorForState(borderColor: UIColor, state: UIControlState): void;

	setBorderWidthForState(borderWidth: number, state: UIControlState): void;

	setElevationForState(elevation: number, state: UIControlState): void;

	setInkColorForState(inkColor: UIColor, state: UIControlState): void;

	setShadowColorForState(shadowColor: UIColor, state: UIControlState): void;

	setTitleColorForState(titleColor: UIColor, state: UIControlState): void;

	shadowColorForState(state: UIControlState): UIColor;

	titleColorForState(state: UIControlState): UIColor;
}

interface MDCColorScheme extends NSObjectProtocol {

	primaryColor: UIColor;

	primaryDarkColor?: UIColor;

	primaryLightColor?: UIColor;

	secondaryColor?: UIColor;

	secondaryDarkColor?: UIColor;

	secondaryLightColor?: UIColor;
}
declare var MDCColorScheme: {

	prototype: MDCColorScheme;
};

declare const enum MDCColorSchemeDefaults {

	Material201804 = 0,

	MaterialDark201907 = 1,

	Material201907 = 2
}

interface MDCColorScheming {

	backgroundColor: UIColor;

	elevationOverlayColor: UIColor;

	elevationOverlayEnabledForDarkMode: boolean;

	errorColor: UIColor;

	onBackgroundColor: UIColor;

	onPrimaryColor: UIColor;

	onSecondaryColor: UIColor;

	onSurfaceColor: UIColor;

	primaryColor: UIColor;

	primaryColorVariant: UIColor;

	secondaryColor: UIColor;

	surfaceColor: UIColor;
}
declare var MDCColorScheming: {

	prototype: MDCColorScheming;
};

declare class MDCContainedButtonColorThemer extends NSObject {

	static alloc(): MDCContainedButtonColorThemer; // inherited from NSObject

	static applySemanticColorSchemeToButton(colorScheme: MDCColorScheming, button: MDCButton): void;

	static new(): MDCContainedButtonColorThemer; // inherited from NSObject
}

declare class MDCContainerScheme extends NSObject implements MDCContainerScheming {

	static alloc(): MDCContainerScheme; // inherited from NSObject

	static new(): MDCContainerScheme; // inherited from NSObject

	colorScheme: MDCSemanticColorScheme;

	shapeScheme: MDCShapeScheme;

	typographyScheme: MDCTypographyScheme;
}

interface MDCContainerScheming {

	colorScheme: MDCColorScheming;

	shapeScheme: MDCShapeScheming;

	typographyScheme: MDCTypographyScheming;
}
declare var MDCContainerScheming: {

	prototype: MDCContainerScheming;
};

declare class MDCCornerTreatment extends NSObject implements NSCopying {

	static alloc(): MDCCornerTreatment; // inherited from NSObject

	static cornerWithCurve(value: CGSize): MDCCurvedCornerTreatment;

	static cornerWithCurveValueType(value: CGSize, valueType: MDCCornerTreatmentValueType): MDCCurvedCornerTreatment;

	static cornerWithCut(value: number): MDCCutCornerTreatment;

	static cornerWithCutValueType(value: number, valueType: MDCCornerTreatmentValueType): MDCCutCornerTreatment;

	static cornerWithRadius(value: number): MDCRoundedCornerTreatment;

	static cornerWithRadiusValueType(value: number, valueType: MDCCornerTreatmentValueType): MDCRoundedCornerTreatment;

	static new(): MDCCornerTreatment; // inherited from NSObject

	valueType: MDCCornerTreatmentValueType;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	pathGeneratorForCornerWithAngle(angle: number): MDCPathGenerator;

	pathGeneratorForCornerWithAngleForViewSize(angle: number, size: CGSize): MDCPathGenerator;
}

declare const enum MDCCornerTreatmentValueType {

	Absolute = 0,

	Percentage = 1
}

declare class MDCCurvedCornerTreatment extends MDCCornerTreatment {

	static alloc(): MDCCurvedCornerTreatment; // inherited from NSObject

	static new(): MDCCurvedCornerTreatment; // inherited from NSObject

	size: CGSize;

	constructor(o: { size: CGSize; });

	initWithSize(size: CGSize): this;
}

declare class MDCCurvedRectShapeGenerator extends NSObject implements MDCShapeGenerating {

	static alloc(): MDCCurvedRectShapeGenerator; // inherited from NSObject

	static new(): MDCCurvedRectShapeGenerator; // inherited from NSObject

	cornerSize: CGSize;

	constructor(o: { cornerSize: CGSize; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithCornerSize(cornerSize: CGSize): this;

	pathForSize(size: CGSize): any;
}

declare class MDCCutCornerTreatment extends MDCCornerTreatment {

	static alloc(): MDCCutCornerTreatment; // inherited from NSObject

	static new(): MDCCutCornerTreatment; // inherited from NSObject

	cut: number;

	constructor(o: { cut: number; });

	initWithCut(cut: number): this;
}

declare class MDCEdgeTreatment extends NSObject implements NSCopying {

	static alloc(): MDCEdgeTreatment; // inherited from NSObject

	static new(): MDCEdgeTreatment; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	pathGeneratorForEdgeWithLength(length: number): MDCPathGenerator;
}

interface MDCElevatable extends NSObjectProtocol {

	mdc_currentElevation: number;

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void;
}
declare var MDCElevatable: {

	prototype: MDCElevatable;
};

interface MDCElevationOverriding {

	mdc_overrideBaseElevation: number;
}
declare var MDCElevationOverriding: {

	prototype: MDCElevationOverriding;
};

declare class MDCFilledTextFieldColorThemer extends NSObject {

	static alloc(): MDCFilledTextFieldColorThemer; // inherited from NSObject

	static applySemanticColorSchemeToTextInputControllerFilled(colorScheme: MDCColorScheming, textInputControllerFilled: MDCTextInputControllerFilled): void;

	static new(): MDCFilledTextFieldColorThemer; // inherited from NSObject
}

declare class MDCFlatButton extends MDCButton {

	static alloc(): MDCFlatButton; // inherited from NSObject

	static appearance(): MDCFlatButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCFlatButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCFlatButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCFlatButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCFlatButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCFlatButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MDCFlatButton; // inherited from UIButton

	static new(): MDCFlatButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): MDCFlatButton; // inherited from UIButton

	hasOpaqueBackground: boolean;
}

declare class MDCFloatingButton extends MDCButton {

	static alloc(): MDCFloatingButton; // inherited from NSObject

	static appearance(): MDCFloatingButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCFloatingButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCFloatingButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCFloatingButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCFloatingButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCFloatingButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MDCFloatingButton; // inherited from UIButton

	static defaultDimension(): number;

	static floatingButtonWithShape(shape: MDCFloatingButtonShape): MDCFloatingButton;

	static miniDimension(): number;

	static new(): MDCFloatingButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): MDCFloatingButton; // inherited from UIButton

	imageLocation: MDCFloatingButtonImageLocation;

	imageTitleSpace: number;

	mode: MDCFloatingButtonMode;

	constructor(o: { frame: CGRect; shape: MDCFloatingButtonShape; });

	applySecondaryThemeWithScheme(scheme: MDCContainerScheming): void;

	collapseCompletion(animated: boolean, completion: () => void): void;

	expandCompletion(animated: boolean, completion: () => void): void;

	initWithFrameShape(frame: CGRect, shape: MDCFloatingButtonShape): this;

	setContentEdgeInsetsForShapeInMode(contentEdgeInsets: UIEdgeInsets, shape: MDCFloatingButtonShape, mode: MDCFloatingButtonMode): void;

	setHitAreaInsetsForShapeInMode(hitAreaInsets: UIEdgeInsets, shape: MDCFloatingButtonShape, mode: MDCFloatingButtonMode): void;

	setMaximumSizeForShapeInMode(maximumSize: CGSize, shape: MDCFloatingButtonShape, mode: MDCFloatingButtonMode): void;

	setMinimumSizeForShapeInMode(minimumSize: CGSize, shape: MDCFloatingButtonShape, mode: MDCFloatingButtonMode): void;
}

declare class MDCFloatingButtonColorThemer extends NSObject {

	static alloc(): MDCFloatingButtonColorThemer; // inherited from NSObject

	static applySemanticColorSchemeToButton(colorScheme: MDCColorScheming, button: MDCFloatingButton): void;

	static new(): MDCFloatingButtonColorThemer; // inherited from NSObject
}

declare const enum MDCFloatingButtonImageLocation {

	Leading = 0,

	Trailing = 1
}

declare const enum MDCFloatingButtonMode {

	Normal = 0,

	Expanded = 1
}

declare const enum MDCFloatingButtonShape {

	Default = 0,

	Mini = 1
}

declare class MDCFloatingButtonShapeThemer extends NSObject {

	static alloc(): MDCFloatingButtonShapeThemer; // inherited from NSObject

	static applyShapeSchemeToButton(shapeScheme: MDCShapeScheming, button: MDCFloatingButton): void;

	static new(): MDCFloatingButtonShapeThemer; // inherited from NSObject
}

declare class MDCFontScaler extends NSObject {

	static alloc(): MDCFontScaler; // inherited from NSObject

	static new(): MDCFontScaler; // inherited from NSObject

	static scalerForMaterialTextStyle(textStyle: string): MDCFontScaler;

	constructor(o: { forMaterialTextStyle: string; });

	initForMaterialTextStyle(textStyle: string): this;

	scaledFontWithFont(font: UIFont): UIFont;

	scaledValueForValue(value: number): number;
}

interface MDCFontScheme extends NSObjectProtocol {

	body1: UIFont;

	body2: UIFont;

	button: UIFont;

	caption: UIFont;

	headline1: UIFont;

	headline2: UIFont;

	headline3: UIFont;

	headline4: UIFont;

	headline5: UIFont;

	headline6: UIFont;

	overline: UIFont;

	subtitle1: UIFont;

	subtitle2: UIFont;
}
declare var MDCFontScheme: {

	prototype: MDCFontScheme;
};

declare const enum MDCFontTextStyle {

	Body1 = 0,

	Body2 = 1,

	Caption = 2,

	Headline = 3,

	Subheadline = 4,

	Title = 5,

	Display1 = 6,

	Display2 = 7,

	Display3 = 8,

	Display4 = 9,

	Button = 10
}

declare class MDCIcons extends NSObject {

	static alloc(): MDCIcons; // inherited from NSObject

	static bundleNamed(bundleName: string): NSBundle;

	static imageFor_ic_check_circle(): UIImage;

	static new(): MDCIcons; // inherited from NSObject

	static pathForIconNameWithBundleName(iconName: string, bundleName: string): string;

	static pathFor_ic_check_circle(): string;
}

declare class MDCInkGestureRecognizer extends UIGestureRecognizer {

	static alloc(): MDCInkGestureRecognizer; // inherited from NSObject

	static new(): MDCInkGestureRecognizer; // inherited from NSObject

	cancelOnDragOut: boolean;

	dragCancelDistance: number;

	targetBounds: CGRect;

	isTouchWithinTargetBounds(): boolean;

	touchStartLocationInView(view: UIView): CGPoint;
}

declare const enum MDCInkStyle {

	Bounded = 0,

	Unbounded = 1
}

declare class MDCInkTouchController extends NSObject implements UIGestureRecognizerDelegate {

	static alloc(): MDCInkTouchController; // inherited from NSObject

	static new(): MDCInkTouchController; // inherited from NSObject

	cancelsOnDragOut: boolean;

	readonly defaultInkView: MDCInkView;

	delaysInkSpread: boolean;

	delegate: MDCInkTouchControllerDelegate;

	dragCancelDistance: number;

	readonly gestureRecognizer: MDCInkGestureRecognizer;

	requiresFailureOfScrollViewGestures: boolean;

	targetBounds: CGRect;

	readonly view: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { view: UIView; });

	addInkView(): void;

	cancelInkTouchProcessing(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	initWithView(view: UIView): this;

	inkViewAtTouchLocation(location: CGPoint): MDCInkView;

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

interface MDCInkTouchControllerDelegate extends NSObjectProtocol {

	inkTouchControllerDidProcessInkViewAtTouchLocation?(inkTouchController: MDCInkTouchController, inkView: MDCInkView, location: CGPoint): void;

	inkTouchControllerInkViewAtTouchLocation?(inkTouchController: MDCInkTouchController, location: CGPoint): MDCInkView;

	inkTouchControllerInsertInkViewIntoView?(inkTouchController: MDCInkTouchController, inkView: UIView, view: UIView): void;

	inkTouchControllerShouldProcessInkTouchesAtTouchLocation?(inkTouchController: MDCInkTouchController, location: CGPoint): boolean;
}
declare var MDCInkTouchControllerDelegate: {

	prototype: MDCInkTouchControllerDelegate;
};

declare class MDCInkView extends UIView {

	static alloc(): MDCInkView; // inherited from NSObject

	static appearance(): MDCInkView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCInkView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCInkView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCInkView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCInkView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCInkView; // inherited from UIAppearance

	static injectedInkViewForView(view: UIView): MDCInkView;

	static new(): MDCInkView; // inherited from NSObject

	animationDelegate: MDCInkViewDelegate;

	customInkCenter: CGPoint;

	readonly defaultInkColor: UIColor;

	inkColor: UIColor;

	inkStyle: MDCInkStyle;

	maxRippleRadius: number;

	traitCollectionDidChangeBlock: (p1: MDCInkView, p2: UITraitCollection) => void;

	usesCustomInkCenter: boolean;

	usesLegacyInkRipple: boolean;

	cancelAllAnimationsAnimated(animated: boolean): void;

	startTouchBeganAnimationAtPointCompletion(point: CGPoint, completionBlock: () => void): void;

	startTouchBeganAtPointAnimatedWithCompletion(point: CGPoint, animated: boolean, completionBlock: () => void): void;

	startTouchEndAtPointAnimatedWithCompletion(point: CGPoint, animated: boolean, completionBlock: () => void): void;

	startTouchEndedAnimationAtPointCompletion(point: CGPoint, completionBlock: () => void): void;
}

interface MDCInkViewDelegate extends NSObjectProtocol {

	inkAnimationDidEnd?(inkView: MDCInkView): void;

	inkAnimationDidStart?(inkView: MDCInkView): void;
}
declare var MDCInkViewDelegate: {

	prototype: MDCInkViewDelegate;
};

declare class MDCIntrinsicHeightTextView extends UITextView {

	static alloc(): MDCIntrinsicHeightTextView; // inherited from NSObject

	static appearance(): MDCIntrinsicHeightTextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCIntrinsicHeightTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCIntrinsicHeightTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCIntrinsicHeightTextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCIntrinsicHeightTextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCIntrinsicHeightTextView; // inherited from UIAppearance

	static new(): MDCIntrinsicHeightTextView; // inherited from NSObject
}

interface MDCLeadingViewTextInput extends MDCTextInput {

	leadingView: UIView;

	leadingViewMode: UITextFieldViewMode;
}
declare var MDCLeadingViewTextInput: {

	prototype: MDCLeadingViewTextInput;
};

declare class MDCMultilineTextField extends UIView implements MDCElevatable, MDCElevationOverriding, MDCMultilineTextInput, MDCTextInput {

	static alloc(): MDCMultilineTextField; // inherited from NSObject

	static appearance(): MDCMultilineTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCMultilineTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCMultilineTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCMultilineTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCMultilineTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCMultilineTextField; // inherited from UIAppearance

	static new(): MDCMultilineTextField; // inherited from NSObject

	adjustsFontForContentSizeCategory: boolean;

	layoutDelegate: MDCMultilineTextInputLayoutDelegate;

	multilineDelegate: MDCMultilineTextInputDelegate;

	textView: MDCIntrinsicHeightTextView;

	traitCollectionDidChangeBlock: (p1: MDCMultilineTextField, p2: UITraitCollection) => void;

	attributedPlaceholder: NSAttributedString; // inherited from MDCTextInput

	attributedText: NSAttributedString; // inherited from MDCTextInput

	borderPath: UIBezierPath; // inherited from MDCTextInput

	borderView: MDCTextInputBorderView; // inherited from MDCTextInput

	readonly clearButton: UIButton; // inherited from MDCTextInput

	clearButtonMode: UITextFieldViewMode; // inherited from MDCTextInput

	cursorColor: UIColor; // inherited from MDCTextInput

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly editing: boolean; // inherited from MDCTextInput

	enabled: boolean; // inherited from MDCTextInput

	expandsOnOverflow: boolean; // inherited from MDCMultilineTextInput

	font: UIFont; // inherited from MDCTextInput

	readonly hasTextContent: boolean; // inherited from MDCTextInput

	readonly hash: number; // inherited from NSObjectProtocol

	hidesPlaceholderOnInput: boolean; // inherited from MDCTextInput

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly leadingUnderlineLabel: UILabel; // inherited from MDCTextInput

	mdc_adjustsFontForContentSizeCategory: boolean; // inherited from MDCTextInput

	readonly mdc_currentElevation: number; // inherited from MDCElevatable

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void; // inherited from MDCElevatable

	mdc_overrideBaseElevation: number; // inherited from MDCElevationOverriding

	minimumLines: number; // inherited from MDCMultilineTextInput

	placeholder: string; // inherited from MDCTextInput

	readonly placeholderLabel: UILabel; // inherited from MDCTextInput

	positioningDelegate: MDCTextInputPositioningDelegate; // inherited from MDCTextInput

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	text: string; // inherited from MDCTextInput

	textColor: UIColor; // inherited from MDCTextInput

	readonly textInsets: UIEdgeInsets; // inherited from MDCTextInput

	textInsetsMode: MDCTextInputTextInsetsMode; // inherited from MDCTextInput

	readonly trailingUnderlineLabel: UILabel; // inherited from MDCTextInput

	trailingView: UIView; // inherited from MDCTextInput

	trailingViewMode: UITextFieldViewMode; // inherited from MDCTextInput

	readonly underline: MDCTextInputUnderlineView; // inherited from MDCTextInput

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	clearText(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

interface MDCMultilineTextInput extends MDCTextInput {

	expandsOnOverflow: boolean;

	minimumLines: number;
}
declare var MDCMultilineTextInput: {

	prototype: MDCMultilineTextInput;
};

interface MDCMultilineTextInputDelegate extends NSObjectProtocol {

	multilineTextFieldShouldClear?(textField: UIView): boolean;
}
declare var MDCMultilineTextInputDelegate: {

	prototype: MDCMultilineTextInputDelegate;
};

interface MDCMultilineTextInputLayoutDelegate extends NSObjectProtocol {

	multilineTextFieldDidChangeContentSize?(multilineTextField: MDCMultilineTextInput, size: CGSize): void;
}
declare var MDCMultilineTextInputLayoutDelegate: {

	prototype: MDCMultilineTextInputLayoutDelegate;
};

declare class MDCOutlinedButtonColorThemer extends NSObject {

	static alloc(): MDCOutlinedButtonColorThemer; // inherited from NSObject

	static applySemanticColorSchemeToButton(colorScheme: MDCColorScheming, button: MDCButton): void;

	static new(): MDCOutlinedButtonColorThemer; // inherited from NSObject
}

declare class MDCOutlinedTextFieldColorThemer extends NSObject {

	static alloc(): MDCOutlinedTextFieldColorThemer; // inherited from NSObject

	static applySemanticColorSchemeToTextInputController(colorScheme: MDCColorScheming, textInputController: MDCTextInputController): void;

	static new(): MDCOutlinedTextFieldColorThemer; // inherited from NSObject
}

declare class MDCPalette extends NSObject {

	static alloc(): MDCPalette; // inherited from NSObject

	static new(): MDCPalette; // inherited from NSObject

	static paletteGeneratedFromColor(target500Color: UIColor): MDCPalette;

	static paletteWithTintsAccents(tints: NSDictionary<string, UIColor>, accents: NSDictionary<string, UIColor>): MDCPalette;

	readonly accent100: UIColor;

	readonly accent200: UIColor;

	readonly accent400: UIColor;

	readonly accent700: UIColor;

	readonly tint100: UIColor;

	readonly tint200: UIColor;

	readonly tint300: UIColor;

	readonly tint400: UIColor;

	readonly tint50: UIColor;

	readonly tint500: UIColor;

	readonly tint600: UIColor;

	readonly tint700: UIColor;

	readonly tint800: UIColor;

	readonly tint900: UIColor;

	static readonly amberPalette: MDCPalette;

	static readonly blueGreyPalette: MDCPalette;

	static readonly bluePalette: MDCPalette;

	static readonly brownPalette: MDCPalette;

	static readonly cyanPalette: MDCPalette;

	static readonly deepOrangePalette: MDCPalette;

	static readonly deepPurplePalette: MDCPalette;

	static readonly greenPalette: MDCPalette;

	static readonly greyPalette: MDCPalette;

	static readonly indigoPalette: MDCPalette;

	static readonly lightBluePalette: MDCPalette;

	static readonly lightGreenPalette: MDCPalette;

	static readonly limePalette: MDCPalette;

	static readonly orangePalette: MDCPalette;

	static readonly pinkPalette: MDCPalette;

	static readonly purplePalette: MDCPalette;

	static readonly redPalette: MDCPalette;

	static readonly tealPalette: MDCPalette;

	static readonly yellowPalette: MDCPalette;

	constructor(o: { tints: NSDictionary<string, UIColor>; accents: NSDictionary<string, UIColor>; });

	initWithTintsAccents(tints: NSDictionary<string, UIColor>, accents: NSDictionary<string, UIColor>): this;
}

declare var MDCPaletteAccent100Name: string;

declare var MDCPaletteAccent200Name: string;

declare var MDCPaletteAccent400Name: string;

declare var MDCPaletteAccent700Name: string;

declare var MDCPaletteTint100Name: string;

declare var MDCPaletteTint200Name: string;

declare var MDCPaletteTint300Name: string;

declare var MDCPaletteTint400Name: string;

declare var MDCPaletteTint500Name: string;

declare var MDCPaletteTint50Name: string;

declare var MDCPaletteTint600Name: string;

declare var MDCPaletteTint700Name: string;

declare var MDCPaletteTint800Name: string;

declare var MDCPaletteTint900Name: string;

declare class MDCPathGenerator extends NSObject {

	static alloc(): MDCPathGenerator; // inherited from NSObject

	static new(): MDCPathGenerator; // inherited from NSObject

	static pathGenerator(): MDCPathGenerator;

	static pathGeneratorWithStartPoint(startPoint: CGPoint): MDCPathGenerator;

	readonly endPoint: CGPoint;

	readonly startPoint: CGPoint;

	addArcWithCenterRadiusStartAngleEndAngleClockwise(center: CGPoint, radius: number, startAngle: number, endAngle: number, clockwise: boolean): void;

	addArcWithTangentPointToPointRadius(tangentPoint: CGPoint, toPoint: CGPoint, radius: number): void;

	addCurveWithControlPoint1ControlPoint2ToPoint(controlPoint1: CGPoint, controlPoint2: CGPoint, toPoint: CGPoint): void;

	addLineToPoint(point: CGPoint): void;

	addQuadCurveWithControlPointToPoint(controlPoint: CGPoint, toPoint: CGPoint): void;

	appendToCGPathTransform(cgPath: any, transform: interop.Pointer | interop.Reference<CGAffineTransform>): void;
}

declare class MDCPillShapeGenerator extends NSObject implements MDCShapeGenerating {

	static alloc(): MDCPillShapeGenerator; // inherited from NSObject

	static new(): MDCPillShapeGenerator; // inherited from NSObject

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	pathForSize(size: CGSize): any;
}

declare class MDCProgressView extends UIView {

	static alloc(): MDCProgressView; // inherited from NSObject

	static appearance(): MDCProgressView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCProgressView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCProgressView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCProgressView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCProgressView; // inherited from UIAppearance

	static new(): MDCProgressView; // inherited from NSObject

	backwardProgressAnimationMode: MDCProgressViewBackwardAnimationMode;

	cornerRadius: number;

	progress: number;

	progressTintColor: UIColor;

	trackTintColor: UIColor;

	traitCollectionDidChangeBlock: (p1: MDCProgressView, p2: UITraitCollection) => void;

	applyThemeWithScheme(scheme: MDCContainerScheming): void;

	setHiddenAnimatedCompletion(hidden: boolean, animated: boolean, completion: (p1: boolean) => void): void;

	setProgressAnimatedCompletion(progress: number, animated: boolean, completion: (p1: boolean) => void): void;
}

declare const enum MDCProgressViewBackwardAnimationMode {

	Reset = 0,

	Animate = 1
}

declare class MDCRaisedButton extends MDCButton {

	static alloc(): MDCRaisedButton; // inherited from NSObject

	static appearance(): MDCRaisedButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCRaisedButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCRaisedButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCRaisedButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCRaisedButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCRaisedButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MDCRaisedButton; // inherited from UIButton

	static new(): MDCRaisedButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): MDCRaisedButton; // inherited from UIButton
}

declare class MDCRectangleShapeGenerator extends NSObject implements MDCShapeGenerating {

	static alloc(): MDCRectangleShapeGenerator; // inherited from NSObject

	static new(): MDCRectangleShapeGenerator; // inherited from NSObject

	bottomEdge: MDCEdgeTreatment;

	bottomLeftCorner: MDCCornerTreatment;

	bottomLeftCornerOffset: CGPoint;

	bottomRightCorner: MDCCornerTreatment;

	bottomRightCornerOffset: CGPoint;

	leftEdge: MDCEdgeTreatment;

	rightEdge: MDCEdgeTreatment;

	topEdge: MDCEdgeTreatment;

	topLeftCorner: MDCCornerTreatment;

	topLeftCornerOffset: CGPoint;

	topRightCorner: MDCCornerTreatment;

	topRightCornerOffset: CGPoint;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	pathForSize(size: CGSize): any;

	setCorners(cornerShape: MDCCornerTreatment): void;

	setEdges(edgeShape: MDCEdgeTreatment): void;
}

declare const enum MDCRippleState {

	Normal = 0,

	Highlighted = 1,

	Selected = 2,

	Dragged = 4
}

declare const enum MDCRippleStyle {

	Bounded = 0,

	Unbounded = 1
}

declare class MDCRippleTouchController extends NSObject implements UIGestureRecognizerDelegate {

	static alloc(): MDCRippleTouchController; // inherited from NSObject

	static new(): MDCRippleTouchController; // inherited from NSObject

	delegate: MDCRippleTouchControllerDelegate;

	readonly gestureRecognizer: UILongPressGestureRecognizer;

	readonly rippleView: MDCRippleView;

	shouldProcessRippleWithScrollViewGestures: boolean;

	readonly view: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { view: UIView; });

	constructor(o: { view: UIView; deferred: boolean; });

	addRippleToView(view: UIView): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	initWithView(view: UIView): this;

	initWithViewDeferred(view: UIView, deferred: boolean): this;

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

interface MDCRippleTouchControllerDelegate extends NSObjectProtocol {

	rippleTouchControllerDidProcessRippleViewAtTouchLocation?(rippleTouchController: MDCRippleTouchController, rippleView: MDCRippleView, location: CGPoint): void;

	rippleTouchControllerInsertRippleViewIntoView?(rippleTouchController: MDCRippleTouchController, rippleView: MDCRippleView, view: UIView): void;

	rippleTouchControllerShouldProcessRippleTouchesAtTouchLocation?(rippleTouchController: MDCRippleTouchController, location: CGPoint): boolean;
}
declare var MDCRippleTouchControllerDelegate: {

	prototype: MDCRippleTouchControllerDelegate;
};

declare class MDCRippleView extends UIView {

	static alloc(): MDCRippleView; // inherited from NSObject

	static appearance(): MDCRippleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCRippleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCRippleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCRippleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCRippleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCRippleView; // inherited from UIAppearance

	static new(): MDCRippleView; // inherited from NSObject

	activeRippleColor: UIColor;

	maximumRadius: number;

	rippleColor: UIColor;

	rippleStyle: MDCRippleStyle;

	rippleViewDelegate: MDCRippleViewDelegate;

	traitCollectionDidChangeBlock: (p1: MDCRippleView, p2: UITraitCollection) => void;

	usesSuperviewShadowLayerAsMask: boolean;

	beginRippleTouchDownAtPointAnimatedCompletion(point: CGPoint, animated: boolean, completion: () => void): void;

	beginRippleTouchUpAnimatedCompletion(animated: boolean, completion: () => void): void;

	cancelAllRipplesAnimatedCompletion(animated: boolean, completion: () => void): void;

	fadeInRippleAnimatedCompletion(animated: boolean, completion: () => void): void;

	fadeOutRippleAnimatedCompletion(animated: boolean, completion: () => void): void;
}

interface MDCRippleViewDelegate extends NSObjectProtocol {

	rippleTouchDownAnimationDidBegin?(rippleView: MDCRippleView): void;

	rippleTouchDownAnimationDidEnd?(rippleView: MDCRippleView): void;

	rippleTouchUpAnimationDidBegin?(rippleView: MDCRippleView): void;

	rippleTouchUpAnimationDidEnd?(rippleView: MDCRippleView): void;
}
declare var MDCRippleViewDelegate: {

	prototype: MDCRippleViewDelegate;
};

declare class MDCRoundedCornerTreatment extends MDCCornerTreatment {

	static alloc(): MDCRoundedCornerTreatment; // inherited from NSObject

	static new(): MDCRoundedCornerTreatment; // inherited from NSObject

	radius: number;

	constructor(o: { radius: number; });

	initWithRadius(radius: number): this;
}

declare class MDCSemanticColorScheme extends NSObject implements MDCColorScheming, NSCopying {

	static alloc(): MDCSemanticColorScheme; // inherited from NSObject

	static blendColorWithBackgroundColor(color: UIColor, backgroundColor: UIColor): UIColor;

	static new(): MDCSemanticColorScheme; // inherited from NSObject

	backgroundColor: UIColor;

	elevationOverlayColor: UIColor;

	elevationOverlayEnabledForDarkMode: boolean;

	errorColor: UIColor;

	onBackgroundColor: UIColor;

	onPrimaryColor: UIColor;

	onSecondaryColor: UIColor;

	onSurfaceColor: UIColor;

	primaryColor: UIColor;

	primaryColorVariant: UIColor;

	secondaryColor: UIColor;

	surfaceColor: UIColor;

	constructor(o: { defaults: MDCColorSchemeDefaults; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDefaults(defaults: MDCColorSchemeDefaults): this;
}

declare var MDCShadowElevationAppBar: number;

declare var MDCShadowElevationBottomAppBar: number;

declare var MDCShadowElevationBottomNavigationBar: number;

declare var MDCShadowElevationCardPickedUp: number;

declare var MDCShadowElevationCardResting: number;

declare var MDCShadowElevationDialog: number;

declare var MDCShadowElevationFABPressed: number;

declare var MDCShadowElevationFABResting: number;

declare var MDCShadowElevationMenu: number;

declare var MDCShadowElevationModalActionSheet: number;

declare var MDCShadowElevationModalBottomSheet: number;

declare var MDCShadowElevationNavDrawer: number;

declare var MDCShadowElevationNone: number;

declare var MDCShadowElevationPicker: number;

declare var MDCShadowElevationQuickEntry: number;

declare var MDCShadowElevationQuickEntryResting: number;

declare var MDCShadowElevationRaisedButtonPressed: number;

declare var MDCShadowElevationRaisedButtonResting: number;

declare var MDCShadowElevationRefresh: number;

declare var MDCShadowElevationRightDrawer: number;

declare var MDCShadowElevationSearchBarResting: number;

declare var MDCShadowElevationSearchBarScrolled: number;

declare var MDCShadowElevationSnackbar: number;

declare var MDCShadowElevationSubMenu: number;

declare var MDCShadowElevationSwitch: number;

declare class MDCShadowLayer extends CALayer implements CALayerDelegate {

	static alloc(): MDCShadowLayer; // inherited from NSObject

	static layer(): MDCShadowLayer; // inherited from CALayer

	static new(): MDCShadowLayer; // inherited from NSObject

	elevation: number;

	shadowMaskEnabled: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionForLayerForKey(layer: CALayer, event: string): CAAction;

	animateCornerRadiusWithTimingFunctionDuration(cornerRadius: number, timingFunction: CAMediaTimingFunction, duration: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	displayLayer(layer: CALayer): void;

	drawLayerInContext(layer: CALayer, ctx: any): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layerWillDraw(layer: CALayer): void;

	layoutSublayersOfLayer(layer: CALayer): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDCShadowMetrics extends NSObject {

	static alloc(): MDCShadowMetrics; // inherited from NSObject

	static metricsWithElevation(elevation: number): MDCShadowMetrics;

	static new(): MDCShadowMetrics; // inherited from NSObject

	readonly bottomShadowOffset: CGSize;

	readonly bottomShadowOpacity: number;

	readonly bottomShadowRadius: number;

	readonly topShadowOffset: CGSize;

	readonly topShadowOpacity: number;

	readonly topShadowRadius: number;
}

declare class MDCShapeCategory extends NSObject implements NSCopying {

	static alloc(): MDCShapeCategory; // inherited from NSObject

	static new(): MDCShapeCategory; // inherited from NSObject

	bottomLeftCorner: MDCCornerTreatment;

	bottomRightCorner: MDCCornerTreatment;

	topLeftCorner: MDCCornerTreatment;

	topRightCorner: MDCCornerTreatment;

	constructor(o: { cornersWithFamily: MDCShapeCornerFamily; andSize: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initCornersWithFamilyAndSize(cornerFamily: MDCShapeCornerFamily, cornerSize: number): this;
}

declare const enum MDCShapeCornerFamily {

	Rounded = 0,

	Cut = 1
}

interface MDCShapeGenerating extends NSCopying {

	pathForSize(size: CGSize): any;
}
declare var MDCShapeGenerating: {

	prototype: MDCShapeGenerating;
};

declare class MDCShapeScheme extends NSObject implements MDCShapeScheming {

	static alloc(): MDCShapeScheme; // inherited from NSObject

	static new(): MDCShapeScheme; // inherited from NSObject

	largeComponentShape: MDCShapeCategory;

	mediumComponentShape: MDCShapeCategory;

	smallComponentShape: MDCShapeCategory;

	constructor(o: { defaults: MDCShapeSchemeDefaults; });

	initWithDefaults(defaults: MDCShapeSchemeDefaults): this;
}

declare const enum MDCShapeSchemeDefaults {

	Material201809 = 0
}

interface MDCShapeScheming {

	largeComponentShape: MDCShapeCategory;

	mediumComponentShape: MDCShapeCategory;

	smallComponentShape: MDCShapeCategory;
}
declare var MDCShapeScheming: {

	prototype: MDCShapeScheming;
};

declare class MDCShapedShadowLayer extends MDCShadowLayer {

	static alloc(): MDCShapedShadowLayer; // inherited from NSObject

	static layer(): MDCShapedShadowLayer; // inherited from CALayer

	static new(): MDCShapedShadowLayer; // inherited from NSObject

	colorLayer: CAShapeLayer;

	shapeGenerator: MDCShapeGenerating;

	shapeLayer: CAShapeLayer;

	shapedBackgroundColor: UIColor;

	shapedBorderColor: UIColor;

	shapedBorderWidth: number;
}

declare class MDCShapedView extends UIView {

	static alloc(): MDCShapedView; // inherited from NSObject

	static appearance(): MDCShapedView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCShapedView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCShapedView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCShapedView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCShapedView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCShapedView; // inherited from UIAppearance

	static new(): MDCShapedView; // inherited from NSObject

	elevation: number;

	shapeGenerator: MDCShapeGenerating;

	constructor(o: { frame: CGRect; shapeGenerator: MDCShapeGenerating; });

	initWithFrameShapeGenerator(frame: CGRect, shapeGenerator: MDCShapeGenerating): this;
}

declare class MDCSlantedRectShapeGenerator extends NSObject implements MDCShapeGenerating {

	static alloc(): MDCSlantedRectShapeGenerator; // inherited from NSObject

	static new(): MDCSlantedRectShapeGenerator; // inherited from NSObject

	slant: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	pathForSize(size: CGSize): any;
}

declare class MDCStatefulRippleView extends MDCRippleView {

	static alloc(): MDCStatefulRippleView; // inherited from NSObject

	static appearance(): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCStatefulRippleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCStatefulRippleView; // inherited from UIAppearance

	static new(): MDCStatefulRippleView; // inherited from NSObject

	allowsSelection: boolean;

	dragged: boolean;

	rippleHighlighted: boolean;

	selected: boolean;

	rippleColorForState(state: MDCRippleState): UIColor;

	setRippleColorForState(rippleColor: UIColor, state: MDCRippleState): void;
}

declare class MDCSystemFontLoader extends NSObject implements MDCTypographyFontLoading {

	static alloc(): MDCSystemFontLoader; // inherited from NSObject

	static new(): MDCSystemFontLoader; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	boldFontFromFont(font: UIFont): UIFont;

	boldFontOfSize(fontSize: number): UIFont;

	boldItalicFontOfSize(fontSize: number): UIFont;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isLargeForContrastRatios(font: UIFont): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	italicFontFromFont(font: UIFont): UIFont;

	italicFontOfSize(fontSize: number): UIFont;

	lightFontOfSize(fontSize: number): UIFont;

	mediumFontOfSize(fontSize: number): UIFont;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	regularFontOfSize(fontSize: number): UIFont;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDCTabBar extends UIView implements MDCElevatable, MDCElevationOverriding, UIBarPositioning {

	static alloc(): MDCTabBar; // inherited from NSObject

	static appearance(): MDCTabBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCTabBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCTabBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTabBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCTabBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTabBar; // inherited from UIAppearance

	static defaultHeightForBarPositionItemAppearance(position: UIBarPosition, appearance: MDCTabBarItemAppearance): number;

	static defaultHeightForItemAppearance(appearance: MDCTabBarItemAppearance): number;

	static new(): MDCTabBar; // inherited from NSObject

	alignment: MDCTabBarAlignment;

	barTintColor: UIColor;

	bottomDividerColor: UIColor;

	delegate: MDCTabBarDelegate;

	displayDelegate: NSObject;

	displaysUppercaseTitles: boolean;

	enableRippleBehavior: boolean;

	inkColor: UIColor;

	itemAppearance: MDCTabBarItemAppearance;

	items: NSArray<UITabBarItem>;

	rippleColor: UIColor;

	selectedItem: UITabBarItem;

	selectedItemTintColor: UIColor;

	selectedItemTitleFont: UIFont;

	selectionIndicatorTemplate: MDCTabBarIndicatorTemplate;

	sizeClassDelegate: NSObject;

	titleTextTransform: MDCTabBarTextTransform;

	traitCollectionDidChangeBlock: (p1: MDCTabBar, p2: UITraitCollection) => void;

	unselectedItemTintColor: UIColor;

	unselectedItemTitleFont: UIFont;

	readonly barPosition: UIBarPosition; // inherited from UIBarPositioning

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly mdc_currentElevation: number; // inherited from MDCElevatable

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void; // inherited from MDCElevatable

	mdc_overrideBaseElevation: number; // inherited from MDCElevationOverriding

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	accessibilityElementForItem(item: UITabBarItem): any;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imageTintColorForState(state: MDCTabBarItemState): UIColor;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setAlignmentAnimated(alignment: MDCTabBarAlignment, animated: boolean): void;

	setImageTintColorForState(color: UIColor, state: MDCTabBarItemState): void;

	setSelectedItemAnimated(selectedItem: UITabBarItem, animated: boolean): void;

	setTitleColorForState(color: UIColor, state: MDCTabBarItemState): void;

	titleColorForState(state: MDCTabBarItemState): UIColor;
}

declare const enum MDCTabBarAlignment {

	Leading = 0,

	Justified = 1,

	Center = 2,

	CenterSelected = 3
}

interface MDCTabBarControllerDelegate extends NSObjectProtocol {

	tabBarControllerDidSelectViewController?(tabBarController: MDCTabBarViewController, viewController: UIViewController): void;

	tabBarControllerShouldSelectViewController?(tabBarController: MDCTabBarViewController, viewController: UIViewController): boolean;
}
declare var MDCTabBarControllerDelegate: {

	prototype: MDCTabBarControllerDelegate;
};

interface MDCTabBarDelegate extends UIBarPositioningDelegate {

	tabBarDidSelectItem?(tabBar: MDCTabBar, item: UITabBarItem): void;

	tabBarShouldSelectItem?(tabBar: MDCTabBar, item: UITabBarItem): boolean;

	tabBarWillSelectItem?(tabBar: MDCTabBar, item: UITabBarItem): void;
}
declare var MDCTabBarDelegate: {

	prototype: MDCTabBarDelegate;
};

interface MDCTabBarDisplayDelegate {

	tabBarDidEndDisplayingItem(tabBar: MDCTabBar, item: UITabBarItem): void;

	tabBarWillDisplayItem(tabBar: MDCTabBar, item: UITabBarItem): void;
}
declare var MDCTabBarDisplayDelegate: {

	prototype: MDCTabBarDisplayDelegate;
};

declare const enum MDCTabBarExtendedAlignment {

	Leading = 0,

	Justified = 1,

	Center = 2,

	CenterSelected = 3,

	BestEffortJustified = 4
}

declare class MDCTabBarIndicatorAttributes extends NSObject implements NSCopying {

	static alloc(): MDCTabBarIndicatorAttributes; // inherited from NSObject

	static new(): MDCTabBarIndicatorAttributes; // inherited from NSObject

	path: UIBezierPath;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface MDCTabBarIndicatorContext extends NSObjectProtocol {

	bounds: CGRect;

	contentFrame: CGRect;

	item: UITabBarItem;
}
declare var MDCTabBarIndicatorContext: {

	prototype: MDCTabBarIndicatorContext;
};

interface MDCTabBarIndicatorTemplate extends NSObjectProtocol {

	indicatorAttributesForContext(context: MDCTabBarIndicatorContext): MDCTabBarIndicatorAttributes;
}
declare var MDCTabBarIndicatorTemplate: {

	prototype: MDCTabBarIndicatorTemplate;
};

declare const enum MDCTabBarItemAppearance {

	Titles = 0,

	Images = 1,

	TitledImages = 2
}

declare const enum MDCTabBarItemState {

	Normal = 0,

	Selected = 1
}

interface MDCTabBarSizeClassDelegate {

	horizontalSizeClassForObject?(object: UITraitEnvironment): UIUserInterfaceSizeClass;
}
declare var MDCTabBarSizeClassDelegate: {

	prototype: MDCTabBarSizeClassDelegate;
};

declare const enum MDCTabBarTextTransform {

	Automatic = 0,

	None = 1,

	Uppercase = 2
}

declare class MDCTabBarUnderlineIndicatorTemplate extends NSObject implements MDCTabBarIndicatorTemplate {

	static alloc(): MDCTabBarUnderlineIndicatorTemplate; // inherited from NSObject

	static new(): MDCTabBarUnderlineIndicatorTemplate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indicatorAttributesForContext(context: MDCTabBarIndicatorContext): MDCTabBarIndicatorAttributes;

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

declare class MDCTabBarViewController extends UIViewController implements MDCTabBarDelegate, UIBarPositioningDelegate {

	static alloc(): MDCTabBarViewController; // inherited from NSObject

	static new(): MDCTabBarViewController; // inherited from NSObject

	delegate: MDCTabBarControllerDelegate;

	selectedViewController: UIViewController;

	readonly tabBar: MDCTabBar;

	tabBarHidden: boolean;

	traitCollectionDidChangeBlock: (p1: MDCTabBarViewController, p2: UITraitCollection) => void;

	viewControllers: NSArray<UIViewController>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positionForBar(bar: UIBarPositioning): UIBarPosition;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setTabBarHiddenAnimated(hidden: boolean, animated: boolean): void;

	tabBarDidSelectItem(tabBar: MDCTabBar, item: UITabBarItem): void;

	tabBarShouldSelectItem(tabBar: MDCTabBar, item: UITabBarItem): boolean;

	tabBarWillSelectItem(tabBar: MDCTabBar, item: UITabBarItem): void;
}

declare var MDCTabBarViewControllerAnimationDuration: number;

declare class MDCTextButtonColorThemer extends NSObject {

	static alloc(): MDCTextButtonColorThemer; // inherited from NSObject

	static applySemanticColorSchemeToButton(colorScheme: MDCColorScheming, button: MDCButton): void;

	static new(): MDCTextButtonColorThemer; // inherited from NSObject
}

declare class MDCTextField extends UITextField implements MDCElevatable, MDCElevationOverriding, MDCLeadingViewTextInput, MDCTextInput {

	static alloc(): MDCTextField; // inherited from NSObject

	static appearance(): MDCTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTextField; // inherited from UIAppearance

	static new(): MDCTextField; // inherited from NSObject

	readonly inputLayoutStrut: UILabel;

	traitCollectionDidChangeBlock: (p1: MDCTextField, p2: UITraitCollection) => void;

	attributedPlaceholder: NSAttributedString; // inherited from MDCTextInput

	attributedText: NSAttributedString; // inherited from MDCTextInput

	borderPath: UIBezierPath; // inherited from MDCTextInput

	borderView: MDCTextInputBorderView; // inherited from MDCTextInput

	readonly clearButton: UIButton; // inherited from MDCTextInput

	clearButtonMode: UITextFieldViewMode; // inherited from MDCTextInput

	cursorColor: UIColor; // inherited from MDCTextInput

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly editing: boolean; // inherited from MDCTextInput

	enabled: boolean; // inherited from MDCTextInput

	font: UIFont; // inherited from MDCTextInput

	readonly hasTextContent: boolean; // inherited from MDCTextInput

	readonly hash: number; // inherited from NSObjectProtocol

	hidesPlaceholderOnInput: boolean; // inherited from MDCTextInput

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly leadingUnderlineLabel: UILabel; // inherited from MDCTextInput

	leadingView: UIView; // inherited from MDCLeadingViewTextInput

	leadingViewMode: UITextFieldViewMode; // inherited from MDCLeadingViewTextInput

	mdc_adjustsFontForContentSizeCategory: boolean; // inherited from MDCTextInput

	readonly mdc_currentElevation: number; // inherited from MDCElevatable

	mdc_elevationDidChangeBlock: (p1: MDCElevatable, p2: number) => void; // inherited from MDCElevatable

	mdc_overrideBaseElevation: number; // inherited from MDCElevationOverriding

	placeholder: string; // inherited from MDCTextInput

	readonly placeholderLabel: UILabel; // inherited from MDCTextInput

	positioningDelegate: MDCTextInputPositioningDelegate; // inherited from MDCTextInput

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	text: string; // inherited from MDCTextInput

	textColor: UIColor; // inherited from MDCTextInput

	readonly textInsets: UIEdgeInsets; // inherited from MDCTextInput

	textInsetsMode: MDCTextInputTextInsetsMode; // inherited from MDCTextInput

	readonly trailingUnderlineLabel: UILabel; // inherited from MDCTextInput

	trailingView: UIView; // inherited from MDCTextInput

	trailingViewMode: UITextFieldViewMode; // inherited from MDCTextInput

	readonly underline: MDCTextInputUnderlineView; // inherited from MDCTextInput

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	clearText(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class MDCTextFieldColorThemer extends NSObject {

	static alloc(): MDCTextFieldColorThemer; // inherited from NSObject

	static applyColorSchemeToAllTextInputControllersOfClass(colorScheme: MDCColorScheme, textInputControllerClass: typeof NSObject): void;

	static applyColorSchemeToTextInputController(colorScheme: MDCColorScheme, textInputController: MDCTextInputController): void;

	static applySemanticColorSchemeToAllTextInputControllersOfClass(colorScheme: MDCColorScheming, textInputControllerClass: typeof NSObject): void;

	static applySemanticColorSchemeToTextInput(colorScheme: MDCColorScheming, textInput: MDCTextInput): void;

	static applySemanticColorSchemeToTextInputController(colorScheme: MDCColorScheming, textInputController: MDCTextInputController): void;

	static new(): MDCTextFieldColorThemer; // inherited from NSObject
}

declare var MDCTextFieldTextDidSetTextNotification: string;

declare class MDCTextFieldTypographyThemer extends NSObject {

	static alloc(): MDCTextFieldTypographyThemer; // inherited from NSObject

	static applyTypographySchemeToAllTextInputControllersOfClass(typographyScheme: MDCTypographyScheming, textInputControllerClass: typeof NSObject): void;

	static applyTypographySchemeToTextInput(typographyScheme: MDCTypographyScheming, textInput: MDCTextInput): void;

	static applyTypographySchemeToTextInputController(typographyScheme: MDCTypographyScheming, textInputController: MDCTextInputController): void;

	static new(): MDCTextFieldTypographyThemer; // inherited from NSObject
}

interface MDCTextInput extends NSObjectProtocol {

	attributedPlaceholder: NSAttributedString;

	attributedText: NSAttributedString;

	borderPath: UIBezierPath;

	borderView: MDCTextInputBorderView;

	clearButton: UIButton;

	clearButtonMode: UITextFieldViewMode;

	cursorColor: UIColor;

	editing: boolean;

	enabled: boolean;

	font: UIFont;

	hasTextContent: boolean;

	hidesPlaceholderOnInput: boolean;

	leadingUnderlineLabel: UILabel;

	mdc_adjustsFontForContentSizeCategory: boolean;

	placeholder: string;

	placeholderLabel: UILabel;

	positioningDelegate: MDCTextInputPositioningDelegate;

	text: string;

	textColor: UIColor;

	textInsets: UIEdgeInsets;

	textInsetsMode: MDCTextInputTextInsetsMode;

	trailingUnderlineLabel: UILabel;

	trailingView: UIView;

	trailingViewMode: UITextFieldViewMode;

	underline: MDCTextInputUnderlineView;

	clearText(): void;
}
declare var MDCTextInput: {

	prototype: MDCTextInput;
};

declare class MDCTextInputAllCharactersCounter extends NSObject implements MDCTextInputCharacterCounter {

	static alloc(): MDCTextInputAllCharactersCounter; // inherited from NSObject

	static new(): MDCTextInputAllCharactersCounter; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	characterCountForTextInput(textInput: UIView): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class MDCTextInputBorderView extends UIView implements NSCopying {

	static alloc(): MDCTextInputBorderView; // inherited from NSObject

	static appearance(): MDCTextInputBorderView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCTextInputBorderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCTextInputBorderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTextInputBorderView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCTextInputBorderView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTextInputBorderView; // inherited from UIAppearance

	static new(): MDCTextInputBorderView; // inherited from NSObject

	borderFillColor: UIColor;

	borderPath: UIBezierPath;

	borderStrokeColor: UIColor;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface MDCTextInputCharacterCounter extends NSObjectProtocol {

	characterCountForTextInput(textInput: UIView): number;
}
declare var MDCTextInputCharacterCounter: {

	prototype: MDCTextInputCharacterCounter;
};

interface MDCTextInputController extends MDCTextInputPositioningDelegate, NSCopying, NSObjectProtocol {

	activeColor: UIColor;

	characterCountMax: number;

	characterCountViewMode: UITextFieldViewMode;

	characterCounter: MDCTextInputCharacterCounter;

	disabledColor: UIColor;

	errorColor: UIColor;

	errorText: string;

	helperText: string;

	inlinePlaceholderColor: UIColor;

	inlinePlaceholderFont: UIFont;

	leadingUnderlineLabelFont: UIFont;

	leadingUnderlineLabelTextColor: UIColor;

	mdc_adjustsFontForContentSizeCategory: boolean;

	normalColor: UIColor;

	placeholderText: string;

	roundedCorners: UIRectCorner;

	textInput: UIView;

	textInputClearButtonTintColor: UIColor;

	textInputFont: UIFont;

	trailingUnderlineLabelFont: UIFont;

	trailingUnderlineLabelTextColor: UIColor;

	underlineHeightActive: number;

	underlineHeightNormal: number;

	underlineViewMode: UITextFieldViewMode;

	initWithTextInput?(input: UIView): MDCTextInputController;

	setErrorTextErrorAccessibilityValue(errorText: string, errorAccessibilityValue: string): void;

	setHelperTextHelperAccessibilityLabel(helperText: string, helperAccessibilityLabel: string): void;
}
declare var MDCTextInputController: {

	prototype: MDCTextInputController;
};

declare class MDCTextInputControllerBase extends NSObject implements MDCTextInputControllerFloatingPlaceholder {

	static alloc(): MDCTextInputControllerBase; // inherited from NSObject

	static new(): MDCTextInputControllerBase; // inherited from NSObject

	borderFillColor: UIColor;

	borderStrokeColor: UIColor;

	expandsOnOverflow: boolean;

	minimumLines: number;

	static borderFillColorDefault: UIColor;

	activeColor: UIColor; // inherited from MDCTextInputController

	characterCountMax: number; // inherited from MDCTextInputController

	characterCountViewMode: UITextFieldViewMode; // inherited from MDCTextInputController

	characterCounter: MDCTextInputCharacterCounter; // inherited from MDCTextInputController

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	disabledColor: UIColor; // inherited from MDCTextInputController

	errorColor: UIColor; // inherited from MDCTextInputController

	readonly errorText: string; // inherited from MDCTextInputController

	floatingEnabled: boolean; // inherited from MDCTextInputControllerFloatingPlaceholder

	floatingPlaceholderActiveColor: UIColor; // inherited from MDCTextInputControllerFloatingPlaceholder

	floatingPlaceholderErrorActiveColor: UIColor; // inherited from MDCTextInputControllerFloatingPlaceholder

	floatingPlaceholderNormalColor: UIColor; // inherited from MDCTextInputControllerFloatingPlaceholder

	readonly floatingPlaceholderOffset: UIOffset; // inherited from MDCTextInputControllerFloatingPlaceholder

	floatingPlaceholderScale: number; // inherited from MDCTextInputControllerFloatingPlaceholder

	readonly hash: number; // inherited from NSObjectProtocol

	helperText: string; // inherited from MDCTextInputController

	inlinePlaceholderColor: UIColor; // inherited from MDCTextInputController

	inlinePlaceholderFont: UIFont; // inherited from MDCTextInputController

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	leadingUnderlineLabelFont: UIFont; // inherited from MDCTextInputController

	leadingUnderlineLabelTextColor: UIColor; // inherited from MDCTextInputController

	mdc_adjustsFontForContentSizeCategory: boolean; // inherited from MDCTextInputController

	normalColor: UIColor; // inherited from MDCTextInputController

	placeholderText: string; // inherited from MDCTextInputController

	roundedCorners: UIRectCorner; // inherited from MDCTextInputController

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textInput: UIView; // inherited from MDCTextInputController

	textInputClearButtonTintColor: UIColor; // inherited from MDCTextInputController

	textInputFont: UIFont; // inherited from MDCTextInputController

	trailingUnderlineLabelFont: UIFont; // inherited from MDCTextInputController

	trailingUnderlineLabelTextColor: UIColor; // inherited from MDCTextInputController

	underlineHeightActive: number; // inherited from MDCTextInputController

	underlineHeightNormal: number; // inherited from MDCTextInputController

	underlineViewMode: UITextFieldViewMode; // inherited from MDCTextInputController

	readonly  // inherited from NSObjectProtocol

	static activeColorDefault: UIColor; // inherited from MDCTextInputController

	static disabledColorDefault: UIColor; // inherited from MDCTextInputController

	static errorColorDefault: UIColor; // inherited from MDCTextInputController

	static floatingEnabledDefault: boolean; // inherited from MDCTextInputControllerFloatingPlaceholder

	static floatingPlaceholderActiveColorDefault: UIColor; // inherited from MDCTextInputControllerFloatingPlaceholder

	static floatingPlaceholderNormalColorDefault: UIColor; // inherited from MDCTextInputControllerFloatingPlaceholder

	static floatingPlaceholderScaleDefault: number; // inherited from MDCTextInputControllerFloatingPlaceholder

	static inlinePlaceholderColorDefault: UIColor; // inherited from MDCTextInputController

	static inlinePlaceholderFontDefault: UIFont; // inherited from MDCTextInputController

	static leadingUnderlineLabelFontDefault: UIFont; // inherited from MDCTextInputController

	static leadingUnderlineLabelTextColorDefault: UIColor; // inherited from MDCTextInputController

	static mdc_adjustsFontForContentSizeCategoryDefault: boolean; // inherited from MDCTextInputController

	static normalColorDefault: UIColor; // inherited from MDCTextInputController

	static roundedCornersDefault: UIRectCorner; // inherited from MDCTextInputController

	static textInputClearButtonTintColorDefault: UIColor; // inherited from MDCTextInputController

	static textInputFontDefault: UIFont; // inherited from MDCTextInputController

	static trailingUnderlineLabelFontDefault: UIFont; // inherited from MDCTextInputController

	static trailingUnderlineLabelTextColorDefault: UIColor; // inherited from MDCTextInputController

	static underlineHeightActiveDefault: number; // inherited from MDCTextInputController

	static underlineHeightNormalDefault: number; // inherited from MDCTextInputController

	static underlineViewModeDefault: UITextFieldViewMode; // inherited from MDCTextInputController

	constructor(o: { textInput: UIView; }); // inherited from MDCTextInputController

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	editingRectForBoundsDefaultRect(bounds: CGRect, defaultRect: CGRect): CGRect;

	initWithTextInput(input: UIView): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	leadingViewRectForBoundsDefaultRect(bounds: CGRect, defaultRect: CGRect): CGRect;

	leadingViewTrailingPaddingConstant(): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setErrorTextErrorAccessibilityValue(errorText: string, errorAccessibilityValue: string): void;

	setHelperTextHelperAccessibilityLabel(helperText: string, helperAccessibilityLabel: string): void;

	textInputDidLayoutSubviews(): void;

	textInputDidUpdateConstraints(): void;

	textInsets(defaultInsets: UIEdgeInsets): UIEdgeInsets;

	textInsetsWithSizeThatFitsWidthHint(defaultInsets: UIEdgeInsets, widthHint: number): UIEdgeInsets;

	trailingViewRectForBoundsDefaultRect(bounds: CGRect, defaultRect: CGRect): CGRect;

	trailingViewTrailingPaddingConstant(): number;
}

declare var MDCTextInputControllerBaseDefaultBorderRadius: number;

declare class MDCTextInputControllerFilled extends MDCTextInputControllerBase {

	static alloc(): MDCTextInputControllerFilled; // inherited from NSObject

	static new(): MDCTextInputControllerFilled; // inherited from NSObject

	applyThemeWithScheme(scheme: MDCContainerScheming): void;
}

interface MDCTextInputControllerFloatingPlaceholder extends MDCTextInputController {

	floatingEnabled: boolean;

	floatingPlaceholderActiveColor: UIColor;

	floatingPlaceholderErrorActiveColor: UIColor;

	floatingPlaceholderNormalColor: UIColor;

	floatingPlaceholderOffset: UIOffset;

	floatingPlaceholderScale: number;
}
declare var MDCTextInputControllerFloatingPlaceholder: {

	prototype: MDCTextInputControllerFloatingPlaceholder;
};

declare class MDCTextInputControllerFullWidth extends NSObject implements MDCTextInputController {

	static alloc(): MDCTextInputControllerFullWidth; // inherited from NSObject

	static new(): MDCTextInputControllerFullWidth; // inherited from NSObject

	backgroundColor: UIColor;

	static backgroundColorDefault: UIColor;

	activeColor: UIColor; // inherited from MDCTextInputController

	characterCountMax: number; // inherited from MDCTextInputController

	characterCountViewMode: UITextFieldViewMode; // inherited from MDCTextInputController

	characterCounter: MDCTextInputCharacterCounter; // inherited from MDCTextInputController

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	disabledColor: UIColor; // inherited from MDCTextInputController

	errorColor: UIColor; // inherited from MDCTextInputController

	readonly errorText: string; // inherited from MDCTextInputController

	readonly hash: number; // inherited from NSObjectProtocol

	helperText: string; // inherited from MDCTextInputController

	inlinePlaceholderColor: UIColor; // inherited from MDCTextInputController

	inlinePlaceholderFont: UIFont; // inherited from MDCTextInputController

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	leadingUnderlineLabelFont: UIFont; // inherited from MDCTextInputController

	leadingUnderlineLabelTextColor: UIColor; // inherited from MDCTextInputController

	mdc_adjustsFontForContentSizeCategory: boolean; // inherited from MDCTextInputController

	normalColor: UIColor; // inherited from MDCTextInputController

	placeholderText: string; // inherited from MDCTextInputController

	roundedCorners: UIRectCorner; // inherited from MDCTextInputController

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textInput: UIView; // inherited from MDCTextInputController

	textInputClearButtonTintColor: UIColor; // inherited from MDCTextInputController

	textInputFont: UIFont; // inherited from MDCTextInputController

	trailingUnderlineLabelFont: UIFont; // inherited from MDCTextInputController

	trailingUnderlineLabelTextColor: UIColor; // inherited from MDCTextInputController

	underlineHeightActive: number; // inherited from MDCTextInputController

	underlineHeightNormal: number; // inherited from MDCTextInputController

	underlineViewMode: UITextFieldViewMode; // inherited from MDCTextInputController

	readonly  // inherited from NSObjectProtocol

	static activeColorDefault: UIColor; // inherited from MDCTextInputController

	static disabledColorDefault: UIColor; // inherited from MDCTextInputController

	static errorColorDefault: UIColor; // inherited from MDCTextInputController

	static inlinePlaceholderColorDefault: UIColor; // inherited from MDCTextInputController

	static inlinePlaceholderFontDefault: UIFont; // inherited from MDCTextInputController

	static leadingUnderlineLabelFontDefault: UIFont; // inherited from MDCTextInputController

	static leadingUnderlineLabelTextColorDefault: UIColor; // inherited from MDCTextInputController

	static mdc_adjustsFontForContentSizeCategoryDefault: boolean; // inherited from MDCTextInputController

	static normalColorDefault: UIColor; // inherited from MDCTextInputController

	static roundedCornersDefault: UIRectCorner; // inherited from MDCTextInputController

	static textInputClearButtonTintColorDefault: UIColor; // inherited from MDCTextInputController

	static textInputFontDefault: UIFont; // inherited from MDCTextInputController

	static trailingUnderlineLabelFontDefault: UIFont; // inherited from MDCTextInputController

	static trailingUnderlineLabelTextColorDefault: UIColor; // inherited from MDCTextInputController

	static underlineHeightActiveDefault: number; // inherited from MDCTextInputController

	static underlineHeightNormalDefault: number; // inherited from MDCTextInputController

	static underlineViewModeDefault: UITextFieldViewMode; // inherited from MDCTextInputController

	constructor(o: { textInput: UIView; }); // inherited from MDCTextInputController

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	editingRectForBoundsDefaultRect(bounds: CGRect, defaultRect: CGRect): CGRect;

	initWithTextInput(input: UIView): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	leadingViewRectForBoundsDefaultRect(bounds: CGRect, defaultRect: CGRect): CGRect;

	leadingViewTrailingPaddingConstant(): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setErrorTextErrorAccessibilityValue(errorText: string, errorAccessibilityValue: string): void;

	setHelperTextHelperAccessibilityLabel(helperText: string, helperAccessibilityLabel: string): void;

	textInputDidLayoutSubviews(): void;

	textInputDidUpdateConstraints(): void;

	textInsets(defaultInsets: UIEdgeInsets): UIEdgeInsets;

	textInsetsWithSizeThatFitsWidthHint(defaultInsets: UIEdgeInsets, widthHint: number): UIEdgeInsets;

	trailingViewRectForBoundsDefaultRect(bounds: CGRect, defaultRect: CGRect): CGRect;

	trailingViewTrailingPaddingConstant(): number;
}

declare class MDCTextInputControllerLegacyDefault extends MDCTextInputControllerBase {

	static alloc(): MDCTextInputControllerLegacyDefault; // inherited from NSObject

	static new(): MDCTextInputControllerLegacyDefault; // inherited from NSObject
}

declare class MDCTextInputControllerLegacyFullWidth extends MDCTextInputControllerFullWidth {

	static alloc(): MDCTextInputControllerLegacyFullWidth; // inherited from NSObject

	static new(): MDCTextInputControllerLegacyFullWidth; // inherited from NSObject
}

declare class MDCTextInputControllerOutlined extends MDCTextInputControllerBase {

	static alloc(): MDCTextInputControllerOutlined; // inherited from NSObject

	static new(): MDCTextInputControllerOutlined; // inherited from NSObject

	applyThemeWithScheme(scheme: MDCContainerScheming): void;
}

declare class MDCTextInputControllerOutlinedTextArea extends MDCTextInputControllerBase {

	static alloc(): MDCTextInputControllerOutlinedTextArea; // inherited from NSObject

	static new(): MDCTextInputControllerOutlinedTextArea; // inherited from NSObject
}

declare class MDCTextInputControllerUnderline extends MDCTextInputControllerBase {

	static alloc(): MDCTextInputControllerUnderline; // inherited from NSObject

	static new(): MDCTextInputControllerUnderline; // inherited from NSObject
}

declare var MDCTextInputDidToggleEnabledNotification: string;

interface MDCTextInputPositioningDelegate extends NSObjectProtocol {

	editingRectForBoundsDefaultRect?(bounds: CGRect, defaultRect: CGRect): CGRect;

	leadingViewRectForBoundsDefaultRect?(bounds: CGRect, defaultRect: CGRect): CGRect;

	leadingViewTrailingPaddingConstant?(): number;

	textInputDidLayoutSubviews?(): void;

	textInputDidUpdateConstraints?(): void;

	textInsets?(defaultInsets: UIEdgeInsets): UIEdgeInsets;

	textInsetsWithSizeThatFitsWidthHint?(defaultInsets: UIEdgeInsets, widthHint: number): UIEdgeInsets;

	trailingViewRectForBoundsDefaultRect?(bounds: CGRect, defaultRect: CGRect): CGRect;

	trailingViewTrailingPaddingConstant?(): number;
}
declare var MDCTextInputPositioningDelegate: {

	prototype: MDCTextInputPositioningDelegate;
};

declare const enum MDCTextInputTextInsetsMode {

	Never = 0,

	IfContent = 1,

	Always = 2
}

declare class MDCTextInputUnderlineView extends UIView implements NSCopying {

	static alloc(): MDCTextInputUnderlineView; // inherited from NSObject

	static appearance(): MDCTextInputUnderlineView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCTextInputUnderlineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCTextInputUnderlineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTextInputUnderlineView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCTextInputUnderlineView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTextInputUnderlineView; // inherited from UIAppearance

	static new(): MDCTextInputUnderlineView; // inherited from NSObject

	color: UIColor;

	disabledColor: UIColor;

	enabled: boolean;

	lineHeight: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var MDCTextStyleBody1: string;

declare var MDCTextStyleBody2: string;

declare var MDCTextStyleButton: string;

declare var MDCTextStyleCaption: string;

declare var MDCTextStyleHeadline1: string;

declare var MDCTextStyleHeadline2: string;

declare var MDCTextStyleHeadline3: string;

declare var MDCTextStyleHeadline4: string;

declare var MDCTextStyleHeadline5: string;

declare var MDCTextStyleHeadline6: string;

declare var MDCTextStyleOverline: string;

declare var MDCTextStyleSubtitle1: string;

declare var MDCTextStyleSubtitle2: string;

declare class MDCTonalColorScheme extends NSObject implements MDCColorScheme, NSCopying {

	static alloc(): MDCTonalColorScheme; // inherited from NSObject

	static new(): MDCTonalColorScheme; // inherited from NSObject

	readonly primaryTonalPalette: MDCTonalPalette;

	readonly secondaryTonalPalette: MDCTonalPalette;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly primaryColor: UIColor; // inherited from MDCColorScheme

	readonly primaryDarkColor: UIColor; // inherited from MDCColorScheme

	readonly primaryLightColor: UIColor; // inherited from MDCColorScheme

	readonly secondaryColor: UIColor; // inherited from MDCColorScheme

	readonly secondaryDarkColor: UIColor; // inherited from MDCColorScheme

	readonly secondaryLightColor: UIColor; // inherited from MDCColorScheme

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { primaryTonalPalette: MDCTonalPalette; secondaryTonalPalette: MDCTonalPalette; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPrimaryTonalPaletteSecondaryTonalPalette(primaryTonalPalette: MDCTonalPalette, secondaryTonalPalette: MDCTonalPalette): this;

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

declare class MDCTonalPalette extends NSObject implements NSCopying {

	static alloc(): MDCTonalPalette; // inherited from NSObject

	static new(): MDCTonalPalette; // inherited from NSObject

	readonly colors: NSArray<UIColor>;

	readonly darkColor: UIColor;

	readonly darkColorIndex: number;

	readonly lightColor: UIColor;

	readonly lightColorIndex: number;

	readonly mainColor: UIColor;

	readonly mainColorIndex: number;

	constructor(o: { colors: NSArray<UIColor> | UIColor[]; mainColorIndex: number; lightColorIndex: number; darkColorIndex: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithColorsMainColorIndexLightColorIndexDarkColorIndex(colors: NSArray<UIColor> | UIColor[], mainColorIndex: number, lightColorIndex: number, darkColorIndex: number): this;
}

declare const enum MDCTriangleEdgeStyle {

	Handle = 0,

	Cut = 1
}

declare class MDCTriangleEdgeTreatment extends MDCEdgeTreatment {

	static alloc(): MDCTriangleEdgeTreatment; // inherited from NSObject

	static new(): MDCTriangleEdgeTreatment; // inherited from NSObject

	size: number;

	style: MDCTriangleEdgeStyle;

	constructor(o: { size: number; style: MDCTriangleEdgeStyle; });

	initWithSizeStyle(size: number, style: MDCTriangleEdgeStyle): this;
}

declare class MDCTypography extends NSObject {

	static alloc(): MDCTypography; // inherited from NSObject

	static body1Font(): UIFont;

	static body1FontOpacity(): number;

	static body2Font(): UIFont;

	static body2FontOpacity(): number;

	static boldFontFromFont(font: UIFont): UIFont;

	static buttonFont(): UIFont;

	static buttonFontOpacity(): number;

	static captionFont(): UIFont;

	static captionFontOpacity(): number;

	static display1Font(): UIFont;

	static display1FontOpacity(): number;

	static display2Font(): UIFont;

	static display2FontOpacity(): number;

	static display3Font(): UIFont;

	static display3FontOpacity(): number;

	static display4Font(): UIFont;

	static display4FontOpacity(): number;

	static fontLoader(): MDCTypographyFontLoading;

	static headlineFont(): UIFont;

	static headlineFontOpacity(): number;

	static isLargeForContrastRatios(font: UIFont): boolean;

	static italicFontFromFont(font: UIFont): UIFont;

	static new(): MDCTypography; // inherited from NSObject

	static setFontLoader(fontLoader: MDCTypographyFontLoading): void;

	static subheadFont(): UIFont;

	static subheadFontOpacity(): number;

	static titleFont(): UIFont;

	static titleFontOpacity(): number;
}

interface MDCTypographyFontLoading extends NSObjectProtocol {

	boldFontFromFont?(font: UIFont): UIFont;

	boldFontOfSize?(fontSize: number): UIFont;

	boldItalicFontOfSize?(fontSize: number): UIFont;

	isLargeForContrastRatios?(font: UIFont): boolean;

	italicFontFromFont?(font: UIFont): UIFont;

	italicFontOfSize?(fontSize: number): UIFont;

	lightFontOfSize(fontSize: number): UIFont;

	mediumFontOfSize(fontSize: number): UIFont;

	regularFontOfSize(fontSize: number): UIFont;
}
declare var MDCTypographyFontLoading: {

	prototype: MDCTypographyFontLoading;
};

declare class MDCTypographyScheme extends NSObject implements MDCTypographyScheming, NSCopying {

	static alloc(): MDCTypographyScheme; // inherited from NSObject

	static new(): MDCTypographyScheme; // inherited from NSObject

	body1: UIFont;

	body2: UIFont;

	button: UIFont;

	caption: UIFont;

	headline1: UIFont;

	headline2: UIFont;

	headline3: UIFont;

	headline4: UIFont;

	headline5: UIFont;

	headline6: UIFont;

	overline: UIFont;

	subtitle1: UIFont;

	subtitle2: UIFont;

	useCurrentContentSizeCategoryWhenApplied: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { defaults: MDCTypographySchemeDefaults; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithDefaults(defaults: MDCTypographySchemeDefaults): this;

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

declare const enum MDCTypographySchemeDefaults {

	Material201804 = 0,

	Material201902 = 1
}

interface MDCTypographyScheming extends NSObjectProtocol {

	body1: UIFont;

	body2: UIFont;

	button: UIFont;

	caption: UIFont;

	headline1: UIFont;

	headline2: UIFont;

	headline3: UIFont;

	headline4: UIFont;

	headline5: UIFont;

	headline6: UIFont;

	overline: UIFont;

	subtitle1: UIFont;

	subtitle2: UIFont;

	useCurrentContentSizeCategoryWhenApplied: boolean;
}
declare var MDCTypographyScheming: {

	prototype: MDCTypographyScheming;
};

declare var MaterialComponentsVersionNumber: number;

declare var MaterialComponentsVersionString: interop.Reference<number>;
