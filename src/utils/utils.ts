import { UA } from "./index.d";
/**
 * 1. 判断浏览器
 * 先判断是不是电脑,
 * 不是的话再判断是不是微信
 * 不是的话区分ios和安卓
 * 是的话判断是微信还是微信小程序 miniProgram
 */

export const getUA = (): UA => {
    const ua: string = navigator.userAgent.toLowerCase();
    if (!isPC()) {
        if (/micromessenger/i.test(ua)) {
            return /miniprogram/i.test(ua) ? UA.wxMin : UA.wx;
        } else if (/iphone|ipad|ipod/i.test(ua)) {
            return /radar/i.test(ua) ? UA.radarIOS : UA.iOS;
        } else if (/android/i.test(ua)) {
            return /radar/i.test(ua) ? UA.radarAndroid : UA.Android;
        } else {
            return UA.other;
        }
    } else {
        return UA.pc;
    }
};

export const isPC = (): boolean => {
    const ua: string = navigator.userAgent.toLowerCase();
    if (
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
            ua
        )
    ) {
        return false;
    } else {
        return true;
    }
};
