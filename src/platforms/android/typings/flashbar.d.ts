/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module andrognito {
		export module flashbar {
			export class BuildConfig {
				public static class: java.lang.Class<com.andrognito.flashbar.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export class Flashbar {
				public static class: java.lang.Class<com.andrognito.flashbar.Flashbar>;
				public static DURATION_SHORT: number;
				public static DURATION_LONG: number;
				public static DURATION_INDEFINITE: number;
				public static Companion: com.andrognito.flashbar.Flashbar.Companion;
				public isShown(): boolean;
				public isShowing(): boolean;
				public dismiss(): void;
				public show(): void;
			}
			export module Flashbar {
				export class Builder {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.Builder>;
					public setPrimaryActionTextSizeInPx$flashbar_release(param0: java.lang.Float): void;
					public setTitleSizeInSp$flashbar_release(param0: java.lang.Float): void;
					public setOnTapOutsideListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnTapListener): void;
					public getOverlayColor$flashbar_release(): number;
					public getTitleTypeface$flashbar_release(): globalAndroid.graphics.Typeface;
					public titleColorRes(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public backgroundDrawable(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setMessageSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
					public title(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getNegativeActionTextSizeInSp$flashbar_release(): java.lang.Float;
					public setNegativeActionText$flashbar_release(param0: string): void;
					public gravity(param0: com.andrognito.flashbar.Flashbar.Gravity): com.andrognito.flashbar.Flashbar.Builder;
					public getIconColorFilterMode$flashbar_release(): globalAndroid.graphics.PorterDuff.Mode;
					public getPositiveActionTextSizeInPx$flashbar_release(): java.lang.Float;
					public setIconBitmap$flashbar_release(param0: globalAndroid.graphics.Bitmap): void;
					public getIconAnimBuilder$flashbar_release(): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public positiveActionTextSizeInSp(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public showOverlay(): com.andrognito.flashbar.Flashbar.Builder;
					public primaryActionTextColorRes(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getShowIcon$flashbar_release(): boolean;
					public exitAnimation(param0: com.andrognito.flashbar.anim.FlashAnimBarBuilder): com.andrognito.flashbar.Flashbar.Builder;
					public setMessageAppearance$flashbar_release(param0: java.lang.Integer): void;
					public negativeActionTextColorRes(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public icon(param0: globalAndroid.graphics.drawable.Drawable): com.andrognito.flashbar.Flashbar.Builder;
					public getMessage$flashbar_release(): string;
					public getPrimaryActionText$flashbar_release(): string;
					public negativeActionTextTypeface(param0: globalAndroid.graphics.Typeface): com.andrognito.flashbar.Flashbar.Builder;
					public setPrimaryActionTextAppearance$flashbar_release(param0: java.lang.Integer): void;
					public primaryActionTextColor(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getProgressTint$flashbar_release(): java.lang.Integer;
					public getDuration$flashbar_release(): number;
					public setPositiveActionTextSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
					public setNegativeActionTextSizeInSp$flashbar_release(param0: java.lang.Float): void;
					public setNegativeActionTextColor$flashbar_release(param0: java.lang.Integer): void;
					public getIconScaleType$flashbar_release(): globalAndroid.widget.ImageView.ScaleType;
					public titleSizeInSp(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public message(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public messageSizeInPx(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setOnBarShowListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnBarShowListener): void;
					public getTitleSpanned$flashbar_release(): globalAndroid.text.Spanned;
					public setActivity$flashbar_release(param0: globalAndroid.app.Activity): void;
					public setNegativeActionTextTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
					public getGravity$flashbar_release(): com.andrognito.flashbar.Flashbar.Gravity;
					public positiveActionTextColor(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public showIcon(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public messageTypeface(param0: globalAndroid.graphics.Typeface): com.andrognito.flashbar.Flashbar.Builder;
					public getCastShadow$flashbar_release(): boolean;
					public enableSwipeToDismiss(): com.andrognito.flashbar.Flashbar.Builder;
					public enterAnimation(param0: com.andrognito.flashbar.anim.FlashAnimBarBuilder): com.andrognito.flashbar.Flashbar.Builder;
					public vibrateOn(param0: androidNative.Array<com.andrognito.flashbar.Flashbar.Vibration>): com.andrognito.flashbar.Flashbar.Builder;
					public icon(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getIconDrawable$flashbar_release(): globalAndroid.graphics.drawable.Drawable;
					public positiveActionTextTypeface(param0: globalAndroid.graphics.Typeface): com.andrognito.flashbar.Flashbar.Builder;
					public setMessageSizeInSp$flashbar_release(param0: java.lang.Float): void;
					public setPrimaryActionText$flashbar_release(param0: string): void;
					public setIconDrawable$flashbar_release(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getOnNegativeActionTapListener$flashbar_release(): com.andrognito.flashbar.Flashbar.OnActionTapListener;
					public castShadow(param0: boolean, param1: number): com.andrognito.flashbar.Flashbar.Builder;
					public setMessageSizeInPx$flashbar_release(param0: java.lang.Float): void;
					public title(param0: string): com.andrognito.flashbar.Flashbar.Builder;
					public iconAnimation(param0: com.andrognito.flashbar.anim.FlashAnimIconBuilder): com.andrognito.flashbar.Flashbar.Builder;
					public positiveActionTapListener(param0: com.andrognito.flashbar.Flashbar.OnActionTapListener): com.andrognito.flashbar.Flashbar.Builder;
					public positiveActionTextAppearance(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public primaryActionText(param0: globalAndroid.text.Spanned): com.andrognito.flashbar.Flashbar.Builder;
					public primaryActionTextTypeface(param0: globalAndroid.graphics.Typeface): com.andrognito.flashbar.Flashbar.Builder;
					public getOnBarTapListener$flashbar_release(): com.andrognito.flashbar.Flashbar.OnTapListener;
					public getOnBarDismissListener$flashbar_release(): com.andrognito.flashbar.Flashbar.OnBarDismissListener;
					public setPositiveActionTextSizeInPx$flashbar_release(param0: java.lang.Float): void;
					public progressTint(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getOnBarShowListener$flashbar_release(): com.andrognito.flashbar.Flashbar.OnBarShowListener;
					public title(param0: globalAndroid.text.Spanned): com.andrognito.flashbar.Flashbar.Builder;
					public showIcon(): com.andrognito.flashbar.Flashbar.Builder;
					public messageSizeInSp(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setIconScale$flashbar_release(param0: number): void;
					public getEnterAnimBuilder$flashbar_release(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public setTitleAppearance$flashbar_release(param0: java.lang.Integer): void;
					public getMessageTypeface$flashbar_release(): globalAndroid.graphics.Typeface;
					public setOnNegativeActionTapListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnActionTapListener): void;
					public setOnPositiveActionTapListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnActionTapListener): void;
					public negativeActionText(param0: globalAndroid.text.Spanned): com.andrognito.flashbar.Flashbar.Builder;
					public getTitleSizeInPx$flashbar_release(): java.lang.Float;
					public negativeActionTextAppearance(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public primaryActionText(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public negativeActionText(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getNegativeActionTextColor$flashbar_release(): java.lang.Integer;
					public messageAppearance(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setShowIcon$flashbar_release(param0: boolean): void;
					public positiveActionText(param0: string): com.andrognito.flashbar.Flashbar.Builder;
					public setOverlay$flashbar_release(param0: boolean): void;
					public negativeActionTextColor(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getPrimaryActionTextSizeInPx$flashbar_release(): java.lang.Float;
					public getPositiveActionText$flashbar_release(): string;
					public getMessageSizeInSp$flashbar_release(): java.lang.Float;
					public setIconAnimBuilder$flashbar_release(param0: com.andrognito.flashbar.anim.FlashAnimIconBuilder): void;
					public setPositiveActionTextTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
					public setOverlayColor$flashbar_release(param0: number): void;
					public getVibrationTargets$flashbar_release(): java.util.List<com.andrognito.flashbar.Flashbar.Vibration>;
					public setIconColorFilter$flashbar_release(param0: java.lang.Integer): void;
					public negativeActionTextSizeInSp(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getPositiveActionTextAppearance$flashbar_release(): java.lang.Integer;
					public getNegativeActionTextTypeface$flashbar_release(): globalAndroid.graphics.Typeface;
					public setBackgroundColor$flashbar_release(param0: java.lang.Integer): void;
					public positiveActionTextSizeInPx(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setPositiveActionTextSizeInSp$flashbar_release(param0: java.lang.Float): void;
					public overlayBlockable(): com.andrognito.flashbar.Flashbar.Builder;
					public listenBarTaps(param0: com.andrognito.flashbar.Flashbar.OnTapListener): com.andrognito.flashbar.Flashbar.Builder;
					public setNegativeActionTextSizeInPx$flashbar_release(param0: java.lang.Float): void;
					public listenOutsideTaps(param0: com.andrognito.flashbar.Flashbar.OnTapListener): com.andrognito.flashbar.Flashbar.Builder;
					public setOverlayBlockable$flashbar_release(param0: boolean): void;
					public getTitleAppearance$flashbar_release(): java.lang.Integer;
					public setPrimaryActionTextColor$flashbar_release(param0: java.lang.Integer): void;
					public setProgressPosition$flashbar_release(param0: com.andrognito.flashbar.Flashbar.ProgressPosition): void;
					public castShadow(): com.andrognito.flashbar.Flashbar.Builder;
					public getBackgroundColor$flashbar_release(): java.lang.Integer;
					public getPositiveActionTextSpanned$flashbar_release(): globalAndroid.text.Spanned;
					public setGravity$flashbar_release(param0: com.andrognito.flashbar.Flashbar.Gravity): void;
					public showIcon(param0: number, param1: globalAndroid.widget.ImageView.ScaleType): com.andrognito.flashbar.Flashbar.Builder;
					public primaryActionTapListener(param0: com.andrognito.flashbar.Flashbar.OnActionTapListener): com.andrognito.flashbar.Flashbar.Builder;
					public negativeActionTextSizeInPx(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public iconColorFilter(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public primaryActionTextAppearance(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setIconColorFilterMode$flashbar_release(param0: globalAndroid.graphics.PorterDuff.Mode): void;
					public setEnableSwipeToDismiss$flashbar_release(param0: boolean): void;
					public setCastShadow$flashbar_release(param0: boolean): void;
					public backgroundColor(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public iconColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): com.andrognito.flashbar.Flashbar.Builder;
					public setPrimaryActionTextSizeInSp$flashbar_release(param0: java.lang.Float): void;
					public titleTypeface(param0: globalAndroid.graphics.Typeface): com.andrognito.flashbar.Flashbar.Builder;
					public setIconScaleType$flashbar_release(param0: globalAndroid.widget.ImageView.ScaleType): void;
					public setPrimaryActionTextTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
					public titleAppearance(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getTitle$flashbar_release(): string;
					public getMessageSpanned$flashbar_release(): globalAndroid.text.Spanned;
					public getNegativeActionTextSpanned$flashbar_release(): globalAndroid.text.Spanned;
					public setPositiveActionTextColor$flashbar_release(param0: java.lang.Integer): void;
					public getBarDismissOnTapOutside$flashbar_release(): boolean;
					public getIconColorFilter$flashbar_release(): java.lang.Integer;
					public setBackgroundDrawable$flashbar_release(param0: globalAndroid.graphics.drawable.Drawable): void;
					public titleSizeInPx(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setPrimaryActionTextSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
					public progressTintRes(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getOnPositiveActionTapListener$flashbar_release(): com.andrognito.flashbar.Flashbar.OnActionTapListener;
					public castShadow(param0: boolean): com.andrognito.flashbar.Flashbar.Builder;
					public getMessageSizeInPx$flashbar_release(): java.lang.Float;
					public getOnPrimaryActionTapListener$flashbar_release(): com.andrognito.flashbar.Flashbar.OnActionTapListener;
					public getIconScale$flashbar_release(): number;
					public overlayColorRes(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public build(): com.andrognito.flashbar.Flashbar;
					public setProgressTint$flashbar_release(param0: java.lang.Integer): void;
					public getPositiveActionTextTypeface$flashbar_release(): globalAndroid.graphics.Typeface;
					public negativeActionTapListener(param0: com.andrognito.flashbar.Flashbar.OnActionTapListener): com.andrognito.flashbar.Flashbar.Builder;
					public setMessageTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
					public getEnableSwipeToDismiss$flashbar_release(): boolean;
					public setBarDismissOnTapOutside$flashbar_release(param0: boolean): void;
					public setDuration$flashbar_release(param0: number): void;
					public barDismissListener(param0: com.andrognito.flashbar.Flashbar.OnBarDismissListener): com.andrognito.flashbar.Flashbar.Builder;
					public overlayColor(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setTitleSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
					public messageColor(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setVibrationTargets$flashbar_release(param0: java.util.List<any>): void;
					public getShadowStrength$flashbar_release(): number;
					public setOnPrimaryActionTapListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnActionTapListener): void;
					public getOnTapOutsideListener$flashbar_release(): com.andrognito.flashbar.Flashbar.OnTapListener;
					public setEnterAnimBuilder$flashbar_release(param0: com.andrognito.flashbar.anim.FlashAnimBarBuilder): void;
					public messageColorRes(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getPositiveActionTextColor$flashbar_release(): java.lang.Integer;
					public setNegativeActionTextSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
					public getPositiveActionTextSizeInSp$flashbar_release(): java.lang.Float;
					public getBackgroundDrawable$flashbar_release(): globalAndroid.graphics.drawable.Drawable;
					public titleColor(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getNegativeActionTextAppearance$flashbar_release(): java.lang.Integer;
					public getMessageAppearance$flashbar_release(): java.lang.Integer;
					public backgroundColorRes(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getPrimaryActionTextAppearance$flashbar_release(): java.lang.Integer;
					public setPositiveActionTextAppearance$flashbar_release(param0: java.lang.Integer): void;
					public getNegativeActionTextSizeInPx$flashbar_release(): java.lang.Float;
					public positiveActionTextColorRes(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setTitleColor$flashbar_release(param0: java.lang.Integer): void;
					public setNegativeActionTextAppearance$flashbar_release(param0: java.lang.Integer): void;
					public positiveActionText(param0: globalAndroid.text.Spanned): com.andrognito.flashbar.Flashbar.Builder;
					public message(param0: string): com.andrognito.flashbar.Flashbar.Builder;
					public show(): void;
					public dismissOnTapOutside(): com.andrognito.flashbar.Flashbar.Builder;
					public getPrimaryActionTextTypeface$flashbar_release(): globalAndroid.graphics.Typeface;
					public setExitAnimBuilder$flashbar_release(param0: com.andrognito.flashbar.anim.FlashAnimBarBuilder): void;
					public getOverlayBlockable$flashbar_release(): boolean;
					public setTitleTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
					public setMessageColor$flashbar_release(param0: java.lang.Integer): void;
					public backgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): com.andrognito.flashbar.Flashbar.Builder;
					public iconColorFilterRes(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setTitle$flashbar_release(param0: string): void;
					public getPrimaryActionTextColor$flashbar_release(): java.lang.Integer;
					public iconColorFilterRes(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): com.andrognito.flashbar.Flashbar.Builder;
					public setShadowStrength$flashbar_release(param0: number): void;
					public getTitleColor$flashbar_release(): java.lang.Integer;
					public getProgressPosition$flashbar_release(): com.andrognito.flashbar.Flashbar.ProgressPosition;
					public barShowListener(param0: com.andrognito.flashbar.Flashbar.OnBarShowListener): com.andrognito.flashbar.Flashbar.Builder;
					public positiveActionText(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public icon(param0: globalAndroid.graphics.Bitmap): com.andrognito.flashbar.Flashbar.Builder;
					public message(param0: globalAndroid.text.Spanned): com.andrognito.flashbar.Flashbar.Builder;
					public constructor(param0: globalAndroid.app.Activity);
					public setPositiveActionText$flashbar_release(param0: string): void;
					public setMessage$flashbar_release(param0: string): void;
					public getExitAnimBuilder$flashbar_release(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public negativeActionText(param0: string): com.andrognito.flashbar.Flashbar.Builder;
					public showProgress(param0: com.andrognito.flashbar.Flashbar.ProgressPosition): com.andrognito.flashbar.Flashbar.Builder;
					public getPrimaryActionTextSizeInSp$flashbar_release(): java.lang.Float;
					public primaryActionTextSizeInSp(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getOverlay$flashbar_release(): boolean;
					public getTitleSizeInSp$flashbar_release(): java.lang.Float;
					public duration(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public getMessageColor$flashbar_release(): java.lang.Integer;
					public setOnBarDismissListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnBarDismissListener): void;
					public primaryActionTextSizeInPx(param0: number): com.andrognito.flashbar.Flashbar.Builder;
					public setTitleSizeInPx$flashbar_release(param0: java.lang.Float): void;
					public getPrimaryActionTextSpanned$flashbar_release(): globalAndroid.text.Spanned;
					public primaryActionText(param0: string): com.andrognito.flashbar.Flashbar.Builder;
					public getIconBitmap$flashbar_release(): globalAndroid.graphics.Bitmap;
					public setOnBarTapListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnTapListener): void;
					public getNegativeActionText$flashbar_release(): string;
					public getActivity$flashbar_release(): globalAndroid.app.Activity;
				}
				export module Builder {
					export class WhenMappings {
						public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.Builder.WhenMappings>;
					}
				}
				export class Companion {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.Companion>;
				}
				export class DismissEvent {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.DismissEvent>;
					public static TIMEOUT: com.andrognito.flashbar.Flashbar.DismissEvent;
					public static MANUAL: com.andrognito.flashbar.Flashbar.DismissEvent;
					public static TAP_OUTSIDE: com.andrognito.flashbar.Flashbar.DismissEvent;
					public static SWIPE: com.andrognito.flashbar.Flashbar.DismissEvent;
					public static valueOf(param0: string): com.andrognito.flashbar.Flashbar.DismissEvent;
					public constructor(param0: string, param1: number);
					public static values(): androidNative.Array<com.andrognito.flashbar.Flashbar.DismissEvent>;
				}
				export class Gravity {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.Gravity>;
					public static TOP: com.andrognito.flashbar.Flashbar.Gravity;
					public static BOTTOM: com.andrognito.flashbar.Flashbar.Gravity;
					public static values(): androidNative.Array<com.andrognito.flashbar.Flashbar.Gravity>;
					public constructor(param0: string, param1: number);
					public static valueOf(param0: string): com.andrognito.flashbar.Flashbar.Gravity;
				}
				export class OnActionTapListener {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.OnActionTapListener>;
					/**
					 * Constructs a new instance of the com.andrognito.flashbar.Flashbar$OnActionTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActionTapped(param0: com.andrognito.flashbar.Flashbar): void;
					});
					public constructor();
					public onActionTapped(param0: com.andrognito.flashbar.Flashbar): void;
				}
				export class OnBarDismissListener {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.OnBarDismissListener>;
					/**
					 * Constructs a new instance of the com.andrognito.flashbar.Flashbar$OnBarDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDismissing(param0: com.andrognito.flashbar.Flashbar, param1: boolean): void;
						onDismissProgress(param0: com.andrognito.flashbar.Flashbar, param1: number): void;
						onDismissed(param0: com.andrognito.flashbar.Flashbar, param1: com.andrognito.flashbar.Flashbar.DismissEvent): void;
					});
					public constructor();
					public onDismissing(param0: com.andrognito.flashbar.Flashbar, param1: boolean): void;
					public onDismissed(param0: com.andrognito.flashbar.Flashbar, param1: com.andrognito.flashbar.Flashbar.DismissEvent): void;
					public onDismissProgress(param0: com.andrognito.flashbar.Flashbar, param1: number): void;
				}
				export class OnBarShowListener {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.OnBarShowListener>;
					/**
					 * Constructs a new instance of the com.andrognito.flashbar.Flashbar$OnBarShowListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onShowing(param0: com.andrognito.flashbar.Flashbar): void;
						onShowProgress(param0: com.andrognito.flashbar.Flashbar, param1: number): void;
						onShown(param0: com.andrognito.flashbar.Flashbar): void;
					});
					public constructor();
					public onShowing(param0: com.andrognito.flashbar.Flashbar): void;
					public onShowProgress(param0: com.andrognito.flashbar.Flashbar, param1: number): void;
					public onShown(param0: com.andrognito.flashbar.Flashbar): void;
				}
				export class OnTapListener {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.OnTapListener>;
					/**
					 * Constructs a new instance of the com.andrognito.flashbar.Flashbar$OnTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTap(param0: com.andrognito.flashbar.Flashbar): void;
					});
					public constructor();
					public onTap(param0: com.andrognito.flashbar.Flashbar): void;
				}
				export class ProgressPosition {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.ProgressPosition>;
					public static LEFT: com.andrognito.flashbar.Flashbar.ProgressPosition;
					public static RIGHT: com.andrognito.flashbar.Flashbar.ProgressPosition;
					public static valueOf(param0: string): com.andrognito.flashbar.Flashbar.ProgressPosition;
					public static values(): androidNative.Array<com.andrognito.flashbar.Flashbar.ProgressPosition>;
					public constructor(param0: string, param1: number);
				}
				export class Vibration {
					public static class: java.lang.Class<com.andrognito.flashbar.Flashbar.Vibration>;
					public static SHOW: com.andrognito.flashbar.Flashbar.Vibration;
					public static DISMISS: com.andrognito.flashbar.Flashbar.Vibration;
					public static valueOf(param0: string): com.andrognito.flashbar.Flashbar.Vibration;
					public constructor(param0: string, param1: number);
					public static values(): androidNative.Array<com.andrognito.flashbar.Flashbar.Vibration>;
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export class FlashbarContainerView implements com.andrognito.flashbar.SwipeDismissTouchListener.DismissCallbacks {
				public static class: java.lang.Class<com.andrognito.flashbar.FlashbarContainerView>;
				public parentFlashbar: com.andrognito.flashbar.Flashbar;
				public setBarShowListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnBarShowListener): void;
				public isBarShowing$flashbar_release(): boolean;
				public isBarShown$flashbar_release(): boolean;
				public setBarDismissListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnBarDismissListener): void;
				public setVibrationTargets$flashbar_release(param0: java.util.List<any>): void;
				public getParentFlashbar$flashbar_release(): com.andrognito.flashbar.Flashbar;
				public setDuration$flashbar_release(param0: number): void;
				public setOverlayColor$flashbar_release(param0: number): void;
				public _$_clearFindViewByIdCache(): void;
				public setOnTapOutsideListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnTapListener): void;
				public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public attach$flashbar_release(param0: com.andrognito.flashbar.FlashbarView): void;
				public constructor(param0: globalAndroid.content.Context);
				public setExitAnim$flashbar_release(param0: com.andrognito.flashbar.anim.FlashAnimBarBuilder): void;
				public onDismiss(param0: globalAndroid.view.View): void;
				public setOverlayBlockable$flashbar_release(param0: boolean): void;
				public show$flashbar_release(param0: globalAndroid.app.Activity): void;
				public setParentFlashbar$flashbar_release(param0: com.andrognito.flashbar.Flashbar): void;
				public setOverlay$flashbar_release(param0: boolean): void;
				public addParent$flashbar_release(param0: com.andrognito.flashbar.Flashbar): void;
				public setBarDismissOnTapOutside$flashbar_release(param0: boolean): void;
				public setEnterAnim$flashbar_release(param0: com.andrognito.flashbar.anim.FlashAnimBarBuilder): void;
				public onSwipe(param0: boolean): void;
				public adjustOrientation$flashbar_release(param0: globalAndroid.app.Activity): void;
				public enableSwipeToDismiss$flashbar_release(param0: boolean): void;
				public setIconAnim$flashbar_release(param0: com.andrognito.flashbar.anim.FlashAnimIconBuilder): void;
				public construct$flashbar_release(): void;
				public dismiss$flashbar_release(): void;
				public _$_findCachedViewById(param0: number): globalAndroid.view.View;
			}
			export module FlashbarContainerView {
				export class WhenMappings {
					public static class: java.lang.Class<com.andrognito.flashbar.FlashbarContainerView.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export class FlashbarKt {
				public static class: java.lang.Class<com.andrognito.flashbar.FlashbarKt>;
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export class FlashbarView {
				public static class: java.lang.Class<com.andrognito.flashbar.FlashbarView>;
				public setNegativeActionTextColor$flashbar_release(param0: java.lang.Integer): void;
				public setPrimaryActionTextSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
				public setIconBitmap$flashbar_release(param0: globalAndroid.graphics.Bitmap): void;
				public setNegativeActionTapListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnActionTapListener): void;
				public setPositiveActionTapListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnActionTapListener): void;
				public setPrimaryActionTapListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnActionTapListener): void;
				public setMessage$flashbar_release(param0: string): void;
				public setMessageAppearance$flashbar_release(param0: java.lang.Integer): void;
				public setTitle$flashbar_release(param0: string): void;
				public setTitleColor$flashbar_release(param0: java.lang.Integer): void;
				public setPositiveActionTextAppearance$flashbar_release(param0: java.lang.Integer): void;
				public setMessageSizeInSp$flashbar_release(param0: java.lang.Float): void;
				public adjustWitPositionAndOrientation$flashbar_release(param0: globalAndroid.app.Activity, param1: com.andrognito.flashbar.Flashbar.Gravity): void;
				public setMessageSizeInPx$flashbar_release(param0: java.lang.Float): void;
				public setNegativeActionTextAppearance$flashbar_release(param0: java.lang.Integer): void;
				public setTitleSizeInPx$flashbar_release(param0: java.lang.Float): void;
				public init$flashbar_release(param0: com.andrognito.flashbar.Flashbar.Gravity, param1: boolean, param2: number): void;
				public setPositiveActionTextTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
				public setTitleTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
				public setBarTapListener$flashbar_release(param0: com.andrognito.flashbar.Flashbar.OnTapListener): void;
				public stopIconAnimation$flashbar_release(): void;
				public _$_findCachedViewById(param0: number): globalAndroid.view.View;
				public enableSwipeToDismiss$flashbar_release(param0: boolean, param1: com.andrognito.flashbar.SwipeDismissTouchListener.DismissCallbacks): void;
				public setTitleSizeInSp$flashbar_release(param0: java.lang.Float): void;
				public setPrimaryActionTextSizeInPx$flashbar_release(param0: java.lang.Float): void;
				public setPositiveActionTextSizeInSp$flashbar_release(param0: java.lang.Float): void;
				public setNegativeActionText$flashbar_release(param0: string): void;
				public setNegativeActionTextSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
				public showIcon$flashbar_release(param0: boolean): void;
				public setPositiveActionTextSizeInPx$flashbar_release(param0: java.lang.Float): void;
				public setPrimaryActionTextSizeInSp$flashbar_release(param0: java.lang.Float): void;
				public setPrimaryActionTextAppearance$flashbar_release(param0: java.lang.Integer): void;
				public _$_clearFindViewByIdCache(): void;
				public setPositiveActionText$flashbar_release(param0: string): void;
				public setMessageSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
				public setPositiveActionTextSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
				public addParent$flashbar_release(param0: com.andrognito.flashbar.FlashbarContainerView): void;
				public constructor(param0: globalAndroid.content.Context);
				public setNegativeActionTextSizeInPx$flashbar_release(param0: java.lang.Float): void;
				public setPrimaryActionTextTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
				public setMessageTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
				public setBarBackgroundColor$flashbar_release(param0: java.lang.Integer): void;
				public setNegativeActionTextTypeface$flashbar_release(param0: globalAndroid.graphics.Typeface): void;
				public startIconAnimation$flashbar_release(param0: com.andrognito.flashbar.anim.FlashAnimIconBuilder): void;
				public setTitleAppearance$flashbar_release(param0: java.lang.Integer): void;
				public setTitleSpanned$flashbar_release(param0: globalAndroid.text.Spanned): void;
				public setMessageColor$flashbar_release(param0: java.lang.Integer): void;
				public setPositiveActionTextColor$flashbar_release(param0: java.lang.Integer): void;
				public setNegativeActionTextSizeInSp$flashbar_release(param0: java.lang.Float): void;
				public setProgressTint$flashbar_release(param0: java.lang.Integer, param1: com.andrognito.flashbar.Flashbar.ProgressPosition): void;
				public setProgressPosition$flashbar_release(param0: com.andrognito.flashbar.Flashbar.ProgressPosition): void;
				public setBarBackgroundDrawable$flashbar_release(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onMeasure(param0: number, param1: number): void;
				public setIconDrawable$flashbar_release(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIconColorFilter$flashbar_release(param0: java.lang.Integer, param1: globalAndroid.graphics.PorterDuff.Mode): void;
				public setPrimaryActionText$flashbar_release(param0: string): void;
				public setPrimaryActionTextColor$flashbar_release(param0: java.lang.Integer): void;
				public showIconScale$flashbar_release(param0: number, param1: globalAndroid.widget.ImageView.ScaleType): void;
			}
			export module FlashbarView {
				export class WhenMappings {
					public static class: java.lang.Class<com.andrognito.flashbar.FlashbarView.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export class SwipeDismissTouchListener {
				public static class: java.lang.Class<com.andrognito.flashbar.SwipeDismissTouchListener>;
				public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public constructor(param0: globalAndroid.view.View, param1: com.andrognito.flashbar.SwipeDismissTouchListener.DismissCallbacks);
			}
			export module SwipeDismissTouchListener {
				export class DismissCallbacks {
					public static class: java.lang.Class<com.andrognito.flashbar.SwipeDismissTouchListener.DismissCallbacks>;
					/**
					 * Constructs a new instance of the com.andrognito.flashbar.SwipeDismissTouchListener$DismissCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSwipe(param0: boolean): void;
						onDismiss(param0: globalAndroid.view.View): void;
					});
					public constructor();
					public onSwipe(param0: boolean): void;
					public onDismiss(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module anim {
				export abstract class BaseFlashAnimBuilder {
					public static class: java.lang.Class<com.andrognito.flashbar.anim.BaseFlashAnimBuilder>;
					public getView(): globalAndroid.view.View;
					public getInterpolator(): globalAndroid.view.animation.Interpolator;
					public accelerateDecelerate(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public setView(param0: globalAndroid.view.View): void;
					public interpolator(param0: globalAndroid.view.animation.Interpolator): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public accelerate(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public getDEFAULT_ALPHA_START(): number;
					public getAlpha(): boolean;
					public alpha(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public setDuration(param0: number): void;
					public decelerate(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public setAlpha(param0: boolean): void;
					public duration(param0: number): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public constructor(param0: globalAndroid.content.Context);
					public getDEFAULT_ALPHA_END(): number;
					public getDuration(): number;
					public setInterpolator(param0: globalAndroid.view.animation.Interpolator): void;
					public withView$flashbar_release(param0: globalAndroid.view.View): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public interpolator(param0: number): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module anim {
				export class FlashAnim {
					public static class: java.lang.Class<com.andrognito.flashbar.anim.FlashAnim>;
					public static Companion: com.andrognito.flashbar.anim.FlashAnim.Companion;
					public constructor(param0: globalAndroid.animation.AnimatorSet);
					public start$flashbar_release(param0: com.andrognito.flashbar.anim.FlashAnim.InternalAnimListener): void;
					public static with(param0: globalAndroid.content.Context): com.andrognito.flashbar.anim.FlashAnimRetriever;
				}
				export module FlashAnim {
					export class Companion {
						public static class: java.lang.Class<com.andrognito.flashbar.anim.FlashAnim.Companion>;
						public with(param0: globalAndroid.content.Context): com.andrognito.flashbar.anim.FlashAnimRetriever;
					}
					export class InternalAnimListener {
						public static class: java.lang.Class<com.andrognito.flashbar.anim.FlashAnim.InternalAnimListener>;
						/**
						 * Constructs a new instance of the com.andrognito.flashbar.anim.FlashAnim$InternalAnimListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStart(): void;
							onUpdate(param0: number): void;
							onStop(): void;
						});
						public constructor();
						public onUpdate(param0: number): void;
						public onStop(): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module anim {
				export class FlashAnimBarBuilder extends com.andrognito.flashbar.anim.BaseFlashAnimBuilder {
					public static class: java.lang.Class<com.andrognito.flashbar.anim.FlashAnimBarBuilder>;
					public fromTop$flashbar_release(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public accelerate(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public overshoot(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public alpha(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public anticipateOvershoot(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public enter$flashbar_release(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public interpolator(param0: number): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public decelerate(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public duration(param0: number): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public accelerate(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public slideFromLeft(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public withView$flashbar_release(param0: globalAndroid.view.View): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public duration(param0: number): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public fromBottom$flashbar_release(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public interpolator(param0: globalAndroid.view.animation.Interpolator): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public accelerateDecelerate(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public interpolator(param0: globalAndroid.view.animation.Interpolator): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public decelerate(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public alpha(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public slideFromRight(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public constructor(param0: globalAndroid.content.Context);
					public build$flashbar_release(): com.andrognito.flashbar.anim.FlashAnim;
					public exit$flashbar_release(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public interpolator(param0: number): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public accelerateDecelerate(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public withView$flashbar_release(param0: globalAndroid.view.View): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
				}
				export module FlashAnimBarBuilder {
					export class Direction {
						public static class: java.lang.Class<com.andrognito.flashbar.anim.FlashAnimBarBuilder.Direction>;
						public static LEFT: com.andrognito.flashbar.anim.FlashAnimBarBuilder.Direction;
						public static RIGHT: com.andrognito.flashbar.anim.FlashAnimBarBuilder.Direction;
						public static valueOf(param0: string): com.andrognito.flashbar.anim.FlashAnimBarBuilder.Direction;
						public constructor(param0: string, param1: number);
						public static values(): androidNative.Array<com.andrognito.flashbar.anim.FlashAnimBarBuilder.Direction>;
					}
					export class Type {
						public static class: java.lang.Class<com.andrognito.flashbar.anim.FlashAnimBarBuilder.Type>;
						public static ENTER: com.andrognito.flashbar.anim.FlashAnimBarBuilder.Type;
						public static EXIT: com.andrognito.flashbar.anim.FlashAnimBarBuilder.Type;
						public constructor(param0: string, param1: number);
						public static values(): androidNative.Array<com.andrognito.flashbar.anim.FlashAnimBarBuilder.Type>;
						public static valueOf(param0: string): com.andrognito.flashbar.anim.FlashAnimBarBuilder.Type;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.andrognito.flashbar.anim.FlashAnimBarBuilder.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module anim {
				export class FlashAnimIconBuilder extends com.andrognito.flashbar.anim.BaseFlashAnimBuilder {
					public static class: java.lang.Class<com.andrognito.flashbar.anim.FlashAnimIconBuilder>;
					public accelerateDecelerate(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public accelerate(): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public interpolator(param0: globalAndroid.view.animation.Interpolator): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public interpolator(param0: globalAndroid.view.animation.Interpolator): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public accelerate(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public decelerate(): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public accelerateDecelerate(): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public alpha(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public decelerate(): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public interpolator(param0: number): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public duration(param0: number): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public pulse(param0: number, param1: number): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public constructor(param0: globalAndroid.content.Context);
					public pulse(): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public duration(param0: number): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public withView$flashbar_release(param0: globalAndroid.view.View): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
					public build$flashbar_release(): com.andrognito.flashbar.anim.FlashAnim;
					public pulse(param0: number): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public withView$flashbar_release(param0: globalAndroid.view.View): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public alpha(): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
					public interpolator(param0: number): com.andrognito.flashbar.anim.BaseFlashAnimBuilder;
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module anim {
				export class FlashAnimRetriever {
					public static class: java.lang.Class<com.andrognito.flashbar.anim.FlashAnimRetriever>;
					public constructor(param0: globalAndroid.content.Context);
					public animateBar(): com.andrognito.flashbar.anim.FlashAnimBarBuilder;
					public animateIcon(): com.andrognito.flashbar.anim.FlashAnimIconBuilder;
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module util {
				export class CommonUtilsKt {
					public static class: java.lang.Class<com.andrognito.flashbar.util.CommonUtilsKt>;
					public static afterMeasured(param0: globalAndroid.view.View, param1: kotlin.jvm.functions.Function1): void;
					public static convertPxToDp(param0: globalAndroid.content.Context, param1: number): number;
					public static getNavigationBarPosition(param0: globalAndroid.app.Activity): com.andrognito.flashbar.util.NavigationBarPosition;
					public static getRootView(param0: globalAndroid.app.Activity): globalAndroid.view.ViewGroup;
					public static getStatusBarHeightInPx(param0: globalAndroid.app.Activity): number;
					public static convertDpToPx(param0: globalAndroid.content.Context, param1: number): number;
					public static getNavigationBarSizeInPx(param0: globalAndroid.app.Activity): number;
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module util {
				export class NavigationBarPosition {
					public static class: java.lang.Class<com.andrognito.flashbar.util.NavigationBarPosition>;
					public static BOTTOM: com.andrognito.flashbar.util.NavigationBarPosition;
					public static RIGHT: com.andrognito.flashbar.util.NavigationBarPosition;
					public static LEFT: com.andrognito.flashbar.util.NavigationBarPosition;
					public static TOP: com.andrognito.flashbar.util.NavigationBarPosition;
					public constructor(param0: string, param1: number);
					public static values(): androidNative.Array<com.andrognito.flashbar.util.NavigationBarPosition>;
					public static valueOf(param0: string): com.andrognito.flashbar.util.NavigationBarPosition;
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module view {
				export class FbButton {
					public static class: java.lang.Class<com.andrognito.flashbar.view.FbButton>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module view {
				export class FbProgress {
					public static class: java.lang.Class<com.andrognito.flashbar.view.FbProgress>;
					public getBarWidth(): number;
					public resetCount(): void;
					public getCircleRadius(): number;
					public setCircleRadius(param0: number): void;
					public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
					public stopSpinning(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setBarWidth(param0: number): void;
					public getRimColor(): number;
					public setInstantProgress(param0: number): void;
					public setBarColor(param0: number): void;
					public setLinearProgress(param0: boolean): void;
					public onMeasure(param0: number, param1: number): void;
					public spin(): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public setRimColor(param0: number): void;
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public getRimWidth(): number;
					public _$_clearFindViewByIdCache(): void;
					public setCallback(param0: com.andrognito.flashbar.view.FbProgress.ProgressCallback): void;
					public getSpinSpeed(): number;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public setProgress(param0: number): void;
					public constructor(param0: globalAndroid.content.Context);
					public getProgress(): number;
					public getBarColor(): number;
					public setRimWidth(param0: number): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public setSpinSpeed(param0: number): void;
				}
				export module FbProgress {
					export class ProgressCallback {
						public static class: java.lang.Class<com.andrognito.flashbar.view.FbProgress.ProgressCallback>;
						/**
						 * Constructs a new instance of the com.andrognito.flashbar.view.FbProgress$ProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onProgressUpdate(param0: number): void;
						});
						public constructor();
						public onProgressUpdate(param0: number): void;
					}
					export class WheelSavedState {
						public static class: java.lang.Class<com.andrognito.flashbar.view.FbProgress.WheelSavedState>;
						public static Companion: com.andrognito.flashbar.view.FbProgress.WheelSavedState.Companion;
						public setFillRadius(param0: boolean): void;
						public getCircleRadius(): number;
						public isSpinning(): boolean;
						public setSpinSpeed(param0: number): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getBarWidth(): number;
						public setBarColor(param0: number): void;
						public getRimWidth(): number;
						public getMProgress(): number;
						public getLinearProgress(): boolean;
						public setLinearProgress(param0: boolean): void;
						public setRimWidth(param0: number): void;
						public getMTargetProgress(): number;
						public setMProgress(param0: number): void;
						public setBarWidth(param0: number): void;
						public setCircleRadius(param0: number): void;
						public setMTargetProgress(param0: number): void;
						public constructor(param0: globalAndroid.os.Parcelable);
						public setRimColor(param0: number): void;
						public setSpinning(param0: boolean): void;
						public getRimColor(): number;
						public getBarColor(): number;
						public getSpinSpeed(): number;
						public getFillRadius(): boolean;
					}
					export module WheelSavedState {
						export class Companion {
							public static class: java.lang.Class<com.andrognito.flashbar.view.FbProgress.WheelSavedState.Companion>;
							public getCREATOR(): globalAndroid.os.Parcelable.Creator<com.andrognito.flashbar.view.FbProgress.WheelSavedState>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module andrognito {
		export module flashbar {
			export module view {
				export class ShadowView {
					public static class: java.lang.Class<com.andrognito.flashbar.view.ShadowView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public _$_findCachedViewById(param0: number): globalAndroid.view.View;
					public _$_clearFindViewByIdCache(): void;
					public applyShadow$flashbar_release(param0: com.andrognito.flashbar.view.ShadowView.ShadowType): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module ShadowView {
					export class ShadowType {
						public static class: java.lang.Class<com.andrognito.flashbar.view.ShadowView.ShadowType>;
						public static TOP: com.andrognito.flashbar.view.ShadowView.ShadowType;
						public static BOTTOM: com.andrognito.flashbar.view.ShadowView.ShadowType;
						public constructor(param0: string, param1: number);
						public static values(): androidNative.Array<com.andrognito.flashbar.view.ShadowView.ShadowType>;
						public static valueOf(param0: string): com.andrognito.flashbar.view.ShadowView.ShadowType;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.andrognito.flashbar.view.ShadowView.WhenMappings>;
					}
				}
			}
		}
	}
}

//Generics information:

