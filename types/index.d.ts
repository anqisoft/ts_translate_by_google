import { WebDriver } from 'https://raw.githubusercontent.com/anqisoft/ts_selenium/main/index.ts';
/**
 * <en_us>The longest number of characters in the text during translation</en_us>
 * <zh_cn>翻译时文本最长字符数</zh_cn>
 * <zh_tw>翻譯時文本最長字符數</zh_tw>
 */
export declare const TRANSLATE_MAX_CHAR_COUNT_PER_TIME = 5000;
/**
 * <en_us>The longest millisecond number appears during the translation of the result</en_us>
 * <zh_cn>翻译时等待结果对象出现最长毫秒数</zh_cn>
 * <zh_tw>翻譯時等待結果對像出現最長毫秒數</zh_tw>
 */
export declare const WAIT_ELEMENT_VISIBLE_MILLISECONDS = 40000;
/**
 * <en_us>Google Translation URL English mark</en_us>
 * <zh_cn>谷歌翻译网址英语标记</zh_cn>
 * <zh_tw>谷歌翻譯網址英語標記</zh_tw>
 */
export declare const GOOGLE_TRANSLATE_LANG_EN = "en";
/**
 * <en_us>Google Translation URL Simplified Chinese Label</en_us>
 * <zh_cn>谷歌翻译网址简体中文标记</zh_cn>
 * <zh_tw>谷歌翻譯網址簡體中文標記</zh_tw>
 */
export declare const GOOGLE_TRANSLATE_LANG_CN = "zh-CN";
/**
 * <en_us>Google Translation URL Traditional Chinese Label</en_us>
 * <zh_cn>谷歌翻译网址繁体中文标记</zh_cn>
 * <zh_tw>谷歌翻譯網址繁體中文標記</zh_tw>
 */
export declare const GOOGLE_TRANSLATE_LANG_TW = "zh-TW";
/**
 * <en_us>translation text through Google</en_us>
 * <zh_cn>通过谷歌翻译文本</zh_cn>
 * <zh_tw>通過谷歌翻譯文本</zh_tw>
 *
 * @param {WebDriver} driver <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param {string} from <en_us>translation source text</en_us><zh_cn>翻译源文本</zh_cn><zh_tw>翻譯源文本</zh_tw>
 * @param {string} langFrom <en_us>The original language during translation</en_us><zh_cn>翻译时原始语言</zh_cn><zh_tw>翻譯時原始語言</zh_tw>
 * @param {string} langTo <en_us>Target language</en_us><zh_cn>翻译时目标语言</zh_cn><zh_tw>翻譯時目標語言</zh_tw>
 * @returns {Promise<string>} <en_us>asynchronous object: translation result text</en_us><zh_cn>异步对象：翻译结果文本</zh_cn><zh_tw>異步對象：翻譯結果文本</zh_tw>
 */
export declare function translateByGoogle(driver: WebDriver, from: string, langFrom: string, langTo: string): Promise<string>;
