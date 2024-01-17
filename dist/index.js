/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * index.ts
 *
 * <en_us>
  * Creation: January 17, 2024 17:26:36
  * Function: Provide Google translation -related methods.
  * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月17日 17:26:36
 * 功能：提供谷歌翻译相关方法。
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月17日 17:26:36
 * 功能：提供谷歌翻譯相關方法。
 * </zh_tw>
 */
import { 
// assert,
// COMMAND_LINE_ARGS,
// copyFileSync,
// existsSync,
// FILE_CREATE_NEW_AND_MODE_ALL,
// FILE_MODE_ALL,
// getFilenameTimestampPostfix,
// HTML_TAG_BEGIN__EN_US,
// HTML_TAG_BEGIN__ZH_CN,
// HTML_TAG_BEGIN__ZH_TW,
// // exitProcess,
// // I18nable,
// // I18nFlag,
// // I18N_LANG_ARRAY,
// // type I18N_LANG_KIND,
// HTML_TAG_END__EN_US,
// HTML_TAG_END__ZH_CN,
// HTML_TAG_END__ZH_TW,
// I18N_HTML_BEGIN_TAG_LENGTH,
// joinPath,
LF, } from 'https://raw.githubusercontent.com/anqisoft/ts_utils/main/index.ts';
import { doubleClick, findElementByCss, navigateTo, sendKeysAndReturn, waitUtilElementLocatedByCssAndGetText, } from 'https://raw.githubusercontent.com/anqisoft/ts_selenium/main/index.ts';
/**
 * <en_us>The longest number of characters in the text during translation</en_us>
 * <zh_cn>翻译时文本最长字符数</zh_cn>
 * <zh_tw>翻譯時文本最長字符數</zh_tw>
*/
export const TRANSLATE_MAX_CHAR_COUNT_PER_TIME = 5000;
/**
 * <en_us>The longest millisecond number appears during the translation of the result</en_us>
 * <zh_cn>翻译时等待结果对象出现最长毫秒数</zh_cn>
 * <zh_tw>翻譯時等待結果對像出現最長毫秒數</zh_tw>
*/
export const WAIT_ELEMENT_VISIBLE_MILLISECONDS = 40000;
/**
 * <en_us>Google Translation URL English mark</en_us>
 * <zh_cn>谷歌翻译网址英语标记</zh_cn>
 * <zh_tw>谷歌翻譯網址英語標記</zh_tw>
*/
export const GOOGLE_TRANSLATE_LANG_EN = 'en';
/**
 * <en_us>Google Translation URL Simplified Chinese Label</en_us>
 * <zh_cn>谷歌翻译网址简体中文标记</zh_cn>
 * <zh_tw>谷歌翻譯網址簡體中文標記</zh_tw>
*/
export const GOOGLE_TRANSLATE_LANG_CN = 'zh-CN';
/**
 * <en_us>Google Translation URL Traditional Chinese Label</en_us>
 * <zh_cn>谷歌翻译网址繁体中文标记</zh_cn>
 * <zh_tw>谷歌翻譯網址繁體中文標記</zh_tw>
*/
export const GOOGLE_TRANSLATE_LANG_TW = 'zh-TW';
/**
 * {string}
 * <en_us>Google Translation URL prefix</en_us>
 * <zh_cn>谷歌翻译网址前缀</zh_cn>
 * <zh_tw>谷歌翻譯網址前綴</zh_tw>
 */
const URL_PREFIX = 'https://translate.google.com/details?sl=';
/**
 * {string}
 * <en_us>The middle section of Google Translation URL</en_us>
 * <zh_cn>谷歌翻译网址中段</zh_cn>
 * <zh_tw>谷歌翻譯網址中段</zh_tw>
 */
const URL_MIDDELE = '&tl=';
/**
 * {string}
 * <en_us>The style table of the corresponding element of the translation source is used to find this element and further send text and carrier symbols to the translation</en_us>
 * <zh_cn>翻译源对应元素的样式表，用于查找此元素并进一步向其中发送文本及回车符，以开始翻译</zh_cn>
 * <zh_tw>翻譯源對應元素的樣式表，用於查找此元素並進一步向其中發送文本及回車符，以開始翻譯</zh_tw>
 */
const FROM_CSS = '.er8xn';
/**
 * {string}
 * <en_us>translation result corresponds to the style table of the element, which is used to find this element and further obtain the translation result</en_us>
 * <zh_cn>翻译结果对应元素的样式表，用于查找此元素并进一步获取翻译结果</zh_cn>
 * <zh_tw>翻譯結果對應元素的樣式表，用於查找此元素並進一步獲取翻譯結果</zh_tw>
 */
const TO_CSS = '.lRu31';
/**
 * <en_us>translation text through Google</en_us>
 * <zh_cn>通过谷歌翻译文本</zh_cn>
 * <zh_tw>通過谷歌翻譯文本</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param from {string} <en_us>translation source text</en_us><zh_cn>翻译源文本</zh_cn><zh_tw>翻譯源文本</zh_tw>
 * @param langFrom {string} <en_us>The original language during translation</en_us><zh_cn>翻译时原始语言</zh_cn><zh_tw>翻譯時原始語言</zh_tw>
 * @param langTo {string} <en_us>Target language</en_us><zh_cn>翻译时目标语言</zh_cn><zh_tw>翻譯時目標語言</zh_tw>
 * @returns {Promise<string>} <en_us>asynchronous object: translation result text</en_us><zh_cn>异步对象：翻译结果文本</zh_cn><zh_tw>異步對象：翻譯結果文本</zh_tw>
 */
export async function translateByGoogle(driver, from, langFrom, langTo) {
    const URL = `${URL_PREFIX}${langFrom}${URL_MIDDELE}${langTo}`;
    await navigateTo(driver, URL);
    let elementFrom = await findElementByCss(driver, FROM_CSS);
    const FROM_LENGTH = from.length;
    if (FROM_LENGTH <= TRANSLATE_MAX_CHAR_COUNT_PER_TIME) {
        await doubleClick(driver, elementFrom);
        await sendKeysAndReturn(elementFrom, from);
        return await waitUtilElementLocatedByCssAndGetText(driver, TO_CSS, WAIT_ELEMENT_VISIBLE_MILLISECONDS);
    }
    else {
        const RESULTS = [];
        let remaining = from;
        let remainingLength = FROM_LENGTH;
        const END_TAG = `</${langFrom === GOOGLE_TRANSLATE_LANG_EN ? 'en_us' : langFrom.replaceAll('-', '_').toLowerCase()}>`;
        const I18N_HTML_END_TAG_LENGTH = END_TAG.length;
        do {
            let next = '';
            if (remainingLength <= TRANSLATE_MAX_CHAR_COUNT_PER_TIME) {
                next = remaining;
            }
            else {
                const END_TAG_POS = remaining.substring(0, TRANSLATE_MAX_CHAR_COUNT_PER_TIME)
                    .lastIndexOf(END_TAG);
                if (END_TAG_POS > -1 &&
                    END_TAG_POS + I18N_HTML_END_TAG_LENGTH <= TRANSLATE_MAX_CHAR_COUNT_PER_TIME) {
                    next = remaining.substring(0, END_TAG_POS + I18N_HTML_END_TAG_LENGTH);
                }
                else {
                    let ok = false;
                    (langFrom === GOOGLE_TRANSLATE_LANG_EN ? '\n.?! ' : '\n。？！ ').split('').forEach((seg) => {
                        if (ok)
                            return;
                        const POS = remaining.indexOf(seg);
                        if (POS > 0) {
                            next = remaining.substring(0, POS);
                            ok = true;
                        }
                    });
                    if (!ok) {
                        next = remaining.substring(0, TRANSLATE_MAX_CHAR_COUNT_PER_TIME);
                    }
                }
            }
            await sendKeysAndReturn(elementFrom, next);
            remaining = remaining.substring(next.length);
            RESULTS.push(await waitUtilElementLocatedByCssAndGetText(driver, TO_CSS, WAIT_ELEMENT_VISIBLE_MILLISECONDS));
            remainingLength = remaining.length;
            if (remainingLength == 0) {
                break;
            }
            await navigateTo(driver, URL);
            elementFrom = await findElementByCss(driver, FROM_CSS);
        } while (true);
        return RESULTS.join(LF);
    }
}
