/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class AnimationUtils {
						public static class: java.lang.Class<com.google.android.material.animation.AnimationUtils>;
						public static LINEAR_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public static FAST_OUT_SLOW_IN_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public static FAST_OUT_LINEAR_IN_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public static LINEAR_OUT_SLOW_IN_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public static DECELERATE_INTERPOLATOR: globalAndroid.animation.TimeInterpolator;
						public static lerp(param0: number, param1: number, param2: number, param3: number, param4: number): number;
						public constructor();
						public static lerp(param0: number, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class AnimatorSetCompat {
						public static class: java.lang.Class<com.google.android.material.animation.AnimatorSetCompat>;
						public constructor();
						public static playTogether(param0: globalAndroid.animation.AnimatorSet, param1: java.util.List<globalAndroid.animation.Animator>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class ArgbEvaluatorCompat extends globalAndroid.animation.TypeEvaluator<java.lang.Integer> {
						public static class: java.lang.Class<com.google.android.material.animation.ArgbEvaluatorCompat>;
						public static getInstance(): com.google.android.material.animation.ArgbEvaluatorCompat;
						public evaluate(param0: number, param1: java.lang.Integer, param2: java.lang.Integer): java.lang.Integer;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class ChildrenAlphaProperty extends globalAndroid.util.Property<globalAndroid.view.ViewGroup,java.lang.Float> {
						public static class: java.lang.Class<com.google.android.material.animation.ChildrenAlphaProperty>;
						public static CHILDREN_ALPHA: globalAndroid.util.Property<globalAndroid.view.ViewGroup,java.lang.Float>;
						public set(param0: globalAndroid.view.ViewGroup, param1: java.lang.Float): void;
						public get(param0: globalAndroid.view.ViewGroup): java.lang.Float;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class DrawableAlphaProperty extends globalAndroid.util.Property<globalAndroid.graphics.drawable.Drawable,java.lang.Integer> {
						public static class: java.lang.Class<com.google.android.material.animation.DrawableAlphaProperty>;
						public static DRAWABLE_ALPHA_COMPAT: globalAndroid.util.Property<globalAndroid.graphics.drawable.Drawable,java.lang.Integer>;
						public get(param0: globalAndroid.graphics.drawable.Drawable): java.lang.Integer;
						public set(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class ImageMatrixProperty extends globalAndroid.util.Property<globalAndroid.widget.ImageView,globalAndroid.graphics.Matrix> {
						public static class: java.lang.Class<com.google.android.material.animation.ImageMatrixProperty>;
						public constructor();
						public get(param0: globalAndroid.widget.ImageView): globalAndroid.graphics.Matrix;
						public set(param0: globalAndroid.widget.ImageView, param1: globalAndroid.graphics.Matrix): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class MatrixEvaluator extends globalAndroid.animation.TypeEvaluator<globalAndroid.graphics.Matrix> {
						public static class: java.lang.Class<com.google.android.material.animation.MatrixEvaluator>;
						public constructor();
						public evaluate(param0: number, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.Matrix): globalAndroid.graphics.Matrix;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class MotionSpec {
						public static class: java.lang.Class<com.google.android.material.animation.MotionSpec>;
						public constructor();
						public setPropertyValues(param0: string, param1: androidNative.Array<globalAndroid.animation.PropertyValuesHolder>): void;
						public getTiming(param0: string): com.google.android.material.animation.MotionTiming;
						public static createFromResource(param0: globalAndroid.content.Context, param1: number): com.google.android.material.animation.MotionSpec;
						public setTiming(param0: string, param1: com.google.android.material.animation.MotionTiming): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPropertyValues(param0: string): androidNative.Array<globalAndroid.animation.PropertyValuesHolder>;
						public toString(): string;
						public getTotalDuration(): number;
						public getAnimator(param0: string, param1: any, param2: globalAndroid.util.Property): globalAndroid.animation.ObjectAnimator;
						public hasPropertyValues(param0: string): boolean;
						public static createFromAttribute(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray, param2: number): com.google.android.material.animation.MotionSpec;
						public hasTiming(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class MotionTiming {
						public static class: java.lang.Class<com.google.android.material.animation.MotionTiming>;
						public getDelay(): number;
						public getInterpolator(): globalAndroid.animation.TimeInterpolator;
						public constructor(param0: number, param1: number, param2: globalAndroid.animation.TimeInterpolator);
						public apply(param0: globalAndroid.animation.Animator): void;
						public getDuration(): number;
						public getRepeatCount(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getRepeatMode(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class Positioning {
						public static class: java.lang.Class<com.google.android.material.animation.Positioning>;
						public gravity: number;
						public xAdjustment: number;
						public yAdjustment: number;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module animation {
					export class TransformationCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.animation.TransformationCallback<any>>;
						/**
						 * Constructs a new instance of the com.google.android.material.animation.TransformationCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTranslationChanged(param0: T): void;
							onScaleChanged(param0: T): void;
						});
						public constructor();
						public onTranslationChanged(param0: T): void;
						public onScaleChanged(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class AppBarLayout {
						public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout>;
						public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<com.google.android.material.appbar.AppBarLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public setStatusBarForeground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setVisibility(param0: number): void;
						public onAttachedToWindow(): void;
						public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): com.google.android.material.appbar.AppBarLayout.LayoutParams;
						public addOnOffsetChangedListener(param0: com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<any>): void;
						public setElevation(param0: number): void;
						public setLiftOnScroll(param0: boolean): void;
						/** @deprecated */
						public setTargetElevation(param0: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public drawableStateChanged(): void;
						public isLiftOnScroll(): boolean;
						public setStatusBarForegroundResource(param0: number): void;
						public setExpanded(param0: boolean, param1: boolean): void;
						public removeOnOffsetChangedListener(param0: com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<any>): void;
						public onCreateDrawableState(param0: number): androidNative.Array<number>;
						public setOrientation(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public getLiftOnScrollTargetViewId(): number;
						public getMinimumHeightForVisibleOverlappingContent(): number;
						public getTotalScrollRange(): number;
						public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
						/** @deprecated */
						public getTargetElevation(): number;
						public onDetachedFromWindow(): void;
						public setStatusBarForegroundColor(param0: number): void;
						public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
						public setLiftOnScrollTargetViewId(param0: number): void;
						public generateDefaultLayoutParams(): com.google.android.material.appbar.AppBarLayout.LayoutParams;
						public isLifted(): boolean;
						public generateLayoutParams(param0: globalAndroid.util.AttributeSet): com.google.android.material.appbar.AppBarLayout.LayoutParams;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public removeOnOffsetChangedListener(param0: com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public addOnOffsetChangedListener(param0: com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener): void;
						public setLifted(param0: boolean): boolean;
						public getStatusBarForeground(): globalAndroid.graphics.drawable.Drawable;
						public setExpanded(param0: boolean): void;
						public setLiftable(param0: boolean): boolean;
					}
					export module AppBarLayout {
						export class BaseBehavior<T>  extends com.google.android.material.appbar.HeaderBehavior<any> {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseBehavior<any>>;
							public constructor();
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
							public onNestedPreScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: androidNative.Array<number>, param6: number): void;
							public onStopNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number): void;
							public onSaveInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any): globalAndroid.os.Parcelable;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: number, param7: number, param8: androidNative.Array<number>): void;
							public setDragCallback(param0: com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback<any>): void;
							public onMeasureChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number, param3: number, param4: number, param5: number): boolean;
							public onRestoreInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.os.Parcelable): void;
							public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number, param5: number): boolean;
						}
						export module BaseBehavior {
							export abstract class BaseDragCallback<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback<any>>;
								public canDrag(param0: T): boolean;
								public constructor();
							}
							export class SavedState {
								public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseBehavior.SavedState>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.appbar.AppBarLayout.BaseBehavior.SavedState>;
								public constructor(param0: globalAndroid.os.Parcelable);
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
							}
						}
						export class BaseOnOffsetChangedListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<any>>;
							/**
							 * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$BaseOnOffsetChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onOffsetChanged(param0: T, param1: number): void;
							});
							public constructor();
							public onOffsetChanged(param0: T, param1: number): void;
						}
						export class Behavior extends com.google.android.material.appbar.AppBarLayout.BaseBehavior<com.google.android.material.appbar.AppBarLayout> {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.Behavior>;
							public constructor();
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
						export module Behavior {
							export abstract class DragCallback extends com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback<com.google.android.material.appbar.AppBarLayout> {
								public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.Behavior.DragCallback>;
								public constructor();
							}
						}
						export class LayoutParams {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.LayoutParams>;
							public static SCROLL_FLAG_NO_SCROLL: number;
							public static SCROLL_FLAG_SCROLL: number;
							public static SCROLL_FLAG_EXIT_UNTIL_COLLAPSED: number;
							public static SCROLL_FLAG_ENTER_ALWAYS: number;
							public static SCROLL_FLAG_ENTER_ALWAYS_COLLAPSED: number;
							public static SCROLL_FLAG_SNAP: number;
							public static SCROLL_FLAG_SNAP_MARGINS: number;
							public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
							public getScrollInterpolator(): globalAndroid.view.animation.Interpolator;
							public setScrollFlags(param0: number): void;
							public getScrollFlags(): number;
							public constructor(param0: number, param1: number, param2: number);
							public constructor(param0: globalAndroid.widget.LinearLayout.LayoutParams);
							public constructor(param0: number, param1: number);
							public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: com.google.android.material.appbar.AppBarLayout.LayoutParams);
							public setScrollInterpolator(param0: globalAndroid.view.animation.Interpolator): void;
						}
						export module LayoutParams {
							export class ScrollFlags {
								public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.LayoutParams.ScrollFlags>;
								/**
								 * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$LayoutParams$ScrollFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
						}
						export class OnOffsetChangedListener extends com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener<com.google.android.material.appbar.AppBarLayout> {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.appbar.AppBarLayout$OnOffsetChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
								onOffsetChanged(param0: any, param1: number): void;
							});
							public constructor();
							public onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
							public onOffsetChanged(param0: any, param1: number): void;
						}
						export class ScrollingViewBehavior extends com.google.android.material.appbar.HeaderScrollingViewBehavior {
							public static class: java.lang.Class<com.google.android.material.appbar.AppBarLayout.ScrollingViewBehavior>;
							public constructor();
							public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
							public onDependentViewChanged(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
							public onDependentViewRemoved(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): void;
							public onRequestChildRectangleOnScreen(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect, param3: boolean): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class CollapsingToolbarLayout {
						public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout>;
						public setStatusBarScrimResource(param0: number): void;
						public getScrimVisibleHeightTrigger(): number;
						public constructor(param0: globalAndroid.content.Context);
						public drawChild(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.view.View, param2: number): boolean;
						public isTitleEnabled(): boolean;
						public getScrimAnimationDuration(): number;
						public setExpandedTitleGravity(param0: number): void;
						public setExpandedTitleMarginTop(param0: number): void;
						public setCollapsedTitleTextColor(param0: number): void;
						public setMaxLines(param0: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setCollapsedTitleTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setExpandedTitleMarginStart(param0: number): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public setCollapsedTitleTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setCollapsedTitleTextAppearance(param0: number): void;
						public setStatusBarScrimColor(param0: number): void;
						public onMeasure(param0: number, param1: number): void;
						public setExpandedTitleMargin(param0: number, param1: number, param2: number, param3: number): void;
						public setCollapsedTitleGravity(param0: number): void;
						public setContentScrim(param0: globalAndroid.graphics.drawable.Drawable): void;
						public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
						public getExpandedTitleMarginBottom(): number;
						public setTitleEnabled(param0: boolean): void;
						public setContentScrimResource(param0: number): void;
						public setTitle(param0: string): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setStatusBarScrim(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setScrimsShown(param0: boolean, param1: boolean): void;
						public setExpandedTitleTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setScrimAnimationDuration(param0: number): void;
						public getExpandedTitleMarginTop(): number;
						public setVisibility(param0: number): void;
						public onAttachedToWindow(): void;
						public getMaxLines(): number;
						public setExpandedTitleMarginEnd(param0: number): void;
						public drawableStateChanged(): void;
						public getExpandedTitleMarginEnd(): number;
						public setExpandedTitleMarginBottom(param0: number): void;
						public setContentScrimColor(param0: number): void;
						public getContentScrim(): globalAndroid.graphics.drawable.Drawable;
						public setScrimVisibleHeightTrigger(param0: number): void;
						public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.widget.FrameLayout.LayoutParams;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getCollapsedTitleGravity(): number;
						public getExpandedTitleTypeface(): globalAndroid.graphics.Typeface;
						public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
						public onDetachedFromWindow(): void;
						public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.widget.FrameLayout.LayoutParams;
						public getCollapsedTitleTypeface(): globalAndroid.graphics.Typeface;
						public getTitle(): string;
						public setScrimsShown(param0: boolean): void;
						public getExpandedTitleMarginStart(): number;
						public generateDefaultLayoutParams(): com.google.android.material.appbar.CollapsingToolbarLayout.LayoutParams;
						public getExpandedTitleGravity(): number;
						public setExpandedTitleTypeface(param0: globalAndroid.graphics.Typeface): void;
						public getStatusBarScrim(): globalAndroid.graphics.drawable.Drawable;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setExpandedTitleColor(param0: number): void;
						public setExpandedTitleTextAppearance(param0: number): void;
					}
					export module CollapsingToolbarLayout {
						export class LayoutParams {
							public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout.LayoutParams>;
							public static COLLAPSE_MODE_OFF: number;
							public static COLLAPSE_MODE_PIN: number;
							public static COLLAPSE_MODE_PARALLAX: number;
							public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
							public constructor(param0: number, param1: number, param2: number);
							public setCollapseMode(param0: number): void;
							public constructor(param0: number, param1: number);
							public getCollapseMode(): number;
							public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
							public getParallaxMultiplier(): number;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setParallaxMultiplier(param0: number): void;
							public constructor(param0: globalAndroid.widget.FrameLayout.LayoutParams);
						}
						export class OffsetUpdateListener extends com.google.android.material.appbar.AppBarLayout.OnOffsetChangedListener {
							public static class: java.lang.Class<com.google.android.material.appbar.CollapsingToolbarLayout.OffsetUpdateListener>;
							public onOffsetChanged(param0: com.google.android.material.appbar.AppBarLayout, param1: number): void;
							public onOffsetChanged(param0: any, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export abstract class HeaderBehavior<V>  extends com.google.android.material.appbar.ViewOffsetBehavior<any> {
						public static class: java.lang.Class<com.google.android.material.appbar.HeaderBehavior<any>>;
						public constructor();
						public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
					}
					export module HeaderBehavior {
						export class FlingRunnable {
							public static class: java.lang.Class<com.google.android.material.appbar.HeaderBehavior.FlingRunnable>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export abstract class HeaderScrollingViewBehavior extends com.google.android.material.appbar.ViewOffsetBehavior<globalAndroid.view.View> {
						public static class: java.lang.Class<com.google.android.material.appbar.HeaderScrollingViewBehavior>;
						public onMeasureChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: number, param3: number, param4: number, param5: number): boolean;
						public layoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): void;
						public constructor();
						public shouldHeaderOverlapScrollingChild(): boolean;
						public layoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: number): void;
						public setOverlayTop(param0: number): void;
						public getOverlayTop(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class MaterialToolbar {
						public static class: java.lang.Class<com.google.android.material.appbar.MaterialToolbar>;
						public setNavigationIconTint(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public onAttachedToWindow(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setElevation(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class ViewOffsetBehavior<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
						public static class: java.lang.Class<com.google.android.material.appbar.ViewOffsetBehavior<any>>;
						public layoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): void;
						public setHorizontalOffsetEnabled(param0: boolean): void;
						public constructor();
						public isVerticalOffsetEnabled(): boolean;
						public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
						public setTopAndBottomOffset(param0: number): boolean;
						public setLeftAndRightOffset(param0: number): boolean;
						public getLeftAndRightOffset(): number;
						public isHorizontalOffsetEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getTopAndBottomOffset(): number;
						public setVerticalOffsetEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class ViewOffsetHelper {
						public static class: java.lang.Class<com.google.android.material.appbar.ViewOffsetHelper>;
						public getLayoutTop(): number;
						public setHorizontalOffsetEnabled(param0: boolean): void;
						public getLayoutLeft(): number;
						public isVerticalOffsetEnabled(): boolean;
						public setTopAndBottomOffset(param0: number): boolean;
						public constructor(param0: globalAndroid.view.View);
						public setLeftAndRightOffset(param0: number): boolean;
						public getLeftAndRightOffset(): number;
						public isHorizontalOffsetEnabled(): boolean;
						public getTopAndBottomOffset(): number;
						public setVerticalOffsetEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module appbar {
					export class ViewUtilsLollipop {
						public static class: java.lang.Class<com.google.android.material.appbar.ViewUtilsLollipop>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module badge {
					export class BadgeDrawable implements com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate {
						public static class: java.lang.Class<com.google.android.material.badge.BadgeDrawable>;
						public static TOP_END: number;
						public static TOP_START: number;
						public static BOTTOM_END: number;
						public static BOTTOM_START: number;
						public getMaxCharacterCount(): number;
						public setContentDescriptionNumberless(param0: string): void;
						public setMaxCharacterCount(param0: number): void;
						public getAlpha(): number;
						public setContentDescriptionExceedsMaxBadgeNumberStringResource(param0: number): void;
						/** @deprecated */
						public updateBadgeCoordinates(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup): void;
						public getBadgeTextColor(): number;
						public isStateful(): boolean;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public getHorizontalOffset(): number;
						public getCustomBadgeParent(): globalAndroid.widget.FrameLayout;
						public getState(): androidNative.Array<number>;
						public setBadgeGravity(param0: number): void;
						public static createFromResource(param0: globalAndroid.content.Context, param1: number): com.google.android.material.badge.BadgeDrawable;
						public setBadgeTextColor(param0: number): void;
						public getNumber(): number;
						public setBackgroundColor(param0: number): void;
						public getContentDescription(): string;
						public getBackgroundColor(): number;
						public setContentDescriptionQuantityStringsResource(param0: number): void;
						public getIntrinsicWidth(): number;
						public updateBadgeCoordinates(param0: globalAndroid.view.View): void;
						public getIntrinsicHeight(): number;
						public static create(param0: globalAndroid.content.Context): com.google.android.material.badge.BadgeDrawable;
						public getBadgeGravity(): number;
						public hasNumber(): boolean;
						public setNumber(param0: number): void;
						public getOpacity(): number;
						public onStateChange(param0: androidNative.Array<number>): boolean;
						public setAlpha(param0: number): void;
						public onTextSizeChange(): void;
						public clearNumber(): void;
						public updateBadgeCoordinates(param0: globalAndroid.view.View, param1: globalAndroid.widget.FrameLayout): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setVerticalOffset(param0: number): void;
						public getSavedState(): com.google.android.material.badge.BadgeDrawable.SavedState;
						public getVerticalOffset(): number;
						public setVisible(param0: boolean): void;
						public setHorizontalOffset(param0: number): void;
					}
					export module BadgeDrawable {
						export class BadgeGravity {
							public static class: java.lang.Class<com.google.android.material.badge.BadgeDrawable.BadgeGravity>;
							/**
							 * Constructs a new instance of the com.google.android.material.badge.BadgeDrawable$BadgeGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.badge.BadgeDrawable.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.badge.BadgeDrawable.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.Parcel);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module badge {
					export class BadgeUtils {
						public static class: java.lang.Class<com.google.android.material.badge.BadgeUtils>;
						public static USE_COMPAT_PARENT: boolean;
						public static attachBadgeDrawable(param0: com.google.android.material.badge.BadgeDrawable, param1: androidx.appcompat.widget.Toolbar, param2: number): void;
						public static detachBadgeDrawable(param0: com.google.android.material.badge.BadgeDrawable, param1: globalAndroid.view.View): void;
						public static attachBadgeDrawable(param0: com.google.android.material.badge.BadgeDrawable, param1: androidx.appcompat.widget.Toolbar, param2: number, param3: globalAndroid.widget.FrameLayout): void;
						public static createBadgeDrawablesFromSavedStates(param0: globalAndroid.content.Context, param1: com.google.android.material.internal.ParcelableSparseArray): globalAndroid.util.SparseArray<com.google.android.material.badge.BadgeDrawable>;
						public static updateBadgeBounds(param0: globalAndroid.graphics.Rect, param1: number, param2: number, param3: number, param4: number): void;
						public static attachBadgeDrawable(param0: com.google.android.material.badge.BadgeDrawable, param1: globalAndroid.view.View, param2: globalAndroid.widget.FrameLayout): void;
						public static attachBadgeDrawable(param0: com.google.android.material.badge.BadgeDrawable, param1: globalAndroid.view.View): void;
						public static setBadgeDrawableBounds(param0: com.google.android.material.badge.BadgeDrawable, param1: globalAndroid.view.View, param2: globalAndroid.widget.FrameLayout): void;
						public static createParcelableBadgeStates(param0: globalAndroid.util.SparseArray<com.google.android.material.badge.BadgeDrawable>): com.google.android.material.internal.ParcelableSparseArray;
						public static detachBadgeDrawable(param0: com.google.android.material.badge.BadgeDrawable, param1: androidx.appcompat.widget.Toolbar, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module badge {
					export class ExperimentalBadgeUtils {
						public static class: java.lang.Class<com.google.android.material.badge.ExperimentalBadgeUtils>;
						/**
						 * Constructs a new instance of the com.google.android.material.badge.ExperimentalBadgeUtils interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module behavior {
					export class HideBottomViewOnScrollBehavior<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
						public static class: java.lang.Class<com.google.android.material.behavior.HideBottomViewOnScrollBehavior<any>>;
						public static ENTER_ANIMATION_DURATION: number;
						public static EXIT_ANIMATION_DURATION: number;
						public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number, param5: number): boolean;
						public constructor();
						public setAdditionalHiddenOffsetY(param0: any, param1: number): void;
						public slideUp(param0: any): void;
						public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
						public onNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: number, param7: number, param8: androidNative.Array<number>): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public slideDown(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module behavior {
					export class SwipeDismissBehavior<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
						public static class: java.lang.Class<com.google.android.material.behavior.SwipeDismissBehavior<any>>;
						public static STATE_IDLE: number;
						public static STATE_DRAGGING: number;
						public static STATE_SETTLING: number;
						public static SWIPE_DIRECTION_START_TO_END: number;
						public static SWIPE_DIRECTION_END_TO_START: number;
						public static SWIPE_DIRECTION_ANY: number;
						public constructor();
						public canSwipeDismissView(param0: globalAndroid.view.View): boolean;
						public setSensitivity(param0: number): void;
						public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
						public setStartAlphaSwipeDistance(param0: number): void;
						public setEndAlphaSwipeDistance(param0: number): void;
						public setDragDismissDistance(param0: number): void;
						public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public getListener(): com.google.android.material.behavior.SwipeDismissBehavior.OnDismissListener;
						public setSwipeDirection(param0: number): void;
						public getDragState(): number;
						public setListener(param0: com.google.android.material.behavior.SwipeDismissBehavior.OnDismissListener): void;
						public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
					}
					export module SwipeDismissBehavior {
						export class OnDismissListener {
							public static class: java.lang.Class<com.google.android.material.behavior.SwipeDismissBehavior.OnDismissListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.behavior.SwipeDismissBehavior$OnDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDismiss(param0: globalAndroid.view.View): void;
								onDragStateChanged(param0: number): void;
							});
							public constructor();
							public onDismiss(param0: globalAndroid.view.View): void;
							public onDragStateChanged(param0: number): void;
						}
						export class SettleRunnable {
							public static class: java.lang.Class<com.google.android.material.behavior.SwipeDismissBehavior.SettleRunnable>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomappbar {
					export class BottomAppBar {
						public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar>;
						public static FAB_ALIGNMENT_MODE_CENTER: number;
						public static FAB_ALIGNMENT_MODE_END: number;
						public static FAB_ANIMATION_MODE_SCALE: number;
						public static FAB_ANIMATION_MODE_SLIDE: number;
						public constructor(param0: globalAndroid.content.Context);
						public getActionMenuViewTranslationX(param0: androidx.appcompat.widget.ActionMenuView, param1: number, param2: boolean): number;
						public onAttachedToWindow(): void;
						public setElevation(param0: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public getBehavior(): com.google.android.material.bottomappbar.BottomAppBar.Behavior;
						public getHideOnScroll(): boolean;
						public setFabAlignmentMode(param0: number): void;
						public setFabCradleRoundedCornerRadius(param0: number): void;
						public performShow(): void;
						public setSubtitle(param0: string): void;
						public createFabDefaultXAnimation(param0: number, param1: java.util.List<globalAndroid.animation.Animator>): void;
						public getFabAnimationMode(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getFabCradleMargin(): number;
						public getBackgroundTint(): globalAndroid.content.res.ColorStateList;
						public setFabAnimationMode(param0: number): void;
						public setCradleVerticalOffset(param0: number): void;
						public performHide(): void;
						public setBackgroundTint(param0: globalAndroid.content.res.ColorStateList): void;
						public getFabAlignmentMode(): number;
						public setFabCradleMargin(param0: number): void;
						public setFabAlignmentModeAndReplaceMenu(param0: number, param1: number): void;
						public setTitle(param0: string): void;
						public getFabCradleRoundedCornerRadius(): number;
						public setHideOnScroll(param0: boolean): void;
						public replaceMenu(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getCradleVerticalOffset(): number;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					}
					export module BottomAppBar {
						export class AnimationListener {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.AnimationListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$AnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAnimationStart(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
								onAnimationEnd(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
							});
							public constructor();
							public onAnimationEnd(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
							public onAnimationStart(param0: com.google.android.material.bottomappbar.BottomAppBar): void;
						}
						export class Behavior extends com.google.android.material.behavior.HideBottomViewOnScrollBehavior<com.google.android.material.bottomappbar.BottomAppBar> {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.Behavior>;
							public constructor();
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.bottomappbar.BottomAppBar, param2: number): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.bottomappbar.BottomAppBar, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number, param5: number): boolean;
							public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number, param5: number): boolean;
						}
						export class FabAlignmentMode {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.FabAlignmentMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$FabAlignmentMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class FabAnimationMode {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.FabAnimationMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomappbar.BottomAppBar$FabAnimationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBar.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomappbar.BottomAppBar.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcelable);
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomappbar {
					export class BottomAppBarTopEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
						public static class: java.lang.Class<com.google.android.material.bottomappbar.BottomAppBarTopEdgeTreatment>;
						public setFabDiameter(param0: number): void;
						public constructor();
						public getHorizontalOffset(): number;
						/** @deprecated */
						public getEdgePath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getEdgePath(param0: number, param1: number, param2: number, param3: com.google.android.material.shape.ShapePath): void;
						public getFabDiameter(): number;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationItemView {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationItemView>;
						public static INVALID_ITEM_POSITION: number;
						public getItemPosition(): number;
						public constructor(param0: globalAndroid.content.Context);
						public setTextAppearanceInactive(param0: number): void;
						public showsIcon(): boolean;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public setLabelVisibilityMode(param0: number): void;
						public prefersCondensedTitle(): boolean;
						public setIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setTextAppearanceActive(param0: number): void;
						public onCreateDrawableState(param0: number): androidNative.Array<number>;
						public setIconSize(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setChecked(param0: boolean): void;
						public setTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemPosition(param0: number): void;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
						public setEnabled(param0: boolean): void;
						public setTitle(param0: string): void;
						public setShortcut(param0: boolean, param1: string): void;
						public setShifting(param0: boolean): void;
						public setItemBackground(param0: number): void;
						public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setCheckable(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationMenu {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationMenu>;
						public static MAX_ITEM_COUNT: number;
						public constructor(param0: globalAndroid.content.Context);
						public addSubMenu(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.SubMenu;
						public addInternal(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.MenuItem;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationMenuView {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationMenuView>;
						public setItemBackgroundRes(param0: number): void;
						public isItemHorizontalTranslationEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						/** @deprecated */
						public getItemBackgroundRes(): number;
						public setItemHorizontalTranslationEnabled(param0: boolean): void;
						public buildMenuView(): void;
						public setLabelVisibilityMode(param0: number): void;
						public getItemTextAppearanceInactive(): number;
						public getSelectedItemId(): number;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setPresenter(param0: com.google.android.material.bottomnavigation.BottomNavigationPresenter): void;
						public getItemTextColor(): globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public getIconTintList(): globalAndroid.content.res.ColorStateList;
						public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						public getItemIconSize(): number;
						public updateMenuView(): void;
						public getLabelVisibilityMode(): number;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
						public setItemIconSize(param0: number): void;
						public createDefaultColorStateList(param0: number): globalAndroid.content.res.ColorStateList;
						public setItemOnTouchListener(param0: number, param1: globalAndroid.view.View.OnTouchListener): void;
						public getWindowAnimations(): number;
						public setItemTextAppearanceActive(param0: number): void;
						public getItemTextAppearanceActive(): number;
						public setItemTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextAppearanceInactive(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationPresenter {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationPresenter>;
						public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						public constructor();
						public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
						public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
						public flagActionItems(): boolean;
						public setBottomNavigationMenuView(param0: com.google.android.material.bottomnavigation.BottomNavigationMenuView): void;
						public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						public setId(param0: number): void;
						public getId(): number;
						public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
						public setUpdateSuspended(param0: boolean): void;
						public updateMenuView(param0: boolean): void;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					}
					export module BottomNavigationPresenter {
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationPresenter.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomnavigation.BottomNavigationPresenter.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class BottomNavigationView {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView>;
						public isItemHorizontalTranslationEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public getItemRippleColor(): globalAndroid.content.res.ColorStateList;
						public onAttachedToWindow(): void;
						public setOnNavigationItemSelectedListener(param0: com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener): void;
						public setItemHorizontalTranslationEnabled(param0: boolean): void;
						public setElevation(param0: number): void;
						public setLabelVisibilityMode(param0: number): void;
						public getSelectedItemId(): number;
						public getItemTextAppearanceInactive(): number;
						public getItemIconTintList(): globalAndroid.content.res.ColorStateList;
						public getOrCreateBadge(param0: number): com.google.android.material.badge.BadgeDrawable;
						public setSelectedItemId(param0: number): void;
						public getItemTextColor(): globalAndroid.content.res.ColorStateList;
						public removeBadge(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getMaxItemCount(): number;
						public setItemBackgroundResource(param0: number): void;
						public getBadge(param0: number): com.google.android.material.badge.BadgeDrawable;
						public getItemIconSize(): number;
						public getMenu(): globalAndroid.view.Menu;
						public inflateMenu(param0: number): void;
						public getLabelVisibilityMode(): number;
						public setItemIconSizeRes(param0: number): void;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setOnNavigationItemReselectedListener(param0: com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener): void;
						/** @deprecated */
						public getItemBackgroundResource(): number;
						public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
						public setItemIconSize(param0: number): void;
						public setItemOnTouchListener(param0: number, param1: globalAndroid.view.View.OnTouchListener): void;
						public setItemTextAppearanceActive(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public getItemTextAppearanceActive(): number;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public setItemIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextAppearanceInactive(param0: number): void;
					}
					export module BottomNavigationView {
						export class OnNavigationItemReselectedListener {
							public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemReselectedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomnavigation.BottomNavigationView$OnNavigationItemReselectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onNavigationItemReselected(param0: globalAndroid.view.MenuItem): void;
							});
							public constructor();
							public onNavigationItemReselected(param0: globalAndroid.view.MenuItem): void;
						}
						export class OnNavigationItemSelectedListener {
							public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView.OnNavigationItemSelectedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomnavigation.BottomNavigationView$OnNavigationItemSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							});
							public constructor();
							public onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.bottomnavigation.BottomNavigationView.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomnavigation.BottomNavigationView.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcelable);
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomnavigation {
					export class LabelVisibilityMode {
						public static class: java.lang.Class<com.google.android.material.bottomnavigation.LabelVisibilityMode>;
						/**
						 * Constructs a new instance of the com.google.android.material.bottomnavigation.LabelVisibilityMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static LABEL_VISIBILITY_AUTO: number;
						public static LABEL_VISIBILITY_LABELED: number;
						public static LABEL_VISIBILITY_SELECTED: number;
						public static LABEL_VISIBILITY_UNLABELED: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomsheet {
					export class BottomSheetBehavior<V>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
						public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior<any>>;
						public static STATE_DRAGGING: number;
						public static STATE_SETTLING: number;
						public static STATE_EXPANDED: number;
						public static STATE_COLLAPSED: number;
						public static STATE_HIDDEN: number;
						public static STATE_HALF_EXPANDED: number;
						public static PEEK_HEIGHT_AUTO: number;
						public static SAVE_PEEK_HEIGHT: number;
						public static SAVE_FIT_TO_CONTENTS: number;
						public static SAVE_HIDEABLE: number;
						public static SAVE_SKIP_COLLAPSED: number;
						public static SAVE_ALL: number;
						public static SAVE_NONE: number;
						public static from(param0: globalAndroid.view.View): com.google.android.material.bottomsheet.BottomSheetBehavior<any>;
						public onAttachedToLayoutParams(param0: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
						public setPeekHeight(param0: number): void;
						public onRestoreInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.os.Parcelable): void;
						public onSaveInstanceState(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any): globalAndroid.os.Parcelable;
						public setSaveFlags(param0: number): void;
						/** @deprecated */
						public setBottomSheetCallback(param0: com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback): void;
						public disableShapeAnimations(): void;
						public onDetachedFromLayoutParams(): void;
						public getSaveFlags(): number;
						public removeBottomSheetCallback(param0: com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback): void;
						public setHideable(param0: boolean): void;
						public setFitToContents(param0: boolean): void;
						public getHalfExpandedRatio(): number;
						public onNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: number, param6: number, param7: number, param8: androidNative.Array<number>): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public addBottomSheetCallback(param0: com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback): void;
						public isFitToContents(): boolean;
						public getSkipCollapsed(): boolean;
						public constructor();
						public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: number): boolean;
						public setUpdateImportantForAccessibilityOnSiblings(param0: boolean): void;
						public isGestureInsetBottomIgnored(): boolean;
						public getExpandedOffset(): number;
						public onNestedPreScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number, param5: androidNative.Array<number>, param6: number): void;
						public onStopNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number): void;
						public setHalfExpandedRatio(param0: number): void;
						public isHideable(): boolean;
						public onNestedPreFling(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: number, param4: number): boolean;
						public onStartNestedScroll(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: number, param5: number): boolean;
						public setState(param0: number): void;
						public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public setExpandedOffset(param0: number): void;
						public setGestureInsetBottomIgnored(param0: boolean): void;
						public getState(): number;
						public setDraggable(param0: boolean): void;
						public setPeekHeight(param0: number, param1: boolean): void;
						public getPeekHeight(): number;
						public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						public setSkipCollapsed(param0: boolean): void;
						public isDraggable(): boolean;
					}
					export module BottomSheetBehavior {
						export abstract class BottomSheetCallback {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback>;
							public constructor();
							public onSlide(param0: globalAndroid.view.View, param1: number): void;
							public onStateChanged(param0: globalAndroid.view.View, param1: number): void;
						}
						export class SaveFlags {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.SaveFlags>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomsheet.BottomSheetBehavior$SaveFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.bottomsheet.BottomSheetBehavior.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcelable, param1: com.google.android.material.bottomsheet.BottomSheetBehavior<any>);
							public constructor(param0: globalAndroid.os.Parcel);
							/** @deprecated */
							public constructor(param0: globalAndroid.os.Parcelable, param1: number);
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
						}
						export class SettleRunnable {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.SettleRunnable>;
							public run(): void;
						}
						export class State {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetBehavior.State>;
							/**
							 * Constructs a new instance of the com.google.android.material.bottomsheet.BottomSheetBehavior$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomsheet {
					export class BottomSheetDialog {
						public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDialog>;
						public setCanceledOnTouchOutside(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public setDismissWithAnimation(param0: boolean): void;
						public cancel(): void;
						public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
						public getDismissWithAnimation(): boolean;
						public setContentView(param0: globalAndroid.view.View): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public getBehavior(): com.google.android.material.bottomsheet.BottomSheetBehavior<globalAndroid.widget.FrameLayout>;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public setContentView(param0: number): void;
						public setCancelable(param0: boolean): void;
						public onStart(): void;
						public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module bottomsheet {
					export class BottomSheetDialogFragment {
						public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDialogFragment>;
						public constructor();
						public dismiss(): void;
						public dismissAllowingStateLoss(): void;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
					}
					export module BottomSheetDialogFragment {
						export class BottomSheetDismissCallback extends com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback {
							public static class: java.lang.Class<com.google.android.material.bottomsheet.BottomSheetDialogFragment.BottomSheetDismissCallback>;
							public onSlide(param0: globalAndroid.view.View, param1: number): void;
							public onStateChanged(param0: globalAndroid.view.View, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module button {
					export class MaterialButton implements com.google.android.material.shape.Shapeable {
						public static class: java.lang.Class<com.google.android.material.button.MaterialButton>;
						public static ICON_GRAVITY_START: number;
						public static ICON_GRAVITY_TEXT_START: number;
						public static ICON_GRAVITY_END: number;
						public static ICON_GRAVITY_TEXT_END: number;
						public static ICON_GRAVITY_TOP: number;
						public static ICON_GRAVITY_TEXT_TOP: number;
						public getIconSize(): number;
						public getInsetTop(): number;
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.content.Context);
						public setBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setIconPadding(param0: number): void;
						public getIcon(): globalAndroid.graphics.drawable.Drawable;
						public performClick(): boolean;
						public setElevation(param0: number): void;
						public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setRippleColorResource(param0: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setIconGravity(param0: number): void;
						public addOnCheckedChangeListener(param0: com.google.android.material.button.MaterialButton.OnCheckedChangeListener): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public setStrokeWidthResource(param0: number): void;
						public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setBackgroundColor(param0: number): void;
						public onCreateDrawableState(param0: number): androidNative.Array<number>;
						public getInsetBottom(): number;
						public setChecked(param0: boolean): void;
						public getIconGravity(): number;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setCornerRadiusResource(param0: number): void;
						public getRippleColor(): globalAndroid.content.res.ColorStateList;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setStrokeWidth(param0: number): void;
						public getIconPadding(): number;
						public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public toggle(): void;
						public setCheckable(param0: boolean): void;
						public setStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getCornerRadius(): number;
						public onAttachedToWindow(): void;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public setIconTintResource(param0: number): void;
						public clearOnCheckedChangeListeners(): void;
						public getStrokeColor(): globalAndroid.content.res.ColorStateList;
						public isCheckable(): boolean;
						public setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getStrokeWidth(): number;
						public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public isChecked(): boolean;
						public setPressed(param0: boolean): void;
						public getBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public getIconTint(): globalAndroid.content.res.ColorStateList;
						public setIconSize(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setIconResource(param0: number): void;
						public setBackgroundResource(param0: number): void;
						public setStrokeColorResource(param0: number): void;
						public setInsetTop(param0: number): void;
						public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						public removeOnCheckedChangeListener(param0: com.google.android.material.button.MaterialButton.OnCheckedChangeListener): void;
						public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public getBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setCornerRadius(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setInsetBottom(param0: number): void;
						public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					}
					export module MaterialButton {
						export class IconGravity {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButton.IconGravity>;
							/**
							 * Constructs a new instance of the com.google.android.material.button.MaterialButton$IconGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class OnCheckedChangeListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButton.OnCheckedChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.button.MaterialButton$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCheckedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
							});
							public constructor();
							public onCheckedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
						}
						export class OnPressedChangeListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButton.OnPressedChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.button.MaterialButton$OnPressedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPressedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
							});
							public constructor();
							public onPressedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButton.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.button.MaterialButton.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcelable);
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module button {
					export class MaterialButtonHelper {
						public static class: java.lang.Class<com.google.android.material.button.MaterialButtonHelper>;
						public getInsetTop(): number;
						public setInsetBottom(param0: number): void;
						public setInsetTop(param0: number): void;
						public getMaskDrawable(): com.google.android.material.shape.Shapeable;
						public getInsetBottom(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module button {
					export class MaterialButtonToggleGroup {
						public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup>;
						public onViewRemoved(param0: globalAndroid.view.View): void;
						public clearOnButtonCheckedListeners(): void;
						public constructor(param0: globalAndroid.content.Context);
						public setSelectionRequired(param0: boolean): void;
						public addOnButtonCheckedListener(param0: com.google.android.material.button.MaterialButtonToggleGroup.OnButtonCheckedListener): void;
						public removeOnButtonCheckedListener(param0: com.google.android.material.button.MaterialButtonToggleGroup.OnButtonCheckedListener): void;
						public setSingleSelection(param0: boolean): void;
						public getAccessibilityClassName(): string;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public getCheckedButtonIds(): java.util.List<java.lang.Integer>;
						public onFinishInflate(): void;
						public getCheckedButtonId(): number;
						public setSingleSelection(param0: number): void;
						public getChildDrawingOrder(param0: number, param1: number): number;
						public clearChecked(): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public isSingleSelection(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public isSelectionRequired(): boolean;
						public uncheck(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public check(param0: number): void;
						public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
					}
					export module MaterialButtonToggleGroup {
						export class CheckedStateTracker extends com.google.android.material.button.MaterialButton.OnCheckedChangeListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.CheckedStateTracker>;
							public onCheckedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
						}
						export class CornerData {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.CornerData>;
							public static left(param0: com.google.android.material.button.MaterialButtonToggleGroup.CornerData): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
							public static end(param0: com.google.android.material.button.MaterialButtonToggleGroup.CornerData, param1: globalAndroid.view.View): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
							public static start(param0: com.google.android.material.button.MaterialButtonToggleGroup.CornerData, param1: globalAndroid.view.View): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
							public static right(param0: com.google.android.material.button.MaterialButtonToggleGroup.CornerData): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
							public static top(param0: com.google.android.material.button.MaterialButtonToggleGroup.CornerData): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
							public static bottom(param0: com.google.android.material.button.MaterialButtonToggleGroup.CornerData): com.google.android.material.button.MaterialButtonToggleGroup.CornerData;
						}
						export class OnButtonCheckedListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.OnButtonCheckedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.button.MaterialButtonToggleGroup$OnButtonCheckedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onButtonChecked(param0: com.google.android.material.button.MaterialButtonToggleGroup, param1: number, param2: boolean): void;
							});
							public constructor();
							public onButtonChecked(param0: com.google.android.material.button.MaterialButtonToggleGroup, param1: number, param2: boolean): void;
						}
						export class PressedStateTracker extends com.google.android.material.button.MaterialButton.OnPressedChangeListener {
							public static class: java.lang.Class<com.google.android.material.button.MaterialButtonToggleGroup.PressedStateTracker>;
							public onPressedChanged(param0: com.google.android.material.button.MaterialButton, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module canvas {
					export class CanvasCompat {
						public static class: java.lang.Class<com.google.android.material.canvas.CanvasCompat>;
						public static saveLayerAlpha(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: number, param4: number, param5: number): number;
						public static saveLayerAlpha(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.RectF, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module card {
					export class MaterialCardView implements com.google.android.material.shape.Shapeable {
						public static class: java.lang.Class<com.google.android.material.card.MaterialCardView>;
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCheckedIconTint(): globalAndroid.content.res.ColorStateList;
						public getRadius(): number;
						public getCheckedIcon(): globalAndroid.graphics.drawable.Drawable;
						public setRippleColorResource(param0: number): void;
						public isDragged(): boolean;
						public getContentPaddingTop(): number;
						public getProgress(): number;
						public onCreateDrawableState(param0: number): androidNative.Array<number>;
						public onMeasure(param0: number, param1: number): void;
						public setCardBackgroundColor(param0: number): void;
						public setChecked(param0: boolean): void;
						public setCheckedIconSize(param0: number): void;
						public setClickable(param0: boolean): void;
						public setCheckedIconMargin(param0: number): void;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public getCardBackgroundColor(): globalAndroid.content.res.ColorStateList;
						public setCheckedIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getContentPaddingBottom(): number;
						public setPreventCornerOverlap(param0: boolean): void;
						public getRippleColor(): globalAndroid.content.res.ColorStateList;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setStrokeWidth(param0: number): void;
						public setRadius(param0: number): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public toggle(): void;
						public setCheckedIconResource(param0: number): void;
						public getContentPaddingLeft(): number;
						public setCheckable(param0: boolean): void;
						public setStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setCheckedIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public onAttachedToWindow(): void;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public setUseCompatPadding(param0: boolean): void;
						public setOnCheckedChangeListener(param0: com.google.android.material.card.MaterialCardView.OnCheckedChangeListener): void;
						public isCheckable(): boolean;
						public setProgress(param0: number): void;
						public getStrokeWidth(): number;
						public getCardForegroundColor(): globalAndroid.content.res.ColorStateList;
						public setContentPadding(param0: number, param1: number, param2: number, param3: number): void;
						public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public isChecked(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getStrokeColorStateList(): globalAndroid.content.res.ColorStateList;
						public setCardBackgroundColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setCardElevation(param0: number): void;
						public setCheckedIconSizeResource(param0: number): void;
						public setCheckedIconMarginResource(param0: number): void;
						public getContentPaddingRight(): number;
						public setDragged(param0: boolean): void;
						public setStrokeColor(param0: number): void;
						public setMaxCardElevation(param0: number): void;
						public getCheckedIconMargin(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public getStrokeColor(): number;
						public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setCardForegroundColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getCheckedIconSize(): number;
					}
					export module MaterialCardView {
						export class OnCheckedChangeListener {
							public static class: java.lang.Class<com.google.android.material.card.MaterialCardView.OnCheckedChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.card.MaterialCardView$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCheckedChanged(param0: com.google.android.material.card.MaterialCardView, param1: boolean): void;
							});
							public constructor();
							public onCheckedChanged(param0: com.google.android.material.card.MaterialCardView, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module card {
					export class MaterialCardViewHelper {
						public static class: java.lang.Class<com.google.android.material.card.MaterialCardViewHelper>;
						public constructor(param0: com.google.android.material.card.MaterialCardView, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module checkbox {
					export class MaterialCheckBox {
						public static class: java.lang.Class<com.google.android.material.checkbox.MaterialCheckBox>;
						public isUseMaterialThemeColors(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public onAttachedToWindow(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setUseMaterialThemeColors(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module chip {
					export class Chip implements com.google.android.material.chip.ChipDrawable.Delegate, com.google.android.material.shape.Shapeable {
						public static class: java.lang.Class<com.google.android.material.chip.Chip>;
						public setChipDrawable(param0: com.google.android.material.chip.ChipDrawable): void;
						public constructor(param0: globalAndroid.content.Context);
						/** @deprecated */
						public setChipCornerRadius(param0: number): void;
						/** @deprecated */
						public isCheckedIconEnabled(): boolean;
						public setBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public getFocusedRect(param0: globalAndroid.graphics.Rect): void;
						public getCheckedIconTint(): globalAndroid.content.res.ColorStateList;
						public setChipIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setHideMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public setCloseIconEndPadding(param0: number): void;
						public getChipIcon(): globalAndroid.graphics.drawable.Drawable;
						/** @deprecated */
						public setCloseIconEnabled(param0: boolean): void;
						public setBackgroundColor(param0: number): void;
						public getCloseIconStartPadding(): number;
						public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
						public setGravity(param0: number): void;
						public setCloseIconContentDescription(param0: string): void;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public setEnsureMinTouchTargetSize(param0: boolean): void;
						public setChecked(param0: boolean): void;
						public setCloseIconResource(param0: number): void;
						/** @deprecated */
						public setChipTextResource(param0: number): void;
						/** @deprecated */
						public setCloseIconEnabledResource(param0: number): void;
						public setShowMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public onChipDrawableSizeChange(): void;
						public setIconStartPadding(param0: number): void;
						public getTextEndPadding(): number;
						public setCheckedIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getChipBackgroundColor(): globalAndroid.content.res.ColorStateList;
						public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
						public setTextAppearance(param0: number): void;
						public setChipStartPaddingResource(param0: number): void;
						public setChipStartPadding(param0: number): void;
						public setCheckedIconTintResource(param0: number): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setCloseIconVisible(param0: number): void;
						public setCloseIconTintResource(param0: number): void;
						public shouldEnsureMinTouchTargetSize(): boolean;
						public setOnCloseIconClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public setIconEndPaddingResource(param0: number): void;
						public setCloseIconStartPaddingResource(param0: number): void;
						public setLayoutDirection(param0: number): void;
						public performCloseIconClick(): boolean;
						public getCloseIcon(): globalAndroid.graphics.drawable.Drawable;
						public onAttachedToWindow(): void;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public setChipIconSize(param0: number): void;
						/** @deprecated */
						public setChipIconEnabledResource(param0: number): void;
						public setCloseIconSizeResource(param0: number): void;
						public setCheckedIconVisible(param0: number): void;
						public setCheckableResource(param0: number): void;
						public getChipIconSize(): number;
						public getChipMinHeight(): number;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
						public setTextStartPaddingResource(param0: number): void;
						public setBackgroundResource(param0: number): void;
						public getChipCornerRadius(): number;
						public setChipStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setCloseIconSize(param0: number): void;
						public getCloseIconEndPadding(): number;
						public setMinLines(param0: number): void;
						public setCloseIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setIconStartPaddingResource(param0: number): void;
						public isCloseIconVisible(): boolean;
						public setTextEndPaddingResource(param0: number): void;
						public setChipIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setCompoundDrawables(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
						public setShowMotionSpecResource(param0: number): void;
						/** @deprecated */
						public setChipText(param0: string): void;
						public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setTextAppearanceResource(param0: number): void;
						public setTextEndPadding(param0: number): void;
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setCompoundDrawablesWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;
						public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
						/** @deprecated */
						public setChipCornerRadiusResource(param0: number): void;
						public setChipEndPaddingResource(param0: number): void;
						public setChipIconResource(param0: number): void;
						public setChipBackgroundColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getCheckedIcon(): globalAndroid.graphics.drawable.Drawable;
						public setElevation(param0: number): void;
						public setMaxLines(param0: number): void;
						public setRippleColorResource(param0: number): void;
						public setChipIconVisible(param0: number): void;
						public getBackgroundDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setIconEndPadding(param0: number): void;
						public setChipMinHeight(param0: number): void;
						public setChipIconVisible(param0: boolean): void;
						public getCloseIconTint(): globalAndroid.content.res.ColorStateList;
						public onCreateDrawableState(param0: number): androidNative.Array<number>;
						public setCompoundDrawablesRelative(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getChipIconTint(): globalAndroid.content.res.ColorStateList;
						public setTextStartPadding(param0: number): void;
						public setChipEndPadding(param0: number): void;
						public isCheckedIconVisible(): boolean;
						public getChipStrokeWidth(): number;
						/** @deprecated */
						public setChipIconEnabled(param0: boolean): void;
						public getCloseIconContentDescription(): string;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setChipIconTintResource(param0: number): void;
						public setChipStrokeWidthResource(param0: number): void;
						public getRippleColor(): globalAndroid.content.res.ColorStateList;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getTextStartPadding(): number;
						public setCheckedIconResource(param0: number): void;
						public setCheckable(param0: boolean): void;
						public getChipEndPadding(): number;
						public setCheckedIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setChipStrokeColorResource(param0: number): void;
						public setCloseIconStartPadding(param0: number): void;
						public ensureAccessibleTouchTarget(param0: number): boolean;
						public setTextAppearance(param0: com.google.android.material.resources.TextAppearance): void;
						public setEllipsize(param0: globalAndroid.text.TextUtils.TruncateAt): void;
						public dispatchHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
						/** @deprecated */
						public isCloseIconEnabled(): boolean;
						public getCloseIconSize(): number;
						public getEllipsize(): globalAndroid.text.TextUtils.TruncateAt;
						public setLines(param0: number): void;
						public getChipStrokeColor(): globalAndroid.content.res.ColorStateList;
						public isCheckable(): boolean;
						public setCloseIconEndPaddingResource(param0: number): void;
						public drawableStateChanged(): void;
						public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
						public getIconEndPadding(): number;
						public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
						/** @deprecated */
						public setCheckedIconEnabledResource(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onRtlPropertiesChanged(param0: number): void;
						public setChipMinHeightResource(param0: number): void;
						public getChipStartPadding(): number;
						public onFocusChanged(param0: boolean, param1: number, param2: globalAndroid.graphics.Rect): void;
						/** @deprecated */
						public isChipIconEnabled(): boolean;
						public setChipBackgroundColorResource(param0: number): void;
						public setMaxWidth(param0: number): void;
						public setChipStrokeWidth(param0: number): void;
						/** @deprecated */
						public setCheckedIconEnabled(param0: boolean): void;
						public setCompoundDrawablesWithIntrinsicBounds(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable): void;
						public setCheckedIconVisible(param0: boolean): void;
						public setSingleLine(param0: boolean): void;
						public onResolvePointerIcon(param0: globalAndroid.view.MotionEvent, param1: number): any;
						public setHideMotionSpecResource(param0: number): void;
						public setText(param0: string, param1: globalAndroid.widget.TextView.BufferType): void;
						public setCloseIconVisible(param0: boolean): void;
						public getIconStartPadding(): number;
						public setChipIconSizeResource(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getChipDrawable(): globalAndroid.graphics.drawable.Drawable;
						/** @deprecated */
						public getChipText(): string;
						public isChipIconVisible(): boolean;
						public setCloseIconTint(param0: globalAndroid.content.res.ColorStateList): void;
					}
					export module Chip {
						export class ChipTouchHelper {
							public static class: java.lang.Class<com.google.android.material.chip.Chip.ChipTouchHelper>;
							public onVirtualViewKeyboardFocusChanged(param0: number, param1: boolean): void;
							public getVirtualViewAt(param0: number, param1: number): number;
							public onPopulateNodeForVirtualView(param0: number, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
							public onPopulateNodeForHost(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
							public getVisibleVirtualViews(param0: java.util.List<java.lang.Integer>): void;
							public onPerformActionForVirtualView(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module chip {
					export class ChipDrawable extends com.google.android.material.shape.MaterialShapeDrawable implements com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate {
						public static class: java.lang.Class<com.google.android.material.chip.ChipDrawable>;
						public onSizeChange(): void;
						public onLevelChange(param0: number): boolean;
						/** @deprecated */
						public setChipCornerRadius(param0: number): void;
						/** @deprecated */
						public isCheckedIconEnabled(): boolean;
						public getCheckedIconTint(): globalAndroid.content.res.ColorStateList;
						public setChipIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setHideMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public setCloseIconEndPadding(param0: number): void;
						public getChipIcon(): globalAndroid.graphics.drawable.Drawable;
						public getMaxWidth(): number;
						/** @deprecated */
						public setCloseIconEnabled(param0: boolean): void;
						public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getCloseIconStartPadding(): number;
						public setCloseIconContentDescription(param0: string): void;
						public setCloseIconResource(param0: number): void;
						/** @deprecated */
						public setCloseIconEnabledResource(param0: number): void;
						public setShowMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public setIconStartPadding(param0: number): void;
						public getTextEndPadding(): number;
						public onStateChange(param0: androidNative.Array<number>): boolean;
						public setCheckedIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getCloseIconTouchBounds(param0: globalAndroid.graphics.RectF): void;
						public onTextSizeChange(): void;
						public setAlpha(param0: number): void;
						public getOutline(param0: any): void;
						public getChipBackgroundColor(): globalAndroid.content.res.ColorStateList;
						public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
						public setChipStartPaddingResource(param0: number): void;
						public setChipStartPadding(param0: number): void;
						public setCheckedIconTintResource(param0: number): void;
						public setCloseIconVisible(param0: number): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setCloseIconTintResource(param0: number): void;
						public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): com.google.android.material.chip.ChipDrawable;
						public setIconEndPaddingResource(param0: number): void;
						public setCloseIconStartPaddingResource(param0: number): void;
						public getCloseIcon(): globalAndroid.graphics.drawable.Drawable;
						public getText(): string;
						public getChipTouchBounds(param0: globalAndroid.graphics.RectF): void;
						public getUseCompatRipple(): boolean;
						public setChipIconSize(param0: number): void;
						public getCloseIconState(): androidNative.Array<number>;
						/** @deprecated */
						public setChipIconEnabledResource(param0: number): void;
						public setCloseIconSizeResource(param0: number): void;
						public setCheckedIconVisible(param0: number): void;
						public setCheckableResource(param0: number): void;
						public getChipIconSize(): number;
						public getChipMinHeight(): number;
						public setTextStartPaddingResource(param0: number): void;
						public getIntrinsicWidth(): number;
						public getChipCornerRadius(): number;
						public setChipStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getOpacity(): number;
						public setDelegate(param0: com.google.android.material.chip.ChipDrawable.Delegate): void;
						public setCloseIconSize(param0: number): void;
						public getCloseIconEndPadding(): number;
						public setCloseIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setIconStartPaddingResource(param0: number): void;
						public isCloseIconVisible(): boolean;
						public setTextEndPaddingResource(param0: number): void;
						public setChipIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setShowMotionSpecResource(param0: number): void;
						public setTextAppearanceResource(param0: number): void;
						public setTextEndPadding(param0: number): void;
						public setUseCompatRipple(param0: boolean): void;
						public setTextSize(param0: number): void;
						/** @deprecated */
						public setChipCornerRadiusResource(param0: number): void;
						public onLayoutDirectionChanged(param0: number): boolean;
						public setChipEndPaddingResource(param0: number): void;
						public setChipIconResource(param0: number): void;
						public setChipBackgroundColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getCheckedIcon(): globalAndroid.graphics.drawable.Drawable;
						public setRippleColorResource(param0: number): void;
						public setChipIconVisible(param0: number): void;
						public isStateful(): boolean;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public setIconEndPadding(param0: number): void;
						public setChipMinHeight(param0: number): void;
						public setChipIconVisible(param0: boolean): void;
						public getCloseIconTint(): globalAndroid.content.res.ColorStateList;
						public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public getChipIconTint(): globalAndroid.content.res.ColorStateList;
						public getColorFilter(): globalAndroid.graphics.ColorFilter;
						public setTextStartPadding(param0: number): void;
						public setChipEndPadding(param0: number): void;
						public isCheckedIconVisible(): boolean;
						public getChipStrokeWidth(): number;
						/** @deprecated */
						public setChipIconEnabled(param0: boolean): void;
						public getCloseIconContentDescription(): string;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setChipIconTintResource(param0: number): void;
						public setChipStrokeWidthResource(param0: number): void;
						public getRippleColor(): globalAndroid.content.res.ColorStateList;
						public setCloseIconState(param0: androidNative.Array<number>): boolean;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getTextStartPadding(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCheckedIconResource(param0: number): void;
						public setCheckable(param0: boolean): void;
						public getChipEndPadding(): number;
						public setCheckedIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public static createFromResource(param0: globalAndroid.content.Context, param1: number): com.google.android.material.chip.ChipDrawable;
						public setChipStrokeColorResource(param0: number): void;
						public setCloseIconStartPadding(param0: number): void;
						public setTextAppearance(param0: com.google.android.material.resources.TextAppearance): void;
						public getTextAppearance(): com.google.android.material.resources.TextAppearance;
						public setEllipsize(param0: globalAndroid.text.TextUtils.TruncateAt): void;
						/** @deprecated */
						public isCloseIconEnabled(): boolean;
						public getCloseIconSize(): number;
						public getEllipsize(): globalAndroid.text.TextUtils.TruncateAt;
						public getAlpha(): number;
						public getChipStrokeColor(): globalAndroid.content.res.ColorStateList;
						public isCheckable(): boolean;
						public isCloseIconStateful(): boolean;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setCloseIconEndPaddingResource(param0: number): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
						public getIconEndPadding(): number;
						public getState(): androidNative.Array<number>;
						/** @deprecated */
						public setCheckedIconEnabledResource(param0: number): void;
						public setChipMinHeightResource(param0: number): void;
						public getChipStartPadding(): number;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						/** @deprecated */
						public isChipIconEnabled(): boolean;
						public getIntrinsicHeight(): number;
						public setChipBackgroundColorResource(param0: number): void;
						public setMaxWidth(param0: number): void;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public setChipStrokeWidth(param0: number): void;
						public setTextResource(param0: number): void;
						/** @deprecated */
						public setCheckedIconEnabled(param0: boolean): void;
						public setCheckedIconVisible(param0: boolean): void;
						public setHideMotionSpecResource(param0: number): void;
						public setCloseIconVisible(param0: boolean): void;
						public getIconStartPadding(): number;
						public setText(param0: string): void;
						public setChipIconSizeResource(param0: number): void;
						public isChipIconVisible(): boolean;
						public setCloseIconTint(param0: globalAndroid.content.res.ColorStateList): void;
					}
					export module ChipDrawable {
						export class Delegate {
							public static class: java.lang.Class<com.google.android.material.chip.ChipDrawable.Delegate>;
							/**
							 * Constructs a new instance of the com.google.android.material.chip.ChipDrawable$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onChipDrawableSizeChange(): void;
							});
							public constructor();
							public onChipDrawableSizeChange(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module chip {
					export class ChipGroup extends com.google.android.material.internal.FlowLayout {
						public static class: java.lang.Class<com.google.android.material.chip.ChipGroup>;
						public constructor(param0: globalAndroid.content.Context);
						public setChipSpacingHorizontalResource(param0: number): void;
						public getChipSpacingVertical(): number;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public onFinishInflate(): void;
						public setSingleSelection(param0: number): void;
						/** @deprecated */
						public setDividerDrawableVertical(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setChipSpacingHorizontal(param0: number): void;
						public isSingleLine(): boolean;
						public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
						public setOnCheckedChangeListener(param0: com.google.android.material.chip.ChipGroup.OnCheckedChangeListener): void;
						public setSingleLine(param0: number): void;
						public setChipSpacingResource(param0: number): void;
						public setChipSpacingVerticalResource(param0: number): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public getCheckedChipId(): number;
						public setSelectionRequired(param0: boolean): void;
						public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
						public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
						/** @deprecated */
						public setFlexWrap(param0: number): void;
						public setChipSpacingVertical(param0: number): void;
						public setSingleSelection(param0: boolean): void;
						/** @deprecated */
						public setDividerDrawableHorizontal(param0: globalAndroid.graphics.drawable.Drawable): void;
						/** @deprecated */
						public setShowDividerHorizontal(param0: number): void;
						public getChipSpacingHorizontal(): number;
						public clearCheck(): void;
						public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
						public setSingleLine(param0: boolean): void;
						public setOnHierarchyChangeListener(param0: globalAndroid.view.ViewGroup.OnHierarchyChangeListener): void;
						/** @deprecated */
						public setShowDividerVertical(param0: number): void;
						public isSingleSelection(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public isSelectionRequired(): boolean;
						public getCheckedChipIds(): java.util.List<java.lang.Integer>;
						public check(param0: number): void;
						public setChipSpacing(param0: number): void;
					}
					export module ChipGroup {
						export class CheckedStateTracker {
							public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.CheckedStateTracker>;
							public onCheckedChanged(param0: globalAndroid.widget.CompoundButton, param1: boolean): void;
						}
						export class LayoutParams {
							public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.LayoutParams>;
							public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
							public constructor(param0: number, param1: number);
							public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
						export class OnCheckedChangeListener {
							public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.OnCheckedChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.chip.ChipGroup$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCheckedChanged(param0: com.google.android.material.chip.ChipGroup, param1: number): void;
							});
							public constructor();
							public onCheckedChanged(param0: com.google.android.material.chip.ChipGroup, param1: number): void;
						}
						export class PassThroughHierarchyChangeListener {
							public static class: java.lang.Class<com.google.android.material.chip.ChipGroup.PassThroughHierarchyChangeListener>;
							public onChildViewAdded(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
							public onChildViewRemoved(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealCompat {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealCompat>;
						public static createCircularReveal(param0: com.google.android.material.circularreveal.CircularRevealWidget, param1: number, param2: number, param3: number): globalAndroid.animation.Animator;
						public static createCircularRevealListener(param0: com.google.android.material.circularreveal.CircularRevealWidget): globalAndroid.animation.Animator.AnimatorListener;
						public static createCircularReveal(param0: com.google.android.material.circularreveal.CircularRevealWidget, param1: number, param2: number, param3: number, param4: number): globalAndroid.animation.Animator;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealFrameLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealFrameLayout>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealGridLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealGridLayout>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealHelper {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealHelper>;
						public static BITMAP_SHADER: number;
						public static CLIP_PATH: number;
						public static REVEAL_ANIMATOR: number;
						public static STRATEGY: number;
						public destroyCircularRevealCache(): void;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public getCircularRevealScrimColor(): number;
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public constructor(param0: com.google.android.material.circularreveal.CircularRevealHelper.Delegate);
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
					export module CircularRevealHelper {
						export class Delegate {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealHelper.Delegate>;
							/**
							 * Constructs a new instance of the com.google.android.material.circularreveal.CircularRevealHelper$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								actualDraw(param0: globalAndroid.graphics.Canvas): void;
								actualIsOpaque(): boolean;
							});
							public constructor();
							public actualDraw(param0: globalAndroid.graphics.Canvas): void;
							public actualIsOpaque(): boolean;
						}
						export class Strategy {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealHelper.Strategy>;
							/**
							 * Constructs a new instance of the com.google.android.material.circularreveal.CircularRevealHelper$Strategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealLinearLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealLinearLayout>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealRelativeLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealRelativeLayout>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export class CircularRevealWidget extends com.google.android.material.circularreveal.CircularRevealHelper.Delegate {
						public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget>;
						/**
						 * Constructs a new instance of the com.google.android.material.circularreveal.CircularRevealWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							draw(param0: globalAndroid.graphics.Canvas): void;
							isOpaque(): boolean;
							buildCircularRevealCache(): void;
							destroyCircularRevealCache(): void;
							getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
							setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
							getCircularRevealScrimColor(): number;
							setCircularRevealScrimColor(param0: number): void;
							getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
							setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							actualDraw(param0: globalAndroid.graphics.Canvas): void;
							actualIsOpaque(): boolean;
						});
						public constructor();
						public destroyCircularRevealCache(): void;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public actualDraw(param0: globalAndroid.graphics.Canvas): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public actualIsOpaque(): boolean;
						public getCircularRevealScrimColor(): number;
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
					export module CircularRevealWidget {
						export class CircularRevealEvaluator extends globalAndroid.animation.TypeEvaluator<com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo> {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.CircularRevealEvaluator>;
							public static CIRCULAR_REVEAL: globalAndroid.animation.TypeEvaluator<com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo>;
							public constructor();
							public evaluate(param0: number, param1: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo, param2: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						}
						export class CircularRevealProperty extends globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget,com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo> {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.CircularRevealProperty>;
							public static CIRCULAR_REVEAL: globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget,com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo>;
							public get(param0: com.google.android.material.circularreveal.CircularRevealWidget): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
							public set(param0: com.google.android.material.circularreveal.CircularRevealWidget, param1: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						}
						export class CircularRevealScrimColorProperty extends globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget,java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.CircularRevealScrimColorProperty>;
							public static CIRCULAR_REVEAL_SCRIM_COLOR: globalAndroid.util.Property<com.google.android.material.circularreveal.CircularRevealWidget,java.lang.Integer>;
							public get(param0: com.google.android.material.circularreveal.CircularRevealWidget): java.lang.Integer;
							public set(param0: com.google.android.material.circularreveal.CircularRevealWidget, param1: java.lang.Integer): void;
						}
						export class RevealInfo {
							public static class: java.lang.Class<com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo>;
							public static INVALID_RADIUS: number;
							public centerX: number;
							public centerY: number;
							public radius: number;
							public constructor(param0: number, param1: number, param2: number);
							public set(param0: number, param1: number, param2: number): void;
							public isInvalid(): boolean;
							public constructor(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo);
							public set(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export module cardview {
						export class CircularRevealCardView extends com.google.android.material.card.MaterialCardView implements com.google.android.material.circularreveal.CircularRevealWidget {
							public static class: java.lang.Class<com.google.android.material.circularreveal.cardview.CircularRevealCardView>;
							public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public buildCircularRevealCache(): void;
							public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
							public setCircularRevealScrimColor(param0: number): void;
							public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
							public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public actualIsOpaque(): boolean;
							public getCircularRevealScrimColor(): number;
							public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
							public isOpaque(): boolean;
							public destroyCircularRevealCache(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public actualDraw(param0: globalAndroid.graphics.Canvas): void;
							public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module circularreveal {
					export module coordinatorlayout {
						export class CircularRevealCoordinatorLayout implements com.google.android.material.circularreveal.CircularRevealWidget {
							public static class: java.lang.Class<com.google.android.material.circularreveal.coordinatorlayout.CircularRevealCoordinatorLayout>;
							public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public buildCircularRevealCache(): void;
							public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
							public setCircularRevealScrimColor(param0: number): void;
							public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public actualIsOpaque(): boolean;
							public getCircularRevealScrimColor(): number;
							public isOpaque(): boolean;
							public destroyCircularRevealCache(): void;
							public actualDraw(param0: globalAndroid.graphics.Canvas): void;
							public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module color {
					export class MaterialColors {
						public static class: java.lang.Class<com.google.android.material.color.MaterialColors>;
						public static ALPHA_FULL: number;
						public static ALPHA_MEDIUM: number;
						public static ALPHA_DISABLED: number;
						public static ALPHA_LOW: number;
						public static ALPHA_DISABLED_LOW: number;
						public static getColor(param0: globalAndroid.content.Context, param1: number, param2: number): number;
						public static getColor(param0: globalAndroid.view.View, param1: number, param2: number): number;
						public static layer(param0: number, param1: number, param2: number): number;
						public static layer(param0: number, param1: number): number;
						public static layer(param0: globalAndroid.view.View, param1: number, param2: number): number;
						public static getColor(param0: globalAndroid.view.View, param1: number): number;
						public static layer(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): number;
						public static getColor(param0: globalAndroid.content.Context, param1: number, param2: string): number;
						public static compositeARGBWithAlpha(param0: number, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class CalendarConstraints {
						public static class: java.lang.Class<com.google.android.material.datepicker.CalendarConstraints>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.CalendarConstraints>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getDateValidator(): com.google.android.material.datepicker.CalendarConstraints.DateValidator;
					}
					export module CalendarConstraints {
						export class Builder {
							public static class: java.lang.Class<com.google.android.material.datepicker.CalendarConstraints.Builder>;
							public constructor();
							public setEnd(param0: number): com.google.android.material.datepicker.CalendarConstraints.Builder;
							public build(): com.google.android.material.datepicker.CalendarConstraints;
							public setOpenAt(param0: number): com.google.android.material.datepicker.CalendarConstraints.Builder;
							public setStart(param0: number): com.google.android.material.datepicker.CalendarConstraints.Builder;
							public setValidator(param0: com.google.android.material.datepicker.CalendarConstraints.DateValidator): com.google.android.material.datepicker.CalendarConstraints.Builder;
						}
						export class DateValidator {
							public static class: java.lang.Class<com.google.android.material.datepicker.CalendarConstraints.DateValidator>;
							/**
							 * Constructs a new instance of the com.google.android.material.datepicker.CalendarConstraints$DateValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isValid(param0: number): boolean;
							});
							public constructor();
							public isValid(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class CalendarItemStyle {
						public static class: java.lang.Class<com.google.android.material.datepicker.CalendarItemStyle>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class CalendarStyle {
						public static class: java.lang.Class<com.google.android.material.datepicker.CalendarStyle>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class CompositeDateValidator extends com.google.android.material.datepicker.CalendarConstraints.DateValidator {
						public static class: java.lang.Class<com.google.android.material.datepicker.CompositeDateValidator>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.CompositeDateValidator>;
						public describeContents(): number;
						public isValid(param0: number): boolean;
						public static allOf(param0: java.util.List<com.google.android.material.datepicker.CalendarConstraints.DateValidator>): com.google.android.material.datepicker.CalendarConstraints.DateValidator;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static anyOf(param0: java.util.List<com.google.android.material.datepicker.CalendarConstraints.DateValidator>): com.google.android.material.datepicker.CalendarConstraints.DateValidator;
					}
					export module CompositeDateValidator {
						export class Operator {
							public static class: java.lang.Class<com.google.android.material.datepicker.CompositeDateValidator.Operator>;
							/**
							 * Constructs a new instance of the com.google.android.material.datepicker.CompositeDateValidator$Operator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isValid(param0: java.util.List<com.google.android.material.datepicker.CalendarConstraints.DateValidator>, param1: number): boolean;
								getId(): number;
							});
							public constructor();
							public getId(): number;
							public isValid(param0: java.util.List<com.google.android.material.datepicker.CalendarConstraints.DateValidator>, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export abstract class DateFormatTextWatcher extends com.google.android.material.internal.TextWatcherAdapter {
						public static class: java.lang.Class<com.google.android.material.datepicker.DateFormatTextWatcher>;
						public runValidation(param0: globalAndroid.view.View, param1: java.lang.Runnable): void;
						public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class DateSelector<S>  extends globalAndroid.os.Parcelable {
						public static class: java.lang.Class<com.google.android.material.datepicker.DateSelector<any>>;
						/**
						 * Constructs a new instance of the com.google.android.material.datepicker.DateSelector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getSelection(): any;
							isSelectionComplete(): boolean;
							setSelection(param0: any): void;
							select(param0: number): void;
							getSelectedDays(): java.util.Collection<java.lang.Long>;
							getSelectedRanges(): java.util.Collection<androidx.core.util.Pair<java.lang.Long,java.lang.Long>>;
							getSelectionDisplayString(param0: globalAndroid.content.Context): string;
							getDefaultTitleResId(): number;
							getDefaultThemeResId(param0: globalAndroid.content.Context): number;
							onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<any>): globalAndroid.view.View;
						});
						public constructor();
						public onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<any>): globalAndroid.view.View;
						public select(param0: number): void;
						public getDefaultThemeResId(param0: globalAndroid.content.Context): number;
						public getSelectionDisplayString(param0: globalAndroid.content.Context): string;
						public getDefaultTitleResId(): number;
						public getSelectedRanges(): java.util.Collection<androidx.core.util.Pair<java.lang.Long,java.lang.Long>>;
						public setSelection(param0: any): void;
						public getSelectedDays(): java.util.Collection<java.lang.Long>;
						public getSelection(): any;
						public isSelectionComplete(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class DateStrings {
						public static class: java.lang.Class<com.google.android.material.datepicker.DateStrings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class DateValidatorPointBackward extends com.google.android.material.datepicker.CalendarConstraints.DateValidator {
						public static class: java.lang.Class<com.google.android.material.datepicker.DateValidatorPointBackward>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.DateValidatorPointBackward>;
						public static now(): com.google.android.material.datepicker.DateValidatorPointBackward;
						public describeContents(): number;
						public static before(param0: number): com.google.android.material.datepicker.DateValidatorPointBackward;
						public isValid(param0: number): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class DateValidatorPointForward extends com.google.android.material.datepicker.CalendarConstraints.DateValidator {
						public static class: java.lang.Class<com.google.android.material.datepicker.DateValidatorPointForward>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.DateValidatorPointForward>;
						public static now(): com.google.android.material.datepicker.DateValidatorPointForward;
						public describeContents(): number;
						public isValid(param0: number): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static from(param0: number): com.google.android.material.datepicker.DateValidatorPointForward;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class DaysOfWeekAdapter {
						public static class: java.lang.Class<com.google.android.material.datepicker.DaysOfWeekAdapter>;
						public getItem(param0: number): java.lang.Integer;
						public constructor();
						public getItemId(param0: number): number;
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class MaterialCalendar<S>  extends com.google.android.material.datepicker.PickerFragment<any> {
						public static class: java.lang.Class<com.google.android.material.datepicker.MaterialCalendar<any>>;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public static newInstance(param0: com.google.android.material.datepicker.DateSelector<any>, param1: number, param2: com.google.android.material.datepicker.CalendarConstraints): com.google.android.material.datepicker.MaterialCalendar<any>;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public getDateSelector(): com.google.android.material.datepicker.DateSelector<any>;
						public addOnSelectionChangedListener(param0: com.google.android.material.datepicker.OnSelectionChangedListener<any>): boolean;
					}
					export module MaterialCalendar {
						export class CalendarSelector {
							public static class: java.lang.Class<com.google.android.material.datepicker.MaterialCalendar.CalendarSelector>;
							public static DAY: com.google.android.material.datepicker.MaterialCalendar.CalendarSelector;
							public static YEAR: com.google.android.material.datepicker.MaterialCalendar.CalendarSelector;
							public static values(): androidNative.Array<com.google.android.material.datepicker.MaterialCalendar.CalendarSelector>;
							public static valueOf(param0: string): com.google.android.material.datepicker.MaterialCalendar.CalendarSelector;
						}
						export class OnDayClickListener {
							public static class: java.lang.Class<com.google.android.material.datepicker.MaterialCalendar.OnDayClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.datepicker.MaterialCalendar$OnDayClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDayClick(param0: number): void;
							});
							public constructor();
							public onDayClick(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class MaterialCalendarGridView {
						public static class: java.lang.Class<com.google.android.material.datepicker.MaterialCalendarGridView>;
						public onFocusChanged(param0: boolean, param1: number, param2: globalAndroid.graphics.Rect): void;
						public constructor(param0: globalAndroid.content.Context);
						public getAdapter(): com.google.android.material.datepicker.MonthAdapter;
						public setAdapter(param0: globalAndroid.widget.ListAdapter): void;
						public onAttachedToWindow(): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public setSelection(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class MaterialDatePicker<S>  extends androidx.fragment.app.DialogFragment {
						public static class: java.lang.Class<com.google.android.material.datepicker.MaterialDatePicker<any>>;
						public static INPUT_MODE_CALENDAR: number;
						public static INPUT_MODE_TEXT: number;
						public addOnDismissListener(param0: globalAndroid.content.DialogInterface.OnDismissListener): boolean;
						public removeOnNegativeButtonClickListener(param0: globalAndroid.view.View.OnClickListener): boolean;
						public static todayInUtcMilliseconds(): number;
						public removeOnPositiveButtonClickListener(param0: com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener<any>): boolean;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static thisMonthInUtcMilliseconds(): number;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public getSelection(): any;
						public clearOnPositiveButtonClickListeners(): void;
						public constructor();
						public onDismiss(param0: globalAndroid.content.DialogInterface): void;
						public clearOnNegativeButtonClickListeners(): void;
						public addOnNegativeButtonClickListener(param0: globalAndroid.view.View.OnClickListener): boolean;
						public addOnCancelListener(param0: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public onStop(): void;
						public addOnPositiveButtonClickListener(param0: com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener<any>): boolean;
						public getHeaderText(): string;
						public removeOnDismissListener(param0: globalAndroid.content.DialogInterface.OnDismissListener): boolean;
						public removeOnCancelListener(param0: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public clearOnCancelListeners(): void;
						public onStart(): void;
						public clearOnDismissListeners(): void;
					}
					export module MaterialDatePicker {
						export class Builder<S>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.material.datepicker.MaterialDatePicker.Builder<any>>;
							public setTitleText(param0: string): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
							public build(): com.google.android.material.datepicker.MaterialDatePicker<S>;
							public setCalendarConstraints(param0: com.google.android.material.datepicker.CalendarConstraints): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
							public setTitleText(param0: number): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
							public setSelection(param0: S): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
							public static customDatePicker(param0: com.google.android.material.datepicker.DateSelector<any>): com.google.android.material.datepicker.MaterialDatePicker.Builder<any>;
							public static datePicker(): com.google.android.material.datepicker.MaterialDatePicker.Builder<java.lang.Long>;
							public setInputMode(param0: number): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
							public static dateRangePicker(): com.google.android.material.datepicker.MaterialDatePicker.Builder<androidx.core.util.Pair<java.lang.Long,java.lang.Long>>;
							public setTheme(param0: number): com.google.android.material.datepicker.MaterialDatePicker.Builder<S>;
						}
						export class InputMode {
							public static class: java.lang.Class<com.google.android.material.datepicker.MaterialDatePicker.InputMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.datepicker.MaterialDatePicker$InputMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class MaterialPickerOnPositiveButtonClickListener<S>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPositiveButtonClick(param0: S): void;
						});
						public constructor();
						public onPositiveButtonClick(param0: S): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class MaterialStyledDatePickerDialog {
						public static class: java.lang.Class<com.google.android.material.datepicker.MaterialStyledDatePickerDialog>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.app.DatePickerDialog.OnDateSetListener, param2: number, param3: number, param4: number);
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.app.DatePickerDialog.OnDateSetListener, param3: number, param4: number, param5: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class MaterialTextInputPicker<S>  extends com.google.android.material.datepicker.PickerFragment<any> {
						public static class: java.lang.Class<com.google.android.material.datepicker.MaterialTextInputPicker<any>>;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public getDateSelector(): com.google.android.material.datepicker.DateSelector<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class Month extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.datepicker.Month>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.Month>;
						public compareTo(param0: com.google.android.material.datepicker.Month): number;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class MonthAdapter {
						public static class: java.lang.Class<com.google.android.material.datepicker.MonthAdapter>;
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.widget.TextView;
						public getItemId(param0: number): number;
						public getItem(param0: number): java.lang.Long;
						public updateSelectedStates(param0: com.google.android.material.datepicker.MaterialCalendarGridView): void;
						public getCount(): number;
						public hasStableIds(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class MonthsPagerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.material.datepicker.MonthsPagerAdapter.ViewHolder> {
						public static class: java.lang.Class<com.google.android.material.datepicker.MonthsPagerAdapter>;
						public onBindViewHolder(param0: com.google.android.material.datepicker.MonthsPagerAdapter.ViewHolder, param1: number): void;
						public getItemId(param0: number): number;
						public getItemCount(): number;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.google.android.material.datepicker.MonthsPagerAdapter.ViewHolder;
					}
					export module MonthsPagerAdapter {
						export class ViewHolder {
							public static class: java.lang.Class<com.google.android.material.datepicker.MonthsPagerAdapter.ViewHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export abstract class OnSelectionChangedListener<S>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.datepicker.OnSelectionChangedListener<any>>;
						public onIncompleteSelectionChanged(): void;
						public constructor();
						public onSelectionChanged(param0: S): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export abstract class PickerFragment<S>  extends androidx.fragment.app.Fragment {
						public static class: java.lang.Class<com.google.android.material.datepicker.PickerFragment<any>>;
						public onSelectionChangedListeners: java.util.LinkedHashSet<com.google.android.material.datepicker.OnSelectionChangedListener<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class RangeDateSelector extends com.google.android.material.datepicker.DateSelector<androidx.core.util.Pair<java.lang.Long,java.lang.Long>> {
						public static class: java.lang.Class<com.google.android.material.datepicker.RangeDateSelector>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.RangeDateSelector>;
						public onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<any>): globalAndroid.view.View;
						public constructor();
						public getSelection(): androidx.core.util.Pair<java.lang.Long,java.lang.Long>;
						public describeContents(): number;
						public getSelectionDisplayString(param0: globalAndroid.content.Context): string;
						public getDefaultTitleResId(): number;
						public getSelectedDays(): java.util.Collection<java.lang.Long>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<androidx.core.util.Pair<java.lang.Long,java.lang.Long>>): globalAndroid.view.View;
						public select(param0: number): void;
						public getDefaultThemeResId(param0: globalAndroid.content.Context): number;
						public getSelectedRanges(): java.util.Collection<androidx.core.util.Pair<java.lang.Long,java.lang.Long>>;
						public setSelection(param0: androidx.core.util.Pair<java.lang.Long,java.lang.Long>): void;
						public setSelection(param0: any): void;
						public getSelection(): any;
						public isSelectionComplete(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class SingleDateSelector extends com.google.android.material.datepicker.DateSelector<java.lang.Long> {
						public static class: java.lang.Class<com.google.android.material.datepicker.SingleDateSelector>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.datepicker.SingleDateSelector>;
						public onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<any>): globalAndroid.view.View;
						public constructor();
						public describeContents(): number;
						public setSelection(param0: java.lang.Long): void;
						public getSelection(): java.lang.Long;
						public getSelectionDisplayString(param0: globalAndroid.content.Context): string;
						public getDefaultTitleResId(): number;
						public getSelectedDays(): java.util.Collection<java.lang.Long>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public select(param0: number): void;
						public getDefaultThemeResId(param0: globalAndroid.content.Context): number;
						public onCreateTextInputView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle, param3: com.google.android.material.datepicker.CalendarConstraints, param4: com.google.android.material.datepicker.OnSelectionChangedListener<java.lang.Long>): globalAndroid.view.View;
						public getSelectedRanges(): java.util.Collection<androidx.core.util.Pair<java.lang.Long,java.lang.Long>>;
						public setSelection(param0: any): void;
						public getSelection(): any;
						public isSelectionComplete(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class SmoothCalendarLayoutManager {
						public static class: java.lang.Class<com.google.android.material.datepicker.SmoothCalendarLayoutManager>;
						public smoothScrollToPosition(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class TimeSource {
						public static class: java.lang.Class<com.google.android.material.datepicker.TimeSource>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class UtcDates {
						public static class: java.lang.Class<com.google.android.material.datepicker.UtcDates>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module datepicker {
					export class YearGridAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.material.datepicker.YearGridAdapter.ViewHolder> {
						public static class: java.lang.Class<com.google.android.material.datepicker.YearGridAdapter>;
						public getItemCount(): number;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.google.android.material.datepicker.YearGridAdapter.ViewHolder;
						public onBindViewHolder(param0: com.google.android.material.datepicker.YearGridAdapter.ViewHolder, param1: number): void;
					}
					export module YearGridAdapter {
						export class ViewHolder {
							public static class: java.lang.Class<com.google.android.material.datepicker.YearGridAdapter.ViewHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module dialog {
					export class InsetDialogOnTouchListener {
						public static class: java.lang.Class<com.google.android.material.dialog.InsetDialogOnTouchListener>;
						public constructor(param0: globalAndroid.app.Dialog, param1: globalAndroid.graphics.Rect);
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module dialog {
					export class MaterialAlertDialogBuilder {
						public static class: java.lang.Class<com.google.android.material.dialog.MaterialAlertDialogBuilder>;
						public setAdapter(param0: globalAndroid.widget.ListAdapter, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackgroundInsetTop(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public constructor(param0: globalAndroid.content.Context);
						public setItems(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackground(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setView(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNeutralButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public getBackground(): globalAndroid.graphics.drawable.Drawable;
						public setTitle(param0: string): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setView(param0: globalAndroid.view.View): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMultiChoiceItems(param0: globalAndroid.database.Cursor, param1: string, param2: string, param3: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNegativeButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setCancelable(param0: boolean): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setSingleChoiceItems(param0: number, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setPositiveButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setPositiveButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setIcon(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setOnDismissListener(param0: globalAndroid.content.DialogInterface.OnDismissListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackgroundInsetEnd(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setCursor(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.DialogInterface.OnClickListener, param2: string): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setTitle(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMessage(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public create(): androidx.appcompat.app.AlertDialog;
						public setIconAttribute(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setCustomTitle(param0: globalAndroid.view.View): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNegativeButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNeutralButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setSingleChoiceItems(param0: globalAndroid.database.Cursor, param1: number, param2: string, param3: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNeutralButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setOnCancelListener(param0: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMessage(param0: string): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMultiChoiceItems(param0: number, param1: androidNative.Array<boolean>, param2: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackgroundInsetBottom(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setPositiveButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setSingleChoiceItems(param0: globalAndroid.widget.ListAdapter, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setNegativeButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setSingleChoiceItems(param0: androidNative.Array<string>, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setOnItemSelectedListener(param0: globalAndroid.widget.AdapterView.OnItemSelectedListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setBackgroundInsetStart(param0: number): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setItems(param0: androidNative.Array<string>, param1: globalAndroid.content.DialogInterface.OnClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public setOnKeyListener(param0: globalAndroid.content.DialogInterface.OnKeyListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
						public setMultiChoiceItems(param0: androidNative.Array<string>, param1: androidNative.Array<boolean>, param2: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): com.google.android.material.dialog.MaterialAlertDialogBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module dialog {
					export class MaterialDialogs {
						public static class: java.lang.Class<com.google.android.material.dialog.MaterialDialogs>;
						public static insetDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Rect): globalAndroid.graphics.drawable.InsetDrawable;
						public static getDialogBackgroundInsets(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.graphics.Rect;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module drawable {
					export class DrawableUtils {
						public static class: java.lang.Class<com.google.android.material.drawable.DrawableUtils>;
						public static parseDrawableXml(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.util.AttributeSet;
						public static updateTintFilter(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.content.res.ColorStateList, param2: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuffColorFilter;
						public static setRippleDrawableRadius(param0: globalAndroid.graphics.drawable.RippleDrawable, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module elevation {
					export class ElevationOverlayProvider {
						public static class: java.lang.Class<com.google.android.material.elevation.ElevationOverlayProvider>;
						public compositeOverlayWithThemeSurfaceColorIfNeeded(param0: number, param1: globalAndroid.view.View): number;
						public constructor(param0: globalAndroid.content.Context);
						public getThemeSurfaceColor(): number;
						public isThemeElevationOverlayEnabled(): boolean;
						public compositeOverlay(param0: number, param1: number, param2: globalAndroid.view.View): number;
						public compositeOverlayIfNeeded(param0: number, param1: number): number;
						public calculateOverlayAlphaFraction(param0: number): number;
						public compositeOverlay(param0: number, param1: number): number;
						public compositeOverlayWithThemeSurfaceColorIfNeeded(param0: number): number;
						public compositeOverlayIfNeeded(param0: number, param1: number, param2: globalAndroid.view.View): number;
						public getParentAbsoluteElevation(param0: globalAndroid.view.View): number;
						public calculateOverlayAlpha(param0: number): number;
						public getThemeElevationOverlayColor(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module expandable {
					export class ExpandableTransformationWidget extends com.google.android.material.expandable.ExpandableWidget {
						public static class: java.lang.Class<com.google.android.material.expandable.ExpandableTransformationWidget>;
						/**
						 * Constructs a new instance of the com.google.android.material.expandable.ExpandableTransformationWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getExpandedComponentIdHint(): number;
							setExpandedComponentIdHint(param0: number): void;
							isExpanded(): boolean;
							setExpanded(param0: boolean): boolean;
						});
						public constructor();
						public getExpandedComponentIdHint(): number;
						public setExpandedComponentIdHint(param0: number): void;
						public isExpanded(): boolean;
						public setExpanded(param0: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module expandable {
					export class ExpandableWidget {
						public static class: java.lang.Class<com.google.android.material.expandable.ExpandableWidget>;
						/**
						 * Constructs a new instance of the com.google.android.material.expandable.ExpandableWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isExpanded(): boolean;
							setExpanded(param0: boolean): boolean;
						});
						public constructor();
						public isExpanded(): boolean;
						public setExpanded(param0: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module expandable {
					export class ExpandableWidgetHelper {
						public static class: java.lang.Class<com.google.android.material.expandable.ExpandableWidgetHelper>;
						public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
						public getExpandedComponentIdHint(): number;
						public constructor(param0: com.google.android.material.expandable.ExpandableWidget);
						public onSaveInstanceState(): globalAndroid.os.Bundle;
						public setExpandedComponentIdHint(param0: number): void;
						public setExpanded(param0: boolean): boolean;
						public isExpanded(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class AnimatorTracker {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.AnimatorTracker>;
						public onNextAnimationStart(param0: globalAndroid.animation.Animator): void;
						public clear(): void;
						public cancelCurrent(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export abstract class BaseMotionStrategy extends com.google.android.material.floatingactionbutton.MotionStrategy {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.BaseMotionStrategy>;
						public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
						public performNow(): void;
						public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
						public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
						public shouldCancel(): boolean;
						public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public createAnimator(): globalAndroid.animation.AnimatorSet;
						public getDefaultMotionSpecResource(): number;
						public onAnimationCancel(): void;
						public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public onAnimationStart(param0: globalAndroid.animation.Animator): void;
						public onAnimationEnd(): void;
						public getMotionSpec(): com.google.android.material.animation.MotionSpec;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class BorderDrawable {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.BorderDrawable>;
						public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
						public getPadding(param0: globalAndroid.graphics.Rect): boolean;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public getBoundsAsRectF(): globalAndroid.graphics.RectF;
						public getOpacity(): number;
						public onStateChange(param0: androidNative.Array<number>): boolean;
						public getOutline(param0: any): void;
						public setAlpha(param0: number): void;
						public setBorderWidth(param0: number): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public isStateful(): boolean;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
					}
					export module BorderDrawable {
						export class BorderState {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.BorderDrawable.BorderState>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class ExtendedFloatingActionButton extends com.google.android.material.button.MaterialButton {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton>;
						public originalTextCsl: globalAndroid.content.res.ColorStateList;
						public removeOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public shrink(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
						public removeOnExtendAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public constructor(param0: globalAndroid.content.Context);
						public removeOnShrinkAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public onAttachedToWindow(): void;
						public shrink(): void;
						public setExtendMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public show(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
						public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton>;
						public getExtendMotionSpec(): com.google.android.material.animation.MotionSpec;
						public isExtended(): boolean;
						public extend(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
						public setHideMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public addOnShowAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
						public hide(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
						public setAnimateShowBeforeLayout(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public removeOnShowAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setExtendMotionSpecResource(param0: number): void;
						public setTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public addOnShrinkAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setShowMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public silentlyUpdateTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setShrinkMotionSpecResource(param0: number): void;
						public addOnExtendAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public hide(): void;
						public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
						public extend(): void;
						public setHideMotionSpecResource(param0: number): void;
						public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;
						public setExtended(param0: boolean): void;
						public setTextColor(param0: number): void;
						public show(): void;
						public setShrinkMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public addOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setShowMotionSpecResource(param0: number): void;
						public getShrinkMotionSpec(): com.google.android.material.animation.MotionSpec;
						public setPadding(param0: number, param1: number, param2: number, param3: number): void;
					}
					export module ExtendedFloatingActionButton {
						export class ChangeSizeStrategy extends com.google.android.material.floatingactionbutton.BaseMotionStrategy {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ChangeSizeStrategy>;
							public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
							public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
							public getMotionSpec(): com.google.android.material.animation.MotionSpec;
							public shouldCancel(): boolean;
							public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
							public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
							public onAnimationStart(param0: globalAndroid.animation.Animator): void;
							public onAnimationEnd(): void;
							public onAnimationCancel(): void;
							public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
							public createAnimator(): globalAndroid.animation.AnimatorSet;
							public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
							public performNow(): void;
							public getDefaultMotionSpecResource(): number;
						}
						export class ExtendedFloatingActionButtonBehavior<T>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ExtendedFloatingActionButtonBehavior<any>>;
							public constructor();
							public getInsetDodgeRect(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, param2: globalAndroid.graphics.Rect): boolean;
							public setAutoShrinkEnabled(param0: boolean): void;
							public onDependentViewChanged(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, param2: globalAndroid.view.View): boolean;
							public onAttachedToLayoutParams(param0: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, param2: number): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setAutoHideEnabled(param0: boolean): void;
							public isAutoHideEnabled(): boolean;
							public shrinkOrHide(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
							public isAutoShrinkEnabled(): boolean;
							public extendOrShow(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
						}
						export class HideStrategy extends com.google.android.material.floatingactionbutton.BaseMotionStrategy {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.HideStrategy>;
							public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
							public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
							public getMotionSpec(): com.google.android.material.animation.MotionSpec;
							public shouldCancel(): boolean;
							public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
							public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
							public onAnimationStart(param0: globalAndroid.animation.Animator): void;
							public onAnimationEnd(): void;
							public onAnimationCancel(): void;
							public constructor(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, param1: com.google.android.material.floatingactionbutton.AnimatorTracker);
							public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
							public createAnimator(): globalAndroid.animation.AnimatorSet;
							public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
							public performNow(): void;
							public getDefaultMotionSpecResource(): number;
						}
						export abstract class OnChangedCallback {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback>;
							public constructor();
							public onExtended(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
							public onHidden(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
							public onShown(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
							public onShrunken(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton): void;
						}
						export class ShowStrategy extends com.google.android.material.floatingactionbutton.BaseMotionStrategy {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ShowStrategy>;
							public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
							public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
							public getMotionSpec(): com.google.android.material.animation.MotionSpec;
							public shouldCancel(): boolean;
							public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
							public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
							public onAnimationStart(param0: globalAndroid.animation.Animator): void;
							public onAnimationEnd(): void;
							public onAnimationCancel(): void;
							public constructor(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton, param1: com.google.android.material.floatingactionbutton.AnimatorTracker);
							public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
							public createAnimator(): globalAndroid.animation.AnimatorSet;
							public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
							public performNow(): void;
							public getDefaultMotionSpecResource(): number;
						}
						export class Size {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.Size>;
							/**
							 * Constructs a new instance of the com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton$Size interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getWidth(): number;
								getHeight(): number;
								getPaddingStart(): number;
								getPaddingEnd(): number;
								getLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
							});
							public constructor();
							public getWidth(): number;
							public getHeight(): number;
							public getPaddingEnd(): number;
							public getPaddingStart(): number;
							public getLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class FloatingActionButton extends com.google.android.material.internal.VisibilityAwareImageButton implements com.google.android.material.expandable.ExpandableTransformationWidget, com.google.android.material.shape.Shapeable {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton>;
						public static SIZE_MINI: number;
						public static SIZE_NORMAL: number;
						public static SIZE_AUTO: number;
						public static NO_CUSTOM_SIZE: number;
						public removeOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public getCustomSize(): number;
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getExpandedComponentIdHint(): number;
						public constructor(param0: globalAndroid.content.Context);
						public setBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setTranslationZ(param0: number): void;
						public getMeasuredContentRect(param0: globalAndroid.graphics.Rect): void;
						public setScaleY(param0: number): void;
						public setCompatElevation(param0: number): void;
						public setShadowPaddingEnabled(param0: boolean): void;
						public setElevation(param0: number): void;
						public setExpandedComponentIdHint(param0: number): void;
						public setHideMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public getRippleColorStateList(): globalAndroid.content.res.ColorStateList;
						public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<com.google.android.material.floatingactionbutton.FloatingActionButton>;
						public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getContentBackground(): globalAndroid.graphics.drawable.Drawable;
						public setCompatPressedTranslationZ(param0: number): void;
						public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setBackgroundColor(param0: number): void;
						public onMeasure(param0: number, param1: number): void;
						public removeOnShowAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setExpanded(param0: boolean): boolean;
						public setEnsureMinTouchTargetSize(param0: boolean): void;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						/** @deprecated */
						public getRippleColor(): number;
						public getCompatHoveredFocusedTranslationZ(): number;
						public setScaleX(param0: number): void;
						public getUseCompatPadding(): boolean;
						public setTranslationY(param0: number): void;
						public setShowMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public isOrWillBeShown(): boolean;
						public removeTransformationCallback(param0: com.google.android.material.animation.TransformationCallback<any>): void;
						public clearCustomSize(): void;
						public getShowMotionSpec(): com.google.android.material.animation.MotionSpec;
						public setRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public hide(param0: com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener): void;
						public jumpDrawablesToCurrentState(): void;
						public setCustomSize(param0: number): void;
						public getSize(): number;
						public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public show(param0: com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener): void;
						public shouldEnsureMinTouchTargetSize(): boolean;
						public setCompatHoveredFocusedTranslationZ(param0: number): void;
						public isExpanded(): boolean;
						public getCompatElevation(): number;
						public setSize(param0: number): void;
						public setRippleColor(param0: number): void;
						public setVisibility(param0: number): void;
						public setCompatHoveredFocusedTranslationZResource(param0: number): void;
						public onAttachedToWindow(): void;
						public setUseCompatPadding(param0: boolean): void;
						public getCompatPressedTranslationZ(): number;
						public setImageResource(param0: number): void;
						public drawableStateChanged(): void;
						public addOnShowAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public getHideMotionSpec(): com.google.android.material.animation.MotionSpec;
						public getBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setSupportImageTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public isOrWillBeHidden(): boolean;
						public setBackgroundResource(param0: number): void;
						public onDetachedFromWindow(): void;
						public hide(): void;
						public setHideMotionSpecResource(param0: number): void;
						public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public setSupportImageTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setCompatPressedTranslationZResource(param0: number): void;
						public getBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public setCompatElevationResource(param0: number): void;
						public show(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public addOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public setTranslationX(param0: number): void;
						public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setShowMotionSpecResource(param0: number): void;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public addTransformationCallback(param0: com.google.android.material.animation.TransformationCallback<any>): void;
						/** @deprecated */
						public getContentRect(param0: globalAndroid.graphics.Rect): boolean;
					}
					export module FloatingActionButton {
						export class BaseBehavior<T>  extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any> {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior<any>>;
							public constructor();
							public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.FloatingActionButton, param2: number): boolean;
							public onDependentViewChanged(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.FloatingActionButton, param2: globalAndroid.view.View): boolean;
							public onAttachedToLayoutParams(param0: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
							public setInternalAutoHideListener(param0: com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setAutoHideEnabled(param0: boolean): void;
							public isAutoHideEnabled(): boolean;
							public getInsetDodgeRect(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: com.google.android.material.floatingactionbutton.FloatingActionButton, param2: globalAndroid.graphics.Rect): boolean;
						}
						export class Behavior extends com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior<com.google.android.material.floatingactionbutton.FloatingActionButton> {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.Behavior>;
							public constructor();
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						}
						export abstract class OnVisibilityChangedListener {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.OnVisibilityChangedListener>;
							public constructor();
							public onHidden(param0: com.google.android.material.floatingactionbutton.FloatingActionButton): void;
							public onShown(param0: com.google.android.material.floatingactionbutton.FloatingActionButton): void;
						}
						export class ShadowDelegateImpl extends com.google.android.material.shadow.ShadowViewDelegate {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.ShadowDelegateImpl>;
							public getRadius(): number;
							public isCompatPaddingEnabled(): boolean;
							public setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
							public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						}
						export class Size {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.Size>;
							/**
							 * Constructs a new instance of the com.google.android.material.floatingactionbutton.FloatingActionButton$Size interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class TransformationCallbackWrapper<T>  extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.InternalTransformationCallback {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButton.TransformationCallbackWrapper<any>>;
							public hashCode(): number;
							public onTranslationChanged(): void;
							public onScaleChanged(): void;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class FloatingActionButtonImpl {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl>;
						public removeOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public addOnHideAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
					}
					export module FloatingActionButtonImpl {
						export class DisabledElevationAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.DisabledElevationAnimation>;
							public getTargetShadowSize(): number;
						}
						export class ElevateToHoveredFocusedTranslationZAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ElevateToHoveredFocusedTranslationZAnimation>;
							public getTargetShadowSize(): number;
						}
						export class ElevateToPressedTranslationZAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ElevateToPressedTranslationZAnimation>;
							public getTargetShadowSize(): number;
						}
						export class InternalTransformationCallback {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.InternalTransformationCallback>;
							/**
							 * Constructs a new instance of the com.google.android.material.floatingactionbutton.FloatingActionButtonImpl$InternalTransformationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTranslationChanged(): void;
								onScaleChanged(): void;
							});
							public constructor();
							public onTranslationChanged(): void;
							public onScaleChanged(): void;
						}
						export class InternalVisibilityChangedListener {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.InternalVisibilityChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.floatingactionbutton.FloatingActionButtonImpl$InternalVisibilityChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onShown(): void;
								onHidden(): void;
							});
							public constructor();
							public onShown(): void;
							public onHidden(): void;
						}
						export class ResetElevationAnimation extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ResetElevationAnimation>;
							public getTargetShadowSize(): number;
						}
						export abstract class ShadowAnimatorImpl {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImpl.ShadowAnimatorImpl>;
							public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
							public getTargetShadowSize(): number;
							public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class FloatingActionButtonImplLollipop extends com.google.android.material.floatingactionbutton.FloatingActionButtonImpl {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImplLollipop>;
						public getElevation(): number;
					}
					export module FloatingActionButtonImplLollipop {
						export class AlwaysStatefulMaterialShapeDrawable extends com.google.android.material.shape.MaterialShapeDrawable {
							public static class: java.lang.Class<com.google.android.material.floatingactionbutton.FloatingActionButtonImplLollipop.AlwaysStatefulMaterialShapeDrawable>;
							public isStateful(): boolean;
							public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
							public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module floatingactionbutton {
					export class MotionStrategy {
						public static class: java.lang.Class<com.google.android.material.floatingactionbutton.MotionStrategy>;
						/**
						 * Constructs a new instance of the com.google.android.material.floatingactionbutton.MotionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							performNow(): void;
							getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
							getDefaultMotionSpecResource(): number;
							setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
							getMotionSpec(): com.google.android.material.animation.MotionSpec;
							createAnimator(): globalAndroid.animation.AnimatorSet;
							addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
							removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
							getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
							onAnimationStart(param0: globalAndroid.animation.Animator): void;
							onAnimationEnd(): void;
							onAnimationCancel(): void;
							onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
							shouldCancel(): boolean;
						});
						public constructor();
						public getCurrentMotionSpec(): com.google.android.material.animation.MotionSpec;
						public performNow(): void;
						public getListeners(): java.util.List<globalAndroid.animation.Animator.AnimatorListener>;
						public onChange(param0: com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.OnChangedCallback): void;
						public shouldCancel(): boolean;
						public addAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public getDefaultMotionSpecResource(): number;
						public createAnimator(): globalAndroid.animation.AnimatorSet;
						public removeAnimationListener(param0: globalAndroid.animation.Animator.AnimatorListener): void;
						public onAnimationCancel(): void;
						public setMotionSpec(param0: com.google.android.material.animation.MotionSpec): void;
						public onAnimationStart(param0: globalAndroid.animation.Animator): void;
						public onAnimationEnd(): void;
						public getMotionSpec(): com.google.android.material.animation.MotionSpec;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module imageview {
					export class ShapeableImageView implements com.google.android.material.shape.Shapeable {
						public static class: java.lang.Class<com.google.android.material.imageview.ShapeableImageView>;
						public getPaddingTop(): number;
						public constructor(param0: globalAndroid.content.Context);
						public onAttachedToWindow(): void;
						public getPaddingLeft(): number;
						public getContentPaddingStart(): number;
						public getContentPaddingEnd(): number;
						public getStrokeColor(): globalAndroid.content.res.ColorStateList;
						public getStrokeWidth(): number;
						public getContentPaddingTop(): number;
						public setContentPadding(param0: number, param1: number, param2: number, param3: number): void;
						public getPaddingBottom(): number;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public setStrokeWidthResource(param0: number): void;
						public setContentPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public getPaddingRight(): number;
						public getContentPaddingRight(): number;
						public setStrokeColorResource(param0: number): void;
						public onDetachedFromWindow(): void;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public getContentPaddingBottom(): number;
						public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;
						public setStrokeWidth(param0: number): void;
						public getPaddingStart(): number;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public getPaddingEnd(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getContentPaddingLeft(): number;
						public setStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setPadding(param0: number, param1: number, param2: number, param3: number): void;
					}
					export module ShapeableImageView {
						export class OutlineProvider {
							public static class: java.lang.Class<com.google.android.material.imageview.ShapeableImageView.OutlineProvider>;
							public getOutline(param0: globalAndroid.view.View, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class BaselineLayout {
						public static class: java.lang.Class<com.google.android.material.internal.BaselineLayout>;
						public getBaseline(): number;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class CheckableImageButton {
						public static class: java.lang.Class<com.google.android.material.internal.CheckableImageButton>;
						public setChecked(param0: boolean): void;
						public setPressable(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public isPressable(): boolean;
						public isCheckable(): boolean;
						public isChecked(): boolean;
						public setPressed(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public toggle(): void;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setCheckable(param0: boolean): void;
						public onCreateDrawableState(param0: number): androidNative.Array<number>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					}
					export module CheckableImageButton {
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.internal.CheckableImageButton.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.CheckableImageButton.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcelable);
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class CollapsingTextHelper {
						public static class: java.lang.Class<com.google.android.material.internal.CollapsingTextHelper>;
						public setExpandedBounds(param0: globalAndroid.graphics.Rect): void;
						public getExpandedTextColor(): globalAndroid.content.res.ColorStateList;
						public setCollapsedTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getMaxLines(): number;
						public getText(): string;
						public setMaxLines(param0: number): void;
						public setExpandedTextAppearance(param0: number): void;
						public setTextSizeInterpolator(param0: globalAndroid.animation.TimeInterpolator): void;
						public getCollapsedTextHeight(): number;
						public isStateful(): boolean;
						public getExpandedTextGravity(): number;
						public setCollapsedBounds(param0: number, param1: number, param2: number, param3: number): void;
						public setExpandedTextGravity(param0: number): void;
						public setCollapsedTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setCollapsedTextSize(param0: number): void;
						public setTypefaces(param0: globalAndroid.graphics.Typeface): void;
						public getExpansionFraction(): number;
						public setExpandedTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setExpansionFraction(param0: number): void;
						public setCollapsedTextAppearance(param0: number): void;
						public setPositionInterpolator(param0: globalAndroid.animation.TimeInterpolator): void;
						public getCollapsedTextGravity(): number;
						public getExpandedTypeface(): globalAndroid.graphics.Typeface;
						public getCollapsedTypeface(): globalAndroid.graphics.Typeface;
						public setCollapsedTextGravity(param0: number): void;
						public setState(param0: androidNative.Array<number>): boolean;
						public setCollapsedBounds(param0: globalAndroid.graphics.Rect): void;
						public constructor(param0: globalAndroid.view.View);
						public setExpandedBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getCollapsedTextColor(): globalAndroid.content.res.ColorStateList;
						public getExpandedTextSize(): number;
						public getExpandedTextHeight(): number;
						public getCollapsedTextSize(): number;
						public recalculate(): void;
						public setExpandedTextSize(param0: number): void;
						public calculateCollapsedTextWidth(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setText(param0: string): void;
						public setExpandedTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getCurrentCollapsedTextColor(): number;
						public getCollapsedTextActualBounds(param0: globalAndroid.graphics.RectF, param1: number, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ContextUtils {
						public static class: java.lang.Class<com.google.android.material.internal.ContextUtils>;
						public constructor();
						public static getActivity(param0: globalAndroid.content.Context): globalAndroid.app.Activity;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class DescendantOffsetUtils {
						public static class: java.lang.Class<com.google.android.material.internal.DescendantOffsetUtils>;
						public constructor();
						public static getDescendantRect(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect): void;
						public static offsetDescendantRect(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class Experimental {
						public static class: java.lang.Class<com.google.android.material.internal.Experimental>;
						/**
						 * Constructs a new instance of the com.google.android.material.internal.Experimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
						});
						public constructor();
						public value(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class FlowLayout {
						public static class: java.lang.Class<com.google.android.material.internal.FlowLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public getRowCount(): number;
						public getRowIndex(param0: globalAndroid.view.View): number;
						public isSingleLine(): boolean;
						public setSingleLine(param0: boolean): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setLineSpacing(param0: number): void;
						public setItemSpacing(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getLineSpacing(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getItemSpacing(): number;
						public onMeasure(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ForegroundLinearLayout {
						public static class: java.lang.Class<com.google.android.material.internal.ForegroundLinearLayout>;
						public mForegroundInPadding: boolean;
						public drawableHotspotChanged(param0: number, param1: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
						public getForeground(): globalAndroid.graphics.drawable.Drawable;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setForeground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public drawableStateChanged(): void;
						public jumpDrawablesToCurrentState(): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getForegroundGravity(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setForegroundGravity(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ManufacturerUtils {
						public static class: java.lang.Class<com.google.android.material.internal.ManufacturerUtils>;
						public static isDateInputKeyboardMissingSeparatorCharacters(): boolean;
						public static isMeizuDevice(): boolean;
						public static isLGEDevice(): boolean;
						public static isSamsungDevice(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationMenu {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationMenu>;
						public constructor(param0: globalAndroid.content.Context);
						public addSubMenu(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.SubMenu;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationMenuItemView extends com.google.android.material.internal.ForegroundLinearLayout {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuItemView>;
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setChecked(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public setTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setIconPadding(param0: number): void;
						public showsIcon(): boolean;
						public recycle(): void;
						public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
						public setTextAppearance(param0: number): void;
						public setMaxLines(param0: number): void;
						public prefersCondensedTitle(): boolean;
						public setTitle(param0: string): void;
						public setShortcut(param0: boolean, param1: string): void;
						public setNeedsEmptyIcon(param0: boolean): void;
						public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setCheckable(param0: boolean): void;
						public onCreateDrawableState(param0: number): androidNative.Array<number>;
						public setIconSize(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setHorizontalPadding(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationMenuPresenter {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter>;
						public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
						public setItemHorizontalPadding(param0: number): void;
						public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
						public flagActionItems(): boolean;
						public getItemIconPadding(): number;
						public setItemMaxLines(param0: number): void;
						public inflateHeaderView(param0: number): globalAndroid.view.View;
						public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						public removeHeaderView(param0: globalAndroid.view.View): void;
						public isBehindStatusBar(): boolean;
						public updateMenuView(param0: boolean): void;
						public getItemTextColor(): globalAndroid.content.res.ColorStateList;
						public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						public addHeaderView(param0: globalAndroid.view.View): void;
						public getItemMaxLines(): number;
						public constructor();
						public setCheckedItem(param0: androidx.appcompat.view.menu.MenuItemImpl): void;
						public setItemIconPadding(param0: number): void;
						public getItemHorizontalPadding(): number;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
						public setItemIconSize(param0: number): void;
						public getId(): number;
						public setId(param0: number): void;
						public setOverScrollMode(param0: number): void;
						public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
						public setBehindStatusBar(param0: boolean): void;
						public dispatchApplyWindowInsets(param0: androidx.core.view.WindowInsetsCompat): void;
						public setUpdateSuspended(param0: boolean): void;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public getItemTintList(): globalAndroid.content.res.ColorStateList;
						public getHeaderView(param0: number): globalAndroid.view.View;
						public setItemIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
						public getHeaderCount(): number;
						public setItemTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextAppearance(param0: number): void;
						public getCheckedItem(): androidx.appcompat.view.menu.MenuItemImpl;
					}
					export module NavigationMenuPresenter {
						export class HeaderViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.HeaderViewHolder>;
							public constructor(param0: globalAndroid.view.View);
						}
						export class NavigationMenuAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.google.android.material.internal.NavigationMenuPresenter.ViewHolder> {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuAdapter>;
							public getItemId(param0: number): number;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.google.android.material.internal.NavigationMenuPresenter.ViewHolder;
							public restoreInstanceState(param0: globalAndroid.os.Bundle): void;
							public getItemViewType(param0: number): number;
							public setUpdateSuspended(param0: boolean): void;
							public onViewRecycled(param0: com.google.android.material.internal.NavigationMenuPresenter.ViewHolder): void;
							public createInstanceState(): globalAndroid.os.Bundle;
							public getItemCount(): number;
							public onBindViewHolder(param0: com.google.android.material.internal.NavigationMenuPresenter.ViewHolder, param1: number): void;
							public setCheckedItem(param0: androidx.appcompat.view.menu.MenuItemImpl): void;
							public update(): void;
							public getCheckedItem(): androidx.appcompat.view.menu.MenuItemImpl;
						}
						export class NavigationMenuHeaderItem extends com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuHeaderItem>;
						}
						export class NavigationMenuItem {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem>;
							/**
							 * Constructs a new instance of the com.google.android.material.internal.NavigationMenuPresenter$NavigationMenuItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class NavigationMenuSeparatorItem extends com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuSeparatorItem>;
							public constructor(param0: number, param1: number);
							public getPaddingBottom(): number;
							public getPaddingTop(): number;
						}
						export class NavigationMenuTextItem extends com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuItem {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuTextItem>;
							public getMenuItem(): androidx.appcompat.view.menu.MenuItemImpl;
						}
						export class NavigationMenuViewAccessibilityDelegate {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NavigationMenuViewAccessibilityDelegate>;
							public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
						}
						export class NormalViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.NormalViewHolder>;
							public constructor(param0: globalAndroid.view.View);
							public constructor(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.view.View.OnClickListener);
						}
						export class SeparatorViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.SeparatorViewHolder>;
							public constructor(param0: globalAndroid.view.View);
							public constructor(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup);
						}
						export class SubheaderViewHolder extends com.google.android.material.internal.NavigationMenuPresenter.ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.SubheaderViewHolder>;
							public constructor(param0: globalAndroid.view.View);
							public constructor(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup);
						}
						export abstract class ViewHolder {
							public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuPresenter.ViewHolder>;
							public constructor(param0: globalAndroid.view.View);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationMenuView {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationMenuView>;
						public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						public constructor(param0: globalAndroid.content.Context);
						public getWindowAnimations(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class NavigationSubMenu {
						public static class: java.lang.Class<com.google.android.material.internal.NavigationSubMenu>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.material.internal.NavigationMenu, param2: androidx.appcompat.view.menu.MenuItemImpl);
						public onItemsChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ParcelableSparseArray extends globalAndroid.util.SparseArray<globalAndroid.os.Parcelable> implements globalAndroid.os.Parcelable  {
						public static class: java.lang.Class<com.google.android.material.internal.ParcelableSparseArray>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.ParcelableSparseArray>;
						public constructor();
						public describeContents(): number;
						public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ParcelableSparseBooleanArray {
						public static class: java.lang.Class<com.google.android.material.internal.ParcelableSparseBooleanArray>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.ParcelableSparseBooleanArray>;
						public constructor(param0: globalAndroid.util.SparseBooleanArray);
						public constructor();
						public describeContents(): number;
						public constructor(param0: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ParcelableSparseIntArray {
						public static class: java.lang.Class<com.google.android.material.internal.ParcelableSparseIntArray>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.internal.ParcelableSparseIntArray>;
						public constructor();
						public describeContents(): number;
						public constructor(param0: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: globalAndroid.util.SparseIntArray);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ScrimInsetsFrameLayout {
						public static class: java.lang.Class<com.google.android.material.internal.ScrimInsetsFrameLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setScrimInsetForeground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onAttachedToWindow(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onDetachedFromWindow(): void;
						public onInsetsChanged(param0: androidx.core.view.WindowInsetsCompat): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setDrawTopInsetForeground(param0: boolean): void;
						public setDrawBottomInsetForeground(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class StateListAnimator {
						public static class: java.lang.Class<com.google.android.material.internal.StateListAnimator>;
						public constructor();
						public jumpToCurrentState(): void;
						public setState(param0: androidNative.Array<number>): void;
						public addState(param0: androidNative.Array<number>, param1: globalAndroid.animation.ValueAnimator): void;
					}
					export module StateListAnimator {
						export class Tuple {
							public static class: java.lang.Class<com.google.android.material.internal.StateListAnimator.Tuple>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class StaticLayoutBuilderCompat {
						public static class: java.lang.Class<com.google.android.material.internal.StaticLayoutBuilderCompat>;
						public setEllipsize(param0: globalAndroid.text.TextUtils.TruncateAt): com.google.android.material.internal.StaticLayoutBuilderCompat;
						public setMaxLines(param0: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
						public static obtain(param0: string, param1: globalAndroid.text.TextPaint, param2: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
						public build(): globalAndroid.text.StaticLayout;
						public setAlignment(param0: globalAndroid.text.Layout.Alignment): com.google.android.material.internal.StaticLayoutBuilderCompat;
						public setIsRtl(param0: boolean): com.google.android.material.internal.StaticLayoutBuilderCompat;
						public setEnd(param0: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
						public setIncludePad(param0: boolean): com.google.android.material.internal.StaticLayoutBuilderCompat;
						public setStart(param0: number): com.google.android.material.internal.StaticLayoutBuilderCompat;
					}
					export module StaticLayoutBuilderCompat {
						export class StaticLayoutBuilderCompatException {
							public static class: java.lang.Class<com.google.android.material.internal.StaticLayoutBuilderCompat.StaticLayoutBuilderCompatException>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class TextDrawableHelper {
						public static class: java.lang.Class<com.google.android.material.internal.TextDrawableHelper>;
						public setTextWidthDirty(param0: boolean): void;
						public getTextWidth(param0: string): number;
						public constructor(param0: com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate);
						public getTextAppearance(): com.google.android.material.resources.TextAppearance;
						public setTextAppearance(param0: com.google.android.material.resources.TextAppearance, param1: globalAndroid.content.Context): void;
						public getTextPaint(): globalAndroid.text.TextPaint;
						public setDelegate(param0: com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate): void;
						public isTextWidthDirty(): boolean;
						public updateTextPaintDrawState(param0: globalAndroid.content.Context): void;
					}
					export module TextDrawableHelper {
						export class TextDrawableDelegate {
							public static class: java.lang.Class<com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.material.internal.TextDrawableHelper$TextDrawableDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getState(): androidNative.Array<number>;
								onTextSizeChange(): void;
								onStateChange(param0: androidNative.Array<number>): boolean;
							});
							public constructor();
							public getState(): androidNative.Array<number>;
							public onStateChange(param0: androidNative.Array<number>): boolean;
							public onTextSizeChange(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class TextScale {
						public static class: java.lang.Class<com.google.android.material.internal.TextScale>;
						public captureEndValues(param0: androidx.transition.TransitionValues): void;
						public constructor();
						public captureStartValues(param0: androidx.transition.TransitionValues): void;
						public createAnimator(param0: globalAndroid.view.ViewGroup, param1: androidx.transition.TransitionValues, param2: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class TextWatcherAdapter {
						public static class: java.lang.Class<com.google.android.material.internal.TextWatcherAdapter>;
						public afterTextChanged(param0: globalAndroid.text.Editable): void;
						public constructor();
						public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ThemeEnforcement {
						public static class: java.lang.Class<com.google.android.material.internal.ThemeEnforcement>;
						public static checkMaterialTheme(param0: globalAndroid.content.Context): void;
						public static obtainTintedStyledAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: androidNative.Array<number>, param3: number, param4: number, param5: androidNative.Array<number>): androidx.appcompat.widget.TintTypedArray;
						public static obtainStyledAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: androidNative.Array<number>, param3: number, param4: number, param5: androidNative.Array<number>): globalAndroid.content.res.TypedArray;
						public static checkAppCompatTheme(param0: globalAndroid.content.Context): void;
						public static isAppCompatTheme(param0: globalAndroid.content.Context): boolean;
						public static isMaterialTheme(param0: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ToolbarUtils {
						public static class: java.lang.Class<com.google.android.material.internal.ToolbarUtils>;
						public static getActionMenuView(param0: androidx.appcompat.widget.Toolbar): androidx.appcompat.widget.ActionMenuView;
						public static getActionMenuItemView(param0: androidx.appcompat.widget.Toolbar, param1: number): androidx.appcompat.view.menu.ActionMenuItemView;
						public static getSecondaryActionMenuItemView(param0: androidx.appcompat.widget.Toolbar): globalAndroid.view.View;
						public static getNavigationIconButton(param0: androidx.appcompat.widget.Toolbar): globalAndroid.widget.ImageButton;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ViewGroupOverlayApi14 extends com.google.android.material.internal.ViewOverlayApi14 implements com.google.android.material.internal.ViewGroupOverlayImpl {
						public static class: java.lang.Class<com.google.android.material.internal.ViewGroupOverlayApi14>;
						public add(param0: globalAndroid.view.View): void;
						public add(param0: globalAndroid.graphics.drawable.Drawable): void;
						public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
						public remove(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ViewGroupOverlayApi18 extends com.google.android.material.internal.ViewGroupOverlayImpl {
						public static class: java.lang.Class<com.google.android.material.internal.ViewGroupOverlayApi18>;
						public add(param0: globalAndroid.view.View): void;
						public add(param0: globalAndroid.graphics.drawable.Drawable): void;
						public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
						public remove(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ViewGroupOverlayImpl extends com.google.android.material.internal.ViewOverlayImpl {
						public static class: java.lang.Class<com.google.android.material.internal.ViewGroupOverlayImpl>;
						/**
						 * Constructs a new instance of the com.google.android.material.internal.ViewGroupOverlayImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							add(param0: globalAndroid.view.View): void;
							remove(param0: globalAndroid.view.View): void;
							add(param0: globalAndroid.graphics.drawable.Drawable): void;
							remove(param0: globalAndroid.graphics.drawable.Drawable): void;
						});
						public constructor();
						public add(param0: globalAndroid.view.View): void;
						public add(param0: globalAndroid.graphics.drawable.Drawable): void;
						public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
						public remove(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ViewOverlayApi14 extends com.google.android.material.internal.ViewOverlayImpl {
						public static class: java.lang.Class<com.google.android.material.internal.ViewOverlayApi14>;
						public overlayViewGroup: com.google.android.material.internal.ViewOverlayApi14.OverlayViewGroup;
						public add(param0: globalAndroid.graphics.drawable.Drawable): void;
						public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
					}
					export module ViewOverlayApi14 {
						export class OverlayViewGroup {
							public static class: java.lang.Class<com.google.android.material.internal.ViewOverlayApi14.OverlayViewGroup>;
							public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
							public remove(param0: globalAndroid.view.View): void;
							public invalidateChildInParentFast(param0: number, param1: number, param2: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
							public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
							public invalidateChildInParent(param0: androidNative.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
							public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public add(param0: globalAndroid.view.View): void;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public add(param0: globalAndroid.graphics.drawable.Drawable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ViewOverlayApi18 extends com.google.android.material.internal.ViewOverlayImpl {
						public static class: java.lang.Class<com.google.android.material.internal.ViewOverlayApi18>;
						public add(param0: globalAndroid.graphics.drawable.Drawable): void;
						public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ViewOverlayImpl {
						public static class: java.lang.Class<com.google.android.material.internal.ViewOverlayImpl>;
						/**
						 * Constructs a new instance of the com.google.android.material.internal.ViewOverlayImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							add(param0: globalAndroid.graphics.drawable.Drawable): void;
							remove(param0: globalAndroid.graphics.drawable.Drawable): void;
						});
						public constructor();
						public add(param0: globalAndroid.graphics.drawable.Drawable): void;
						public remove(param0: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class ViewUtils {
						public static class: java.lang.Class<com.google.android.material.internal.ViewUtils>;
						public static addOnGlobalLayoutListener(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
						public static removeOnGlobalLayoutListener(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
						public static isLayoutRtl(param0: globalAndroid.view.View): boolean;
						public static removeOnGlobalLayoutListener(param0: globalAndroid.view.ViewTreeObserver, param1: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
						public static getParentAbsoluteElevation(param0: globalAndroid.view.View): number;
						public static getContentView(param0: globalAndroid.view.View): globalAndroid.view.ViewGroup;
						public static requestFocusAndShowKeyboard(param0: globalAndroid.view.View): void;
						public static dpToPx(param0: globalAndroid.content.Context, param1: number): number;
						public static doOnApplyWindowInsets(param0: globalAndroid.view.View, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
						public static getOverlay(param0: globalAndroid.view.View): com.google.android.material.internal.ViewOverlayImpl;
						public static requestApplyInsetsWhenAttached(param0: globalAndroid.view.View): void;
						public static parseTintMode(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuff.Mode;
						public static doOnApplyWindowInsets(param0: globalAndroid.view.View, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: com.google.android.material.internal.ViewUtils.OnApplyWindowInsetsListener): void;
						public static doOnApplyWindowInsets(param0: globalAndroid.view.View, param1: com.google.android.material.internal.ViewUtils.OnApplyWindowInsetsListener): void;
						public static getContentViewOverlay(param0: globalAndroid.view.View): com.google.android.material.internal.ViewOverlayImpl;
					}
					export module ViewUtils {
						export class OnApplyWindowInsetsListener {
							public static class: java.lang.Class<com.google.android.material.internal.ViewUtils.OnApplyWindowInsetsListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.internal.ViewUtils$OnApplyWindowInsetsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onApplyWindowInsets(param0: globalAndroid.view.View, param1: androidx.core.view.WindowInsetsCompat, param2: com.google.android.material.internal.ViewUtils.RelativePadding): androidx.core.view.WindowInsetsCompat;
							});
							public constructor();
							public onApplyWindowInsets(param0: globalAndroid.view.View, param1: androidx.core.view.WindowInsetsCompat, param2: com.google.android.material.internal.ViewUtils.RelativePadding): androidx.core.view.WindowInsetsCompat;
						}
						export class RelativePadding {
							public static class: java.lang.Class<com.google.android.material.internal.ViewUtils.RelativePadding>;
							public start: number;
							public top: number;
							public end: number;
							public bottom: number;
							public constructor(param0: com.google.android.material.internal.ViewUtils.RelativePadding);
							public applyToView(param0: globalAndroid.view.View): void;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module internal {
					export class VisibilityAwareImageButton {
						public static class: java.lang.Class<com.google.android.material.internal.VisibilityAwareImageButton>;
						public constructor(param0: globalAndroid.content.Context);
						public setVisibility(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getUserSetVisibility(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public internalSetVisibility(param0: number, param1: boolean): void;
					}
				}
			}
		}
	}
}


declare module com {
	export module google {
		export module android {
			export module material {
				export module math {
					export class MathUtils {
						public static class: java.lang.Class<com.google.android.material.math.MathUtils>;
						public static DEFAULT_EPSILON: number;
						public static floorMod(param0: number, param1: number): number;
						public static distanceToFurthestCorner(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
						public static dist(param0: number, param1: number, param2: number, param3: number): number;
						public static lerp(param0: number, param1: number, param2: number): number;
						public static geq(param0: number, param1: number, param2: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module navigation {
					export class NavigationView extends com.google.android.material.internal.ScrimInsetsFrameLayout {
						public static class: java.lang.Class<com.google.android.material.navigation.NavigationView>;
						public setItemHorizontalPadding(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public getItemIconPadding(): number;
						public setItemMaxLines(param0: number): void;
						public onAttachedToWindow(): void;
						public inflateHeaderView(param0: number): globalAndroid.view.View;
						public setElevation(param0: number): void;
						public removeHeaderView(param0: globalAndroid.view.View): void;
						public getItemIconTintList(): globalAndroid.content.res.ColorStateList;
						public setNavigationItemSelectedListener(param0: com.google.android.material.navigation.NavigationView.OnNavigationItemSelectedListener): void;
						public getItemTextColor(): globalAndroid.content.res.ColorStateList;
						public addHeaderView(param0: globalAndroid.view.View): void;
						public getItemMaxLines(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setItemBackgroundResource(param0: number): void;
						public onMeasure(param0: number, param1: number): void;
						public setItemHorizontalPaddingResource(param0: number): void;
						public setCheckedItem(param0: globalAndroid.view.MenuItem): void;
						public setItemIconPadding(param0: number): void;
						public getMenu(): globalAndroid.view.Menu;
						public getItemHorizontalPadding(): number;
						public inflateMenu(param0: number): void;
						public setCheckedItem(param0: number): void;
						public onDetachedFromWindow(): void;
						public setItemBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onInsetsChanged(param0: androidx.core.view.WindowInsetsCompat): void;
						public getItemBackground(): globalAndroid.graphics.drawable.Drawable;
						public setItemIconSize(param0: number): void;
						public getCheckedItem(): globalAndroid.view.MenuItem;
						public setOverScrollMode(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setItemIconPaddingResource(param0: number): void;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public getHeaderView(param0: number): globalAndroid.view.View;
						public setItemIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public getHeaderCount(): number;
						public setItemTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setItemTextAppearance(param0: number): void;
					}
					export module NavigationView {
						export class OnNavigationItemSelectedListener {
							public static class: java.lang.Class<com.google.android.material.navigation.NavigationView.OnNavigationItemSelectedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.navigation.NavigationView$OnNavigationItemSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
							});
							public constructor();
							public onNavigationItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.navigation.NavigationView.SavedState>;
							public menuState: globalAndroid.os.Bundle;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.navigation.NavigationView.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
							public constructor(param0: globalAndroid.os.Parcelable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class AnimatorDurationScaleProvider {
						public static class: java.lang.Class<com.google.android.material.progressindicator.AnimatorDurationScaleProvider>;
						public constructor();
						public static setDefaultSystemAnimatorDurationScale(param0: number): void;
						public getSystemAnimatorDurationScale(param0: globalAndroid.content.ContentResolver): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export abstract class BaseProgressIndicator<S>  extends globalAndroid.widget.ProgressBar {
						public static class: java.lang.Class<com.google.android.material.progressindicator.BaseProgressIndicator<any>>;
						public static SHOW_NONE: number;
						public static SHOW_OUTWARD: number;
						public static SHOW_INWARD: number;
						public static HIDE_NONE: number;
						public static HIDE_OUTWARD: number;
						public static HIDE_INWARD: number;
						public onAttachedToWindow(): void;
						public onWindowVisibilityChanged(param0: number): void;
						public setAnimatorDurationScaleProvider(param0: com.google.android.material.progressindicator.AnimatorDurationScaleProvider): void;
						public getTrackColor(): number;
						public getTrackCornerRadius(): number;
						public setProgress(param0: number): void;
						public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public getProgressDrawable(): com.google.android.material.progressindicator.DeterminateDrawable<any>;
						public getHideAnimationBehavior(): number;
						public setProgressCompat(param0: number, param1: boolean): void;
						public setProgressDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onMeasure(param0: number, param1: number): void;
						public setIndicatorColor(param0: androidNative.Array<number>): void;
						public getIndicatorColor(): androidNative.Array<number>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public applyNewVisibility(param0: boolean): void;
						public getShowAnimationBehavior(): number;
						public onDetachedFromWindow(): void;
						public setIndeterminate(param0: boolean): void;
						public hide(): void;
						public setIndeterminateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getIndeterminateDrawable(): com.google.android.material.progressindicator.IndeterminateDrawable<any>;
						public setHideAnimationBehavior(param0: number): void;
						public invalidate(): void;
						public show(): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public setVisibilityAfterHide(param0: number): void;
						public getTrackThickness(): number;
						public setTrackCornerRadius(param0: number): void;
						public setShowAnimationBehavior(param0: number): void;
						public setTrackColor(param0: number): void;
						public setTrackThickness(param0: number): void;
					}
					export module BaseProgressIndicator {
						export class HideAnimationBehavior {
							public static class: java.lang.Class<com.google.android.material.progressindicator.BaseProgressIndicator.HideAnimationBehavior>;
							/**
							 * Constructs a new instance of the com.google.android.material.progressindicator.BaseProgressIndicator$HideAnimationBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class ShowAnimationBehavior {
							public static class: java.lang.Class<com.google.android.material.progressindicator.BaseProgressIndicator.ShowAnimationBehavior>;
							/**
							 * Constructs a new instance of the com.google.android.material.progressindicator.BaseProgressIndicator$ShowAnimationBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export abstract class BaseProgressIndicatorSpec {
						public static class: java.lang.Class<com.google.android.material.progressindicator.BaseProgressIndicatorSpec>;
						public trackThickness: number;
						public trackCornerRadius: number;
						public indicatorColors: androidNative.Array<number>;
						public trackColor: number;
						public showAnimationBehavior: number;
						public hideAnimationBehavior: number;
						public isHideAnimationEnabled(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public isShowAnimationEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class CircularDrawingDelegate extends com.google.android.material.progressindicator.DrawingDelegate<com.google.android.material.progressindicator.CircularProgressIndicatorSpec> {
						public static class: java.lang.Class<com.google.android.material.progressindicator.CircularDrawingDelegate>;
						public constructor(param0: com.google.android.material.progressindicator.CircularProgressIndicatorSpec);
						public adjustCanvas(param0: globalAndroid.graphics.Canvas, param1: number): void;
						public getPreferredWidth(): number;
						public constructor(param0: any);
						public getPreferredHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class CircularIndeterminateAnimatorDelegate extends com.google.android.material.progressindicator.IndeterminateAnimatorDelegate<globalAndroid.animation.ObjectAnimator> {
						public static class: java.lang.Class<com.google.android.material.progressindicator.CircularIndeterminateAnimatorDelegate>;
						public constructor(param0: com.google.android.material.progressindicator.CircularProgressIndicatorSpec);
						public constructor(param0: number);
						public registerAnimatorsCompleteCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
						public unregisterAnimatorsCompleteCallback(): void;
						public invalidateSpecValues(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class CircularProgressIndicator extends com.google.android.material.progressindicator.BaseProgressIndicator<com.google.android.material.progressindicator.CircularProgressIndicatorSpec> {
						public static class: java.lang.Class<com.google.android.material.progressindicator.CircularProgressIndicator>;
						public static DEF_STYLE_RES: number;
						public static INDICATOR_DIRECTION_CLOCKWISE: number;
						public static INDICATOR_DIRECTION_COUNTERCLOCKWISE: number;
						public getIndicatorInset(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public constructor(param0: globalAndroid.content.Context);
						public setIndicatorDirection(param0: number): void;
						public setIndicatorInset(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getIndicatorSize(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setIndicatorSize(param0: number): void;
						public setTrackThickness(param0: number): void;
						public getIndicatorDirection(): number;
					}
					export module CircularProgressIndicator {
						export class IndicatorDirection {
							public static class: java.lang.Class<com.google.android.material.progressindicator.CircularProgressIndicator.IndicatorDirection>;
							/**
							 * Constructs a new instance of the com.google.android.material.progressindicator.CircularProgressIndicator$IndicatorDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class CircularProgressIndicatorSpec extends com.google.android.material.progressindicator.BaseProgressIndicatorSpec {
						public static class: java.lang.Class<com.google.android.material.progressindicator.CircularProgressIndicatorSpec>;
						public indicatorSize: number;
						public indicatorInset: number;
						public indicatorDirection: number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class DeterminateDrawable<S>  extends com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange {
						public static class: java.lang.Class<com.google.android.material.progressindicator.DeterminateDrawable<any>>;
						public static createCircularDrawable(param0: globalAndroid.content.Context, param1: com.google.android.material.progressindicator.CircularProgressIndicatorSpec): com.google.android.material.progressindicator.DeterminateDrawable<com.google.android.material.progressindicator.CircularProgressIndicatorSpec>;
						public onLevelChange(param0: number): boolean;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public jumpToCurrentState(): void;
						public static createLinearDrawable(param0: globalAndroid.content.Context, param1: com.google.android.material.progressindicator.LinearProgressIndicatorSpec): com.google.android.material.progressindicator.DeterminateDrawable<com.google.android.material.progressindicator.LinearProgressIndicatorSpec>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export abstract class DrawableWithAnimatedVisibilityChange {
						public static class: java.lang.Class<com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange>;
						public unregisterAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
						public getAlpha(): number;
						public getOpacity(): number;
						public isHiding(): boolean;
						public setVisible(param0: boolean, param1: boolean, param2: boolean): boolean;
						public stop(): void;
						public isRunning(): boolean;
						public setAlpha(param0: number): void;
						public registerAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
						public hideNow(): boolean;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public start(): void;
						public clearAnimationCallbacks(): void;
						public isShowing(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export abstract class DrawingDelegate<S>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.progressindicator.DrawingDelegate<any>>;
						public drawable: com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange;
						public constructor(param0: S);
						public registerDrawable(param0: com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export abstract class IndeterminateAnimatorDelegate<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.progressindicator.IndeterminateAnimatorDelegate<any>>;
						public drawable: com.google.android.material.progressindicator.IndeterminateDrawable<any>;
						public segmentPositions: androidNative.Array<number>;
						public segmentColors: androidNative.Array<number>;
						public registerDrawable(param0: com.google.android.material.progressindicator.IndeterminateDrawable<any>): void;
						public constructor(param0: number);
						public registerAnimatorsCompleteCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
						public unregisterAnimatorsCompleteCallback(): void;
						public invalidateSpecValues(): void;
						public getFractionInRange(param0: number, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class IndeterminateDrawable<S>  extends com.google.android.material.progressindicator.DrawableWithAnimatedVisibilityChange {
						public static class: java.lang.Class<com.google.android.material.progressindicator.IndeterminateDrawable<any>>;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public static createLinearDrawable(param0: globalAndroid.content.Context, param1: com.google.android.material.progressindicator.LinearProgressIndicatorSpec): com.google.android.material.progressindicator.IndeterminateDrawable<com.google.android.material.progressindicator.LinearProgressIndicatorSpec>;
						public static createCircularDrawable(param0: globalAndroid.content.Context, param1: com.google.android.material.progressindicator.CircularProgressIndicatorSpec): com.google.android.material.progressindicator.IndeterminateDrawable<com.google.android.material.progressindicator.CircularProgressIndicatorSpec>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class LinearDrawingDelegate extends com.google.android.material.progressindicator.DrawingDelegate<com.google.android.material.progressindicator.LinearProgressIndicatorSpec> {
						public static class: java.lang.Class<com.google.android.material.progressindicator.LinearDrawingDelegate>;
						public adjustCanvas(param0: globalAndroid.graphics.Canvas, param1: number): void;
						public getPreferredWidth(): number;
						public constructor(param0: com.google.android.material.progressindicator.LinearProgressIndicatorSpec);
						public constructor(param0: any);
						public getPreferredHeight(): number;
						public fillIndicator(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class LinearIndeterminateContiguousAnimatorDelegate extends com.google.android.material.progressindicator.IndeterminateAnimatorDelegate<globalAndroid.animation.ObjectAnimator> {
						public static class: java.lang.Class<com.google.android.material.progressindicator.LinearIndeterminateContiguousAnimatorDelegate>;
						public startAnimator(): void;
						public requestCancelAnimatorAfterCurrentCycle(): void;
						public constructor(param0: number);
						public registerAnimatorsCompleteCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
						public unregisterAnimatorsCompleteCallback(): void;
						public constructor(param0: com.google.android.material.progressindicator.LinearProgressIndicatorSpec);
						public invalidateSpecValues(): void;
						public cancelAnimatorImmediately(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class LinearIndeterminateDisjointAnimatorDelegate extends com.google.android.material.progressindicator.IndeterminateAnimatorDelegate<globalAndroid.animation.ObjectAnimator> {
						public static class: java.lang.Class<com.google.android.material.progressindicator.LinearIndeterminateDisjointAnimatorDelegate>;
						public startAnimator(): void;
						public requestCancelAnimatorAfterCurrentCycle(): void;
						public constructor(param0: number);
						public registerAnimatorsCompleteCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
						public unregisterAnimatorsCompleteCallback(): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.material.progressindicator.LinearProgressIndicatorSpec);
						public invalidateSpecValues(): void;
						public cancelAnimatorImmediately(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class LinearProgressIndicator extends com.google.android.material.progressindicator.BaseProgressIndicator<com.google.android.material.progressindicator.LinearProgressIndicatorSpec> {
						public static class: java.lang.Class<com.google.android.material.progressindicator.LinearProgressIndicator>;
						public static DEF_STYLE_RES: number;
						public static INDETERMINATE_ANIMATION_TYPE_CONTIGUOUS: number;
						public static INDETERMINATE_ANIMATION_TYPE_DISJOINT: number;
						public static INDICATOR_DIRECTION_LEFT_TO_RIGHT: number;
						public static INDICATOR_DIRECTION_RIGHT_TO_LEFT: number;
						public static INDICATOR_DIRECTION_START_TO_END: number;
						public static INDICATOR_DIRECTION_END_TO_START: number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public constructor(param0: globalAndroid.content.Context);
						public setIndicatorDirection(param0: number): void;
						public getIndeterminateAnimationType(): number;
						public setIndeterminateAnimationType(param0: number): void;
						public getIndicatorDirection(): number;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public setProgressCompat(param0: number, param1: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setTrackCornerRadius(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setIndicatorColor(param0: androidNative.Array<number>): void;
					}
					export module LinearProgressIndicator {
						export class IndeterminateAnimationType {
							public static class: java.lang.Class<com.google.android.material.progressindicator.LinearProgressIndicator.IndeterminateAnimationType>;
							/**
							 * Constructs a new instance of the com.google.android.material.progressindicator.LinearProgressIndicator$IndeterminateAnimationType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class IndicatorDirection {
							public static class: java.lang.Class<com.google.android.material.progressindicator.LinearProgressIndicator.IndicatorDirection>;
							/**
							 * Constructs a new instance of the com.google.android.material.progressindicator.LinearProgressIndicator$IndicatorDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module progressindicator {
					export class LinearProgressIndicatorSpec extends com.google.android.material.progressindicator.BaseProgressIndicatorSpec {
						public static class: java.lang.Class<com.google.android.material.progressindicator.LinearProgressIndicatorSpec>;
						public indeterminateAnimationType: number;
						public indicatorDirection: number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module radiobutton {
					export class MaterialRadioButton {
						public static class: java.lang.Class<com.google.android.material.radiobutton.MaterialRadioButton>;
						public isUseMaterialThemeColors(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public onAttachedToWindow(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setUseMaterialThemeColors(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class CancelableFontCallback extends com.google.android.material.resources.TextAppearanceFontCallback {
						public static class: java.lang.Class<com.google.android.material.resources.CancelableFontCallback>;
						public constructor(param0: com.google.android.material.resources.CancelableFontCallback.ApplyFont, param1: globalAndroid.graphics.Typeface);
						public constructor();
						public cancel(): void;
						public onFontRetrieved(param0: globalAndroid.graphics.Typeface, param1: boolean): void;
						public onFontRetrievalFailed(param0: number): void;
					}
					export module CancelableFontCallback {
						export class ApplyFont {
							public static class: java.lang.Class<com.google.android.material.resources.CancelableFontCallback.ApplyFont>;
							/**
							 * Constructs a new instance of the com.google.android.material.resources.CancelableFontCallback$ApplyFont interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: globalAndroid.graphics.Typeface): void;
							});
							public constructor();
							public apply(param0: globalAndroid.graphics.Typeface): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class MaterialAttributes {
						public static class: java.lang.Class<com.google.android.material.resources.MaterialAttributes>;
						public static resolveBoolean(param0: globalAndroid.content.Context, param1: number, param2: boolean): boolean;
						public constructor();
						public static resolveOrThrow(param0: globalAndroid.view.View, param1: number): number;
						public static resolveMinimumAccessibleTouchTarget(param0: globalAndroid.content.Context): number;
						public static resolve(param0: globalAndroid.content.Context, param1: number): globalAndroid.util.TypedValue;
						public static resolveBooleanOrThrow(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
						public static resolveOrThrow(param0: globalAndroid.content.Context, param1: number, param2: string): number;
						public static resolveDimension(param0: globalAndroid.content.Context, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class MaterialResources {
						public static class: java.lang.Class<com.google.android.material.resources.MaterialResources>;
						public static isFontScaleAtLeast1_3(param0: globalAndroid.content.Context): boolean;
						public static getColorStateList(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray, param2: number): globalAndroid.content.res.ColorStateList;
						public static getColorStateList(param0: globalAndroid.content.Context, param1: androidx.appcompat.widget.TintTypedArray, param2: number): globalAndroid.content.res.ColorStateList;
						public static getDrawable(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray, param2: number): globalAndroid.graphics.drawable.Drawable;
						public static getDimensionPixelSize(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray, param2: number, param3: number): number;
						public static getTextAppearance(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.TypedArray, param2: number): com.google.android.material.resources.TextAppearance;
						public static isFontScaleAtLeast2_0(param0: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class TextAppearance {
						public static class: java.lang.Class<com.google.android.material.resources.TextAppearance>;
						public textColor: globalAndroid.content.res.ColorStateList;
						public textColorHint: globalAndroid.content.res.ColorStateList;
						public textColorLink: globalAndroid.content.res.ColorStateList;
						public shadowColor: globalAndroid.content.res.ColorStateList;
						public fontFamily: string;
						public textStyle: number;
						public typeface: number;
						public textAllCaps: boolean;
						public shadowDx: number;
						public shadowDy: number;
						public shadowRadius: number;
						public hasLetterSpacing: boolean;
						public letterSpacing: number;
						public textSize: number;
						public getFont(param0: globalAndroid.content.Context): globalAndroid.graphics.Typeface;
						public updateMeasureState(param0: globalAndroid.content.Context, param1: globalAndroid.text.TextPaint, param2: com.google.android.material.resources.TextAppearanceFontCallback): void;
						public getFontAsync(param0: globalAndroid.content.Context, param1: globalAndroid.text.TextPaint, param2: com.google.android.material.resources.TextAppearanceFontCallback): void;
						public getFontAsync(param0: globalAndroid.content.Context, param1: com.google.android.material.resources.TextAppearanceFontCallback): void;
						public updateDrawState(param0: globalAndroid.content.Context, param1: globalAndroid.text.TextPaint, param2: com.google.android.material.resources.TextAppearanceFontCallback): void;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public getFallbackFont(): globalAndroid.graphics.Typeface;
						public updateTextPaintMeasureState(param0: globalAndroid.text.TextPaint, param1: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export class TextAppearanceConfig {
						public static class: java.lang.Class<com.google.android.material.resources.TextAppearanceConfig>;
						public constructor();
						public static setShouldLoadFontSynchronously(param0: boolean): void;
						public static shouldLoadFontSynchronously(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module resources {
					export abstract class TextAppearanceFontCallback {
						public static class: java.lang.Class<com.google.android.material.resources.TextAppearanceFontCallback>;
						public constructor();
						public onFontRetrieved(param0: globalAndroid.graphics.Typeface, param1: boolean): void;
						public onFontRetrievalFailed(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module ripple {
					export class RippleDrawableCompat implements com.google.android.material.shape.Shapeable {
						public static class: java.lang.Class<com.google.android.material.ripple.RippleDrawableCompat>;
						public constructor(param0: com.google.android.material.shape.ShapeAppearanceModel);
						public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
						public setTint(param0: number): void;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public onStateChange(param0: androidNative.Array<number>): boolean;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
						public isStateful(): boolean;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public mutate(): com.google.android.material.ripple.RippleDrawableCompat;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
					}
					export module RippleDrawableCompat {
						export class RippleDrawableCompatState {
							public static class: java.lang.Class<com.google.android.material.ripple.RippleDrawableCompat.RippleDrawableCompatState>;
							public constructor(param0: com.google.android.material.ripple.RippleDrawableCompat.RippleDrawableCompatState);
							public newDrawable(): com.google.android.material.ripple.RippleDrawableCompat;
							public getChangingConfigurations(): number;
							public constructor(param0: com.google.android.material.shape.MaterialShapeDrawable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module ripple {
					export class RippleUtils {
						public static class: java.lang.Class<com.google.android.material.ripple.RippleUtils>;
						public static USE_FRAMEWORK_RIPPLE: boolean;
						public static sanitizeRippleDrawableColor(param0: globalAndroid.content.res.ColorStateList): globalAndroid.content.res.ColorStateList;
						public static shouldDrawRippleCompat(param0: androidNative.Array<number>): boolean;
						public static convertToRippleDrawableColor(param0: globalAndroid.content.res.ColorStateList): globalAndroid.content.res.ColorStateList;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shadow {
					export class ShadowDrawableWrapper {
						public static class: java.lang.Class<com.google.android.material.shadow.ShadowDrawableWrapper>;
						public getShadowSize(): number;
						public static calculateVerticalPadding(param0: number, param1: number, param2: boolean): number;
						public setMaxShadowSize(param0: number): void;
						public setShadowSize(param0: number, param1: number): void;
						public getCornerRadius(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.drawable.Drawable, param2: number, param3: number, param4: number);
						public getPadding(param0: globalAndroid.graphics.Rect): boolean;
						public setAddPaddingForCorners(param0: boolean): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public getMinWidth(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setRotation(param0: number): void;
						public setCornerRadius(param0: number): void;
						public setShadowSize(param0: number): void;
						public static calculateHorizontalPadding(param0: number, param1: number, param2: boolean): number;
						public getMaxShadowSize(): number;
						public getMinHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shadow {
					export class ShadowRenderer {
						public static class: java.lang.Class<com.google.android.material.shadow.ShadowRenderer>;
						public drawEdgeShadow(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.RectF, param3: number): void;
						public constructor();
						public constructor(param0: number);
						public getShadowPaint(): globalAndroid.graphics.Paint;
						public setShadowColor(param0: number): void;
						public drawCornerShadow(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.RectF, param3: number, param4: number, param5: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shadow {
					export class ShadowViewDelegate {
						public static class: java.lang.Class<com.google.android.material.shadow.ShadowViewDelegate>;
						/**
						 * Constructs a new instance of the com.google.android.material.shadow.ShadowViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getRadius(): number;
							setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
							setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							isCompatPaddingEnabled(): boolean;
						});
						public constructor();
						public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public isCompatPaddingEnabled(): boolean;
						public getRadius(): number;
						public setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class AbsoluteCornerSize extends com.google.android.material.shape.CornerSize {
						public static class: java.lang.Class<com.google.android.material.shape.AbsoluteCornerSize>;
						public constructor(param0: number);
						public getCornerSize(): number;
						public getCornerSize(param0: globalAndroid.graphics.RectF): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class AdjustedCornerSize extends com.google.android.material.shape.CornerSize {
						public static class: java.lang.Class<com.google.android.material.shape.AdjustedCornerSize>;
						public constructor(param0: number, param1: com.google.android.material.shape.CornerSize);
						public getCornerSize(param0: globalAndroid.graphics.RectF): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class CornerFamily {
						public static class: java.lang.Class<com.google.android.material.shape.CornerFamily>;
						/**
						 * Constructs a new instance of the com.google.android.material.shape.CornerFamily interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static ROUNDED: number;
						public static CUT: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class CornerSize {
						public static class: java.lang.Class<com.google.android.material.shape.CornerSize>;
						/**
						 * Constructs a new instance of the com.google.android.material.shape.CornerSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCornerSize(param0: globalAndroid.graphics.RectF): number;
						});
						public constructor();
						public getCornerSize(param0: globalAndroid.graphics.RectF): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class CornerTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.CornerTreatment>;
						public constructor();
						public getCornerPath(param0: com.google.android.material.shape.ShapePath, param1: number, param2: number, param3: globalAndroid.graphics.RectF, param4: com.google.android.material.shape.CornerSize): void;
						/** @deprecated */
						public getCornerPath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getCornerPath(param0: com.google.android.material.shape.ShapePath, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class CutCornerTreatment extends com.google.android.material.shape.CornerTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.CutCornerTreatment>;
						public constructor();
						public getCornerPath(param0: com.google.android.material.shape.ShapePath, param1: number, param2: number, param3: globalAndroid.graphics.RectF, param4: com.google.android.material.shape.CornerSize): void;
						/** @deprecated */
						public constructor(param0: number);
						/** @deprecated */
						public getCornerPath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getCornerPath(param0: com.google.android.material.shape.ShapePath, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class EdgeTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.EdgeTreatment>;
						public constructor();
						/** @deprecated */
						public getEdgePath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getEdgePath(param0: number, param1: number, param2: number, param3: com.google.android.material.shape.ShapePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class InterpolateOnScrollPositionChangeHelper {
						public static class: java.lang.Class<com.google.android.material.shape.InterpolateOnScrollPositionChangeHelper>;
						public stopListeningForScrollChanges(param0: globalAndroid.view.ViewTreeObserver): void;
						public startListeningForScrollChanges(param0: globalAndroid.view.ViewTreeObserver): void;
						public setMaterialShapeDrawable(param0: com.google.android.material.shape.MaterialShapeDrawable): void;
						public setContainingScrollView(param0: globalAndroid.widget.ScrollView): void;
						public updateInterpolationForScreenPosition(): void;
						public constructor(param0: globalAndroid.view.View, param1: com.google.android.material.shape.MaterialShapeDrawable, param2: globalAndroid.widget.ScrollView);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class MarkerEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.MarkerEdgeTreatment>;
						public constructor();
						public constructor(param0: number);
						/** @deprecated */
						public getEdgePath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getEdgePath(param0: number, param1: number, param2: number, param3: com.google.android.material.shape.ShapePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class MaterialShapeDrawable implements com.google.android.material.shape.Shapeable {
						public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeDrawable>;
						public static SHADOW_COMPAT_MODE_DEFAULT: number;
						public static SHADOW_COMPAT_MODE_NEVER: number;
						public static SHADOW_COMPAT_MODE_ALWAYS: number;
						public getBottomLeftCornerResolvedSize(): number;
						public isElevationOverlayEnabled(): boolean;
						/** @deprecated */
						public getPathForSize(param0: number, param1: number, param2: globalAndroid.graphics.Path): void;
						public constructor(param0: com.google.android.material.shape.ShapeAppearanceModel);
						/** @deprecated */
						public setShapedViewModel(param0: com.google.android.material.shape.ShapePathModel): void;
						public setTranslationZ(param0: number): void;
						public getScale(): number;
						/** @deprecated */
						public setShadowElevation(param0: number): void;
						public getShadowCompatRotation(): number;
						public getShadowVerticalOffset(): number;
						public getBottomRightCornerResolvedSize(): number;
						public setElevation(param0: number): void;
						public setShadowColor(param0: number): void;
						public setShadowBitmapDrawingEnable(param0: boolean): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public isStateful(): boolean;
						public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public getShadowOffsetY(): number;
						/** @deprecated */
						public constructor(param0: com.google.android.material.shape.ShapePathModel);
						public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setInterpolation(param0: number): void;
						public setPaintStyle(param0: globalAndroid.graphics.Paint.Style): void;
						public getElevation(): number;
						public invalidateSelf(): void;
						public constructor();
						public getTintList(): globalAndroid.content.res.ColorStateList;
						public getTransparentRegion(): globalAndroid.graphics.Region;
						public getStrokeTintList(): globalAndroid.content.res.ColorStateList;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setStroke(param0: number, param1: number): void;
						public getPadding(param0: globalAndroid.graphics.Rect): boolean;
						public getInterpolation(): number;
						public initializeElevationOverlay(param0: globalAndroid.content.Context): void;
						public onStateChange(param0: androidNative.Array<number>): boolean;
						public setScale(param0: number): void;
						public setAlpha(param0: number): void;
						public getOutline(param0: any): void;
						public setStrokeTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setStrokeWidth(param0: number): void;
						public setStrokeTint(param0: number): void;
						public getTranslationZ(): number;
						public setEdgeIntersectionCheckEnable(param0: boolean): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public getShadowCompatibilityMode(): number;
						public setCornerSize(param0: number): void;
						public setStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setZ(param0: number): void;
						public setPadding(param0: number, param1: number, param2: number, param3: number): void;
						public calculatePathForSize(param0: globalAndroid.graphics.RectF, param1: globalAndroid.graphics.Path): void;
						public setShadowCompatibilityMode(param0: number): void;
						public static createWithElevationOverlay(param0: globalAndroid.content.Context): com.google.android.material.shape.MaterialShapeDrawable;
						public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
						/** @deprecated */
						public getShapedViewModel(): com.google.android.material.shape.ShapePathModel;
						/** @deprecated */
						public isShadowEnabled(): boolean;
						public getParentAbsoluteElevation(): number;
						public getShadowOffsetX(): number;
						public mutate(): globalAndroid.graphics.drawable.Drawable;
						public getStrokeColor(): globalAndroid.content.res.ColorStateList;
						public setParentAbsoluteElevation(param0: number): void;
						public setStroke(param0: number, param1: globalAndroid.content.res.ColorStateList): void;
						public getStrokeWidth(): number;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public setShadowCompatRotation(param0: number): void;
						public isPointInTransparentRegion(param0: number, param1: number): boolean;
						public setUseTintColorForShadow(param0: boolean): void;
						public static createWithElevationOverlay(param0: globalAndroid.content.Context, param1: number): com.google.android.material.shape.MaterialShapeDrawable;
						/** @deprecated */
						public setShadowRadius(param0: number): void;
						public drawShape(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint, param2: globalAndroid.graphics.Path, param3: globalAndroid.graphics.RectF): void;
						/** @deprecated */
						public setShadowEnabled(param0: boolean): void;
						public setCornerSize(param0: com.google.android.material.shape.CornerSize): void;
						public getFillColor(): globalAndroid.content.res.ColorStateList;
						public requiresCompatShadow(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setFillColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getShadowRadius(): number;
						/** @deprecated */
						public getShadowElevation(): number;
						public setTint(param0: number): void;
						public getPaintStyle(): globalAndroid.graphics.Paint.Style;
						public getOpacity(): number;
						public getBoundsAsRectF(): globalAndroid.graphics.RectF;
						public getTopRightCornerResolvedSize(): number;
						public compositeElevationOverlayIfNeeded(param0: number): number;
						public getZ(): number;
						public isRoundRect(): boolean;
						public setShadowVerticalOffset(param0: number): void;
						public isElevationOverlayInitialized(): boolean;
						public getTopLeftCornerResolvedSize(): number;
					}
					export module MaterialShapeDrawable {
						export class CompatibilityShadowMode {
							public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeDrawable.CompatibilityShadowMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.shape.MaterialShapeDrawable$CompatibilityShadowMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class MaterialShapeDrawableState {
							public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeDrawable.MaterialShapeDrawableState>;
							public shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel;
							public elevationOverlayProvider: com.google.android.material.elevation.ElevationOverlayProvider;
							public colorFilter: globalAndroid.graphics.ColorFilter;
							public fillColor: globalAndroid.content.res.ColorStateList;
							public strokeColor: globalAndroid.content.res.ColorStateList;
							public strokeTintList: globalAndroid.content.res.ColorStateList;
							public tintList: globalAndroid.content.res.ColorStateList;
							public tintMode: globalAndroid.graphics.PorterDuff.Mode;
							public padding: globalAndroid.graphics.Rect;
							public scale: number;
							public interpolation: number;
							public strokeWidth: number;
							public alpha: number;
							public parentAbsoluteElevation: number;
							public elevation: number;
							public translationZ: number;
							public shadowCompatMode: number;
							public shadowCompatRadius: number;
							public shadowCompatOffset: number;
							public shadowCompatRotation: number;
							public useTintColorForShadow: boolean;
							public paintStyle: globalAndroid.graphics.Paint.Style;
							public constructor(param0: com.google.android.material.shape.MaterialShapeDrawable.MaterialShapeDrawableState);
							public constructor(param0: com.google.android.material.shape.ShapeAppearanceModel, param1: com.google.android.material.elevation.ElevationOverlayProvider);
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class MaterialShapeUtils {
						public static class: java.lang.Class<com.google.android.material.shape.MaterialShapeUtils>;
						public static setElevation(param0: globalAndroid.view.View, param1: number): void;
						public static setParentAbsoluteElevation(param0: globalAndroid.view.View): void;
						public static setParentAbsoluteElevation(param0: globalAndroid.view.View, param1: com.google.android.material.shape.MaterialShapeDrawable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class OffsetEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.OffsetEdgeTreatment>;
						public constructor();
						public constructor(param0: com.google.android.material.shape.EdgeTreatment, param1: number);
						/** @deprecated */
						public getEdgePath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getEdgePath(param0: number, param1: number, param2: number, param3: com.google.android.material.shape.ShapePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class RelativeCornerSize extends com.google.android.material.shape.CornerSize {
						public static class: java.lang.Class<com.google.android.material.shape.RelativeCornerSize>;
						public constructor(param0: number);
						public getCornerSize(param0: globalAndroid.graphics.RectF): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getRelativePercent(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class RoundedCornerTreatment extends com.google.android.material.shape.CornerTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.RoundedCornerTreatment>;
						public constructor();
						public getCornerPath(param0: com.google.android.material.shape.ShapePath, param1: number, param2: number, param3: globalAndroid.graphics.RectF, param4: com.google.android.material.shape.CornerSize): void;
						/** @deprecated */
						public constructor(param0: number);
						/** @deprecated */
						public getCornerPath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getCornerPath(param0: com.google.android.material.shape.ShapePath, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class ShapeAppearanceModel {
						public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearanceModel>;
						public static PILL: com.google.android.material.shape.CornerSize;
						public static builder(): com.google.android.material.shape.ShapeAppearanceModel.Builder;
						public constructor();
						public withTransformedCornerSizes(param0: com.google.android.material.shape.ShapeAppearanceModel.CornerSizeUnaryOperator): com.google.android.material.shape.ShapeAppearanceModel;
						public getTopEdge(): com.google.android.material.shape.EdgeTreatment;
						public getLeftEdge(): com.google.android.material.shape.EdgeTreatment;
						public withCornerSize(param0: number): com.google.android.material.shape.ShapeAppearanceModel;
						public static builder(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
						public getTopRightCorner(): com.google.android.material.shape.CornerTreatment;
						public getBottomLeftCorner(): com.google.android.material.shape.CornerTreatment;
						public static builder(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
						public getTopLeftCornerSize(): com.google.android.material.shape.CornerSize;
						public static builder(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
						public static builder(param0: globalAndroid.content.Context, param1: number, param2: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
						public getTopLeftCorner(): com.google.android.material.shape.CornerTreatment;
						public isRoundRect(param0: globalAndroid.graphics.RectF): boolean;
						public getTopRightCornerSize(): com.google.android.material.shape.CornerSize;
						public toBuilder(): com.google.android.material.shape.ShapeAppearanceModel.Builder;
						public getBottomEdge(): com.google.android.material.shape.EdgeTreatment;
						public getBottomLeftCornerSize(): com.google.android.material.shape.CornerSize;
						public withCornerSize(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel;
						public getBottomRightCorner(): com.google.android.material.shape.CornerTreatment;
						public getRightEdge(): com.google.android.material.shape.EdgeTreatment;
						public getBottomRightCornerSize(): com.google.android.material.shape.CornerSize;
					}
					export module ShapeAppearanceModel {
						export class Builder {
							public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearanceModel.Builder>;
							public setTopRightCornerSize(param0: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setRightEdge(param0: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setBottomLeftCornerSize(param0: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setTopRightCornerSize(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setBottomRightCornerSize(param0: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setAllCornerSizes(param0: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setTopLeftCornerSize(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setBottomEdge(param0: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setTopLeftCorner(param0: number, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setTopLeftCorner(param0: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setBottomLeftCorner(param0: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public build(): com.google.android.material.shape.ShapeAppearanceModel;
							public setTopLeftCornerSize(param0: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setTopRightCorner(param0: number, param1: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setBottomRightCorner(param0: number, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setBottomLeftCorner(param0: number, param1: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public constructor();
							public setBottomLeftCornerSize(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public constructor(param0: com.google.android.material.shape.ShapeAppearanceModel);
							public setBottomRightCorner(param0: number, param1: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setTopLeftCorner(param0: number, param1: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setBottomRightCorner(param0: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setTopRightCorner(param0: number, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setBottomLeftCorner(param0: number, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setAllCorners(param0: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setTopRightCorner(param0: com.google.android.material.shape.CornerTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setAllEdges(param0: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setAllCornerSizes(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setBottomRightCornerSize(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setLeftEdge(param0: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setTopEdge(param0: com.google.android.material.shape.EdgeTreatment): com.google.android.material.shape.ShapeAppearanceModel.Builder;
							public setAllCorners(param0: number, param1: number): com.google.android.material.shape.ShapeAppearanceModel.Builder;
						}
						export class CornerSizeUnaryOperator {
							public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearanceModel.CornerSizeUnaryOperator>;
							/**
							 * Constructs a new instance of the com.google.android.material.shape.ShapeAppearanceModel$CornerSizeUnaryOperator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
							});
							public constructor();
							public apply(param0: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class ShapeAppearancePathProvider {
						public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider>;
						public constructor();
						public static getInstance(): com.google.android.material.shape.ShapeAppearancePathProvider;
						public calculatePath(param0: com.google.android.material.shape.ShapeAppearanceModel, param1: number, param2: globalAndroid.graphics.RectF, param3: com.google.android.material.shape.ShapeAppearancePathProvider.PathListener, param4: globalAndroid.graphics.Path): void;
						public calculatePath(param0: com.google.android.material.shape.ShapeAppearanceModel, param1: number, param2: globalAndroid.graphics.RectF, param3: globalAndroid.graphics.Path): void;
					}
					export module ShapeAppearancePathProvider {
						export class Lazy {
							public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider.Lazy>;
						}
						export class PathListener {
							public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider.PathListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.shape.ShapeAppearancePathProvider$PathListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCornerPathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
								onEdgePathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
							});
							public constructor();
							public onEdgePathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
							public onCornerPathCreated(param0: com.google.android.material.shape.ShapePath, param1: globalAndroid.graphics.Matrix, param2: number): void;
						}
						export class ShapeAppearancePathSpec {
							public static class: java.lang.Class<com.google.android.material.shape.ShapeAppearancePathProvider.ShapeAppearancePathSpec>;
							public shapeAppearanceModel: com.google.android.material.shape.ShapeAppearanceModel;
							public path: globalAndroid.graphics.Path;
							public bounds: globalAndroid.graphics.RectF;
							public pathListener: com.google.android.material.shape.ShapeAppearancePathProvider.PathListener;
							public interpolation: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class ShapePath {
						public static class: java.lang.Class<com.google.android.material.shape.ShapePath>;
						public static ANGLE_LEFT: number;
						public startX: number;
						public startY: number;
						public endX: number;
						public endY: number;
						public currentShadowAngle: number;
						public endShadowAngle: number;
						public constructor();
						public reset(param0: number, param1: number): void;
						public cubicToPoint(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						public addArc(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						public quadToPoint(param0: number, param1: number, param2: number, param3: number): void;
						public constructor(param0: number, param1: number);
						public lineTo(param0: number, param1: number): void;
						public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
						public reset(param0: number, param1: number, param2: number, param3: number): void;
					}
					export module ShapePath {
						export class ArcShadowOperation extends com.google.android.material.shape.ShapePath.ShadowCompatOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.ArcShadowOperation>;
							public constructor(param0: com.google.android.material.shape.ShapePath.PathArcOperation);
							public draw(param0: com.google.android.material.shadow.ShadowRenderer, param1: number, param2: globalAndroid.graphics.Canvas): void;
							public draw(param0: globalAndroid.graphics.Matrix, param1: com.google.android.material.shadow.ShadowRenderer, param2: number, param3: globalAndroid.graphics.Canvas): void;
						}
						export class LineShadowOperation extends com.google.android.material.shape.ShapePath.ShadowCompatOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.LineShadowOperation>;
							public constructor(param0: com.google.android.material.shape.ShapePath.PathLineOperation, param1: number, param2: number);
							public draw(param0: com.google.android.material.shadow.ShadowRenderer, param1: number, param2: globalAndroid.graphics.Canvas): void;
							public draw(param0: globalAndroid.graphics.Matrix, param1: com.google.android.material.shadow.ShadowRenderer, param2: number, param3: globalAndroid.graphics.Canvas): void;
						}
						export class PathArcOperation extends com.google.android.material.shape.ShapePath.PathOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathArcOperation>;
							public left: number;
							public top: number;
							public right: number;
							public bottom: number;
							public startAngle: number;
							public sweepAngle: number;
							public constructor();
							public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
						export class PathCubicOperation extends com.google.android.material.shape.ShapePath.PathOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathCubicOperation>;
							public constructor();
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
							public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
						}
						export class PathLineOperation extends com.google.android.material.shape.ShapePath.PathOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathLineOperation>;
							public constructor();
							public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
						}
						export abstract class PathOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathOperation>;
							public matrix: globalAndroid.graphics.Matrix;
							public constructor();
							public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
						}
						export class PathQuadOperation extends com.google.android.material.shape.ShapePath.PathOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.PathQuadOperation>;
							public controlX: number;
							public controlY: number;
							public endX: number;
							public endY: number;
							public constructor();
							public applyToPath(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Path): void;
						}
						export abstract class ShadowCompatOperation {
							public static class: java.lang.Class<com.google.android.material.shape.ShapePath.ShadowCompatOperation>;
							public draw(param0: com.google.android.material.shadow.ShadowRenderer, param1: number, param2: globalAndroid.graphics.Canvas): void;
							public draw(param0: globalAndroid.graphics.Matrix, param1: com.google.android.material.shadow.ShadowRenderer, param2: number, param3: globalAndroid.graphics.Canvas): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class ShapePathModel extends com.google.android.material.shape.ShapeAppearanceModel {
						public static class: java.lang.Class<com.google.android.material.shape.ShapePathModel>;
						public constructor();
						/** @deprecated */
						public setAllEdges(param0: com.google.android.material.shape.EdgeTreatment): void;
						/** @deprecated */
						public setRightEdge(param0: com.google.android.material.shape.EdgeTreatment): void;
						/** @deprecated */
						public setLeftEdge(param0: com.google.android.material.shape.EdgeTreatment): void;
						/** @deprecated */
						public setEdgeTreatments(param0: com.google.android.material.shape.EdgeTreatment, param1: com.google.android.material.shape.EdgeTreatment, param2: com.google.android.material.shape.EdgeTreatment, param3: com.google.android.material.shape.EdgeTreatment): void;
						/** @deprecated */
						public setTopLeftCorner(param0: com.google.android.material.shape.CornerTreatment): void;
						/** @deprecated */
						public setTopRightCorner(param0: com.google.android.material.shape.CornerTreatment): void;
						/** @deprecated */
						public setBottomEdge(param0: com.google.android.material.shape.EdgeTreatment): void;
						/** @deprecated */
						public setCornerTreatments(param0: com.google.android.material.shape.CornerTreatment, param1: com.google.android.material.shape.CornerTreatment, param2: com.google.android.material.shape.CornerTreatment, param3: com.google.android.material.shape.CornerTreatment): void;
						/** @deprecated */
						public setBottomRightCorner(param0: com.google.android.material.shape.CornerTreatment): void;
						/** @deprecated */
						public setBottomLeftCorner(param0: com.google.android.material.shape.CornerTreatment): void;
						/** @deprecated */
						public setTopEdge(param0: com.google.android.material.shape.EdgeTreatment): void;
						/** @deprecated */
						public setAllCorners(param0: com.google.android.material.shape.CornerTreatment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class Shapeable {
						public static class: java.lang.Class<com.google.android.material.shape.Shapeable>;
						/**
						 * Constructs a new instance of the com.google.android.material.shape.Shapeable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
							getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						});
						public constructor();
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module shape {
					export class TriangleEdgeTreatment extends com.google.android.material.shape.EdgeTreatment {
						public static class: java.lang.Class<com.google.android.material.shape.TriangleEdgeTreatment>;
						public constructor();
						public constructor(param0: number, param1: boolean);
						/** @deprecated */
						public getEdgePath(param0: number, param1: number, param2: com.google.android.material.shape.ShapePath): void;
						public getEdgePath(param0: number, param1: number, param2: number, param3: com.google.android.material.shape.ShapePath): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module slider {
					export class BaseOnChangeListener<S>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.slider.BaseOnChangeListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.material.slider.BaseOnChangeListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onValueChange(param0: S, param1: number, param2: boolean): void;
						});
						public constructor();
						public onValueChange(param0: S, param1: number, param2: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module slider {
					export class BaseOnSliderTouchListener<S>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.slider.BaseOnSliderTouchListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.material.slider.BaseOnSliderTouchListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStartTrackingTouch(param0: S): void;
							onStopTrackingTouch(param0: S): void;
						});
						public constructor();
						public onStartTrackingTouch(param0: S): void;
						public onStopTrackingTouch(param0: S): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module slider {
					export abstract class BaseSlider<S, L, T>  extends globalAndroid.view.View {
						public static class: java.lang.Class<com.google.android.material.slider.BaseSlider<any,any,any>>;
						public setThumbElevation(param0: number): void;
						public getHaloTintList(): globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.content.Context);
						public setThumbStrokeColorResource(param0: number): void;
						public getLabelBehavior(): number;
						public getTickTintList(): globalAndroid.content.res.ColorStateList;
						public getTrackSidePadding(): number;
						public getFocusedThumbIndex(): number;
						public getThumbElevation(): number;
						public setTickInactiveTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setThumbStrokeColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setTickActiveTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public clearOnSliderTouchListeners(): void;
						public getValueTo(): number;
						public setValueFrom(param0: number): void;
						public getThumbRadius(): number;
						public onMeasure(param0: number, param1: number): void;
						public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
						public setThumbRadiusResource(param0: number): void;
						public isTickVisible(): boolean;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public setThumbRadius(param0: number): void;
						public setLabelBehavior(param0: number): void;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public addOnChangeListener(param0: any): void;
						public getTrackInactiveTintList(): globalAndroid.content.res.ColorStateList;
						public getThumbTintList(): globalAndroid.content.res.ColorStateList;
						public getAccessibilityClassName(): string;
						public setTrackInactiveTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setThumbElevationResource(param0: number): void;
						public setHaloRadius(param0: number): void;
						public setThumbStrokeWidthResource(param0: number): void;
						public setHaloRadiusResource(param0: number): void;
						public setTickVisible(param0: boolean): void;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public setLabelFormatter(param0: com.google.android.material.slider.LabelFormatter): void;
						public setActiveThumbIndex(param0: number): void;
						public setThumbStrokeWidth(param0: number): void;
						public setThumbTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setSeparationUnit(param0: number): void;
						public getTrackActiveTintList(): globalAndroid.content.res.ColorStateList;
						public getThumbStrokeColor(): globalAndroid.content.res.ColorStateList;
						public dispatchHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public onAttachedToWindow(): void;
						public getValueFrom(): number;
						public getMinSeparation(): number;
						public setFocusedThumbIndex(param0: number): void;
						public removeOnChangeListener(param0: any): void;
						public drawableStateChanged(): void;
						public getTrackHeight(): number;
						public getTrackTintList(): globalAndroid.content.res.ColorStateList;
						public getTrackWidth(): number;
						public getTickInactiveTintList(): globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setValueTo(param0: number): void;
						public setTrackTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public addOnSliderTouchListener(param0: any): void;
						public onFocusChanged(param0: boolean, param1: number, param2: globalAndroid.graphics.Rect): void;
						public hasLabelFormatter(): boolean;
						public setTrackHeight(param0: number): void;
						public setTrackActiveTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public getHaloRadius(): number;
						public onDetachedFromWindow(): void;
						public getThumbStrokeWidth(): number;
						public setEnabled(param0: boolean): void;
						public clearOnChangeListeners(): void;
						public getTickActiveTintList(): globalAndroid.content.res.ColorStateList;
						public getActiveThumbIndex(): number;
						public removeOnSliderTouchListener(param0: any): void;
						public setStepSize(param0: number): void;
						public getStepSize(): number;
						public setHaloTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setTickTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public pickActiveThumb(): boolean;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					}
					export module BaseSlider {
						export class AccessibilityEventSender {
							public static class: java.lang.Class<com.google.android.material.slider.BaseSlider.AccessibilityEventSender>;
							public run(): void;
						}
						export class AccessibilityHelper {
							public static class: java.lang.Class<com.google.android.material.slider.BaseSlider.AccessibilityHelper>;
							public getVirtualViewAt(param0: number, param1: number): number;
							public onPopulateNodeForVirtualView(param0: number, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
							public getVisibleVirtualViews(param0: java.util.List<java.lang.Integer>): void;
							public onPerformActionForVirtualView(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
						}
						export class SliderState {
							public static class: java.lang.Class<com.google.android.material.slider.BaseSlider.SliderState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.slider.BaseSlider.SliderState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
						export class TooltipDrawableFactory {
							public static class: java.lang.Class<com.google.android.material.slider.BaseSlider.TooltipDrawableFactory>;
							/**
							 * Constructs a new instance of the com.google.android.material.slider.BaseSlider$TooltipDrawableFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createTooltipDrawable(): com.google.android.material.tooltip.TooltipDrawable;
							});
							public constructor();
							public createTooltipDrawable(): com.google.android.material.tooltip.TooltipDrawable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module slider {
					export class BasicLabelFormatter extends com.google.android.material.slider.LabelFormatter {
						public static class: java.lang.Class<com.google.android.material.slider.BasicLabelFormatter>;
						public constructor();
						public getFormattedValue(param0: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module slider {
					export class LabelFormatter {
						public static class: java.lang.Class<com.google.android.material.slider.LabelFormatter>;
						/**
						 * Constructs a new instance of the com.google.android.material.slider.LabelFormatter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFormattedValue(param0: number): string;
						});
						public constructor();
						public static LABEL_GONE: number;
						public static LABEL_WITHIN_BOUNDS: number;
						public static LABEL_FLOATING: number;
						public getFormattedValue(param0: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module slider {
					export class RangeSlider extends com.google.android.material.slider.BaseSlider<com.google.android.material.slider.RangeSlider,com.google.android.material.slider.RangeSlider.OnChangeListener,com.google.android.material.slider.RangeSlider.OnSliderTouchListener> {
						public static class: java.lang.Class<com.google.android.material.slider.RangeSlider>;
						public getMinSeparation(): number;
						public setMinSeparation(param0: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public getValues(): java.util.List<java.lang.Float>;
						public setValues(param0: java.util.List<java.lang.Float>): void;
						public setMinSeparationValue(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public setValues(param0: androidNative.Array<java.lang.Float>): void;
					}
					export module RangeSlider {
						export class OnChangeListener extends com.google.android.material.slider.BaseOnChangeListener<com.google.android.material.slider.RangeSlider> {
							public static class: java.lang.Class<com.google.android.material.slider.RangeSlider.OnChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.slider.RangeSlider$OnChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onValueChange(param0: any, param1: number, param2: boolean): void;
							});
							public constructor();
							public onValueChange(param0: any, param1: number, param2: boolean): void;
						}
						export class OnSliderTouchListener extends com.google.android.material.slider.BaseOnSliderTouchListener<com.google.android.material.slider.RangeSlider> {
							public static class: java.lang.Class<com.google.android.material.slider.RangeSlider.OnSliderTouchListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.slider.RangeSlider$OnSliderTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStartTrackingTouch(param0: any): void;
								onStopTrackingTouch(param0: any): void;
							});
							public constructor();
							public onStopTrackingTouch(param0: any): void;
							public onStartTrackingTouch(param0: any): void;
						}
						export class RangeSliderState {
							public static class: java.lang.Class<com.google.android.material.slider.RangeSlider.RangeSliderState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.slider.RangeSlider.RangeSliderState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module slider {
					export class Slider extends com.google.android.material.slider.BaseSlider<com.google.android.material.slider.Slider,com.google.android.material.slider.Slider.OnChangeListener,com.google.android.material.slider.Slider.OnSliderTouchListener> {
						public static class: java.lang.Class<com.google.android.material.slider.Slider>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public pickActiveThumb(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setValue(param0: number): void;
						public getValue(): number;
					}
					export module Slider {
						export class OnChangeListener extends com.google.android.material.slider.BaseOnChangeListener<com.google.android.material.slider.Slider> {
							public static class: java.lang.Class<com.google.android.material.slider.Slider.OnChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.slider.Slider$OnChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onValueChange(param0: any, param1: number, param2: boolean): void;
							});
							public constructor();
							public onValueChange(param0: any, param1: number, param2: boolean): void;
						}
						export class OnSliderTouchListener extends com.google.android.material.slider.BaseOnSliderTouchListener<com.google.android.material.slider.Slider> {
							public static class: java.lang.Class<com.google.android.material.slider.Slider.OnSliderTouchListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.slider.Slider$OnSliderTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStartTrackingTouch(param0: any): void;
								onStopTrackingTouch(param0: any): void;
							});
							public constructor();
							public onStopTrackingTouch(param0: any): void;
							public onStartTrackingTouch(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export abstract class BaseTransientBottomBar<B>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar<any>>;
						public static ANIMATION_MODE_SLIDE: number;
						public static ANIMATION_MODE_FADE: number;
						public static LENGTH_INDEFINITE: number;
						public static LENGTH_SHORT: number;
						public static LENGTH_LONG: number;
						public view: com.google.android.material.snackbar.BaseTransientBottomBar.SnackbarBaseLayout;
						public hasSnackbarStyleAttr(): boolean;
						public setBehavior(param0: com.google.android.material.snackbar.BaseTransientBottomBar.Behavior): B;
						public constructor(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: com.google.android.material.snackbar.ContentViewCallback);
						public getAnchorView(): globalAndroid.view.View;
						public dismiss(): void;
						public isAnchorViewLayoutListenerEnabled(): boolean;
						public setDuration(param0: number): B;
						public isShownOrQueued(): boolean;
						public setAnimationMode(param0: number): B;
						public getSnackbarBaseLayoutResId(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.view.View, param3: com.google.android.material.snackbar.ContentViewCallback);
						public setGestureInsetBottomIgnored(param0: boolean): B;
						public addCallback(param0: com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<B>): B;
						public isShown(): boolean;
						public setAnchorView(param0: globalAndroid.view.View): B;
						public getDuration(): number;
						public removeCallback(param0: com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<B>): B;
						public getContext(): globalAndroid.content.Context;
						public isGestureInsetBottomIgnored(): boolean;
						public setAnchorView(param0: number): B;
						public getBehavior(): com.google.android.material.snackbar.BaseTransientBottomBar.Behavior;
						public getAnimationMode(): number;
						public show(): void;
						public setAnchorViewLayoutListenerEnabled(param0: boolean): void;
						public getNewBehavior(): com.google.android.material.behavior.SwipeDismissBehavior<any>;
						public getView(): globalAndroid.view.View;
						public dispatchDismiss(param0: number): void;
					}
					export module BaseTransientBottomBar {
						export class AnimationMode {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.AnimationMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$AnimationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export abstract class BaseCallback<B>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<any>>;
							public static DISMISS_EVENT_SWIPE: number;
							public static DISMISS_EVENT_ACTION: number;
							public static DISMISS_EVENT_TIMEOUT: number;
							public static DISMISS_EVENT_MANUAL: number;
							public static DISMISS_EVENT_CONSECUTIVE: number;
							public constructor();
							public onShown(param0: B): void;
							public onDismissed(param0: B, param1: number): void;
						}
						export module BaseCallback {
							export class DismissEvent {
								public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback.DismissEvent>;
								/**
								 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$BaseCallback$DismissEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
						}
						export class Behavior extends com.google.android.material.behavior.SwipeDismissBehavior<globalAndroid.view.View> {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.Behavior>;
							public constructor();
							public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.MotionEvent): boolean;
							public canSwipeDismissView(param0: globalAndroid.view.View): boolean;
							public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: any, param2: globalAndroid.view.MotionEvent): boolean;
						}
						export class BehaviorDelegate {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.BehaviorDelegate>;
							public constructor(param0: com.google.android.material.behavior.SwipeDismissBehavior<any>);
							public canSwipeDismissView(param0: globalAndroid.view.View): boolean;
							public onInterceptTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.MotionEvent): void;
							public setBaseTransientBottomBar(param0: com.google.android.material.snackbar.BaseTransientBottomBar<any>): void;
						}
						export class ContentViewCallback extends com.google.android.material.snackbar.ContentViewCallback {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.ContentViewCallback>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$ContentViewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								animateContentIn(param0: number, param1: number): void;
								animateContentOut(param0: number, param1: number): void;
							});
							public constructor();
							public animateContentOut(param0: number, param1: number): void;
							public animateContentIn(param0: number, param1: number): void;
						}
						export class Duration {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.Duration>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$Duration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class OnAttachStateChangeListener {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.OnAttachStateChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$OnAttachStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onViewAttachedToWindow(param0: globalAndroid.view.View): void;
								onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
							});
							public constructor();
							public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
							public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
						}
						export class OnLayoutChangeListener {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.OnLayoutChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.BaseTransientBottomBar$OnLayoutChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
							});
							public constructor();
							public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						}
						export class SnackbarBaseLayout {
							public static class: java.lang.Class<com.google.android.material.snackbar.BaseTransientBottomBar.SnackbarBaseLayout>;
							public onDetachedFromWindow(): void;
							public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
							public setBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public onAttachedToWindow(): void;
							public setBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
							public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export class ContentViewCallback {
						public static class: java.lang.Class<com.google.android.material.snackbar.ContentViewCallback>;
						/**
						 * Constructs a new instance of the com.google.android.material.snackbar.ContentViewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							animateContentIn(param0: number, param1: number): void;
							animateContentOut(param0: number, param1: number): void;
						});
						public constructor();
						public animateContentIn(param0: number, param1: number): void;
						public animateContentOut(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export class Snackbar extends com.google.android.material.snackbar.BaseTransientBottomBar<com.google.android.material.snackbar.Snackbar> {
						public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar>;
						public static make(param0: globalAndroid.view.View, param1: number, param2: number): com.google.android.material.snackbar.Snackbar;
						public isShown(): boolean;
						public setAction(param0: number, param1: globalAndroid.view.View.OnClickListener): com.google.android.material.snackbar.Snackbar;
						public getDuration(): number;
						public dismiss(): void;
						public setBackgroundTint(param0: number): com.google.android.material.snackbar.Snackbar;
						public setText(param0: string): com.google.android.material.snackbar.Snackbar;
						public setTextColor(param0: globalAndroid.content.res.ColorStateList): com.google.android.material.snackbar.Snackbar;
						public setMaxInlineActionWidth(param0: number): com.google.android.material.snackbar.Snackbar;
						public setAction(param0: string, param1: globalAndroid.view.View.OnClickListener): com.google.android.material.snackbar.Snackbar;
						/** @deprecated */
						public static hasSnackbarButtonStyleAttr(param0: globalAndroid.content.Context): boolean;
						public setTextColor(param0: number): com.google.android.material.snackbar.Snackbar;
						public show(): void;
						public setActionTextColor(param0: globalAndroid.content.res.ColorStateList): com.google.android.material.snackbar.Snackbar;
						public static make(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: string, param3: number): com.google.android.material.snackbar.Snackbar;
						public setBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): com.google.android.material.snackbar.Snackbar;
						public static make(param0: globalAndroid.view.View, param1: string, param2: number): com.google.android.material.snackbar.Snackbar;
						public setText(param0: number): com.google.android.material.snackbar.Snackbar;
						/** @deprecated */
						public setCallback(param0: com.google.android.material.snackbar.Snackbar.Callback): com.google.android.material.snackbar.Snackbar;
						public setActionTextColor(param0: number): com.google.android.material.snackbar.Snackbar;
						public setBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): com.google.android.material.snackbar.Snackbar;
					}
					export module Snackbar {
						export class Callback extends com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback<com.google.android.material.snackbar.Snackbar> {
							public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar.Callback>;
							public static DISMISS_EVENT_SWIPE: number;
							public static DISMISS_EVENT_ACTION: number;
							public static DISMISS_EVENT_TIMEOUT: number;
							public static DISMISS_EVENT_MANUAL: number;
							public static DISMISS_EVENT_CONSECUTIVE: number;
							public constructor();
							public onDismissed(param0: com.google.android.material.snackbar.Snackbar, param1: number): void;
							public onDismissed(param0: any, param1: number): void;
							public onShown(param0: any): void;
							public onShown(param0: com.google.android.material.snackbar.Snackbar): void;
						}
						export class SnackbarLayout extends com.google.android.material.snackbar.BaseTransientBottomBar.SnackbarBaseLayout {
							public static class: java.lang.Class<com.google.android.material.snackbar.Snackbar.SnackbarLayout>;
							public onMeasure(param0: number, param1: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export class SnackbarContentLayout implements com.google.android.material.snackbar.ContentViewCallback {
						public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarContentLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public setMaxInlineActionWidth(param0: number): void;
						public getActionView(): globalAndroid.widget.Button;
						public animateContentIn(param0: number, param1: number): void;
						public animateContentOut(param0: number, param1: number): void;
						public getMessageView(): globalAndroid.widget.TextView;
						public onFinishInflate(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module snackbar {
					export class SnackbarManager {
						public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarManager>;
						public isCurrent(param0: com.google.android.material.snackbar.SnackbarManager.Callback): boolean;
						public onShown(param0: com.google.android.material.snackbar.SnackbarManager.Callback): void;
						public dismiss(param0: com.google.android.material.snackbar.SnackbarManager.Callback, param1: number): void;
						public pauseTimeout(param0: com.google.android.material.snackbar.SnackbarManager.Callback): void;
						public onDismissed(param0: com.google.android.material.snackbar.SnackbarManager.Callback): void;
						public isCurrentOrNext(param0: com.google.android.material.snackbar.SnackbarManager.Callback): boolean;
						public restoreTimeoutIfPaused(param0: com.google.android.material.snackbar.SnackbarManager.Callback): void;
						public show(param0: number, param1: com.google.android.material.snackbar.SnackbarManager.Callback): void;
					}
					export module SnackbarManager {
						export class Callback {
							public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarManager.Callback>;
							/**
							 * Constructs a new instance of the com.google.android.material.snackbar.SnackbarManager$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								show(): void;
								dismiss(param0: number): void;
							});
							public constructor();
							public dismiss(param0: number): void;
							public show(): void;
						}
						export class SnackbarRecord {
							public static class: java.lang.Class<com.google.android.material.snackbar.SnackbarManager.SnackbarRecord>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module stateful {
					export class ExtendableSavedState {
						public static class: java.lang.Class<com.google.android.material.stateful.ExtendableSavedState>;
						public extendableStates: androidx.collection.SimpleArrayMap<string,globalAndroid.os.Bundle>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.stateful.ExtendableSavedState>;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public constructor(param0: globalAndroid.os.Parcelable);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module switchmaterial {
					export class SwitchMaterial {
						public static class: java.lang.Class<com.google.android.material.switchmaterial.SwitchMaterial>;
						public isUseMaterialThemeColors(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public onAttachedToWindow(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setUseMaterialThemeColors(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module tabs {
					export class ElasticTabIndicatorInterpolator extends com.google.android.material.tabs.TabIndicatorInterpolator {
						public static class: java.lang.Class<com.google.android.material.tabs.ElasticTabIndicatorInterpolator>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module tabs {
					export class TabIndicatorInterpolator {
						public static class: java.lang.Class<com.google.android.material.tabs.TabIndicatorInterpolator>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module tabs {
					export class TabItem {
						public static class: java.lang.Class<com.google.android.material.tabs.TabItem>;
						public text: string;
						public icon: globalAndroid.graphics.drawable.Drawable;
						public customLayout: number;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module tabs {
					export class TabLayout {
						public static class: java.lang.Class<com.google.android.material.tabs.TabLayout>;
						public static MODE_SCROLLABLE: number;
						public static MODE_FIXED: number;
						public static MODE_AUTO: number;
						public static TAB_LABEL_VISIBILITY_UNLABELED: number;
						public static TAB_LABEL_VISIBILITY_LABELED: number;
						public static GRAVITY_FILL: number;
						public static GRAVITY_CENTER: number;
						public static GRAVITY_START: number;
						public static INDICATOR_GRAVITY_BOTTOM: number;
						public static INDICATOR_GRAVITY_CENTER: number;
						public static INDICATOR_GRAVITY_TOP: number;
						public static INDICATOR_GRAVITY_STRETCH: number;
						public static INDICATOR_ANIMATION_MODE_LINEAR: number;
						public static INDICATOR_ANIMATION_MODE_ELASTIC: number;
						public isTabIndicatorFullWidth(): boolean;
						public getTabIconTint(): globalAndroid.content.res.ColorStateList;
						public constructor(param0: globalAndroid.content.Context);
						public setTabIconTintResource(param0: number): void;
						public removeOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.OnTabSelectedListener): void;
						public setInlineLabelResource(param0: number): void;
						public setElevation(param0: number): void;
						/** @deprecated */
						public setTabsFromPagerAdapter(param0: androidx.viewpager.widget.PagerAdapter): void;
						public shouldDelayChildPressedState(): boolean;
						public setTabIconTint(param0: globalAndroid.content.res.ColorStateList): void;
						public setTabMode(param0: number): void;
						public setTabGravity(param0: number): void;
						public getSelectedTabPosition(): number;
						public removeTabAt(param0: number): void;
						public addOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.OnTabSelectedListener): void;
						public onMeasure(param0: number, param1: number): void;
						/** @deprecated */
						public addOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): void;
						public addTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number, param2: boolean): void;
						public setInlineLabel(param0: boolean): void;
						public setScrollPosition(param0: number, param1: number, param2: boolean, param3: boolean): void;
						public getTabTextColors(): globalAndroid.content.res.ColorStateList;
						public setScrollPosition(param0: number, param1: number, param2: boolean): void;
						public setSelectedTabIndicator(param0: number): void;
						/** @deprecated */
						public setSelectedTabIndicatorHeight(param0: number): void;
						public addTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number): void;
						public setUnboundedRipple(param0: boolean): void;
						public setSelectedTabIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
						public createTabFromPool(): com.google.android.material.tabs.TabLayout.Tab;
						public setSelectedTabIndicatorGravity(param0: number): void;
						public setTabRippleColorResource(param0: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getTabCount(): number;
						public getTabIndicatorGravity(): number;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public setSelectedTabIndicatorColor(param0: number): void;
						public getTabMode(): number;
						public addTab(param0: com.google.android.material.tabs.TabLayout.Tab): void;
						public getTabAt(param0: number): com.google.android.material.tabs.TabLayout.Tab;
						public clearOnTabSelectedListeners(): void;
						public getTabSelectedIndicator(): globalAndroid.graphics.drawable.Drawable;
						public onAttachedToWindow(): void;
						public setupWithViewPager(param0: androidx.viewpager.widget.ViewPager): void;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public removeTab(param0: com.google.android.material.tabs.TabLayout.Tab): void;
						public selectTab(param0: com.google.android.material.tabs.TabLayout.Tab): void;
						public getTabGravity(): number;
						public newTab(): com.google.android.material.tabs.TabLayout.Tab;
						public setupWithViewPager(param0: androidx.viewpager.widget.ViewPager, param1: boolean): void;
						public setTabRippleColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setTabTextColors(param0: number, param1: number): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public releaseFromTabPool(param0: com.google.android.material.tabs.TabLayout.Tab): boolean;
						public addView(param0: globalAndroid.view.View): void;
						public getTabRippleColor(): globalAndroid.content.res.ColorStateList;
						/** @deprecated */
						public setOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.OnTabSelectedListener): void;
						public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.widget.FrameLayout.LayoutParams;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public removeAllTabs(): void;
						public selectTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: boolean): void;
						public isInlineLabel(): boolean;
						public onDetachedFromWindow(): void;
						public setTabTextColors(param0: globalAndroid.content.res.ColorStateList): void;
						/** @deprecated */
						public setOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): void;
						/** @deprecated */
						public removeOnTabSelectedListener(param0: com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>): void;
						public hasUnboundedRipple(): boolean;
						public setTabIndicatorFullWidth(param0: boolean): void;
						public setUnboundedRippleResource(param0: number): void;
						public addTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: boolean): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getTabIndicatorAnimationMode(): number;
						public setTabIndicatorAnimationMode(param0: number): void;
					}
					export module TabLayout {
						export class AdapterChangeListener {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.AdapterChangeListener>;
							public onAdapterChanged(param0: androidx.viewpager.widget.ViewPager, param1: androidx.viewpager.widget.PagerAdapter, param2: androidx.viewpager.widget.PagerAdapter): void;
						}
						export class BaseOnTabSelectedListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<any>>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$BaseOnTabSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTabSelected(param0: T): void;
								onTabUnselected(param0: T): void;
								onTabReselected(param0: T): void;
							});
							public constructor();
							public onTabUnselected(param0: T): void;
							public onTabReselected(param0: T): void;
							public onTabSelected(param0: T): void;
						}
						export class LabelVisibility {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.LabelVisibility>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$LabelVisibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class Mode {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.Mode>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$Mode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class OnTabSelectedListener extends com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener<com.google.android.material.tabs.TabLayout.Tab> {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.OnTabSelectedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$OnTabSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTabSelected(param0: any): void;
								onTabUnselected(param0: any): void;
								onTabReselected(param0: any): void;
							});
							public constructor();
							public onTabReselected(param0: any): void;
							public onTabSelected(param0: any): void;
							public onTabUnselected(param0: any): void;
						}
						export class PagerAdapterObserver {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.PagerAdapterObserver>;
							public onChanged(): void;
							public onInvalidated(): void;
						}
						export class SlidingTabIndicator {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.SlidingTabIndicator>;
							public onMeasure(param0: number, param1: number): void;
							public onRtlPropertiesChanged(param0: number): void;
							public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
						}
						export class Tab {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.Tab>;
							public static INVALID_POSITION: number;
							public parent: com.google.android.material.tabs.TabLayout;
							public view: com.google.android.material.tabs.TabLayout.TabView;
							public getPosition(): number;
							public setIcon(param0: globalAndroid.graphics.drawable.Drawable): com.google.android.material.tabs.TabLayout.Tab;
							public setCustomView(param0: globalAndroid.view.View): com.google.android.material.tabs.TabLayout.Tab;
							public setTag(param0: any): com.google.android.material.tabs.TabLayout.Tab;
							public select(): void;
							public getIcon(): globalAndroid.graphics.drawable.Drawable;
							public setContentDescription(param0: number): com.google.android.material.tabs.TabLayout.Tab;
							public getTag(): any;
							public setTabLabelVisibility(param0: number): com.google.android.material.tabs.TabLayout.Tab;
							public getContentDescription(): string;
							public constructor();
							public getTabLabelVisibility(): number;
							public setId(param0: number): com.google.android.material.tabs.TabLayout.Tab;
							public getText(): string;
							public isSelected(): boolean;
							public setText(param0: string): com.google.android.material.tabs.TabLayout.Tab;
							public setContentDescription(param0: string): com.google.android.material.tabs.TabLayout.Tab;
							public getCustomView(): globalAndroid.view.View;
							public setIcon(param0: number): com.google.android.material.tabs.TabLayout.Tab;
							public getOrCreateBadge(): com.google.android.material.badge.BadgeDrawable;
							public setText(param0: number): com.google.android.material.tabs.TabLayout.Tab;
							public getBadge(): com.google.android.material.badge.BadgeDrawable;
							public getId(): number;
							public removeBadge(): void;
							public setCustomView(param0: number): com.google.android.material.tabs.TabLayout.Tab;
						}
						export class TabGravity {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabGravity>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$TabGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class TabIndicatorAnimationMode {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabIndicatorAnimationMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$TabIndicatorAnimationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class TabIndicatorGravity {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabIndicatorGravity>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayout$TabIndicatorGravity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class TabLayoutOnPageChangeListener {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabLayoutOnPageChangeListener>;
							public onPageScrollStateChanged(param0: number): void;
							public onPageScrolled(param0: number, param1: number, param2: number): void;
							public constructor(param0: com.google.android.material.tabs.TabLayout);
							public onPageSelected(param0: number): void;
						}
						export class TabView {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.TabView>;
							public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
							public constructor(param0: com.google.android.material.tabs.TabLayout, param1: globalAndroid.content.Context);
							public performClick(): boolean;
							public onMeasure(param0: number, param1: number): void;
							public drawableStateChanged(): void;
							public setSelected(param0: boolean): void;
							public getTab(): com.google.android.material.tabs.TabLayout.Tab;
						}
						export class ViewPagerOnTabSelectedListener extends com.google.android.material.tabs.TabLayout.OnTabSelectedListener {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayout.ViewPagerOnTabSelectedListener>;
							public onTabUnselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabReselected(param0: any): void;
							public onTabSelected(param0: any): void;
							public onTabSelected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabReselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public constructor(param0: androidx.viewpager.widget.ViewPager);
							public onTabUnselected(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module tabs {
					export class TabLayoutMediator {
						public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator>;
						public constructor(param0: com.google.android.material.tabs.TabLayout, param1: androidx.viewpager2.widget.ViewPager2, param2: boolean, param3: boolean, param4: com.google.android.material.tabs.TabLayoutMediator.TabConfigurationStrategy);
						public isAttached(): boolean;
						public constructor(param0: com.google.android.material.tabs.TabLayout, param1: androidx.viewpager2.widget.ViewPager2, param2: boolean, param3: com.google.android.material.tabs.TabLayoutMediator.TabConfigurationStrategy);
						public detach(): void;
						public attach(): void;
						public constructor(param0: com.google.android.material.tabs.TabLayout, param1: androidx.viewpager2.widget.ViewPager2, param2: com.google.android.material.tabs.TabLayoutMediator.TabConfigurationStrategy);
					}
					export module TabLayoutMediator {
						export class PagerAdapterObserver {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.PagerAdapterObserver>;
							public onChanged(): void;
							public onItemRangeInserted(param0: number, param1: number): void;
							public onItemRangeChanged(param0: number, param1: number, param2: any): void;
							public onItemRangeChanged(param0: number, param1: number): void;
							public onItemRangeRemoved(param0: number, param1: number): void;
							public onItemRangeMoved(param0: number, param1: number, param2: number): void;
						}
						export class TabConfigurationStrategy {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.TabConfigurationStrategy>;
							/**
							 * Constructs a new instance of the com.google.android.material.tabs.TabLayoutMediator$TabConfigurationStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConfigureTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number): void;
							});
							public constructor();
							public onConfigureTab(param0: com.google.android.material.tabs.TabLayout.Tab, param1: number): void;
						}
						export class TabLayoutOnPageChangeCallback {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.TabLayoutOnPageChangeCallback>;
							public onPageScrollStateChanged(param0: number): void;
							public onPageScrolled(param0: number, param1: number, param2: number): void;
							public onPageSelected(param0: number): void;
						}
						export class ViewPagerOnTabSelectedListener extends com.google.android.material.tabs.TabLayout.OnTabSelectedListener {
							public static class: java.lang.Class<com.google.android.material.tabs.TabLayoutMediator.ViewPagerOnTabSelectedListener>;
							public onTabUnselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabReselected(param0: any): void;
							public onTabSelected(param0: any): void;
							public onTabSelected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabReselected(param0: com.google.android.material.tabs.TabLayout.Tab): void;
							public onTabUnselected(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class ClearTextEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.ClearTextEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class CustomEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.CustomEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class CutoutDrawable extends com.google.android.material.shape.MaterialShapeDrawable {
						public static class: java.lang.Class<com.google.android.material.textfield.CutoutDrawable>;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class DropdownMenuEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.DropdownMenuEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export abstract class EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.EndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class IndicatorViewController {
						public static class: java.lang.Class<com.google.android.material.textfield.IndicatorViewController>;
						public constructor(param0: com.google.android.material.textfield.TextInputLayout);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class MaterialAutoCompleteTextView {
						public static class: java.lang.Class<com.google.android.material.textfield.MaterialAutoCompleteTextView>;
						public constructor(param0: globalAndroid.content.Context);
						public setAdapter(param0: globalAndroid.widget.ListAdapter): void;
						public getHint(): string;
						public onAttachedToWindow(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public showDropDown(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class NoEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.NoEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class PasswordToggleEndIconDelegate extends com.google.android.material.textfield.EndIconDelegate {
						public static class: java.lang.Class<com.google.android.material.textfield.PasswordToggleEndIconDelegate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class TextInputEditText {
						public static class: java.lang.Class<com.google.android.material.textfield.TextInputEditText>;
						public constructor(param0: globalAndroid.content.Context);
						public getHint(): string;
						public isTextInputLayoutFocusedRectEnabled(): boolean;
						public getFocusedRect(param0: globalAndroid.graphics.Rect): void;
						public requestRectangleOnScreen(param0: globalAndroid.graphics.Rect): boolean;
						public onAttachedToWindow(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
						public setTextInputLayoutFocusedRectEnabled(param0: boolean): void;
						public getGlobalVisibleRect(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Point): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textfield {
					export class TextInputLayout {
						public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout>;
						public static BOX_BACKGROUND_NONE: number;
						public static BOX_BACKGROUND_FILLED: number;
						public static BOX_BACKGROUND_OUTLINE: number;
						public static END_ICON_CUSTOM: number;
						public static END_ICON_NONE: number;
						public static END_ICON_PASSWORD_TOGGLE: number;
						public static END_ICON_CLEAR_TEXT: number;
						public static END_ICON_DROPDOWN_MENU: number;
						public setPlaceholderText(param0: string): void;
						public constructor(param0: globalAndroid.content.Context);
						public setCounterOverflowTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						/** @deprecated */
						public isPasswordVisibilityToggleEnabled(): boolean;
						public refreshEndIconDrawableState(): void;
						public setEndIconVisible(param0: boolean): void;
						/** @deprecated */
						public setPasswordVisibilityToggleTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setBoxStrokeErrorColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getBoxCornerRadiusBottomEnd(): number;
						public getHint(): string;
						public isHintAnimationEnabled(): boolean;
						public getBoxBackgroundMode(): number;
						public setErrorIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setEndIconDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public isProvidingHint(): boolean;
						public setStartIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public setStartIconCheckable(param0: boolean): void;
						public onMeasure(param0: number, param1: number): void;
						public setDefaultHintTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setBoxBackgroundColor(param0: number): void;
						public setStartIconOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public setErrorIconOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public setStartIconContentDescription(param0: number): void;
						public refreshStartIconDrawableState(): void;
						public setBoxStrokeWidthFocused(param0: number): void;
						public getErrorCurrentTextColors(): number;
						public setStartIconVisible(param0: boolean): void;
						public setHintEnabled(param0: boolean): void;
						public isEndIconVisible(): boolean;
						public setBoxBackgroundMode(param0: number): void;
						public removeOnEditTextAttachedListener(param0: com.google.android.material.textfield.TextInputLayout.OnEditTextAttachedListener): void;
						public setStartIconOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
						public setEndIconActivated(param0: boolean): void;
						public setCounterEnabled(param0: boolean): void;
						public getEditText(): globalAndroid.widget.EditText;
						public getPlaceholderText(): string;
						public setSuffixTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setStartIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setErrorIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						/** @deprecated */
						public getPasswordVisibilityToggleDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setPrefixText(param0: string): void;
						public setTypeface(param0: globalAndroid.graphics.Typeface): void;
						public setErrorTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setErrorIconOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
						public setBoxCornerRadii(param0: number, param1: number, param2: number, param3: number): void;
						public getBoxStrokeWidthFocused(): number;
						public removeOnEndIconChangedListener(param0: com.google.android.material.textfield.TextInputLayout.OnEndIconChangedListener): void;
						public setHintTextAppearance(param0: number): void;
						public isExpandedHintEnabled(): boolean;
						public getErrorContentDescription(): string;
						public getEndIconContentDescription(): string;
						public dispatchProvideAutofillStructure(param0: any, param1: number): void;
						public setBoxStrokeWidthResource(param0: number): void;
						public getCounterTextColor(): globalAndroid.content.res.ColorStateList;
						public setEndIconContentDescription(param0: string): void;
						public addOnEndIconChangedListener(param0: com.google.android.material.textfield.TextInputLayout.OnEndIconChangedListener): void;
						public setCounterTextAppearance(param0: number): void;
						public getBoxCornerRadiusTopStart(): number;
						public getHintTextColor(): globalAndroid.content.res.ColorStateList;
						public setEndIconContentDescription(param0: number): void;
						public setEndIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public clearOnEndIconChangedListeners(): void;
						public setHelperTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getSuffixTextColor(): globalAndroid.content.res.ColorStateList;
						public setEnabled(param0: boolean): void;
						public refreshErrorIconDrawableState(): void;
						public setBoxCornerRadiiResources(param0: number, param1: number, param2: number, param3: number): void;
						public getPrefixTextView(): globalAndroid.widget.TextView;
						public getPrefixText(): string;
						public isStartIconVisible(): boolean;
						public isHelperTextEnabled(): boolean;
						public setCounterMaxLength(param0: number): void;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public getBoxStrokeWidth(): number;
						public setCounterTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getStartIconContentDescription(): string;
						/** @deprecated */
						public passwordVisibilityToggleRequested(param0: boolean): void;
						public setBoxBackgroundColorResource(param0: number): void;
						public setHelperText(param0: string): void;
						public getCounterMaxLength(): number;
						public getEndIconMode(): number;
						public setStartIconDrawable(param0: number): void;
						public setStartIconContentDescription(param0: string): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setEndIconOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
						/** @deprecated */
						public setPasswordVisibilityToggleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getBaseline(): number;
						public setErrorTextAppearance(param0: number): void;
						public setEndIconMode(param0: number): void;
						public getTypeface(): globalAndroid.graphics.Typeface;
						public setBoxStrokeColor(param0: number): void;
						public getBoxBackgroundColor(): number;
						public isCounterEnabled(): boolean;
						public setHelperTextTextAppearance(param0: number): void;
						public getBoxCornerRadiusTopEnd(): number;
						public getCounterOverflowTextColor(): globalAndroid.content.res.ColorStateList;
						public setHintAnimationEnabled(param0: boolean): void;
						public setErrorIconDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setPlaceholderTextAppearance(param0: number): void;
						public getPlaceholderTextAppearance(): number;
						public getSuffixText(): string;
						/** @deprecated */
						public setPasswordVisibilityToggleDrawable(param0: number): void;
						public setPlaceholderTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setExpandedHintEnabled(param0: boolean): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setHintTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public setErrorIconDrawable(param0: number): void;
						public setHelperTextEnabled(param0: boolean): void;
						public getError(): string;
						public setBoxStrokeWidthFocusedResource(param0: number): void;
						public setEndIconTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setEndIconCheckable(param0: boolean): void;
						public getPrefixTextColor(): globalAndroid.content.res.ColorStateList;
						public setTextInputAccessibilityDelegate(param0: com.google.android.material.textfield.TextInputLayout.AccessibilityDelegate): void;
						public setErrorEnabled(param0: boolean): void;
						public setHint(param0: string): void;
						public addOnEditTextAttachedListener(param0: com.google.android.material.textfield.TextInputLayout.OnEditTextAttachedListener): void;
						public getBoxStrokeColor(): number;
						public getSuffixTextView(): globalAndroid.widget.TextView;
						public setSuffixTextAppearance(param0: number): void;
						public setErrorContentDescription(param0: string): void;
						public getDefaultHintTextColor(): globalAndroid.content.res.ColorStateList;
						public getBoxCornerRadiusBottomStart(): number;
						public setCounterOverflowTextAppearance(param0: number): void;
						public setError(param0: string): void;
						public setPrefixTextAppearance(param0: number): void;
						public drawableStateChanged(): void;
						public getHelperText(): string;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public isEndIconCheckable(): boolean;
						public setEndIconOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						/** @deprecated */
						public getPasswordVisibilityToggleContentDescription(): string;
						public getHelperTextCurrentTextColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setSuffixText(param0: string): void;
						public setHint(param0: number): void;
						public setStartIconDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getStartIconDrawable(): globalAndroid.graphics.drawable.Drawable;
						public isStartIconCheckable(): boolean;
						public setBoxStrokeWidth(param0: number): void;
						public dispatchRestoreInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
						public isHintEnabled(): boolean;
						/** @deprecated */
						public setPasswordVisibilityToggleEnabled(param0: boolean): void;
						public setEndIconDrawable(param0: number): void;
						/** @deprecated */
						public setPasswordVisibilityToggleTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public setPrefixTextColor(param0: globalAndroid.content.res.ColorStateList): void;
						public getPlaceholderTextColor(): globalAndroid.content.res.ColorStateList;
						public getEndIconDrawable(): globalAndroid.graphics.drawable.Drawable;
						public clearOnEditTextAttachedListeners(): void;
						/** @deprecated */
						public setPasswordVisibilityToggleContentDescription(param0: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public setPasswordVisibilityToggleContentDescription(param0: number): void;
						public setBoxStrokeColorStateList(param0: globalAndroid.content.res.ColorStateList): void;
						public getErrorIconDrawable(): globalAndroid.graphics.drawable.Drawable;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public setBoxBackgroundColorStateList(param0: globalAndroid.content.res.ColorStateList): void;
						public getBoxStrokeErrorColor(): globalAndroid.content.res.ColorStateList;
						public isErrorEnabled(): boolean;
					}
					export module TextInputLayout {
						export class comgoogleandroidmaterialtextfieldTextInputLayoutAccessibilityDelegate {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.AccessibilityDelegate>;
							public constructor(param0: com.google.android.material.textfield.TextInputLayout);
							public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
						}
						export type AccessibilityDelegate = comgoogleandroidmaterialtextfieldTextInputLayoutAccessibilityDelegate
						export class BoxBackgroundMode {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.BoxBackgroundMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$BoxBackgroundMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class EndIconMode {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.EndIconMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$EndIconMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class OnEditTextAttachedListener {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.OnEditTextAttachedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$OnEditTextAttachedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onEditTextAttached(param0: com.google.android.material.textfield.TextInputLayout): void;
							});
							public constructor();
							public onEditTextAttached(param0: com.google.android.material.textfield.TextInputLayout): void;
						}
						export class OnEndIconChangedListener {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.OnEndIconChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.textfield.TextInputLayout$OnEndIconChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onEndIconChanged(param0: com.google.android.material.textfield.TextInputLayout, param1: number): void;
							});
							public constructor();
							public onEndIconChanged(param0: com.google.android.material.textfield.TextInputLayout, param1: number): void;
						}
						export class SavedState {
							public static class: java.lang.Class<com.google.android.material.textfield.TextInputLayout.SavedState>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.textfield.TextInputLayout.SavedState>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module textview {
					export class MaterialTextView {
						public static class: java.lang.Class<com.google.android.material.textview.MaterialTextView>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module theme {
					export class MaterialComponentsViewInflater {
						public static class: java.lang.Class<com.google.android.material.theme.MaterialComponentsViewInflater>;
						public constructor();
						public createAutoCompleteTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatAutoCompleteTextView;
						public createCheckBox(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckBox;
						public createRadioButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatRadioButton;
						public createTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatTextView;
						public createButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatButton;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module theme {
					export module overlay {
						export class MaterialThemeOverlay {
							public static class: java.lang.Class<com.google.android.material.theme.overlay.MaterialThemeOverlay>;
							public static wrap(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): globalAndroid.content.Context;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class ChipTextInputComboView {
						public static class: java.lang.Class<com.google.android.material.timepicker.ChipTextInputComboView>;
						public setTag(param0: number, param1: any): void;
						public setChecked(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
						public setHelperText(param0: string): void;
						public setChipDelegate(param0: androidx.core.view.AccessibilityDelegateCompat): void;
						public isChecked(): boolean;
						public setText(param0: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public toggle(): void;
						public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getTextInput(): com.google.android.material.textfield.TextInputLayout;
						public setCursorVisible(param0: boolean): void;
						public addInputFilter(param0: globalAndroid.text.InputFilter): void;
					}
					export module ChipTextInputComboView {
						export class TextFormatter extends com.google.android.material.internal.TextWatcherAdapter {
							public static class: java.lang.Class<com.google.android.material.timepicker.ChipTextInputComboView.TextFormatter>;
							public afterTextChanged(param0: globalAndroid.text.Editable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class ClickActionDelegate {
						public static class: java.lang.Class<com.google.android.material.timepicker.ClickActionDelegate>;
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
						public constructor(param0: globalAndroid.content.Context, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class ClockFaceView extends com.google.android.material.timepicker.RadialViewGroup implements com.google.android.material.timepicker.ClockHandView.OnRotateListener {
						public static class: java.lang.Class<com.google.android.material.timepicker.ClockFaceView>;
						public setHandRotation(param0: number): void;
						public onRotate(param0: number, param1: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public setRadius(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setValues(param0: androidNative.Array<string>, param1: number): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class ClockHandView {
						public static class: java.lang.Class<com.google.android.material.timepicker.ClockHandView>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public setHandRotation(param0: number, param1: boolean): void;
						public getCurrentSelectorBox(): globalAndroid.graphics.RectF;
						public getHandRotation(): number;
						public getSelectorRadius(): number;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setOnActionUpListener(param0: com.google.android.material.timepicker.ClockHandView.OnActionUpListener): void;
						public setHandRotation(param0: number): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setCircleRadius(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setAnimateOnTouchUp(param0: boolean): void;
						public addOnRotateListener(param0: com.google.android.material.timepicker.ClockHandView.OnRotateListener): void;
					}
					export module ClockHandView {
						export class OnActionUpListener {
							public static class: java.lang.Class<com.google.android.material.timepicker.ClockHandView.OnActionUpListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.timepicker.ClockHandView$OnActionUpListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onActionUp(param0: number, param1: boolean): void;
							});
							public constructor();
							public onActionUp(param0: number, param1: boolean): void;
						}
						export class OnRotateListener {
							public static class: java.lang.Class<com.google.android.material.timepicker.ClockHandView.OnRotateListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.timepicker.ClockHandView$OnRotateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onRotate(param0: number, param1: boolean): void;
							});
							public constructor();
							public onRotate(param0: number, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class MaterialTimePicker {
						public static class: java.lang.Class<com.google.android.material.timepicker.MaterialTimePicker>;
						public static INPUT_MODE_CLOCK: number;
						public static INPUT_MODE_KEYBOARD: number;
						public getInputMode(): number;
						public constructor();
						public onDismiss(param0: globalAndroid.content.DialogInterface): void;
						public clearOnNegativeButtonClickListeners(): void;
						public addOnDismissListener(param0: globalAndroid.content.DialogInterface.OnDismissListener): boolean;
						public addOnNegativeButtonClickListener(param0: globalAndroid.view.View.OnClickListener): boolean;
						public addOnPositiveButtonClickListener(param0: globalAndroid.view.View.OnClickListener): boolean;
						public removeOnNegativeButtonClickListener(param0: globalAndroid.view.View.OnClickListener): boolean;
						public removeOnPositiveButtonClickListener(param0: globalAndroid.view.View.OnClickListener): boolean;
						public addOnCancelListener(param0: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public getHour(): number;
						public getMinute(): number;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public removeOnDismissListener(param0: globalAndroid.content.DialogInterface.OnDismissListener): boolean;
						public removeOnCancelListener(param0: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						public clearOnCancelListeners(): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public clearOnPositiveButtonClickListeners(): void;
						public clearOnDismissListeners(): void;
					}
					export module MaterialTimePicker {
						export class Builder {
							public static class: java.lang.Class<com.google.android.material.timepicker.MaterialTimePicker.Builder>;
							public constructor();
							public setHour(param0: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
							public setMinute(param0: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
							public setTitleText(param0: string): com.google.android.material.timepicker.MaterialTimePicker.Builder;
							public build(): com.google.android.material.timepicker.MaterialTimePicker;
							public setInputMode(param0: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
							public setTimeFormat(param0: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
							public setTitleText(param0: number): com.google.android.material.timepicker.MaterialTimePicker.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class MaxInputValidator {
						public static class: java.lang.Class<com.google.android.material.timepicker.MaxInputValidator>;
						public setMax(param0: number): void;
						public constructor(param0: number);
						public filter(param0: string, param1: number, param2: number, param3: globalAndroid.text.Spanned, param4: number, param5: number): string;
						public getMax(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class RadialViewGroup {
						public static class: java.lang.Class<com.google.android.material.timepicker.RadialViewGroup>;
						public onViewRemoved(param0: globalAndroid.view.View): void;
						public constructor(param0: globalAndroid.content.Context);
						public setRadius(param0: number): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getRadius(): number;
						public setBackgroundColor(param0: number): void;
						public onFinishInflate(): void;
						public updateLayoutParams(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class TimeFormat {
						public static class: java.lang.Class<com.google.android.material.timepicker.TimeFormat>;
						/**
						 * Constructs a new instance of the com.google.android.material.timepicker.TimeFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static CLOCK_24H: number;
						public static CLOCK_12H: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class TimeModel {
						public static class: java.lang.Class<com.google.android.material.timepicker.TimeModel>;
						public static ZERO_LEADING_NUMBER_FORMAT: string;
						public static NUMBER_FORMAT: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.material.timepicker.TimeModel>;
						public constructor();
						public describeContents(): number;
						public setHour(param0: number): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getMinuteInputValidator(): com.google.android.material.timepicker.MaxInputValidator;
						public constructor(param0: number, param1: number, param2: number, param3: number);
						public constructor(param0: globalAndroid.os.Parcel);
						public constructor(param0: number);
						public setHourOfDay(param0: number): void;
						public static formatText(param0: globalAndroid.content.res.Resources, param1: string): string;
						public getHourForDisplay(): number;
						public setMinute(param0: number): void;
						public getHourInputValidator(): com.google.android.material.timepicker.MaxInputValidator;
						public setPeriod(param0: number): void;
						public static formatText(param0: globalAndroid.content.res.Resources, param1: string, param2: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class TimePickerClockPresenter implements com.google.android.material.timepicker.ClockHandView.OnRotateListener, com.google.android.material.timepicker.TimePickerView.OnSelectionChange, com.google.android.material.timepicker.TimePickerView.OnPeriodChangeListener, com.google.android.material.timepicker.ClockHandView.OnActionUpListener, com.google.android.material.timepicker.TimePickerPresenter {
						public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerClockPresenter>;
						public onRotate(param0: number, param1: boolean): void;
						public invalidate(): void;
						public onPeriodChange(param0: number): void;
						public show(): void;
						public initialize(): void;
						public onActionUp(param0: number, param1: boolean): void;
						public hide(): void;
						public onSelectionChanged(param0: number): void;
						public constructor(param0: com.google.android.material.timepicker.TimePickerView, param1: com.google.android.material.timepicker.TimeModel);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class TimePickerControls {
						public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerControls>;
						/**
						 * Constructs a new instance of the com.google.android.material.timepicker.TimePickerControls interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							updateTime(param0: number, param1: number, param2: number): void;
							setActiveSelection(param0: number): void;
							setValues(param0: androidNative.Array<string>, param1: number): void;
							setHandRotation(param0: number): void;
						});
						public constructor();
						public setHandRotation(param0: number): void;
						public updateTime(param0: number, param1: number, param2: number): void;
						public setActiveSelection(param0: number): void;
						public setValues(param0: androidNative.Array<string>, param1: number): void;
					}
					export module TimePickerControls {
						export class ActiveSelection {
							public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerControls.ActiveSelection>;
							/**
							 * Constructs a new instance of the com.google.android.material.timepicker.TimePickerControls$ActiveSelection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class ClockPeriod {
							public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerControls.ClockPeriod>;
							/**
							 * Constructs a new instance of the com.google.android.material.timepicker.TimePickerControls$ClockPeriod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class TimePickerPresenter {
						public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerPresenter>;
						/**
						 * Constructs a new instance of the com.google.android.material.timepicker.TimePickerPresenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(): void;
							invalidate(): void;
							hide(): void;
							show(): void;
						});
						public constructor();
						public invalidate(): void;
						public show(): void;
						public initialize(): void;
						public hide(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class TimePickerTextInputKeyController {
						public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerTextInputKeyController>;
						public onKey(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onEditorAction(param0: globalAndroid.widget.TextView, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public bind(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class TimePickerTextInputPresenter implements com.google.android.material.timepicker.TimePickerView.OnSelectionChange, com.google.android.material.timepicker.TimePickerPresenter {
						public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerTextInputPresenter>;
						public invalidate(): void;
						public show(): void;
						public initialize(): void;
						public resetChecked(): void;
						public hide(): void;
						public clearCheck(): void;
						public onSelectionChanged(param0: number): void;
						public constructor(param0: globalAndroid.widget.LinearLayout, param1: com.google.android.material.timepicker.TimeModel);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module timepicker {
					export class TimePickerView implements com.google.android.material.timepicker.TimePickerControls {
						public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerView>;
						public setHourClickDelegate(param0: androidx.core.view.AccessibilityDelegateCompat): void;
						public constructor(param0: globalAndroid.content.Context);
						public setHandRotation(param0: number, param1: boolean): void;
						public updateTime(param0: number, param1: number, param2: number): void;
						public onAttachedToWindow(): void;
						public setActiveSelection(param0: number): void;
						public setOnActionUpListener(param0: com.google.android.material.timepicker.ClockHandView.OnActionUpListener): void;
						public setHandRotation(param0: number): void;
						public showToggle(): void;
						public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
						public setMinuteHourDelegate(param0: androidx.core.view.AccessibilityDelegateCompat): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setValues(param0: androidNative.Array<string>, param1: number): void;
						public setAnimateOnTouchUp(param0: boolean): void;
						public addOnRotateListener(param0: com.google.android.material.timepicker.ClockHandView.OnRotateListener): void;
					}
					export module TimePickerView {
						export class OnDoubleTapListener {
							public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerView.OnDoubleTapListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.timepicker.TimePickerView$OnDoubleTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDoubleTap(): void;
							});
							public constructor();
							public onDoubleTap(): void;
						}
						export class OnPeriodChangeListener {
							public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerView.OnPeriodChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.material.timepicker.TimePickerView$OnPeriodChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPeriodChange(param0: number): void;
							});
							public constructor();
							public onPeriodChange(param0: number): void;
						}
						export class OnSelectionChange {
							public static class: java.lang.Class<com.google.android.material.timepicker.TimePickerView.OnSelectionChange>;
							/**
							 * Constructs a new instance of the com.google.android.material.timepicker.TimePickerView$OnSelectionChange interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSelectionChanged(param0: number): void;
							});
							public constructor();
							public onSelectionChanged(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module tooltip {
					export class TooltipDrawable extends com.google.android.material.shape.MaterialShapeDrawable implements com.google.android.material.internal.TextDrawableHelper.TextDrawableDelegate {
						public static class: java.lang.Class<com.google.android.material.tooltip.TooltipDrawable>;
						public setTextAppearance(param0: com.google.android.material.resources.TextAppearance): void;
						public getTextAppearance(): com.google.android.material.resources.TextAppearance;
						public getTextPadding(): number;
						public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): com.google.android.material.tooltip.TooltipDrawable;
						public getText(): string;
						public setTextPadding(param0: number): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public setMinHeight(param0: number): void;
						public getLayoutMargin(): number;
						public getState(): androidNative.Array<number>;
						public setMinWidth(param0: number): void;
						public setLayoutMargin(param0: number): void;
						public static create(param0: globalAndroid.content.Context): com.google.android.material.tooltip.TooltipDrawable;
						public getMinHeight(): number;
						public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.google.android.material.tooltip.TooltipDrawable;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setRevealFraction(param0: number): void;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public detachView(param0: globalAndroid.view.View): void;
						public setTextResource(param0: number): void;
						public onStateChange(param0: androidNative.Array<number>): boolean;
						public onTextSizeChange(): void;
						public getMinWidth(): number;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setText(param0: string): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setRelativeToView(param0: globalAndroid.view.View): void;
						public setTextAppearanceResource(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export abstract class ExpandableBehavior extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<globalAndroid.view.View> {
						public static class: java.lang.Class<com.google.android.material.transformation.ExpandableBehavior>;
						public constructor();
						public onLayoutChild(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: number): boolean;
						public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public onExpandedStateChange(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): boolean;
						public onDependentViewChanged(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public static from(param0: globalAndroid.view.View, param1: java.lang.Class): com.google.android.material.transformation.ExpandableBehavior;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public findExpandableWidget(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View): com.google.android.material.expandable.ExpandableWidget;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export abstract class ExpandableTransformationBehavior extends com.google.android.material.transformation.ExpandableBehavior {
						public static class: java.lang.Class<com.google.android.material.transformation.ExpandableTransformationBehavior>;
						public constructor();
						public onCreateExpandedStateChangeAnimation(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): globalAndroid.animation.AnimatorSet;
						public onExpandedStateChange(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export abstract class FabTransformationBehavior extends com.google.android.material.transformation.ExpandableTransformationBehavior {
						public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationBehavior>;
						public constructor();
						public onCreateExpandedStateChangeAnimation(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): globalAndroid.animation.AnimatorSet;
						public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public onCreateMotionSpec(param0: globalAndroid.content.Context, param1: boolean): com.google.android.material.transformation.FabTransformationBehavior.FabTransformationSpec;
						public onAttachedToLayoutParams(param0: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
					export module FabTransformationBehavior {
						export class FabTransformationSpec {
							public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationBehavior.FabTransformationSpec>;
							public timings: com.google.android.material.animation.MotionSpec;
							public positioning: com.google.android.material.animation.Positioning;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export class FabTransformationScrimBehavior extends com.google.android.material.transformation.ExpandableTransformationBehavior {
						public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationScrimBehavior>;
						public static EXPAND_DELAY: number;
						public static EXPAND_DURATION: number;
						public static COLLAPSE_DELAY: number;
						public static COLLAPSE_DURATION: number;
						public onTouchEvent(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.MotionEvent): boolean;
						public constructor();
						public onCreateExpandedStateChangeAnimation(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): globalAndroid.animation.AnimatorSet;
						public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export class FabTransformationSheetBehavior extends com.google.android.material.transformation.FabTransformationBehavior {
						public static class: java.lang.Class<com.google.android.material.transformation.FabTransformationSheetBehavior>;
						public constructor();
						public onCreateMotionSpec(param0: globalAndroid.content.Context, param1: boolean): com.google.android.material.transformation.FabTransformationBehavior.FabTransformationSpec;
						public onExpandedStateChange(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: boolean, param3: boolean): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export class TransformationChildCard extends com.google.android.material.circularreveal.cardview.CircularRevealCardView {
						public static class: java.lang.Class<com.google.android.material.transformation.TransformationChildCard>;
						public destroyCircularRevealCache(): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transformation {
					export class TransformationChildLayout extends com.google.android.material.circularreveal.CircularRevealFrameLayout {
						public static class: java.lang.Class<com.google.android.material.transformation.TransformationChildLayout>;
						public destroyCircularRevealCache(): void;
						public setCircularRevealOverlayDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRevealInfo(): com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo;
						public constructor(param0: globalAndroid.content.Context);
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setCircularRevealScrimColor(param0: number): void;
						public getCircularRevealOverlayDrawable(): globalAndroid.graphics.drawable.Drawable;
						public getCircularRevealScrimColor(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setRevealInfo(param0: com.google.android.material.circularreveal.CircularRevealWidget.RevealInfo): void;
						public buildCircularRevealCache(): void;
						public isOpaque(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class FadeModeEvaluator {
						public static class: java.lang.Class<com.google.android.material.transition.FadeModeEvaluator>;
						/**
						 * Constructs a new instance of the com.google.android.material.transition.FadeModeEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							evaluate(param0: number, param1: number, param2: number): com.google.android.material.transition.FadeModeResult;
						});
						public constructor();
						public evaluate(param0: number, param1: number, param2: number): com.google.android.material.transition.FadeModeResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class FadeModeEvaluators {
						public static class: java.lang.Class<com.google.android.material.transition.FadeModeEvaluators>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class FadeModeResult {
						public static class: java.lang.Class<com.google.android.material.transition.FadeModeResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class FadeProvider extends com.google.android.material.transition.VisibilityAnimatorProvider {
						public static class: java.lang.Class<com.google.android.material.transition.FadeProvider>;
						public constructor();
						public setIncomingEndThreshold(param0: number): void;
						public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						public getIncomingEndThreshold(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class FadeThroughProvider extends com.google.android.material.transition.VisibilityAnimatorProvider {
						public static class: java.lang.Class<com.google.android.material.transition.FadeThroughProvider>;
						public constructor();
						public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class FitModeEvaluator {
						public static class: java.lang.Class<com.google.android.material.transition.FitModeEvaluator>;
						/**
						 * Constructs a new instance of the com.google.android.material.transition.FitModeEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							evaluate(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): com.google.android.material.transition.FitModeResult;
							shouldMaskStartBounds(param0: com.google.android.material.transition.FitModeResult): boolean;
							applyMask(param0: globalAndroid.graphics.RectF, param1: number, param2: com.google.android.material.transition.FitModeResult): void;
						});
						public constructor();
						public applyMask(param0: globalAndroid.graphics.RectF, param1: number, param2: com.google.android.material.transition.FitModeResult): void;
						public shouldMaskStartBounds(param0: com.google.android.material.transition.FitModeResult): boolean;
						public evaluate(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): com.google.android.material.transition.FitModeResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class FitModeEvaluators {
						public static class: java.lang.Class<com.google.android.material.transition.FitModeEvaluators>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class FitModeResult {
						public static class: java.lang.Class<com.google.android.material.transition.FitModeResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class Hold {
						public static class: java.lang.Class<com.google.android.material.transition.Hold>;
						public constructor();
						public onAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: androidx.transition.TransitionValues, param3: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
						public onDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: androidx.transition.TransitionValues, param3: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class MaskEvaluator {
						public static class: java.lang.Class<com.google.android.material.transition.MaskEvaluator>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class MaterialArcMotion {
						public static class: java.lang.Class<com.google.android.material.transition.MaterialArcMotion>;
						public getPath(param0: number, param1: number, param2: number, param3: number): globalAndroid.graphics.Path;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class MaterialContainerTransform {
						public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform>;
						public static TRANSITION_DIRECTION_AUTO: number;
						public static TRANSITION_DIRECTION_ENTER: number;
						public static TRANSITION_DIRECTION_RETURN: number;
						public static FADE_MODE_IN: number;
						public static FADE_MODE_OUT: number;
						public static FADE_MODE_CROSS: number;
						public static FADE_MODE_THROUGH: number;
						public static FIT_MODE_AUTO: number;
						public static FIT_MODE_WIDTH: number;
						public static FIT_MODE_HEIGHT: number;
						public getFadeMode(): number;
						public getDrawingViewId(): number;
						public getStartContainerColor(): number;
						public getEndElevation(): number;
						public captureStartValues(param0: androidx.transition.TransitionValues): void;
						public getShapeMaskProgressThresholds(): com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds;
						public captureEndValues(param0: androidx.transition.TransitionValues): void;
						public getScaleMaskProgressThresholds(): com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds;
						public getTransitionDirection(): number;
						public getScrimColor(): number;
						public isElevationShadowEnabled(): boolean;
						public getEndShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setStartElevation(param0: number): void;
						public constructor();
						public getScaleProgressThresholds(): com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds;
						public setStartShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setEndView(param0: globalAndroid.view.View): void;
						public setScaleMaskProgressThresholds(param0: com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds): void;
						public createAnimator(param0: globalAndroid.view.ViewGroup, param1: androidx.transition.TransitionValues, param2: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
						public setHoldAtEndEnabled(param0: boolean): void;
						public setEndContainerColor(param0: number): void;
						public getEndContainerColor(): number;
						public setDrawDebugEnabled(param0: boolean): void;
						public setDrawingViewId(param0: number): void;
						public isDrawDebugEnabled(): boolean;
						public getTransitionProperties(): androidNative.Array<string>;
						public getStartShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
						public setStartViewId(param0: number): void;
						public getEndView(): globalAndroid.view.View;
						public setAllContainerColors(param0: number): void;
						public setTransitionDirection(param0: number): void;
						public setScaleProgressThresholds(param0: com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds): void;
						public setFadeMode(param0: number): void;
						public getStartViewId(): number;
						public setEndShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
						public setEndElevation(param0: number): void;
						public setFitMode(param0: number): void;
						public setStartView(param0: globalAndroid.view.View): void;
						public getFadeProgressThresholds(): com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds;
						public setScrimColor(param0: number): void;
						public setStartContainerColor(param0: number): void;
						public setShapeMaskProgressThresholds(param0: com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds): void;
						public setEndViewId(param0: number): void;
						public getEndViewId(): number;
						public getContainerColor(): number;
						public setContainerColor(param0: number): void;
						public getStartView(): globalAndroid.view.View;
						public getStartElevation(): number;
						public isHoldAtEndEnabled(): boolean;
						public setElevationShadowEnabled(param0: boolean): void;
						public getFitMode(): number;
						public setFadeProgressThresholds(param0: com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds): void;
					}
					export module MaterialContainerTransform {
						export class FadeMode {
							public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.FadeMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.MaterialContainerTransform$FadeMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class FitMode {
							public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.FitMode>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.MaterialContainerTransform$FitMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class ProgressThresholds {
							public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.ProgressThresholds>;
							public constructor(param0: number, param1: number);
							public getStart(): number;
							public getEnd(): number;
						}
						export class ProgressThresholdsGroup {
							public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.ProgressThresholdsGroup>;
						}
						export class TransitionDirection {
							public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.TransitionDirection>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.MaterialContainerTransform$TransitionDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class TransitionDrawable {
							public static class: java.lang.Class<com.google.android.material.transition.MaterialContainerTransform.TransitionDrawable>;
							public setAlpha(param0: number): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public getOpacity(): number;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class MaterialElevationScale extends com.google.android.material.transition.MaterialVisibility<com.google.android.material.transition.ScaleProvider> {
						public static class: java.lang.Class<com.google.android.material.transition.MaterialElevationScale>;
						public constructor(param0: boolean);
						public constructor(param0: any, param1: com.google.android.material.transition.VisibilityAnimatorProvider);
						public isGrowing(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class MaterialFade extends com.google.android.material.transition.MaterialVisibility<com.google.android.material.transition.FadeProvider> {
						public static class: java.lang.Class<com.google.android.material.transition.MaterialFade>;
						public constructor();
						public constructor(param0: any, param1: com.google.android.material.transition.VisibilityAnimatorProvider);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class MaterialFadeThrough extends com.google.android.material.transition.MaterialVisibility<com.google.android.material.transition.FadeThroughProvider> {
						public static class: java.lang.Class<com.google.android.material.transition.MaterialFadeThrough>;
						public constructor();
						public constructor(param0: any, param1: com.google.android.material.transition.VisibilityAnimatorProvider);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class MaterialSharedAxis extends com.google.android.material.transition.MaterialVisibility<com.google.android.material.transition.VisibilityAnimatorProvider> {
						public static class: java.lang.Class<com.google.android.material.transition.MaterialSharedAxis>;
						public static X: number;
						public static Y: number;
						public static Z: number;
						public constructor(param0: number, param1: boolean);
						public getAxis(): number;
						public isForward(): boolean;
						public constructor(param0: any, param1: com.google.android.material.transition.VisibilityAnimatorProvider);
					}
					export module MaterialSharedAxis {
						export class Axis {
							public static class: java.lang.Class<com.google.android.material.transition.MaterialSharedAxis.Axis>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.MaterialSharedAxis$Axis interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export abstract class MaterialVisibility<P>  extends androidx.transition.Visibility {
						public static class: java.lang.Class<com.google.android.material.transition.MaterialVisibility<any>>;
						public addAdditionalAnimatorProvider(param0: com.google.android.material.transition.VisibilityAnimatorProvider): void;
						public onAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: androidx.transition.TransitionValues, param3: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
						public setSecondaryAnimatorProvider(param0: com.google.android.material.transition.VisibilityAnimatorProvider): void;
						public clearAdditionalAnimatorProvider(): void;
						public getPrimaryAnimatorProvider(): any;
						public getSecondaryAnimatorProvider(): com.google.android.material.transition.VisibilityAnimatorProvider;
						public removeAdditionalAnimatorProvider(param0: com.google.android.material.transition.VisibilityAnimatorProvider): boolean;
						public constructor(param0: any, param1: com.google.android.material.transition.VisibilityAnimatorProvider);
						public onDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: androidx.transition.TransitionValues, param3: androidx.transition.TransitionValues): globalAndroid.animation.Animator;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class ScaleProvider extends com.google.android.material.transition.VisibilityAnimatorProvider {
						public static class: java.lang.Class<com.google.android.material.transition.ScaleProvider>;
						public getIncomingStartScale(): number;
						public setGrowing(param0: boolean): void;
						public constructor();
						public getIncomingEndScale(): number;
						public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						public getOutgoingEndScale(): number;
						public setIncomingEndScale(param0: number): void;
						public setScaleOnDisappear(param0: boolean): void;
						public setOutgoingEndScale(param0: number): void;
						public getOutgoingStartScale(): number;
						public setIncomingStartScale(param0: number): void;
						public constructor(param0: boolean);
						public isScaleOnDisappear(): boolean;
						public setOutgoingStartScale(param0: number): void;
						public isGrowing(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class SlideDistanceProvider extends com.google.android.material.transition.VisibilityAnimatorProvider {
						public static class: java.lang.Class<com.google.android.material.transition.SlideDistanceProvider>;
						public getSlideEdge(): number;
						public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						public constructor(param0: number);
						public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						public setSlideEdge(param0: number): void;
						public setSlideDistance(param0: number): void;
						public getSlideDistance(): number;
					}
					export module SlideDistanceProvider {
						export class GravityFlag {
							public static class: java.lang.Class<com.google.android.material.transition.SlideDistanceProvider.GravityFlag>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.SlideDistanceProvider$GravityFlag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export abstract class TransitionListenerAdapter {
						public static class: java.lang.Class<com.google.android.material.transition.TransitionListenerAdapter>;
						public onTransitionPause(param0: androidx.transition.Transition): void;
						public onTransitionStart(param0: androidx.transition.Transition): void;
						public onTransitionResume(param0: androidx.transition.Transition): void;
						public onTransitionEnd(param0: androidx.transition.Transition): void;
						public onTransitionCancel(param0: androidx.transition.Transition): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class TransitionUtils {
						public static class: java.lang.Class<com.google.android.material.transition.TransitionUtils>;
					}
					export module TransitionUtils {
						export class CanvasOperation {
							public static class: java.lang.Class<com.google.android.material.transition.TransitionUtils.CanvasOperation>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.TransitionUtils$CanvasOperation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								run(param0: globalAndroid.graphics.Canvas): void;
							});
							public constructor();
							public run(param0: globalAndroid.graphics.Canvas): void;
						}
						export class CornerSizeBinaryOperator {
							public static class: java.lang.Class<com.google.android.material.transition.TransitionUtils.CornerSizeBinaryOperator>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.TransitionUtils$CornerSizeBinaryOperator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: com.google.android.material.shape.CornerSize, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
							});
							public constructor();
							public apply(param0: com.google.android.material.shape.CornerSize, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export class VisibilityAnimatorProvider {
						public static class: java.lang.Class<com.google.android.material.transition.VisibilityAnimatorProvider>;
						/**
						 * Constructs a new instance of the com.google.android.material.transition.VisibilityAnimatorProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
							createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						});
						public constructor();
						public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class FadeModeEvaluator {
							public static class: java.lang.Class<com.google.android.material.transition.platform.FadeModeEvaluator>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.platform.FadeModeEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								evaluate(param0: number, param1: number, param2: number): com.google.android.material.transition.platform.FadeModeResult;
							});
							public constructor();
							public evaluate(param0: number, param1: number, param2: number): com.google.android.material.transition.platform.FadeModeResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class FadeModeEvaluators {
							public static class: java.lang.Class<com.google.android.material.transition.platform.FadeModeEvaluators>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class FadeModeResult {
							public static class: java.lang.Class<com.google.android.material.transition.platform.FadeModeResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class FadeProvider extends com.google.android.material.transition.platform.VisibilityAnimatorProvider {
							public static class: java.lang.Class<com.google.android.material.transition.platform.FadeProvider>;
							public constructor();
							public setIncomingEndThreshold(param0: number): void;
							public getIncomingEndThreshold(): number;
							public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
							public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class FadeThroughProvider extends com.google.android.material.transition.platform.VisibilityAnimatorProvider {
							public static class: java.lang.Class<com.google.android.material.transition.platform.FadeThroughProvider>;
							public constructor();
							public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
							public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class FitModeEvaluator {
							public static class: java.lang.Class<com.google.android.material.transition.platform.FitModeEvaluator>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.platform.FitModeEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								evaluate(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): com.google.android.material.transition.platform.FitModeResult;
								shouldMaskStartBounds(param0: com.google.android.material.transition.platform.FitModeResult): boolean;
								applyMask(param0: globalAndroid.graphics.RectF, param1: number, param2: com.google.android.material.transition.platform.FitModeResult): void;
							});
							public constructor();
							public evaluate(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): com.google.android.material.transition.platform.FitModeResult;
							public applyMask(param0: globalAndroid.graphics.RectF, param1: number, param2: com.google.android.material.transition.platform.FitModeResult): void;
							public shouldMaskStartBounds(param0: com.google.android.material.transition.platform.FitModeResult): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class FitModeEvaluators {
							public static class: java.lang.Class<com.google.android.material.transition.platform.FitModeEvaluators>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class FitModeResult {
							public static class: java.lang.Class<com.google.android.material.transition.platform.FitModeResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class Hold {
							public static class: java.lang.Class<com.google.android.material.transition.platform.Hold>;
							public constructor();
							public onDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.transition.TransitionValues, param3: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
							public onAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.transition.TransitionValues, param3: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class MaskEvaluator {
							public static class: java.lang.Class<com.google.android.material.transition.platform.MaskEvaluator>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class MaterialArcMotion {
							public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialArcMotion>;
							public constructor();
							public getPath(param0: number, param1: number, param2: number, param3: number): globalAndroid.graphics.Path;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class MaterialContainerTransform {
							public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform>;
							public static TRANSITION_DIRECTION_AUTO: number;
							public static TRANSITION_DIRECTION_ENTER: number;
							public static TRANSITION_DIRECTION_RETURN: number;
							public static FADE_MODE_IN: number;
							public static FADE_MODE_OUT: number;
							public static FADE_MODE_CROSS: number;
							public static FADE_MODE_THROUGH: number;
							public static FIT_MODE_AUTO: number;
							public static FIT_MODE_WIDTH: number;
							public static FIT_MODE_HEIGHT: number;
							public setStartElevation(param0: number): void;
							public getScaleProgressThresholds(): com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds;
							public setScrimColor(param0: number): void;
							public setStartContainerColor(param0: number): void;
							public getEndContainerColor(): number;
							public setHoldAtEndEnabled(param0: boolean): void;
							public getContainerColor(): number;
							public setStartShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
							public getEndViewId(): number;
							public getScaleMaskProgressThresholds(): com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds;
							public createAnimator(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.transition.TransitionValues, param2: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
							public getEndView(): globalAndroid.view.View;
							public setEndView(param0: globalAndroid.view.View): void;
							public getTransitionDirection(): number;
							public getStartContainerColor(): number;
							public setDrawingViewId(param0: number): void;
							public setAllContainerColors(param0: number): void;
							public setTransitionDirection(param0: number): void;
							public setEndElevation(param0: number): void;
							public captureStartValues(param0: globalAndroid.transition.TransitionValues): void;
							public setEndViewId(param0: number): void;
							public getDrawingViewId(): number;
							public getStartViewId(): number;
							public setScaleProgressThresholds(param0: com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds): void;
							public setShapeMaskProgressThresholds(param0: com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds): void;
							public setElevationShadowEnabled(param0: boolean): void;
							public isElevationShadowEnabled(): boolean;
							public setFitMode(param0: number): void;
							public getStartElevation(): number;
							public setStartViewId(param0: number): void;
							public isHoldAtEndEnabled(): boolean;
							public setFadeProgressThresholds(param0: com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds): void;
							public getFitMode(): number;
							public getScrimColor(): number;
							public getShapeMaskProgressThresholds(): com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds;
							public captureEndValues(param0: globalAndroid.transition.TransitionValues): void;
							public constructor();
							public setEndContainerColor(param0: number): void;
							public getFadeMode(): number;
							public getEndShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
							public getStartShapeAppearanceModel(): com.google.android.material.shape.ShapeAppearanceModel;
							public setStartView(param0: globalAndroid.view.View): void;
							public getFadeProgressThresholds(): com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds;
							public isDrawDebugEnabled(): boolean;
							public getStartView(): globalAndroid.view.View;
							public setDrawDebugEnabled(param0: boolean): void;
							public getEndElevation(): number;
							public getTransitionProperties(): androidNative.Array<string>;
							public setFadeMode(param0: number): void;
							public setEndShapeAppearanceModel(param0: com.google.android.material.shape.ShapeAppearanceModel): void;
							public setScaleMaskProgressThresholds(param0: com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds): void;
							public setContainerColor(param0: number): void;
						}
						export module MaterialContainerTransform {
							export class FadeMode {
								public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.FadeMode>;
								/**
								 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialContainerTransform$FadeMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class FitMode {
								public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.FitMode>;
								/**
								 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialContainerTransform$FitMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class ProgressThresholds {
								public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholds>;
								public constructor(param0: number, param1: number);
								public getStart(): number;
								public getEnd(): number;
							}
							export class ProgressThresholdsGroup {
								public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.ProgressThresholdsGroup>;
							}
							export class TransitionDirection {
								public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.TransitionDirection>;
								/**
								 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialContainerTransform$TransitionDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class TransitionDrawable {
								public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransform.TransitionDrawable>;
								public setAlpha(param0: number): void;
								public getOpacity(): number;
								public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
								public draw(param0: globalAndroid.graphics.Canvas): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class MaterialContainerTransformSharedElementCallback {
							public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback>;
							public constructor();
							public isSharedElementReenterTransitionEnabled(): boolean;
							public onCaptureSharedElementSnapshot(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.RectF): globalAndroid.os.Parcelable;
							public onCreateSnapshotView(param0: globalAndroid.content.Context, param1: globalAndroid.os.Parcelable): globalAndroid.view.View;
							public getShapeProvider(): com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeProvider;
							public isTransparentWindowBackgroundEnabled(): boolean;
							public onSharedElementStart(param0: java.util.List<string>, param1: java.util.List<globalAndroid.view.View>, param2: java.util.List<globalAndroid.view.View>): void;
							public setTransparentWindowBackgroundEnabled(param0: boolean): void;
							public setSharedElementReenterTransitionEnabled(param0: boolean): void;
							public onSharedElementEnd(param0: java.util.List<string>, param1: java.util.List<globalAndroid.view.View>, param2: java.util.List<globalAndroid.view.View>): void;
							public setShapeProvider(param0: com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeProvider): void;
							public onMapSharedElements(param0: java.util.List<string>, param1: java.util.Map<string,globalAndroid.view.View>): void;
						}
						export module MaterialContainerTransformSharedElementCallback {
							export class ShapeProvider {
								public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeProvider>;
								/**
								 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback$ShapeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									provideShape(param0: globalAndroid.view.View): com.google.android.material.shape.ShapeAppearanceModel;
								});
								public constructor();
								public provideShape(param0: globalAndroid.view.View): com.google.android.material.shape.ShapeAppearanceModel;
							}
							export class ShapeableViewShapeProvider extends com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeProvider {
								public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialContainerTransformSharedElementCallback.ShapeableViewShapeProvider>;
								public provideShape(param0: globalAndroid.view.View): com.google.android.material.shape.ShapeAppearanceModel;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class MaterialElevationScale extends com.google.android.material.transition.platform.MaterialVisibility<com.google.android.material.transition.platform.ScaleProvider> {
							public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialElevationScale>;
							public constructor(param0: boolean);
							public isGrowing(): boolean;
							public constructor(param0: any, param1: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class MaterialFade extends com.google.android.material.transition.platform.MaterialVisibility<com.google.android.material.transition.platform.FadeProvider> {
							public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialFade>;
							public constructor();
							public constructor(param0: any, param1: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class MaterialFadeThrough extends com.google.android.material.transition.platform.MaterialVisibility<com.google.android.material.transition.platform.FadeThroughProvider> {
							public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialFadeThrough>;
							public constructor();
							public constructor(param0: any, param1: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class MaterialSharedAxis extends com.google.android.material.transition.platform.MaterialVisibility<com.google.android.material.transition.platform.VisibilityAnimatorProvider> {
							public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialSharedAxis>;
							public static X: number;
							public static Y: number;
							public static Z: number;
							public isForward(): boolean;
							public constructor(param0: number, param1: boolean);
							public getAxis(): number;
							public constructor(param0: any, param1: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
						}
						export module MaterialSharedAxis {
							export class Axis {
								public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialSharedAxis.Axis>;
								/**
								 * Constructs a new instance of the com.google.android.material.transition.platform.MaterialSharedAxis$Axis interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export abstract class MaterialVisibility<P>  extends globalAndroid.transition.Visibility {
							public static class: java.lang.Class<com.google.android.material.transition.platform.MaterialVisibility<any>>;
							public getPrimaryAnimatorProvider(): any;
							public clearAdditionalAnimatorProvider(): void;
							public onDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.transition.TransitionValues, param3: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
							public setSecondaryAnimatorProvider(param0: com.google.android.material.transition.platform.VisibilityAnimatorProvider): void;
							public getSecondaryAnimatorProvider(): com.google.android.material.transition.platform.VisibilityAnimatorProvider;
							public removeAdditionalAnimatorProvider(param0: com.google.android.material.transition.platform.VisibilityAnimatorProvider): boolean;
							public onAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.transition.TransitionValues, param3: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
							public constructor(param0: any, param1: com.google.android.material.transition.platform.VisibilityAnimatorProvider);
							public addAdditionalAnimatorProvider(param0: com.google.android.material.transition.platform.VisibilityAnimatorProvider): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class ScaleProvider extends com.google.android.material.transition.platform.VisibilityAnimatorProvider {
							public static class: java.lang.Class<com.google.android.material.transition.platform.ScaleProvider>;
							public constructor();
							public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
							public isGrowing(): boolean;
							public getIncomingStartScale(): number;
							public setOutgoingStartScale(param0: number): void;
							public setIncomingEndScale(param0: number): void;
							public setOutgoingEndScale(param0: number): void;
							public getIncomingEndScale(): number;
							public getOutgoingEndScale(): number;
							public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
							public getOutgoingStartScale(): number;
							public setScaleOnDisappear(param0: boolean): void;
							public setIncomingStartScale(param0: number): void;
							public constructor(param0: boolean);
							public setGrowing(param0: boolean): void;
							public isScaleOnDisappear(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class SlideDistanceProvider extends com.google.android.material.transition.platform.VisibilityAnimatorProvider {
							public static class: java.lang.Class<com.google.android.material.transition.platform.SlideDistanceProvider>;
							public getSlideEdge(): number;
							public setSlideEdge(param0: number): void;
							public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
							public getSlideDistance(): number;
							public setSlideDistance(param0: number): void;
							public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
							public constructor(param0: number);
						}
						export module SlideDistanceProvider {
							export class GravityFlag {
								public static class: java.lang.Class<com.google.android.material.transition.platform.SlideDistanceProvider.GravityFlag>;
								/**
								 * Constructs a new instance of the com.google.android.material.transition.platform.SlideDistanceProvider$GravityFlag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export abstract class TransitionListenerAdapter {
							public static class: java.lang.Class<com.google.android.material.transition.platform.TransitionListenerAdapter>;
							public onTransitionEnd(param0: globalAndroid.transition.Transition): void;
							public onTransitionResume(param0: globalAndroid.transition.Transition): void;
							public onTransitionPause(param0: globalAndroid.transition.Transition): void;
							public onTransitionStart(param0: globalAndroid.transition.Transition): void;
							public onTransitionCancel(param0: globalAndroid.transition.Transition): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class TransitionUtils {
							public static class: java.lang.Class<com.google.android.material.transition.platform.TransitionUtils>;
						}
						export module TransitionUtils {
							export class CanvasOperation {
								public static class: java.lang.Class<com.google.android.material.transition.platform.TransitionUtils.CanvasOperation>;
								/**
								 * Constructs a new instance of the com.google.android.material.transition.platform.TransitionUtils$CanvasOperation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									run(param0: globalAndroid.graphics.Canvas): void;
								});
								public constructor();
								public run(param0: globalAndroid.graphics.Canvas): void;
							}
							export class CornerSizeBinaryOperator {
								public static class: java.lang.Class<com.google.android.material.transition.platform.TransitionUtils.CornerSizeBinaryOperator>;
								/**
								 * Constructs a new instance of the com.google.android.material.transition.platform.TransitionUtils$CornerSizeBinaryOperator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									apply(param0: com.google.android.material.shape.CornerSize, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
								});
								public constructor();
								public apply(param0: com.google.android.material.shape.CornerSize, param1: com.google.android.material.shape.CornerSize): com.google.android.material.shape.CornerSize;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module material {
				export module transition {
					export module platform {
						export class VisibilityAnimatorProvider {
							public static class: java.lang.Class<com.google.android.material.transition.platform.VisibilityAnimatorProvider>;
							/**
							 * Constructs a new instance of the com.google.android.material.transition.platform.VisibilityAnimatorProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
								createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
							});
							public constructor();
							public createAppear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
							public createDisappear(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View): globalAndroid.animation.Animator;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.material.animation.TransformationCallback:1
//com.google.android.material.appbar.AppBarLayout.BaseBehavior:1
//com.google.android.material.appbar.AppBarLayout.BaseBehavior.BaseDragCallback:1
//com.google.android.material.appbar.AppBarLayout.BaseOnOffsetChangedListener:1
//com.google.android.material.appbar.HeaderBehavior:1
//com.google.android.material.appbar.ViewOffsetBehavior:1
//com.google.android.material.behavior.HideBottomViewOnScrollBehavior:1
//com.google.android.material.behavior.SwipeDismissBehavior:1
//com.google.android.material.bottomsheet.BottomSheetBehavior:1
//com.google.android.material.datepicker.DateSelector:1
//com.google.android.material.datepicker.MaterialCalendar:1
//com.google.android.material.datepicker.MaterialDatePicker:1
//com.google.android.material.datepicker.MaterialDatePicker.Builder:1
//com.google.android.material.datepicker.MaterialPickerOnPositiveButtonClickListener:1
//com.google.android.material.datepicker.MaterialTextInputPicker:1
//com.google.android.material.datepicker.OnSelectionChangedListener:1
//com.google.android.material.datepicker.PickerFragment:1
//com.google.android.material.floatingactionbutton.ExtendedFloatingActionButton.ExtendedFloatingActionButtonBehavior:1
//com.google.android.material.floatingactionbutton.FloatingActionButton.BaseBehavior:1
//com.google.android.material.floatingactionbutton.FloatingActionButton.TransformationCallbackWrapper:1
//com.google.android.material.progressindicator.BaseProgressIndicator:1
//com.google.android.material.progressindicator.DeterminateDrawable:1
//com.google.android.material.progressindicator.DrawingDelegate:1
//com.google.android.material.progressindicator.IndeterminateAnimatorDelegate:1
//com.google.android.material.progressindicator.IndeterminateDrawable:1
//com.google.android.material.slider.BaseOnChangeListener:1
//com.google.android.material.slider.BaseOnSliderTouchListener:1
//com.google.android.material.slider.BaseSlider:3
//com.google.android.material.snackbar.BaseTransientBottomBar:1
//com.google.android.material.snackbar.BaseTransientBottomBar.BaseCallback:1
//com.google.android.material.tabs.TabLayout.BaseOnTabSelectedListener:1
//com.google.android.material.transition.MaterialVisibility:1
//com.google.android.material.transition.platform.MaterialVisibility:1

