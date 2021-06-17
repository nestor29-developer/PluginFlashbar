import { Common } from "./flashbar.common";
import * as application from "tns-core-modules/application";
import {
  OrangeRed,
  isKnownName,
  DarkBlue,
} from "@nativescript/core/color/known-colors";
import { Color } from "@nativescript/core";

const nativeFlashbar = com.andrognito.flashbar.Flashbar;
const nativeFlashAnime = com.andrognito.flashbar.anim;
const nativeFlashAnimeBuilder =  com.andrognito.flashbar.anim.FlashAnimIconBuilder;
// const nativeFlashAnimBarBuilder =  com.andrognito.flashbar.anim.FlashAnimBarBuilder;

export class Flashbar extends Common {
  showBottom(obj) {
    const flashbar = new nativeFlashbar.Builder(
      application.android.foregroundActivity
    )
      .gravity(nativeFlashbar.Gravity.BOTTOM)
      .duration(obj.duration)
      .title(obj.title)
      .titleSizeInSp(16)
      .titleColorRes(android.R.color.black)
      .message(obj.message)
      .messageSizeInSp(12)
      .showOverlay()
      .primaryActionText(obj.btnMessage)
      .primaryActionTextSizeInSp(20)
      .primaryActionTapListener(
        new nativeFlashbar.OnActionTapListener({
          onActionTapped(bar) {
            bar.dismiss();
          },
        })
      )
      .showIcon()
      .icon(android.R.drawable.btn_star)
      .iconColorFilterRes(android.R.color.background_light)
      .iconAnimation(new nativeFlashAnimeBuilder(application.android.foregroundActivity)
                .pulse()
                .accelerate()  
              )
      .backgroundColorRes(android.R.color.holo_blue_light)
      .enterAnimation(
        nativeFlashAnime.FlashAnim.with(application.android.foregroundActivity)
          .animateBar()
        //   .duration(750)
          .slideFromLeft()
          .overshoot()
      ) 
      // .exitAnimation(new nativeFlashAnimBarBuilder(application.android.foregroundActivity)
      // .accelerateDecelerate()
      // .duration(400) 
      // .animateBar()
      // )
      
      .enableSwipeToDismiss()
      .castShadow(true, 4)
      // .vibrateOn(nativeFlashbar.Vibration.SHOW, nativeFlashbar.Vibration.DISMISS)
      .listenBarTaps(
        new nativeFlashbar.OnTapListener({
          onTap(bar) {
            alert("Tap tapped");
          },
        })
      )
      .barShowListener(
        new nativeFlashbar.OnBarShowListener({
          onShowing(bar) {
            alert("Flashbar will shown");
          },
          onShowProgress(bar, progress) {},
          onShown(bar) {},
        })
      )
      .build();
    flashbar.show();
  }

  showTop(obj) {
    const flashbar = new nativeFlashbar.Builder(
      application.android.foregroundActivity
    )
      .gravity(nativeFlashbar.Gravity.TOP)
      .duration(obj.duration)
      .backgroundColorRes(android.R.color.black)
      .title(obj.title)
      .titleColorRes(android.R.color.holo_orange_light)
      .titleSizeInSp(28)
      .message(obj.message)
      .messageSizeInSp(18)
      .positiveActionText("YES")
      .negativeActionText("NO")
      .positiveActionTextColorRes(android.R.color.holo_red_dark)
      .negativeActionTextColorRes(android.R.color.holo_red_light)
      .positiveActionTapListener(
        new nativeFlashbar.OnActionTapListener({
          onActionTapped(bar) {
            alert(obj.yesMessage);
          },
        })
      )
      .negativeActionTapListener(
        new nativeFlashbar.OnActionTapListener({
          onActionTapped(bar) {
            alert(obj.noMessage);
          },
        })
      )
      .showProgress(nativeFlashbar.ProgressPosition.LEFT)
      .progressTintRes(android.R.color.holo_red_dark)
      .overlayColorRes(android.R.color.holo_green_light)
      .enterAnimation(
        nativeFlashAnime.FlashAnim.with(application.android.foregroundActivity)
          .animateBar()
          .slideFromRight()
          .overshoot()
      )
      .build();
    flashbar.show();
  }
}
