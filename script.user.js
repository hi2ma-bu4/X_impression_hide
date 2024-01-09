// ==UserScript==
// @name         Twitter(旧:𝕏)のインプレッション小遣い稼ぎ野郎どもをdisplay:none;するやつ
// @namespace    https://snowshome.page.link/p
// @version      1.2.8
// @description  名前の通りです。設定からカスタムできます。
// @author       tromtub(snows)
// @match        https://twitter.com/*
// @match        http://twitter.com/*
// @icon         data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB7ElEQVR4Ae1XMZLCMAwUdw0ldJQ8ATpKnkBJByUd8ALyA/gBdJTQUtHS8QT4AaRM5ctmThmfogQ75CYNmhGTbGJr45Vk0yAiQzXaF9VsHwIZAofDgYwxqo9GI/K16/X6cqyxvdVqmdvtZh6PhwmCIHXcw7vdrpFj8ny9XhsYxhe8lwWHw2EycLFYpNh0Ok2w8/nsFHy1WrkE1wnAN5tNMkGv10ux3W6XIab5fD5P3ovldCGrP2Ap4LiW8uRJAcIwe1wpArYU0FJimhQgxaQ9cqX4BZYCgSVmS8HBfRP1JQEsY1xKGSmAcTC+l0QrIWDraicVMBBA4O1265ScpQnAMbkMwphjub1HAI7EkxoDK7n0/gQQGATsCmDMo+z++Hf8E5CjPZ9PiqKIZrMZhWFIl8slxcbjMTWbTTqdTuRrXoz5i2WXRIL+WxWw2+Uml13rnJUT4K9E9nMFaF3SxiojoO1u2rJzl4z3/+oIcHBMLiUp2rDe3ozg+BIYtNee87KjGzLGndPx7JD/0K7xog2Gl30ymaSY1jm9CPhsrXnnBK1zOhHgCWWtF7l2TtA6p3S1E+73exoMBrRcLul4PJKL3e93arfbSUeMA1O/36eYPHU6nWQu7pyaqRlfZnezV05anhSN34va7PPXrHYCP+VaTG3LBV1KAAAAAElFTkSuQmCC
// @updateURL    https://github.com/hi2ma-bu4/X_impression_hide/raw/main/script.user.js
// @downloadURL  https://github.com/hi2ma-bu4/X_impression_hide/raw/main/script.user.js
// @supportURL   https://github.com/hi2ma-bu4/X_impression_hide
// @grant        GM.addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM.registerMenuCommand
// @run-at       document-idle
// @noframes
// ==/UserScript==


/*
Twitter(旧:𝕏)のインプレッション小遣い稼ぎ野郎どもをdisplay:none;するやつ

略して、

インプレゾンビをnoneするやつ

*/
/*
コピー・改変してもいいけど、
「tromtub(snows)」は変えないでね。

*/
/* todo
・検知率を上げる
    ・連投の検知
    ・あやしい日本語の検知(多分自分の実力じゃ無理)
    ・フィルターをもっと有能に
・誤検知を減らす(今はまだいい？)
・クイックミュートボタンを作成
・クイックブロックボタンを作成
・認証マークを全ブロック機能
・whitelist_filterの実装
    ・名前
    ・内容
・blacklist_filterの拡張
    ・名前
・blacklist_idを保存するかの設定
・他人の引用ツイートでの言語フィルターを作成
・menuのresize:both;を左下に
・menuをもっと見やすく(たすけて)
・gifをブロック
・正規表現などの最適化
・軽量化
・kiwi browserで動くようにする
*/


(function () {
    'use strict';

    const DEBUG = false;

    // 初期値(定数)
    const VISIBLE_LOG = true;
    const ONESELF_RETWEET_BLOCK = true;

    const BLACK_TEXT_REG = `!# 行頭が"!#"だとコメント

!# プロフィールメッセージを異常に推してる人
こんにち[はわ].*?ぷろふ

!# chatGPTのエラーメッセージを取り敢えず対処
^申し訳ありません.*?(過激な表現や性的な内容|不適切なコンテンツや言葉).*?他の(質問や話題|トピックで質問)があれば.*?。$

!# タイ語のハッシュタグを含む場合
#[\\u0E00-\\u0F7F]+

!# アラビア語のみで構成
^[\\u0600-\\u07FF]+$
`;

    const ALLOW_LANG = "ja|en|qme|und";
    const MAX_SAVE_TEXT_SIZE = 80;
    const MIN_SAVE_TEXT_SIZE = 8;
    const MSG_RESEMBLANCE = 0.8;
    const MAX_SAVE_LOG_SIZE = 100;
    const MAX_HASHTAG_COUNT = 6;

    const PRO_NAME = "X_impression_hide";
    const BODY_OBS_TIMEOUT = 3000;
    const SETTING_SAVE_KEY = PRO_NAME + "_json";

    const PARENT_CLASS = PRO_NAME + "_parent";
    const CHECK_CLASS = PRO_NAME + "_check";
    const HIDE_CLASS = PRO_NAME + "_none";
    const LOG_CLASS = PRO_NAME + "_log";
    const EX_MENU_ID = PRO_NAME + "_menu";
    const EX_MENU_OPEN_CLASS = EX_MENU_ID + "_open";
    const EX_MENU_ITEM_BASE_ID = EX_MENU_ID + "_item_";

    const OBS_QUERY = "section > div > div:has(article)";
    const RE_QUERY = `div:has(div > div > article):not(.${CHECK_CLASS})`;
    const NAME_SPACE_QUERY = `[data-testid="User-Name"]`;
    const NAME_QUERY = `:not(span) > span > span`;
    const ID_QUERY = "div > span:not(:has(span))";
    const IMAGE_QUERY = "a img";

    const BASE_CSS = /* css */ `
#${EX_MENU_ID} {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2000;
}
/* 積み防止 */
#${EX_MENU_ID}.${EX_MENU_OPEN_CLASS} {
    display: block !important;
    visibility: visible !important;
}

#${EX_MENU_ID} > div {
    position: relative;
    overflow-y: scroll;
    overscroll-behavior: contain;
    width: 50vh;
    min-width: 200px;
    max-width: 90vw;
    height: 50vh;
    min-height: 200px;
    max-height: 90vh;
    resize: both;
    border: solid #000 2px;
    background: #fafafaee;
}

#${EX_MENU_ITEM_BASE_ID}__btns {
    position: sticky;
    right: 0;
    bottom: 0;
    text-align: right;
}
`;
    const CUSTOM_CSS = /* css */ `
/* ツイート非表示 */
.${HIDE_CLASS}:has(.${LOG_CLASS} input[type=checkbox]:not(:checked)) > div:not(.${LOG_CLASS}) {
    display: none;
}

/* 検出内容の表示設定 */
.${HIDE_CLASS} {
    background: #aaaa;
}

/* 以下非表示後の表示内容設定 */
.${LOG_CLASS} {
    display: flex;
    justify-content: space-between;
}

.${LOG_CLASS} input[type=checkbox] {
    display: none;
}
.${LOG_CLASS} label {
    cursor: pointer;
}
.${LOG_CLASS} label:hover {
    text-decoration: underline;
}

/* メニュー表示設定 */
#${EX_MENU_ID} textarea {
    width: 95%;
    resize: vertical;
    height: 8em;
    max-height: 25em;
    tab-size: 4;
    white-space: nowrap;
}
#${EX_MENU_ID} input[type=checkbox] + span::after {
    content: "無効";
}
#${EX_MENU_ID} input[type=checkbox]:checked + span::after {
    content: "有効";
}

.${EX_MENU_ITEM_BASE_ID}_name {
    font-size: 1.3em;
    margin-bottom: 3px;
    margin-left: 2px;
}
.${EX_MENU_ITEM_BASE_ID}_name + p {
    font-size: .8em;
    margin: 0 4px;
}
`;

    const SETTING_LIST = {
        visibleLog: {
            name: "非表示ログを表示",
            explanation: `非表示にしたログを画面から消します。
画面が平和になりますが、投稿を非表示にされた理由・元投稿が確認出来なくなります。`,
            data: VISIBLE_LOG,
            input: "checkbox",
        },
        blackTextReg: {
            name: "禁止する表現",
            explanation: `非表示にするテキストを指定します。
記述方法は正規表現(/の間部分)で記述します。
(半角カタカナ、カタカナはひらがなに自動変換されます)
(全角英数字は半角英数字に、改行文字は半角スペースに自動変換されます)`,
            data: BLACK_TEXT_REG,
            input: "textarea",
        },
        allowLang: {
            name: "許可する言語",
            explanation: `許可する言語を指定します。
記述方法は正規表現(/の間部分)で記述します。`,
            data: ALLOW_LANG,
            input: "text",
        },
        oneselfRetweetBlock: {
            name: "自身の引用禁止",
            explanation: `自身を引用ツイートする投稿を非表示にします。`,
            data: ONESELF_RETWEET_BLOCK,
            input: "checkbox",
        },
        maxHashtagCount: {
            name: "ハッシュタグの上限数",
            explanation: `1つの投稿内でのハッシュタグの使用上限数を指定します。`,
            data: MAX_HASHTAG_COUNT,
            input: "number",
            min: 1,
        },
        msgResemblance: {
            name: "文章類似度許可ライン",
            explanation: `コピペ文章かを判別する為の基準値を指定します。`,
            data: MSG_RESEMBLANCE,
            input: "number",
            min: 0,
            max: 1,
            step: 0.01,
        },
        maxSaveTextSize: {
            name: "比較される最大テキストサイズ",
            explanation: `コピペ投稿の文章比較の最大文字数を指定します。
値を大きくするほど誤検知率は減り、検知率も減ります。
(投稿の文字数が最大値以下の場合、この値は使用されません)`,
            data: MAX_SAVE_TEXT_SIZE,
            input: "number",
            min: 0,
        },
        minSaveTextSize: {
            name: "一時保存・比較される最小テキストサイズ",
            explanation: `比較用文章の最小文字数を指定します。
値が大きくするほど誤検知率は減り、検知率も減ります。
([比較される最大テキストサイズ]より大きい場合、比較処理は実行されません)`,
            data: MIN_SAVE_TEXT_SIZE,
            input: "number",
            min: 0,
        },
        maxSaveLogSize: {
            name: "一時保存される投稿の最大数",
            explanation: `比較用文章の保持数を指定します。
値が小さいほど処理は軽くなりますが、検知率が減ります`,
            data: MAX_SAVE_LOG_SIZE,
            input: "number",
            min: 1,
        },
        bodyObsTimeout: {
            name: "ページ更新検知用処理待機時間(ms)",
            explanation: `ページ更新を検知する際の検知の更新間隔を指定します。
値が大きいほど処理が軽くなりますが、非表示にする初速が落ちる可能性あります。`,
            data: BODY_OBS_TIMEOUT,
            input: "number",
            min: 100,
            advanced: true,
        },
        customCss: {
            name: "ページ適用css設定",
            explanation: `ページへ適用するcssを指定します。`,
            data: CUSTOM_CSS,
            input: "textarea",
            advanced: true,
        },
        resetSetting: {
            name: "設定のリセット",
            explanation: `設定項目をリセットします。
(ページがリロードされます)
<span style="color: #f00">実行すると設定は復元出来ません！！！</span>`,
            value: "リセットする",
            input: "button",
        },
    };

    // グローバル変数
    let parentDOM = null;
    let parent_observer = null;
    let oldUrl = location.href;
    let parent_id = null;
    let exMenuDOM = null;

    const blacklist_reg = [];
    let allowLang_reg = /.*/;
    const msgDB = [];
    const msgDB_id = new Set();
    const blacklist_id = new Set();

    let levenshteinDistanceUseFlag = true;

    // ページ変更確認に使用
    let body_isReservation = false;
    let body_isWait = false;

    const kanaMap = {
        ｶﾞ: "ガ", ｷﾞ: "ギ", ｸﾞ: "グ", ｹﾞ: "ゲ", ｺﾞ: "ゴ",
        ｻﾞ: "ザ", ｼﾞ: "ジ", ｽﾞ: "ズ", ｾﾞ: "ゼ", ｿﾞ: "ゾ",
        ﾀﾞ: "ダ", ﾁﾞ: "ヂ", ﾂﾞ: "ヅ", ﾃﾞ: "デ", ﾄﾞ: "ド",
        ﾊﾞ: "バ", ﾋﾞ: "ビ", ﾌﾞ: "ブ", ﾍﾞ: "ベ", ﾎﾞ: "ボ",
        ﾊﾟ: "パ", ﾋﾟ: "ピ", ﾌﾟ: "プ", ﾍﾟ: "ペ", ﾎﾟ: "ポ",
        ｳﾞ: "ヴ", ﾜﾞ: "ヷ", ｦﾞ: "ヺ",
        ｱ: "ア", ｲ: "イ", ｳ: "ウ", ｴ: "エ", ｵ: "オ",
        ｶ: "カ", ｷ: "キ", ｸ: "ク", ｹ: "ケ", ｺ: "コ",
        ｻ: "サ", ｼ: "シ", ｽ: "ス", ｾ: "セ", ｿ: "ソ",
        ﾀ: "タ", ﾁ: "チ", ﾂ: "ツ", ﾃ: "テ", ﾄ: "ト",
        ﾅ: "ナ", ﾆ: "ニ", ﾇ: "ヌ", ﾈ: "ネ", ﾉ: "ノ",
        ﾊ: "ハ", ﾋ: "ヒ", ﾌ: "フ", ﾍ: "ヘ", ﾎ: "ホ",
        ﾏ: "マ", ﾐ: "ミ", ﾑ: "ム", ﾒ: "メ", ﾓ: "モ",
        ﾔ: "ヤ", ﾕ: "ユ", ﾖ: "ヨ",
        ﾗ: "ラ", ﾘ: "リ", ﾙ: "ル", ﾚ: "レ", ﾛ: "ロ",
        ﾜ: "ワ", ｦ: "ヲ", ﾝ: "ン",
        ｧ: "ァ", ｨ: "ィ", ｩ: "ゥ", ｪ: "ェ", ｫ: "ォ",
        ｯ: "ッ", ｬ: "ャ", ｭ: "ュ", ｮ: "ョ",
        "｡": "。", "､": "、", ｰ: "ー",
        "｢": "「", "｣": "」", "･": "・",
    };
    const kanaReg = new RegExp("(" + Object.keys(kanaMap).join("|") + ")", "g");
    const spaceRegList = [
        /[ 　\t]/gu,
        /[\u00A0\u00AD\u034F\u061C]/gu,
        /[\u115F\u1160\u17B4\u17B5\u180E]/gu,
        // \u200Dが合成時に消失したため部分対処
        /[\u2000-\u200C\u200E-\u200F\u202F\u205F\u2060-\u2064\u206A-\u206F\u2800]/gu,
        /[\u3000\u3164]/gu,
        /[\uFEFF\uFFA0]/gu,
        /[\u{1D159}\u{1D173}-\u{1D17A}]/gu,
    ];
    const othToHiraRegList = [
        [kanaReg, (ch) => kanaMap[ch]],
        [/ﾞ/g, "゛"],
        [/ﾟ/g, "゜"],
        [/[ア-ヺ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60)],
        [/[！-～]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xfee0)],
        [/[”“″‶〝‟]/gu, '"'],
        [/[’‘′´‛‵＇]/gu, "'"],
        [/￥/g, "\\"],
        [/〜/g, "~"],
    ];
    const CrLfReg = /[\r\n]/gu;
    const spaceReg = / /g;

    log("起動中...");

    init();

    const menu_command_id_1 = GM.registerMenuCommand("設定を開く", function (event) {
        menuOpen();
    }, {
        accessKey: "s",
        autoClose: true
    });

    function init() {
        // 親id取得
        setParentId();

        {
            // 設定呼び出し
            let saveData = GM_getValue(SETTING_SAVE_KEY, null);
            if (saveData != null) {
                log("設定読み込み...開始");
                let jsonData = null;
                try {
                    jsonData = JSON.parse(saveData);
                }
                catch (e) {
                    console.error(e);
                }
                if (jsonData != null) {
                    for (let key in SETTING_LIST) {
                        if (key in jsonData) {
                            SETTING_LIST[key].data = jsonData[key];
                        }
                    }
                    log("設定読み込み...完了");
                }
            }
        }

        {
            // フィルター正規表現設定
            let spText = SETTING_LIST.blackTextReg.data
                .replace(/\r\n/g, "\n")
                .replace(/\r/g, "\n")
                .split("\n");

            for (let row of spText) {
                if (row.trim().length && !row.startsWith("!#")) {
                    try {
                        blacklist_reg.push([new RegExp(reRegExpStr(row), "uim"), row]);
                    }
                    catch (e) {
                        console.error(`[${PRO_NAME}]`, e);
                        SETTING_LIST.blackTextReg.isError = true;
                    }
                }
            }

            // 投稿の言語を制限
            try {
                allowLang_reg = new RegExp(SETTING_LIST.allowLang.data.trim(), "i");
            }
            catch (e) {
                console.error(e);
                SETTING_LIST.allowLang.isError = true;
            }
        }

        // 画面移管時対応
        const body_observer = new MutationObserver(bodyChangeEvent);
        body_observer.observe(document.body, {
            subtree: true,
            childList: true,
        });

        // カスタムcss設定
        try {
            GM.addStyle(BASE_CSS);
            GM.addStyle(SETTING_LIST.customCss.data);
        }
        catch (e) {
            console.error(e);
            SETTING_LIST.customCss.isError = true;
        }

        // 文章類似比較を実行するか
        if (!SETTING_LIST.maxSaveTextSize.data
            || SETTING_LIST.maxSaveTextSize.data < SETTING_LIST.minSaveTextSize.data) {
            levenshteinDistanceUseFlag = false;
        }

        card_init();
    }

    function menu_init() {
        let w_exMenuDOM = document.createElement("div");
        w_exMenuDOM.innerHTML = /* html */ `
<small style="color:#d00">変更の保存をした場合、ページを更新してください。</small>`;
        for (let key in SETTING_LIST) {
            let item = SETTING_LIST[key];
            // 入力欄作成
            let inputType = item?.input ?? ""
            let input_elem = document.createElement("input");
            input_elem.type = inputType;
            let add_elem = null;
            switch (inputType) {
                case "text":
                    input_elem.value = item.data;
                    break;
                case "number":
                    input_elem.value = item.data;
                    if (item?.min != null) {
                        input_elem.min = item.min;
                    }
                    if (item?.max != null) {
                        input_elem.max = item.max;
                    }
                    if (item?.step != null) {
                        input_elem.step = item.step;
                    }
                    break;
                case "checkbox":
                    input_elem.checked = item?.data ?? false;
                    add_elem = document.createElement("span");
                    break;
                case "radiobutton":
                    // 使ってない
                    break;
                case "button":
                    input_elem.value = item.value;
                    break;
                case "textarea":
                    input_elem = document.createElement("textarea");
                    input_elem.value = item.data;
                    break;
                default:
                    console.warn("対応していない形式", item);
                    continue;
            }
            input_elem.id = EX_MENU_ITEM_BASE_ID + key;

            // 項目を囲うdiv
            let div = document.createElement("div");
            // 名前
            if (item?.name) {
                let name_elem = document.createElement("p");
                name_elem.innerText = item.name;
                name_elem.classList.add(EX_MENU_ITEM_BASE_ID + "_name")
                div.appendChild(name_elem);
            }
            // 説明
            if (item?.explanation) {
                let ex_elem = document.createElement("p");
                ex_elem.innerHTML = item.explanation.replace(/\n/g, "<br/>");
                div.appendChild(ex_elem);
            }

            div.appendChild(input_elem);
            if (add_elem) {
                div.appendChild(add_elem);
            }
            w_exMenuDOM.appendChild(div);
        }
        // 画面右下のボタン系
        {
            let div = document.createElement("div");
            div.id = EX_MENU_ITEM_BASE_ID + "__btns";
            let btn_elem = document.createElement("input");
            btn_elem.type = "button";
            btn_elem.value = "保存";
            btn_elem.id = EX_MENU_ITEM_BASE_ID + "__save";
            div.appendChild(btn_elem);
            btn_elem = document.createElement("input");
            btn_elem.type = "button";
            btn_elem.value = "閉じる";
            btn_elem.id = EX_MENU_ITEM_BASE_ID + "__close";
            div.appendChild(btn_elem);
            w_exMenuDOM.appendChild(div);
        }
        exMenuDOM = document.createElement("div");
        exMenuDOM.id = EX_MENU_ID;
        exMenuDOM.appendChild(w_exMenuDOM);
    }

    function card_init() {
        log("初期化中...")

        // 表示待機
        waitForKeyElements(OBS_QUERY, function () {
            // (投稿リストの)親を取得
            parentDOM = document.querySelector(OBS_QUERY);
            if (parentDOM == null) {
                log(`(${OBS_QUERY})が見つけれませんでした`)
                return;
            }
            parentDOM.classList.add(PARENT_CLASS);

            // DOM変更検知(イベント)
            parent_observer = new MutationObserver(records => {
                records.forEach(record => {
                    let addNodes = record.addedNodes;
                    if (addNodes.length) {
                        addNodes.forEach(addNode => {
                            cardCheck(addNode)
                        });
                    }
                });
            });
            parent_observer.observe(parentDOM, {
                childList: true,
                //subtree: true,
            });

            // 先頭部分が取得出来ていないので再実行
            parentDOM.querySelectorAll(RE_QUERY).forEach(elem => {
                cardCheck(elem)
            });
        });
    }

    // メッセージの親を取得
    function setParentId() {
        let url = oldUrl.replace(/https?:\/\/twitter.com/, "");
        if (url.startsWith("/")) {
            let uid = url.replace(/\?/, "").split("/")?.[1];
            if (uid && uid != "home" && uid != "search") {
                uid = "@" + uid;
                log(`親投稿者: ${uid}`);
                parent_id = uid;
                // 気分で消しとく
                blacklist_id.delete(uid);
            }
        }
    }

    // 画面移管対応
    function bodyChangeEvent() {
        // 更新過多で重くなるので同時実行禁止
        if (body_isWait) {
            body_isReservation = true;
            return;
        }
        body_isWait = true;
        // 反応しない場合用に一瞬待機
        setTimeout(function () {
            // URL変更時のみ
            if (oldUrl !== location.href) {
                oldUrl = location.href;
                setParentId();
                if (!document.getElementsByClassName(PARENT_CLASS)?.[0]) {
                    if (parent_observer) {
                        parent_observer.disconnect();
                        parent_observer = null;
                    }
                    card_init()
                }
            }
            body_isWait = false;
            // 一応再実行
            if (body_isReservation) {
                body_isReservation = false;
                bodyChangeEvent();
            }
        }, SETTING_LIST.bodyObsTimeout.data);
    }

    // 処理対象判定&処理実行
    function cardCheck(card_elem) {
        // 処理は1度のみ
        if (card_elem.classList.contains(CHECK_CLASS)) {
            return;
        }
        card_elem.classList.add(CHECK_CLASS)

        let messageData = {
            base_url: oldUrl,
            card: card_elem,
            verify: false,
            attach_img: false,
            reTweet: null,
            _nsOneLoadFlag: false,
        };

        // 処理対象か判定
        let article = card_elem?.firstChild?.firstChild?.firstChild;
        if (article?.tagName != "ARTICLE") {
            return;
        }

        // ユーザー名などの空間取得
        let nameSpace_div = article.querySelectorAll(NAME_SPACE_QUERY);
        nameSpace_div.forEach(div => {
            // 2回目以降はリツイート
            if (messageData._nsOneLoadFlag) {
                messageData.reTweet = {
                    verify: false,
                };
            }

            // ユーザー名(id)取得
            let name_span = div.querySelector(NAME_QUERY);
            if (messageData._nsOneLoadFlag) {
                messageData.reTweet.name = name_span?.innerText
            }
            else {
                messageData.name = name_span?.innerText;
            }

            // id取得(ついでに認証マーク判定)
            let id_span = div.querySelectorAll(ID_QUERY);
            id_span.forEach(span => {
                let fc = span?.firstChild;
                if (fc?.tagName == "svg") {
                    if (messageData._nsOneLoadFlag) {
                        messageData.reTweet.verify = true;
                    }
                    else {
                        messageData.verify = true;
                    }
                }
                else {
                    let tmp = span.innerText.trim();
                    if (tmp.startsWith("@")) {
                        if (messageData._nsOneLoadFlag) {
                            messageData.reTweet.id = tmp;
                        }
                        else {
                            messageData.id = tmp;
                        }
                    }
                }
            });

            messageData._nsOneLoadFlag = true;
        });

        // 投稿時刻
        let time_elem = article.querySelector("time");
        if (!time_elem) {
            return;
        }
        try {
            messageData.dateTime = new Date(time_elem.dateTime);
        }
        catch (e) {
            console.error(e);
            return;
        }
        if (messageData.dateTime.toString() == "Invalid Date") {
            log("日付変換失敗");
            return;
        }

        // 画像を添付しているか
        let attach_img = article.querySelectorAll(IMAGE_QUERY);
        if (attach_img) {
            for (let img of attach_img) {
                if (/^https?:\/\/pbs.twimg.com\/media\//.test(img.href)) {
                    messageData.attach_img = true;
                    break;
                }
            }
        }

        // メッセージ取得
        let text_divs = article.querySelectorAll("div[lang]");
        let text_div = text_divs?.[0];
        if (!text_div) {
            return;
        }

        let fullStr = "";
        let str = "";
        let emojiLst = [];
        let tmp;
        text_div.childNodes.forEach(elem => {
            switch (elem.tagName) {
                case "SPAN":
                    tmp = elem.innerText
                    str += tmp;
                    fullStr += tmp;
                    break;
                case "IMG":
                    tmp = elem.alt;
                    emojiLst.push(tmp);
                    fullStr += tmp;
                    break;
                default:
                    break;
            }
        });

        messageData.full = fullStr;
        messageData.str = str;
        messageData.emoji = emojiLst;
        messageData.cleanStr = othToHira(str).replace(CrLfReg, " ");
        messageData.str_len = messageData.cleanStr.length;

        //log(messageData);
        // 投稿主保護
        if (messageData.id == parent_id) {
            return;
        }
        // blacklist_id比較
        if (blacklist_id.has(messageData.id)) {
            hideComment(messageData, "他で検出済");
            return;
        }
        // 投稿言語の制限
        for (let div of text_divs) {
            if (!allowLang_reg.test(div.lang)) {
                hideComment(messageData, `<span title="${div.lang}">非許可言語</span>`);
                return;
            }
        }

        let ret = commentFilter(messageData);
        switch (ret[0]) {
            case -1:
                // 取得,判定済投稿
                return;
            case 0:
                // 問題なし

                // 短いと誤爆するため
                if (messageData.str_len >= SETTING_LIST.minSaveTextSize.data) {
                    addDB(messageData);
                }
                return;
            case 1:
                // フィルターに反応
                hideComment(messageData, `<span title="フィルター「/${ret[1]}/uim」">フィルター検出</span>`);
                return;
            case 2:
                // 絵文字のみ(スパム)
                hideComment(messageData, "絵文字のみ");
                return;
            case 3:
                // コピペ
                hideComment(messageData, `<span title="類似度:${(ret[1] * 10000 | 0) / 100}%">文章の複製</span>`);
                return
            case 4:
                // 異常なハッシュタグの使用
                hideComment(messageData, `<span title="使用回数: ${ret[1]}">#多量使用</span>`)
                return;
            case 5:
                // 自分自身の引用
                hideComment(messageData, "自身の引用");
                return;
        }
    }

    function commentFilter(mesData) {
        let message = mesData.cleanStr;
        if (!message.replace(spaceReg, "").length && !mesData.attach_img) {
            return [2];
        }

        // 引用リツイートしている場合
        if (mesData.reTweet) {
            // 自分自身の場合
            if (SETTING_LIST.oneselfRetweetBlock.data && mesData.reTweet.id == mesData.id) {
                return [5];
            }
        }

        // フィルターによる検出
        for (let reg of blacklist_reg) {
            if (reg[0].test(message)) {
                return [1, reg[1]];
            }
        }

        // 異常なハッシュタグの使用回数
        let hashtagCou = message.match(/#[^ ]+/g)?.length ?? 0;
        if (hashtagCou >= SETTING_LIST.maxHashtagCount.data) {
            return [4, hashtagCou];
        }

        // 短い文字列は比較しない(誤爆対処)
        if (levenshteinDistanceUseFlag
            && mesData.str_len >= SETTING_LIST.minSaveTextSize.data) {
            // コピぺチェック
            let msts = SETTING_LIST.maxSaveTextSize.data;
            let al = mesData.str_len;
            for (let md of msgDB) {
                let a = message;
                let b = md.cleanStr;
                let bl = md.str_len;
                let m = Math.min(al, bl, msts);
                if (m != al) {
                    a = a.substring(0, m);
                }
                if (m != bl) {
                    b = b.substring(0, m);
                }

                // 一度取得したツイートだった場合
                let am = mesData.dateTime.getTime();
                let bm = md.dateTime.getTime();
                if (am == bm && mesData.id == md.id && mesData.cleanStr == md.cleanStr) {
                    return [-1];
                }

                let ld = levenshteinDistance(a, b);
                if (ld >= SETTING_LIST.msgResemblance.data) {
                    if (am > bm) {
                        return [3, ld];
                    }
                    else {
                        blacklist_id.add(md.id);
                        break;
                    }
                }
            }
        }
        else {
            // 比較が行われない場合の代替処理
            for (let md of msgDB) {
                let am = mesData.dateTime.getTime();
                let bm = md.dateTime.getTime();
                if (am == bm && mesData.id == md.id && mesData.cleanStr == md.cleanStr) {
                    return [-1];
                }
            }
        }


        return [0];
    }

    function addDB(mesData) {
        msgDB_id.add(mesData.id);
        if (msgDB.length > SETTING_LIST.maxSaveLogSize.data) {
            msgDB.shift();
        }
        msgDB.push(mesData);
        log(msgDB.length);
    }

    function hideComment(mesData, reason, ch = true) {
        blacklist_id.add(mesData.id);

        mesData.card.classList.add(HIDE_CLASS);

        if (SETTING_LIST.visibleLog.data) {
            let div = document.createElement("div");
            div.classList.add(LOG_CLASS);
            div.innerHTML = /* html */ `
<span>[${reason}] <a href="/${mesData.id}" title="${mesData.id}">${mesData.name}</a></span>

<label><input type="checkbox">元Tweetを見る</label>
`;
            mesData.card.prepend(div);
        }
        // 無駄な比較をしないように
        if (ch) {
            dbCommentBlock(mesData.id);
        }
    }

    // 後からblacklist_idに登録された場合、
    function dbCommentBlock(id) {
        if (msgDB_id.has(id)) {
            for (let i = msgDB.length - 1; i >= 0; i--) {
                let mData = msgDB[i];
                if (mData?.id == id) {
                    msgDB.splice(i, 1);
                    if (mData.base_url == oldUrl) {
                        hideComment(mData, `再帰的検出`, false);
                    }
                }
            }
            msgDB_id.delete(id);
        }
    }


    // メニューを開く
    function menuOpen() {
        log("メニュー表示...開始");
        if (!exMenuDOM) {
            menu_init();
        }

        // DOM 取得
        let menu_elem = document.getElementById(EX_MENU_ID);
        if (!menu_elem) {
            // なければ複製して追加
            menu_elem = exMenuDOM.cloneNode(true);
            document.body.appendChild(menu_elem);
            document.getElementById(EX_MENU_ITEM_BASE_ID + "__save").addEventListener("click", menuSave);
            document.getElementById(EX_MENU_ITEM_BASE_ID + "__close").addEventListener("click", menuClose);

            document.getElementById(EX_MENU_ITEM_BASE_ID + "customCss").addEventListener("keydown", OnTabKey);
            document.getElementById(EX_MENU_ITEM_BASE_ID + "resetSetting").addEventListener("click", menuReset);
        }
        menu_elem.classList.add(EX_MENU_OPEN_CLASS);
        log("メニュー表示...完了");
    }

    // メニューを閉じる
    function menuClose() {
        log("メニュー非表示");
        let menu_elem = document.getElementById(EX_MENU_ID);
        if (menu_elem) {
            menu_elem.classList.remove(EX_MENU_OPEN_CLASS);
        }
    }

    // データ保存
    function menuSave() {
        log("設定保存...開始");
        for (let key in SETTING_LIST) {
            let item = SETTING_LIST[key];

            let elem = document.getElementById(EX_MENU_ITEM_BASE_ID + key);
            if (elem) {
                let data = null;
                switch (item.input) {
                    case "text":
                    case "textarea":
                        data = elem.value;
                        break;
                    case "number":
                        data = parseFloat(elem.value);
                        if (item?.min != null && item.min > data) {
                            data = item.min;
                        }
                        if (item?.max != null && item.max < data) {
                            data = item.max;
                        }
                        break;
                    case "checkbox":
                        data = elem.checked;
                        break;
                    case "radiobutton":
                        // 使ってない
                        break;
                    default:
                        continue;
                }
                if (data == null) {
                    continue;
                }
                item.data = data;
            }
        }
        let dic = {};
        for (let key in SETTING_LIST) {
            let d = SETTING_LIST[key]?.data;
            if (d != null) {
                dic[key] = d;
            }
        }
        try {
            GM_setValue(SETTING_SAVE_KEY, JSON.stringify(dic));
        }
        catch (e) {
            console.error(e);
        }
        log("設定保存...完了");
        menuClose();
    }

    function menuReset() {
        if (confirm("本当にリセットを実行しますか？")) {
            log("リセット処理実行");
            GM_deleteValue(SETTING_SAVE_KEY);
            location.reload();
        }
    }

    //####################################################################################################

    // DOMが設置されるまで待機
    function waitForKeyElements(
        selectorTxt, //クエリセレクター
        actionFunction, //実行関数
        bWaitOnce = true, //要素が見つかっても検索を続ける
        iframeName = null //iframeの中の要素の場合はiframeのidを書く
    ) {
        var targetNodes, btargetsFound;
        var iframeDocument = document;
        if (iframeName !== null) {
            let iframeElem = document.getElementById(iframeName);

            if (!iframeElem) {
                doRetry();
                return;
            }
            iframeDocument = iframeElem.contentDocument || iframeElem.contentWindow.document;
        }
        targetNodes = iframeDocument.querySelectorAll(selectorTxt);

        if (targetNodes && targetNodes.length > 0) {
            btargetsFound = true;
            targetNodes.forEach(function (element) {
                var alreadyFound = element.dataset.found == 'alreadyFound' ? 'alreadyFound' : false;

                if (!alreadyFound) {
                    var cancelFound;
                    if (iframeName !== null) {
                        cancelFound = actionFunction(element, iframeDocument);
                    }
                    else {
                        cancelFound = actionFunction(element);
                    }
                    if (cancelFound) {
                        btargetsFound = false;
                    }
                    else {
                        element.dataset.found = 'alreadyFound';
                    }
                }
            });
        }
        else {
            btargetsFound = false;
        }

        if (btargetsFound && bWaitOnce) {
            //終了
        }
        else {
            doRetry();
        }

        function doRetry() {
            setTimeout(function () {
                waitForKeyElements(selectorTxt,
                    actionFunction,
                    bWaitOnce,
                    iframeName
                );
            }, 300);
        }
    }

    // 不明な空白を半角スペースに
    function uspTosp(str) {
        str = str.toString()
        for (let reg of spaceRegList) {
            str = str.replace(reg, " ");
        }
        return str;
    }

    //全ての文字を共通化
    function othToHira(str) {
        str = uspTosp(str);
        for (let regs of othToHiraRegList) {
            str = str.replace(...regs);
        }
        return str.toLowerCase();
    }

    // 困った時のレーベンシュタイン距離
    function levenshteinDistance(str1, str2) {
        let r,
            c,
            cost,
            lr = str1.length,
            lc = str2.length,
            d = [];

        for (r = 0; r <= lr; r++) {
            d[r] = [r];
        }
        for (c = 0; c <= lc; c++) {
            d[0][c] = c;
        }
        for (r = 1; r <= lr; r++) {
            for (c = 1; c <= lc; c++) {
                cost = str1.charCodeAt(r - 1) == str2.charCodeAt(c - 1) ? 0 : 1;
                d[r][c] = Math.min(d[r - 1][c] + 1, d[r][c - 1] + 1, d[r - 1][c - 1] + cost);
            }
        }
        return 1 - d[lr][lc] / Math.max(lr, lc);
    }

    // unicodeを復元
    function reRegExpStr(str) {
        return uspTosp(str)
            .replace(/\\x([0-9a-fA-F]{2})|\\u([0-9a-fA-F]{4})|\\u\{([0-9a-fA-F]{1,6})\}/g, function (f, a, b, c) {
                let str = a ?? b ?? c ?? null;
                if (str == null) {
                    return f;
                }
                return String.fromCodePoint(parseInt(str, 16));
            });
    }

    // tabをtextareaで入力可能に
    function OnTabKey(e) {
        if (e.keyCode != 9) {
            return;
        }
        e.preventDefault();

        let obj = e.target;

        // 現在のカーソルの位置と、カーソルの左右の文字列を取得
        var cursorPosition = obj.selectionStart;
        var cursorLeft = obj.value.substr(0, cursorPosition);
        var cursorRight = obj.value.substr(cursorPosition, obj.value.length);

        obj.value = cursorLeft + "\t" + cursorRight;

        // カーソルの位置を入力したタブの後ろにする
        obj.selectionEnd = cursorPosition + 1;
    }

    // ログを判別しやすく
    function log(str) {
        if (DEBUG) {
            console.log(`[${PRO_NAME}]`, str);
        }
    }
})();

