// ==UserScript==
// @name                Twitter(旧:𝕏)のインプレッション小遣い稼ぎ野郎どもをdisplay:none;するやつ
// @name:ja             Twitter(旧:𝕏)のインプレッション小遣い稼ぎ野郎どもをdisplay:none;するやつ
// @name:en             Hide the Twitter (formerly: 𝕏) impression-earning scammers with "display:none;"
// @name:zh-CN          使用 "display:none;" 隐藏 Twitter（曾用名: 𝕏）的印象收益骗子。
// @name:zh-TW          使用 "display:none;" 隱藏 Twitter（曾用名: 𝕏）的印象詐騙者。
// @namespace           https://snowshome.page.link/p
// @version             1.10.2
// @description         Twitterのインプレゾンビを非表示にしたりブロック・通報するツールです。
// @description:ja      Twitterのインプレゾンビを非表示にしたりブロック・通報するツールです。
// @description:en      A tool to hide, block, and report spam on Twitter.
// @description:zh-CN   用于隐藏、阻止和报告 Twitter 上的垃圾邮件的工具。
// @description:zh-TW   用於隱藏、封鎖和報告 Twitter 上的垃圾郵件的工具。
// @author              tromtub(snows)
// @license             GPL-3.0
// @match               *://twitter.com/*
// @match               *://x.com/*
// @icon                data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB7ElEQVR4Ae1XMZLCMAwUdw0ldJQ8ATpKnkBJByUd8ALyA/gBdJTQUtHS8QT4AaRM5ctmThmfogQ75CYNmhGTbGJr45Vk0yAiQzXaF9VsHwIZAofDgYwxqo9GI/K16/X6cqyxvdVqmdvtZh6PhwmCIHXcw7vdrpFj8ny9XhsYxhe8lwWHw2EycLFYpNh0Ok2w8/nsFHy1WrkE1wnAN5tNMkGv10ux3W6XIab5fD5P3ovldCGrP2Ap4LiW8uRJAcIwe1wpArYU0FJimhQgxaQ9cqX4BZYCgSVmS8HBfRP1JQEsY1xKGSmAcTC+l0QrIWDraicVMBBA4O1265ScpQnAMbkMwphjub1HAI7EkxoDK7n0/gQQGATsCmDMo+z++Hf8E5CjPZ9PiqKIZrMZhWFIl8slxcbjMTWbTTqdTuRrXoz5i2WXRIL+WxWw2+Uml13rnJUT4K9E9nMFaF3SxiojoO1u2rJzl4z3/+oIcHBMLiUp2rDe3ozg+BIYtNee87KjGzLGndPx7JD/0K7xog2Gl30ymaSY1jm9CPhsrXnnBK1zOhHgCWWtF7l2TtA6p3S1E+73exoMBrRcLul4PJKL3e93arfbSUeMA1O/36eYPHU6nWQu7pyaqRlfZnezV05anhSN34va7PPXrHYCP+VaTG3LBV1KAAAAAElFTkSuQmCC
// @supportURL          https://github.com/hi2ma-bu4/X_impression_hide
// @supportURL          https://greasyfork.org/ja/scripts/484303-twitter-旧-𝕏-のインプレッション小遣い稼ぎ野郎どもをdisplay-none-するやつ
// @compatible          chrome
// @compatible          edge
// @compatible          opera chromium製なので動くと仮定
// @compatible          firefox
// @grant               GM.addStyle
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_deleteValue
// @grant               GM.registerMenuCommand
// @run-at              document-idle
// @noframes
// @downloadURL https://update.greasyfork.org/scripts/484303/Twitter%28%E6%97%A7%3A%F0%9D%95%8F%29%E3%81%AE%E3%82%A4%E3%83%B3%E3%83%97%E3%83%AC%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E5%B0%8F%E9%81%A3%E3%81%84%E7%A8%BC%E3%81%8E%E9%87%8E%E9%83%8E%E3%81%A9%E3%82%82%E3%82%92display%3Anone%3B%E3%81%99%E3%82%8B%E3%82%84%E3%81%A4.user.js
// @updateURL https://update.greasyfork.org/scripts/484303/Twitter%28%E6%97%A7%3A%F0%9D%95%8F%29%E3%81%AE%E3%82%A4%E3%83%B3%E3%83%97%E3%83%AC%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E5%B0%8F%E9%81%A3%E3%81%84%E7%A8%BC%E3%81%8E%E9%87%8E%E9%83%8E%E3%81%A9%E3%82%82%E3%82%92display%3Anone%3B%E3%81%99%E3%82%8B%E3%82%84%E3%81%A4.meta.js
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
・親ツイートの分別・判定
・検知率を上げる
    ・あやしい日本語の検知(多分自分の実力じゃ無理)
    ・フィルターをもっと有能に
・誤検知を減らす(今はまだいい？)
・クイックミュートボタンを作成
・whitelist_filterの実装
    ・名前
・他人の引用ツイートテキストフィルターを作成
・プロフィールメッセージフィルターを作成
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
    const LANGUAGE = "ja";
    const VISIBLE_LOG = true;
    const VISIBLE_VERIFY_LOG = true;
    const ONESELF_RETWEET_BLOCK = true;
    const EMOJI_ONRY_BLOCK = true;
    const EMOJI_ONRY_NAME_BLOCK = true;
    const VERIFY_BLOCK = false;
    const VERIFY_RT_BLOCK = false;
    const VERIFY_ONRY_FILTER = false;
    const FORMALITY_CARE_FILTER = true;
    const VISIBLE_BLOCK_BUTTON = true;
    const VISIBLE_REPORT_BUTTON = true;
    const BLACK_MEMORY = false;
    const AUTO_BLOCK = false;           // trueにしてはいけない(戒め)
    const AUTO_OPEN_SETTING_MENU = false;

    const BLACK_TEXT_REG = `!# 行頭が"!#"だとコメント

!# プロフィールメッセージを異常に推してる人
((初|はじ)めまして|こんにち[はわ]|こんばん[はわ]|やっほ|[き気]になった|良かったら).*?ぷろふ
ぷろふぃーるの確認を
(^(連絡|絡み)|[→⇒➡]).*(よろ|おねがいします|返事)

!# chatGPTが時々やらかす濁点半濁点問題を流用
[\\u3099\\u309a]

!# chatGPTのエラーメッセージを取り敢えず対処
^申し訳ありません.*?(過激な表現や性的な内容|不適切なコンテンツや言葉).*?他の(質問や話題|トピックで質問)があれば.*?。$

!# chatGPT構文
ですね!.*(です|ね)。$
されましたね!.*(です|ね)[!。]$

!# 陰謀的単語
人口地震

!# タイ語のハッシュタグを含む場合
#[\\u0E00-\\u0F7F]+

!# アラビア語の単語を含む場合
[\\u0600-\\u07FF]{4,}

!# 中国語のなんかよく見るやつ
^想上课的私信主人
^太阳射不进来的地方
^挂空就是舒服，接点地气
^总说我下面水太多
^在这个炮火连天的夜晚
^只进入身体不进入生活
^生活太多伪装，只能在推上面卸下伪装
^生活枯燥无味，一个人的夜晚总想找个
^我每天都有好好的穿衣服.*俘获
^人不可能每一步都正确，我不想回头看，也不想批判当时的自己
^如果你连试着的胆量也没有，你也就配不上拥有性福
^我希望以后可以不用再送我回家，而是我们一起回我们的家
^勇敢一点我们在.*就有故事
^只要你主动一点点我们就会有机会.*线下
`;
    const WHITE_TEXT_REG = `!# 同上

!# 例としてMisskey構文に対応してみる
^:[a-z0-9\-_]:$

!# 緊急性の高い単語を除外
!# ゾンビも使ってくるので除外ユーザー(Excluded users)を併用推奨
!# (災害・防災アカウントidをフィルターに追記した為コメントアウト)
!# 
!# 地震|余震|マグニチュード|火災|災害|津波|波浪|台風|震度
!# jQuake

`;
    /*
        const BLACK_RT_TEXT_REG = `!# 同上
    
    !# 英語の動画宣伝RTの構文
    (vid|video).*free
    free.*(vid|video)
    `;
    */
    const BLACK_NAME_REG = `!# 同上

!# アラビア語のみで構成
^[\\u0600-\\u07FF ]+$

!# ヒンディー語のみで構成
^[\\u0900-\\u097F ]+$

!# 中国語のなんかよく見るやつ
反差
私信领福利
同城
可约
`;
    const EXCLUDED_USERS = `!# 同上

!# 例として製作者のidを指定
@tromtub

!# 災害(緊急)情報発信者を除外
!# 表記抜けや、誤字はGithubのIssuesにご報告下さい。
@UN_NERV
@EN_NERV
@EqAlarm
@saigai_sokuho
@MLIT_JAPAN
@CAO_BOUSAI
@JMA_bousai
@JMA_kishou
@JCG_koho
@meti_NIPPON
@ModJapan_saigai
@Kanboukansen
@NPA_saigaiKOHO
@MPD_bousai
@JapanSafeTravel
@JSCE_Saigai
@nhk_seikatsu
@TBC_saigai
@ats_saigai
@tokyo_bousai
@yokohama_saigai
@yamaguchiSaigai
@y_minami_saigai
@w_city_saigai
@sakai_saigai
@Saigai_ishikawa
@saigai01
@HiroshimaBousai
@etajima_bousai
@chibaken_saigai
@aichi_bousai
@kawasaki_bousai
@EhimeBousai
@Gunma_bousai
@nodasi_saigai
@IshiSaigai
@kfb_saigai
@KagoshimaSaigai
@kouchi_bousai
@NTTWestOfficial
@rikudennw
@denjiren
@denjiren_saigai
@mlit_chokoku
@JREast_official

!# サイバーセキュリティ
@cas_nisc
@nisc_forecast

!# TV
@news24ntv

!# 交通情報
@shutoko_traffic
@nexco_kanto
@e_nexco_touhoku
@JAL_flight_info
@JRE_Super_Exp
@odakyuline_info
`

    //プロフィールメッセージフィルター機能を作る
    //Bimbo

    const ALLOW_LANG = "ja|en|es|zh|pt|qme|qam|und";
    const MAX_SAVE_TEXT_SIZE = 80;
    const MIN_SAVE_TEXT_SIZE = 8;
    const MSG_RESEMBLANCE = 0.85;
    const MAX_SAVE_LOG_SIZE = 150;
    const MAX_HASHTAG_COUNT = 6;
    const MAX_SYMBOLTAG_COUNT = 1;
    const MAX_CONTRIBUTION_COUNT = 2;
    const MAX_RT_COUNT = 1;
    const MAX_SAME_RT_COUNT = 1;

    const PRO_NAME = "X_impression_hide";
    const BODY_OBS_TIMEOUT = 3000;
    const SETTING_SAVE_KEY = PRO_NAME + "_json";
    const BLACK_MEMORY_KEY = PRO_NAME + "_blackMemory";

    const PARENT_CLASS = PRO_NAME + "_parent";
    const CHECK_CLASS = PRO_NAME + "_check";
    const HIDE_CLASS = PRO_NAME + "_none";
    const LOG_CLASS = PRO_NAME + "_log";
    const VERIFY_CLASS = PRO_NAME + "_verify";
    const EX_MENU_ID = PRO_NAME + "_menu";
    const EX_MENU_OPEN_CLASS = EX_MENU_ID + "_open";
    const EX_MENU_ITEM_BASE_ID = EX_MENU_ID + "_item_";
    const EX_MENU_ITEM_ERROR_CLASS = EX_MENU_ID + "_err";

    const OBS_QUERY = "section > div > div:has(article)";
    const RE_QUERY = `div:has(div > div > article):not(.${CHECK_CLASS})`;
    const NAME_SPACE_QUERY = `[data-testid="User-Name"]`;
    const NAME_QUERY = `:not(span) > span > span`;
    const ID_QUERY = "div > span:not(:has(span))";
    const VERIFY_QUERY = `svg:not(:has([fill^="#"]))`;
    const VERIFY_FORMALITY_QUERY = `svg:has([fill^="#"])`;
    const IMAGE_QUERY = `a img, [data-testid="videoComponent"] video`;
    const MENU_BUTTON_QUERY = "[aria-haspopup=menu][role=button]:has(svg)";
    const MENU_DISP_QUERY = "[role=group] [role=menu]";
    const BLOCK_QUERY_LIST = [
        `${MENU_DISP_QUERY} div[role=menuitem]:has(path[d^="M12 3.75c"])`,
        "[role=alertdialog] [role=group] [role=button] div",
    ];
    const REPORT_QUERY_LIST = [
        `${MENU_DISP_QUERY} div[role=menuitem]:has(path[d^="M3 2h18"])`,
        ["[role=radiogroup] label", 5],
        "[role=group]:has([role=radiogroup]) div[role=button]:not(:has(svg))",
        ["[role=group] div[role=button]:not(:has(svg))", 1],
    ];

    const VERIFY_SVG = `
    <svg class="${VERIFY_CLASS}" viewBox="0 0 22 22" role="img" data-testid="icon-verified">
        <g>
            <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
            </path>
        </g>
    </svg>
`;

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
.${HIDE_CLASS}:has(.${LOG_CLASS} input[type=checkbox]:not(:checked)) > div:not(.${LOG_CLASS}), .${HIDE_CLASS}:not(:has(.${LOG_CLASS})) > div:not(.${LOG_CLASS}) {
    display: none;
}

.${HIDE_CLASS}:has(.${LOG_CLASS}):not(:has(article)) {
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

.${LOG_CLASS} input[type=button] {
    cursor: pointer;
    background-color: rgba(0,0,0,0);
}
.${LOG_CLASS} input[type=button]:hover {
    background-color: rgba(29, 155, 240, .5);
}

.${VERIFY_CLASS} {
    max-width: 20px;
    max-height: 20px;
    color: rgb(29, 155, 240);
    fill: currentcolor;
    user-select: none;
    height: 1.25em;
    display: inline-block;
    vertical-align: middle;
}

/* メニュー表示設定 */
#${EX_MENU_ID} textarea {
    width: 95%;
    resize: vertical;
    height: 8em;
    max-height: 25em;
    tab-size: 4;
    white-space: pre;
    font-size: 0.89em;
}
#${EX_MENU_ID} input[type=text] {
    width: 95%;
}

#${EX_MENU_ID} input[type=checkbox] + span::after {
    content: "無効";
}
#${EX_MENU_ID} input[type=checkbox]:checked + span::after {
    content: "有効";
}
#${EX_MENU_ID}[lang=en] input[type=checkbox] + span::after {
    content: "Invalid";
}
#${EX_MENU_ID}[lang=en] input[type=checkbox]:checked + span::after {
    content: "Validity";
}

#${EX_MENU_ID} details {
    margin-top: 1em;
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

.${EX_MENU_ITEM_ERROR_CLASS} {
    color: red;
    margin: 0;
}
`;

    const SETTING_LIST = {
        visibleLog: {
            name: {
                ja: "非表示ログを表示",
                en: "Show hidden logs",
            },
            explanation: {
                ja: `非表示にしたログを画面から消します。
画面が平和になりますが、投稿を非表示にされた理由・元投稿が確認出来なくなります。`,
                en: `It will remove the hidden logs from the screen.
The screen will be peaceful, but the reasons for hiding the posts and the original posts will no longer be visible.`,
            },
            data: VISIBLE_LOG,
            _data: VISIBLE_LOG,
            input: "checkbox",
        },
        visibleVerifyLog: {
            name: {
                ja: "非表示ログに認証マーク表示",
                en: "Certification mark displayed on hidden log",
            },
            explanation: {
                ja: `非表示にしたログの名前の後ろに認証マークを追加します。
企業バッジでも青バッジで表示されます。`,
                en: `Adds a certification mark after the name of the hidden log.
Corporate badges are also displayed as blue badges.`,
            },
            data: VISIBLE_VERIFY_LOG,
            _data: VISIBLE_VERIFY_LOG,
            input: "checkbox",
        },
        blackTextReg: {
            name: {
                ja: "禁止する表現",
                en: "Prohibited expressions",
            },
            explanation: {
                ja: `非表示にするテキストを指定します。
記述方法は正規表現(/の間部分)で記述します。
(半角カタカナ、カタカナはひらがなに自動変換されます)
(全角英数字は半角英数字に、改行文字は半角スペースに自動変換されます)`,
                en: `Specify the text to hide.
The description should be written using regular expressions (between the / characters).
Half-width katakana and katakana will be automatically converted to hiragana.
Full-width alphanumeric characters will be converted to half-width,
 and line breaks will be converted to spaces automatically.`,
            },
            data: BLACK_TEXT_REG,
            _data: BLACK_TEXT_REG,
            input: "textarea",
        },
        whiteTextReg: {
            name: {
                ja: "許可する表現",
                en: "Expressions allowed",
            },
            explanation: {
                ja: `許可するテキストを指定します。
一致する投稿は非表示の対象になりません。
指定方法などは[禁止する表現]と同じです。`,
                en: `Specify the text to allow.
Matching posts will not be hidden.
The specification method is the same as [Prohibited expressions].`,
            },
            data: WHITE_TEXT_REG,
            _data: WHITE_TEXT_REG,
            input: "textarea",
        },
        /*blackRtTextReg: {
            name: {
                ja: "禁止するRT表現",
                en: "Prohibited RT expressions",
            },
            explanation: {
                ja: `非表示にするRT元テキストを指定します。
指定方法などは[禁止する表現]と同じです。`,
                en: `Specify the RT source text to hide.
The specification method is the same as [Prohibited expressions].`,
            },
            data: BLACK_RT_TEXT_REG,
            _data: BLACK_RT_TEXT_REG,
            input: "textarea",
        },*/
        blackNameReg: {
            name: {
                ja: "禁止する名前",
                en: "Prohibited name",
            },
            explanation: {
                ja: `非表示にするユーザー名を指定します。
指定方法などは[禁止する表現]と同じです。`,
                en: `Specify the username to hide.
The specification method is the same as [Prohibited expressions].`,
            },
            data: BLACK_NAME_REG,
            _data: BLACK_NAME_REG,
            input: "textarea",
        },
        excludedUsers: {
            name: {
                ja: "除外ユーザー",
                en: "Excluded users",
            },
            explanation: {
                ja: `指定されたユーザーidは検知の対象になりません。
指定方法はユーザーidを改行で区切って記述するだけです。
idは完全一致のみ有効です。`,
                en: `The specified user ID will not be detected.
To specify, simply write the user IDs separated by line breaks.
Only exact matches are valid for id.`,
            },
            data: EXCLUDED_USERS,
            _data: EXCLUDED_USERS,
            input: "textarea",
        },
        allowLang: {
            name: {
                ja: "許可する言語",
                en: "Allowed languages",
            },
            explanation: {
                ja: `許可する言語を指定します。
記述方法は正規表現(/の間部分)で記述します。`,
                en: `Specify the allowed languages.
The description should be written using regular expressions (between the / characters).`,
            },
            data: ALLOW_LANG,
            _data: ALLOW_LANG,
            input: "text",
        },
        oneselfRetweetBlock: {
            name: {
                ja: "自身の引用禁止",
                en: "Prohibition of self-quotation",
            },
            explanation: {
                ja: `自身を引用ツイートする投稿を非表示にします。`,
                en: `It hides posts that quote oneself.`,
            },
            data: ONESELF_RETWEET_BLOCK,
            _data: ONESELF_RETWEET_BLOCK,
            input: "checkbox",
        },
        emojiOnryBlock: {
            name: {
                ja: "絵文字投稿禁止",
                en: "No emoji posting",
            },
            explanation: {
                ja: `絵文字のみで構成された投稿を非表示にします。`,
                en: `Hide posts composed only of emojis.`,
            },
            data: EMOJI_ONRY_BLOCK,
            _data: EMOJI_ONRY_BLOCK,
            input: "checkbox",
        },
        emojiOnryNameBlock: {
            name: {
                ja: "絵文字ユーザー名禁止",
                en: "Prohibit emoji usernames",
            },
            explanation: {
                ja: `絵文字のみで構成されたユーザー名を非表示にします。`,
                en: `Hide usernames composed only of emojis.`,
            },
            data: EMOJI_ONRY_NAME_BLOCK,
            _data: EMOJI_ONRY_NAME_BLOCK,
            input: "checkbox",
        },
        verifyBlock: {
            name: {
                ja: "認証アカウント禁止",
                en: "Prohibition of authenticated accounts",
            },
            explanation: {
                ja: `認証済アカウントを無差別に非表示にします。`,
                en: `It indiscriminately hides authenticated accounts.`,
            },
            data: VERIFY_BLOCK,
            _data: VERIFY_BLOCK,
            input: "checkbox",
        },
        verifyRtBlock: {
            name: {
                ja: "認証RT禁止",
                en: "Authentication RT prohibited",
            },
            explanation: {
                ja: `認証済アカウント投稿に対する引用RTを非表示にします。`,
                en: `Hide quoted RTs for authenticated account posts.`,
            },
            data: VERIFY_RT_BLOCK,
            _data: VERIFY_RT_BLOCK,
            input: "checkbox",
        },
        verifyOnryFilter: {
            name: {
                ja: "認証アカウントのみ判定",
                en: "Authenticate accounts only",
            },
            explanation: {
                ja: `認証済アカウントのみを検知の対象にします。
通常アカウントや認証マークの無いアカウントはブロックされなくなります。`,
                en: `It detects only authenticated accounts.
Regular accounts and accounts without verification badges will no longer be blocked.`,
            },
            data: VERIFY_ONRY_FILTER,
            _data: VERIFY_ONRY_FILTER,
            input: "checkbox",
        },
        formalityCare: {
            name: {
                ja: "認証公式アカウントを保護",
                en: "Protect your authenticated official account",
            },
            explanation: {
                ja: `公式アカウントを検知の対象から除外します。
(公式とは青いバッジ以外を指します)`,
                en: `Exclude official accounts from detection.
(Official means anything other than the blue badge)`,
            },
            data: FORMALITY_CARE_FILTER,
            _data: FORMALITY_CARE_FILTER,
            input: "checkbox",
        },
        visibleBlockButton: {
            name: {
                ja: "クイックブロック表示",
                en: "Quick block button display",
            },
            explanation: {
                ja: `1クリックでブロックできるボタンを表示します。
検出された投稿にしか表示されません。`,
                en: `Displays a button that allows you to block with one click.
It will only appear on detected posts.`,
            },
            data: VISIBLE_BLOCK_BUTTON,
            _data: VISIBLE_BLOCK_BUTTON,
            input: "checkbox",
        },
        visibleReportButton: {
            name: {
                ja: "クイック通報表示",
                en: "Quick report button display",
            },
            explanation: {
                ja: `1クリックで通報できるボタンを表示します。
検出された投稿にしか表示されません。
(初期値はスパム報告です)`,
                en: `Displays a button that allows you to report with one click.
It will only appear on detected posts.
(Initial value is spam report)`,
            },
            data: VISIBLE_REPORT_BUTTON,
            _data: VISIBLE_REPORT_BUTTON,
            input: "checkbox",
        },
        maxHashtagCount: {
            name: {
                ja: "ハッシュタグの上限数",
                en: "Maximum number of hashtags",
            },
            explanation: {
                ja: `1つの投稿内でのハッシュタグの使用上限数を指定します。`,
                en: `It specifies the maximum number of hashtags allowed in a single post.`,
            },
            data: MAX_HASHTAG_COUNT,
            _data: MAX_HASHTAG_COUNT,
            input: "number",
            min: 1,
        },
        maxSymboltagCount: {
            name: {
                ja: "シンボルタグの上限数",
                en: "Maximum number of symboltags",
            },
            explanation: {
                ja: `1つの投稿内でのシンボルタグの使用上限数を指定します。
※シンボルタグとは「$TWTR」のような#を$に置き換えた株を表す表現`,
                en: `It specifies the maximum number of symboltags allowed in a single post.
*Symbol tag is an expression that represents a stock by replacing # with $, such as "$TWTR"`,
            },
            data: MAX_SYMBOLTAG_COUNT,
            _data: MAX_SYMBOLTAG_COUNT,
            input: "number",
            min: 1,
        },
        maxContributtonCount: {
            name: {
                ja: "ツリー返信上限数",
                en: "Maximum number of tree replies",
            },
            explanation: {
                ja: `1つの投稿ツリーでの返信上限数を指定します。
値は許可のラインです。(例: 1で2投稿以上は非表示)
0を指定するとこの設定は無効化されます。`,
                en: `Specify the maximum number of replies in one post tree.
The value is the line of permission. (Example: 1 hides 2 or more posts)
Specifying 0 disables this setting.`,
            },
            data: MAX_CONTRIBUTION_COUNT,
            _data: MAX_CONTRIBUTION_COUNT,
            input: "number",
            min: 0,
        },
        maxRtCount: {
            name: {
                ja: "1人によるRT上限数",
                en: "Maximum number of RTs by one person",
            },
            explanation: {
                ja: `1つの投稿ツリーでの1ユーザーの引用RT返信上限数を指定します。
値は[ツリー返信上限数]と同じ指定方法です。`,
                en: `Specify the maximum number of quote RT replies for one user in one post tree.
The value is specified in the same way as [Maximum number of tree replies].`,
            },
            data: MAX_RT_COUNT,
            _data: MAX_RT_COUNT,
            input: "number",
            min: 0,
        },
        maxSameRtCount: {
            name: {
                ja: "同一RT上限数",
                en: "Maximum number of same RTs",
            },
            explanation: {
                ja: `1つの投稿ツリーでの複数人からの同じユーザーに対する引用RT返信上限数を指定します。
値は[ツリー返信上限数]と同じ指定方法です。`,
                en: `Specify the maximum number of quote RT replies to the same user from multiple people in one post tree.
The value is specified in the same way as [Maximum number of tree replies].`,
            },
            data: MAX_SAME_RT_COUNT,
            _data: MAX_SAME_RT_COUNT,
            input: "number",
            min: 0,
        },
        msgResemblance: {
            name: {
                ja: "文章類似度許可ライン",
                en: "Text similarity threshold",
            },
            explanation: {
                ja: `コピペ文章かを判別する為の基準値を指定します。`,
                en: `It specifies the threshold value for determining whether a text is a copied and pasted text.`,
            },
            data: MSG_RESEMBLANCE,
            _data: MSG_RESEMBLANCE,
            input: "number",
            min: 0,
            max: 1,
            step: 0.01,
        },
        maxSaveTextSize: {
            name: {
                ja: "比較される最大テキストサイズ",
                en: "Maximum text size for comparison",
            },
            explanation: {
                ja: `コピペ投稿の文章比較の最大文字数を指定します。
値を大きくするほど誤検知率は減り、検知率も減ります。
(投稿の文字数が最大値以下の場合、この値は使用されません)`,
                en: `It specifies the maximum number of characters for text comparison in copied and pasted posts.
Increasing the value reduces the false positive rate but also reduces the detection rate.
(This value is not used if the post's character count is below the maximum value.)`,
            },
            data: MAX_SAVE_TEXT_SIZE,
            _data: MAX_SAVE_TEXT_SIZE,
            input: "number",
            min: 0,
        },
        minSaveTextSize: {
            name: {
                ja: "一時保存・比較される最小テキストサイズ",
                en: "The minimum text size that is temporarily saved and compared",
            },
            explanation: {
                ja: `比較用文章の最小文字数を指定します。
値が大きくするほど誤検知率は減り、検知率も減ります。
([比較される最大テキストサイズ]より大きい場合、比較処理は実行されません)`,
                en: `This specifies the minimum number of characters for the comparison text.
Increasing the value reduces the false detection rate as well as the detection rate.
If it is larger than the [Maximum text size for comparison], the comparison process will not be executed.`,
            },
            data: MIN_SAVE_TEXT_SIZE,
            _data: MIN_SAVE_TEXT_SIZE,
            input: "number",
            min: 0,
        },
        maxSaveLogSize: {
            name: {
                ja: "一時保存される投稿の最大数",
                en: "The maximum number of posts that are temporarily saved",
            },
            explanation: {
                ja: `比較用文章の保持数を指定します。
値が小さいほど処理は軽くなりますが、検知率が減ります。`,
                en: `This specifies the number of comparison texts to be retained.
A smaller value reduces the processing load but also decreases the detection rate.`,
            },
            data: MAX_SAVE_LOG_SIZE,
            _data: MAX_SAVE_LOG_SIZE,
            input: "number",
            min: 1,
        },
        language: {
            name: {
                ja: "言語",
                en: "Language"
            },
            explanation: {
                ja: `表示言語を設定します。`,
                en: `Set the display language.`,
            },
            data: LANGUAGE,
            _data: LANGUAGE,
            input: "select",
            select: {
                ja: "日本語(ja)",
                en: "English(en)",
            },
        },
        customCss: {
            name: {
                ja: "ページ適用css設定",
                en: "Page-specific CSS settings"
            },
            explanation: {
                ja: `ページへ適用するcssを指定します。`,
                en: `Specify the CSS to apply to the page.`,
            },
            data: CUSTOM_CSS,
            _data: CUSTOM_CSS,
            input: "textarea",
            advanced: true,
        },
        bodyObsTimeout: {
            name: {
                ja: "ページ更新検知用処理待機時間(ms)",
                en: "Processing wait time (in milliseconds) for page update detection",
            },
            explanation: {
                ja: `ページ更新を検知する際の検知の更新間隔を指定します。
値が大きいほど処理が軽くなりますが、非表示にする初速が落ちる可能性あります。`,
                en: `This specifies the interval for detecting page updates.
A larger value reduces the processing load but may potentially delay the initial speed of hiding.`,
            },
            data: BODY_OBS_TIMEOUT,
            _data: BODY_OBS_TIMEOUT,
            input: "number",
            min: 100,
            advanced: true,
        },
        blackMemory: {
            name: {
                ja: "検知対象の記憶",
                en: "Memory of detection target",
            },
            explanation: {
                ja: `検出された対象を記憶します。
ページを更新などしても過去に検知した対象を素早く非表示に出来ます。
<span style="color: #f00">※この機能はbeta版です！！
誤検知されたアカウントが非表示のままになります。
[除外ユーザー]と併用して使用して下さい。</span>`,
                en: `Remembers detected objects.
Even if you refresh the page, you can quickly hide objects detected in the past.
<span style="color: #f00">*This feature is in beta version! !
Falsely detected accounts remain hidden.
Please use it in conjunction with [Excluded User]. </span>`,
            },
            data: BLACK_MEMORY,
            _data: BLACK_MEMORY,
            input: "checkbox",
            advanced: true,
        },
        autoBlock: {
            name: {
                ja: "【非推奨】自動ブロック",
                en: "[Not recommended] Automatic block",
            },
            explanation: {
                ja: `検出された対象を自動でブロックします。
<span style="color: #f00">※この機能はbeta版です！！
誤検知でも戸惑いなくブロックされます。</span>`,
                en: `Automatically block detected targets.
<span style="color: #f00">*This feature is in beta version! !
Even false positives are blocked without hesitation.</span>`,
            },
            data: AUTO_BLOCK,
            _data: AUTO_BLOCK,
            input: "checkbox",
            advanced: true,
        },
        resetSetting: {
            name: {
                ja: "設定のリセット",
                en: "Reset settings",
            },
            explanation: {
                ja: `設定項目をリセットします。
(ページがリロードされます)
<span style="color: #f00">実行すると設定は復元出来ません！！！</span>`,
                en: `Reset the settings.
(The page will be reloaded.)
<span style="color: #f00">Once executed, the settings cannot be restored!!!</span>`,
            },
            value: "Reset",
            input: "button",
            advanced: true,
        },
        resetBlackMemory: {
            name: {
                ja: "検知済idのリセット",
                en: "Reset detected ID",
            },
            explanation: {
                ja: `検知済idをリセットします。
(ページがリロードされます)
<span style="color: #f00">実行するとこれまで検知・非表示にされたユーザーが再度表示される可能性が高くなります！
[検知対象の記憶]を使用している状況で以前より処理が重いと感じた場合、リセットすると処理が軽くなる可能性があります。</span>`,
                en: `Reset detected ID.
(The page will be reloaded.)
<span style="color: #f00">If you run it, there is a high possibility that users who have been detected/hidden will be displayed again!
If you feel that the processing is slower than before when using [Remember detection targets], resetting it may make the processing faster. </span>`,
            },
            value: "Reset",
            input: "button",
            advanced: true,
        },
        debug_viewSettingMenu: {
            name: {
                ja: "起動時設定自動表示",
                en: "Automatic display of settings at startup",
            },
            explanation: {
                ja: `設定画面を自動で開く`,
                en: `Automatically open the settings screen`,
            },
            input: "checkbox",
            data: AUTO_OPEN_SETTING_MENU,
            _data: AUTO_OPEN_SETTING_MENU,
            debug: true,
        },
        debug_viewBlacklist: {
            name: {
                ja: "blacklist表示",
                en: "Blacklist display",
            },
            explanation: {
                ja: `現在のblacklist_idをconsoleに出力する。`,
                en: `Output current blacklist_id to console.`,
            },
            value: "output",
            input: "button",
            debug: true,
        },
        debug_viewMsgDB: {
            name: {
                ja: "MsgDB表示",
                en: "MsgDB display",
            },
            explanation: {
                ja: `現在のMsgDBをconsoleに出力する。`,
                en: `Output current MsgDB to console.`,
            },
            value: "output",
            input: "button",
            debug: true,
        },
        debug_reInit: {
            name: {
                ja: "init再実行",
                en: "init rerun",
            },
            explanation: {
                ja: `強制的にDOM設定を再設定する。
[ページ更新検知用処理待機時間(ms)]が仕事を放棄した際に使用。`,
                en: `Force DOM settings to be reset.
Used when [Processing wait time (in milliseconds) for page update detection] is abandoned.`,
            },
            value: "retry",
            input: "button",
            debug: true,
        },
    };

    const LANGUAGE_DICT = {
        ja: {
            // 日本語
            menu_warn: /* html */ `
<small style="color:#d00">変更の保存をした場合、ページを更新してください。</small><br>
<small>使い方の説明は<a href="https://github.com/hi2ma-bu4/X_impression_hide" target="_blank" rel="noopener noreferrer">こちら</a>から</small>`,
            menu_advanced: /* html */ `
<summary>高度な設定</summary>`,
            menu_debug: /* html */ `
<summary>デバッグ</summary>`,
            menu_error: "上記の設定内容の実行に失敗しました",
            save: "保存",
            close: "閉じる",
            filter: "フィルター",
            similarity: "類似度",
            usageCount: "使用回数",
            viewOriginalTweet: "元Tweetを見る",
            sureReset: "本当にリセットを実行しますか？",

            //hideComment
            detectedElsewhere: "他で検出済",
            authenticatedAccount: "認証垢",
            verifyRtBlock: "認証RT垢",
            unauthorizedLanguage: "非許可言語",
            contributtonCount: "連投",
            rtContributtonCount: "RT連投",
            rtSharingSeries: "RT共有連投",
            filterDetection: "フィルター検出",
            emojiOnly: "絵文字のみ",
            textDuplication: "文章の複製",
            highUsage: "#多量使用",
            symbolUsage: "$多量使用",
            selfCitation: "自身の引用",
            recursiveDetection: "再帰的検出",
        },
        en: {
            // 英語
            menu_warn: /* html */ `
<small style="color:#d00">If you have saved the changes, please refresh the page.</small><br>
<small>You can find the usage instructions <a href="https://github.com/hi2ma-bu4/X_impression_hide" target="_blank" rel="noopener noreferrer">here</a></small>`,
            menu_advanced: /* html */ `
<summary>Advanced settings</summary>`,
            menu_debug: /* html */ `
<summary>Debug</summary>`,
            menu_error: "Failed to execute the above settings",
            save: "Save",
            close: "Close",
            filter: "Filter",
            similarity: "Similarity",
            usageCount: "UsageCount",
            viewOriginalTweet: "View original Tweet",
            sureReset: "Are you sure you want to execute the reset?",

            //hideComment
            detectedElsewhere: "DetectedElsewhere",
            authenticatedAccount: "AuthenticatedAccount",
            verifyRtBlock: "AuthenticationRtPlaque",
            unauthorizedLanguage: "UnauthorizedLanguage: ",
            contributtonCount: "doubleTexting",
            rtContributtonCount: "rtDoubleTexting",
            rtSharingSeries: "rtSharingSeries",
            filterDetection: "FilterDetection",
            emojiOnly: "EmojiOnly",
            textDuplication: "TextDuplication",
            highUsage: "#HighUsage",
            symbolUsage: "$HighUsage",
            selfCitation: "SelfCitation",
            recursiveDetection: "RecursiveDetection",
        },
    }
    let lang_dict = null;

    // グローバル変数
    let parentDOM = null;
    let parent_observer = null;
    let oldUrl = location.href;
    let parent_id = null;
    let exMenuDOM = null;

    const blacklist_reg = [];
    const whitelist_reg = [];
    //const blackRtList_reg = [];
    const blackNameList_reg = [];
    let allowLang_reg = /.*/;
    const excludedUsersSet = new Set();
    const msgDB = [];
    const msgDB_id = new Set();
    const blacklist_id = new Set();


    let levenshteinDistanceUseFlag = true;
    let stopFlag = false;

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

    /* 必要なくなったのでコメントアウト
    // 使用ブラウザ種類
    const ua = navigator.userAgent.toLowerCase();
    let bs = "";
    let ieVersion = 0;
    switch (true) {
        case /fbios|fb_iab/.test(ua): // Facebook
            bs = "Facebook";
            break;
        case /instagram/.test(ua): // Instagram
            bs = "Instagram";
            break;
        case / line\//.test(ua): // LINE
            bs = "LINE";
            break;
        case /msie/.test(ua): // IE ~11
            ieVersion = parseInt(/msie (\d+)/.exec(ua)[1]);
        case /trident/.test(ua): // IE 11~
            bs = "Internet Explorer";
            break;
        case /edge/.test(ua):
        case /edg/.test(ua):
            bs = "Edge";
            break;
        case /chrome|crios/.test(ua): // Chrome for iOS
            bs = "Chrome";
            break;
        case /safari/.test(ua):
            bs = "Safari";
            break;
        case /firefox/.test(ua):
            bs = "Firefox";
            break;
        case /opera|opr/.test(ua):
            bs = "Opera";
            break;
        default:
            console.warn("ブラウザ検知失敗:",ua)
    }
    */

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
            log("設定読み込み...開始");
            let saveData = GM_getValue(SETTING_SAVE_KEY, null);
            if (saveData != null) {
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
                }
            }
            lang_dict = LANGUAGE_DICT[SETTING_LIST?.language?.data ?? "ja"];
            log("設定読み込み...完了");
        }

        //検知id再取得
        if (SETTING_LIST.blackMemory.data) {
            log("検知済id読み込み...開始");
            let bd = GM_getValue(BLACK_MEMORY_KEY, null);
            if (bd != null) {
                let jsonData = null;
                try {
                    jsonData = JSON.parse(bd);
                }
                catch (e) {
                    console.error(e);
                }
                if (jsonData != null) {
                    for (let i = 0, li = jsonData.length; i < li; i++) {
                        let id = jsonData[i];
                        if (id.length > 1 && id.startsWith("@")) {
                            blacklist_id.add(id);
                        }
                        else {
                            log("破損id:" + id);
                        }
                    }
                }
            }
            log("検知済id読み込み...完了");
        }

        // フィルター正規表現設定
        {
            // ブラック表現リスト
            regRestoration("blackTextReg", blacklist_reg);
            // ホワイト表現リスト
            regRestoration("whiteTextReg", whitelist_reg);
            // ブラックRT表現リスト
            //regRestoration("blackRtTextReg",blackRtList_reg);
            // ブラック名前リスト
            regRestoration("blackNameReg", blackNameList_reg);

            // 除外idリスト
            let spText = SETTING_LIST.excludedUsers.data
                .replace(/\r\n/g, "\n")
                .replace(/\r/g, "\n")
                .split("\n");

            spText.forEach(row => {
                if (row.trim().length && !row.startsWith("!#")) {
                    if (!row.startsWith("@")) {
                        row = "@" + row;
                    }
                    excludedUsersSet.add(row);
                    blacklist_id.delete(row);
                }
            });


            // 投稿の言語を制限
            try {
                let text = SETTING_LIST.allowLang.data.trim();
                if (text.length) {
                    allowLang_reg = new RegExp(text, "i");
                }
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
        // 自動で設定画面を開く
        if (SETTING_LIST.debug_viewSettingMenu.data) {
            menuOpen();
        }
    }

    function menu_init() {
        let w_exMenuDOM = document.createElement("div");
        let advanceDOM = document.createElement("details");
        let debugDOM = document.createElement("details");
        w_exMenuDOM.innerHTML = lang_dict.menu_warn;
        advanceDOM.innerHTML = lang_dict.menu_advanced;
        debugDOM.innerHTML = lang_dict.menu_debug;
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
                case "select":
                    input_elem = document.createElement("select");
                    if (item?.select) {
                        let tmp = "";
                        for (let key in item.select) {
                            tmp += `<option value="${key}" ${SETTING_LIST.language.data == key ? "selected" : ""}>${item.select[key]}</option>`
                        }
                        input_elem.innerHTML = tmp;
                    }
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
                name_elem.innerText = item.name?.[SETTING_LIST.language.data] ?? item.name?.["ja"] ?? "?";
                name_elem.classList.add(EX_MENU_ITEM_BASE_ID + "_name")
                div.appendChild(name_elem);
            }
            // 説明
            if (item?.explanation) {
                let ex_elem = document.createElement("p");
                let tmp = item.explanation?.[SETTING_LIST.language.data] ?? item.explanation?.["ja"] ?? "?";
                ex_elem.innerHTML = tmp.replace(/\n/g, "<br/>");
                div.appendChild(ex_elem);
            }

            div.appendChild(input_elem);
            if (add_elem) {
                div.appendChild(add_elem);
            }

            if (item?.isError) {
                let errDOM = document.createElement("p");
                errDOM.classList.add(EX_MENU_ITEM_ERROR_CLASS);
                errDOM.innerText = lang_dict.menu_error;
                div.appendChild(errDOM);
            }

            if (item.advanced) {
                advanceDOM.appendChild(div);
            }
            else if (item.debug) {
                debugDOM.appendChild(div);
            }
            else {
                w_exMenuDOM.appendChild(div);
            }
        }
        w_exMenuDOM.appendChild(advanceDOM);
        w_exMenuDOM.appendChild(debugDOM);
        // 画面右下のボタン系
        {
            let div = document.createElement("div");
            div.id = EX_MENU_ITEM_BASE_ID + "__btns";
            let btn_elem = document.createElement("input");
            btn_elem.type = "button";
            btn_elem.value = lang_dict.save;
            btn_elem.id = EX_MENU_ITEM_BASE_ID + "__save";
            div.appendChild(btn_elem);
            btn_elem = document.createElement("input");
            btn_elem.type = "button";
            btn_elem.value = lang_dict.close;
            btn_elem.id = EX_MENU_ITEM_BASE_ID + "__close";
            div.appendChild(btn_elem);
            w_exMenuDOM.appendChild(div);
        }
        exMenuDOM = document.createElement("div");
        exMenuDOM.id = EX_MENU_ID;
        exMenuDOM.lang = SETTING_LIST.language.data;
        exMenuDOM.appendChild(w_exMenuDOM);
    }

    function card_init() {
        log("初期化中...");

        let tmp = document.querySelector(OBS_QUERY);
        if (tmp && tmp.classList.contains(PARENT_CLASS)) {
            console.log("MutationObserverはすでに設定されています！");
            return;
        }

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
        let url = oldUrl.replace(/https?:\/\/.*?\.com/, "");
        if (url.startsWith("/")) {
            let urls = url.replace(/\?/, "/").split("/")
            let uid = urls?.[1] ?? urls[0];
            if (["home", "search"].includes(uid)) {
                stopFlag = true;
                return;
            }
            if (uid) {
                uid = "@" + uid;
                log(`親投稿者: ${uid}`);
                parent_id = uid;
                stopFlag = false;
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
            else if (!document.getElementsByClassName(PARENT_CLASS)?.[0]) {
                // class 検知
                if (parent_observer) {
                    parent_observer.disconnect();
                    parent_observer = null;
                }
                card_init()
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
            formality: false,
            attach_img: false,
            reTweet: null,
            menuDOM: null,
            _nsOneLoadFlag: false,
        };
        let pro = [];

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
                let fc = span.querySelector(VERIFY_FORMALITY_QUERY);
                if (fc != null) {
                    if (messageData._nsOneLoadFlag) {
                        messageData.reTweet.formality = true;
                    }
                    else {
                        messageData.formality = true;
                    }
                }
                fc = span.querySelector(VERIFY_QUERY);
                if (fc != null) {
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

        // メディアを添付しているか
        pro.push(new Promise(resolve => {
            setTimeout(() => {
                let attach_img = article.querySelectorAll(IMAGE_QUERY);
                //console.log(attach_img)
                if (attach_img) {
                    for (let img of attach_img) {
                        if (/^https?:\/\/pbs\.twimg\.com\/media\//.test(img.src)) {
                            // 画像    
                            messageData.attach_img = true;
                            break;
                        }
                        else if (/^https?:\/\/video\.twimg\.com\/tweet_video\//.test(img.src)) {
                            // 動画
                            messageData.attach_img = true;
                            break;
                        }
                    }
                }
                resolve();
            }, 1000);
        }));


        // メッセージ取得
        messageData._text_divs = article.querySelectorAll("div[lang]");
        let text_div = messageData._text_divs?.[0];

        let fullStr = "";
        let str = "";
        let emojiLst = [];
        if (text_div) {
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
        }
        else {
            messageData._notTextDiv = true;
        }

        messageData.full = fullStr;
        messageData.str = str;
        messageData.emoji = emojiLst;
        messageData.cleanStr = othToHira(str).replace(CrLfReg, " ");
        messageData.str_len = messageData.cleanStr.length;

        // メニュー取得(...のこと)
        pro.push(new Promise(resolve => {
            setTimeout(() => {
                let menuDOMs = article.querySelectorAll(MENU_BUTTON_QUERY);
                if (menuDOMs.length >= 3) {
                    messageData.menuDOM = menuDOMs[0];
                }
                resolve();
            }, 1000);
        }));

        Promise.all(pro).then(() => {
            let ret = commentFilter(messageData);
            switch (ret[0]) {
                case -1:
                    // 取得,判定済投稿
                    return;
                case 0:
                    let id = messageData.id;
                    if (msgDB_id.has(id)) {
                        let bu = messageData.base_url;
                        // 連投検出
                        if (SETTING_LIST.maxContributtonCount.data > 0) {
                            let cou = 0;
                            for (let md of msgDB) {
                                if (md.id == id && md.base_url == bu) {
                                    cou++;
                                }
                            }
                            if (SETTING_LIST.maxContributtonCount.data <= cou) {
                                hideComment(messageData, `${lang_dict.contributtonCount}`);
                                return;
                            }
                        }
                        // RT連投検出
                        if (SETTING_LIST.maxRtCount.data > 0 && messageData.reTweet) {
                            let cou = 0;
                            let rtl = new Set(messageData.reTweet.id);
                            for (let md of msgDB) {
                                if (md.id == id && md.base_url == bu && md.reTweet) {
                                    cou++;
                                    rtl.add(md.reTweet.id)
                                }
                            }
                            if (SETTING_LIST.maxRtCount.data <= cou) {
                                hideComment(messageData, `${lang_dict.rtContributtonCount}`);
                                // 引用先も一応抹消
                                for (let rt of rtl) {
                                    blacklist_id.add(rt);
                                }
                                return;
                            }
                        }
                        // 同一ユーザーRT検出
                        if (SETTING_LIST.maxSameRtCount.data > 0 && messageData.reTweet) {
                            let rt = messageData.reTweet.id;
                            let cou = 0;
                            let us = new Set(id);
                            let usd = [messageData];
                            for (let md of msgDB) {
                                if (md.base_url == bu && md.reTweet?.id == rt) {
                                    cou++;
                                    if (!(us.has(md.id))) {
                                        us.add(md.id);
                                        usd.push(md);
                                    }
                                }
                            }
                            if (SETTING_LIST.maxRtCount.data <= cou) {
                                for (let td of usd) {
                                    hideComment(td, `${lang_dict.rtSharingSeries}`);
                                }
                                // 引用先も一応抹消
                                blacklist_id.add(rt);
                                return;
                            }
                        }
                    }
                    // 問題なし
                    addDB(messageData);
                    return;
                case 1:
                    // コメントフィルターに反応
                    hideComment(messageData, `<span title="comment_${lang_dict.filter}「/${ret[1]}/uim」">${lang_dict.filterDetection}</span>`);
                    return;
                case 2:
                    // 絵文字のみ(スパム)
                    hideComment(messageData, `<span title="comment">${lang_dict.emojiOnly}</span>`);
                    return;
                case 3:
                    // コピペ
                    hideComment(messageData, `<span title="${lang_dict.similarity}:${(ret[1] * 10000 | 0) / 100}%">${lang_dict.textDuplication}</span>`);
                    return;
                case 4:
                    // 異常なハッシュタグの使用
                    hideComment(messageData, `<span title="${lang_dict.usageCount}: ${ret[1]}">${lang_dict.highUsage}</span>`);
                    return;
                case 5:
                    // 自分自身の引用
                    hideComment(messageData, lang_dict.selfCitation);
                    return;
                case 6:
                    // 名前フィルターに反応
                    hideComment(messageData, `<span title="name_${lang_dict.filter}「/${ret[1]}/uim」">${lang_dict.filterDetection}</span>`);
                    return;
                case 7:
                    // 名前が絵文字のみ
                    hideComment(messageData, `<span title="name">${lang_dict.emojiOnly}</span>`)
                    return;
                case 8:
                    // 認証済アカウントをRTするな
                    hideComment(messageData, lang_dict.verifyRtBlock);
                    return;
                case 9:
                    // 異常なシンボルタグの使用
                    hideComment(messageData, `<span title="${lang_dict.usageCount}: ${ret[1]}">${lang_dict.symbolUsage}</span>`);
                    return;
            }
        }).catch(console.warn);
    }

    function commentFilter(mesData) {//log(messageData);
        // 投稿主保護
        if (mesData.id == parent_id) {
            addDB(mesData);
            return [-1];
        }
        // 除外ユーザー保護
        if (excludedUsersSet.has(mesData.id)) {
            addDB(mesData);
            return [-1];
        }
        // 認証公式アカウント保護
        if (SETTING_LIST.formalityCare.data && mesData.formality) {
            addDB(mesData);
            return [-1];
        }
        // blacklist_id比較
        if (blacklist_id.has(mesData.id)) {
            hideComment(mesData, lang_dict.detectedElsewhere);
            return [-1];
        }
        // 認証済アカウント強制ブロック
        if (SETTING_LIST.verifyBlock.data && mesData.verify) {
            hideComment(mesData, lang_dict.authenticatedAccount);
            return [-1];
        }
        // 投稿言語の制限
        for (let div of mesData._text_divs) {
            if (!allowLang_reg.test(div.lang)) {
                hideComment(mesData, `<span title="${div.lang}">${lang_dict.unauthorizedLanguage}</span>`);
                return [-1];
            }
        }

        // 無言で無言の引用リツイートしている場合
        if (mesData.reTweet && mesData._notTextDiv) {
            // 自分自身の場合
            if (SETTING_LIST.oneselfRetweetBlock.data && mesData.reTweet.id == mesData.id) {
                return [5];
            }
            // 認証済アカウントをRTするな
            if (SETTING_LIST.verifyRtBlock.data && mesData.reTweet?.verify) {
                return [8];
            }
        }
        let message = mesData.cleanStr;
        if (SETTING_LIST.emojiOnryBlock.data && !message.replace(spaceReg, "").length && !mesData.attach_img) {
            return [2];
        }
        if (SETTING_LIST.emojiOnryNameBlock.data && !mesData.name?.replace(spaceReg, "")?.length) {
            mesData.name = mesData.id;
            return [7];
        }

        // 引用リツイートしている場合
        if (mesData.reTweet) {
            // 自分自身の場合
            if (SETTING_LIST.oneselfRetweetBlock.data && mesData.reTweet.id == mesData.id) {
                return [5];
            }
            // 認証済アカウントをRTするな
            if (SETTING_LIST.verifyRtBlock.data && mesData.reTweet?.verify) {
                return [8];
            }
        }

        // コメントフィルターによる検出
        for (let reg of blacklist_reg) {
            if (reg[0].test(message)) {
                return [1, reg[1]];
            }
        }

        // 名前フィルターによる検出
        let username = othToHira(mesData.name).replace(CrLfReg, " ");
        for (let reg of blackNameList_reg) {
            if (reg[0].test(username)) {
                return [6, reg[1]]
            }
        }

        // 異常なハッシュタグの使用回数
        let hashtagCou = message.match(/#[^ ]+/g)?.length ?? 0;
        if (hashtagCou >= SETTING_LIST.maxHashtagCount.data) {
            return [4, hashtagCou];
        }

        // 異常なシンボルタグの使用回数
        let symboltagCou = message.match(/\$[^ ]+/g)?.length ?? 0;
        if (symboltagCou >= SETTING_LIST.maxSymboltagCount.data) {
            return [9, symboltagCou];
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
        /*// 短いと誤爆するため
        if (mesData.str_len < SETTING_LIST.minSaveTextSize.data) {
            return;
        }*/
        if (msgDB.length > SETTING_LIST.maxSaveLogSize.data) {
            msgDB.shift();
        }
        msgDB.push(mesData);
        log(msgDB.length);
    }

    function hideComment(mesData, reason, ch = true) {
        // TLTW以外では大人しく
        if (stopFlag) {
            addDB(mesData);
            return;
        }
        // 認証済アカウントのみ判定
        if (SETTING_LIST.verifyOnryFilter.data && !mesData.verify) {
            addDB(mesData);
            return;
        }
        blacklist_id.add(mesData.id);

        // フィルターによる検出
        for (let reg of whitelist_reg) {
            if (reg[0].test(mesData.cleanStr)) {
                return;
            }
        }

        mesData.card.classList.add(HIDE_CLASS);

        if (SETTING_LIST.visibleLog.data) {
            let div = document.createElement("div");
            div.classList.add(LOG_CLASS);

            let bstw = lang_dict.viewOriginalTweet;

            let isVerify = "";
            if (SETTING_LIST.visibleVerifyLog.data && mesData.verify) {
                isVerify = VERIFY_SVG;
            }

            div.innerHTML = /* html */ `
<span>[${reason}] <a href="/${mesData.id}" title="${mesData.id}">${mesData.name}</a> ${isVerify}</span>

<label><input type="checkbox">${bstw}</label>
`;
            if (SETTING_LIST.visibleBlockButton.data) {
                let blockBtn = document.createElement("input");
                blockBtn.type = "button";
                blockBtn.value = "Block";
                div.firstElementChild.appendChild(blockBtn);
                blockBtn.addEventListener("click", function () {
                    menuClicker(BLOCK_QUERY_LIST, mesData);
                });
            }
            if (SETTING_LIST.visibleReportButton.data) {
                let reportBtn = document.createElement("input");
                reportBtn.type = "button";
                reportBtn.value = "Report";
                div.firstElementChild.appendChild(reportBtn);
                reportBtn.addEventListener("click", function () {
                    menuClicker(REPORT_QUERY_LIST, mesData);
                });
            }
            mesData.card.prepend(div);
        }
        // 無駄な比較をしないように
        if (ch) {
            dbCommentBlock(mesData.id);

            if (SETTING_LIST.autoBlock.data) {
                console.log(`自動ブロック: ${mesData.name}(${mesData.id})
理由: ${reason}`);
                menuClicker(BLOCK_QUERY_LIST, mesData);
            }

            // 検知済id保存
            blacklistSave();
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
                        hideComment(mData, lang_dict.recursiveDetection, false);
                    }
                }
            }
            msgDB_id.delete(id);
        }
    }


    function menuClicker(list, mesData) {
        if (!mesData.menuDOM) {
            return;
        }
        mesData.menuDOM.click();
        blacklist_id.delete(mesData.id);
        autoClick(list);
    }

    // 自動クリック
    function autoClick(list, par = document.body, i = 0) {
        if (list.length <= i) {
            return;
        }
        let q = list[i]
        let j = 0;
        if (Array.isArray(q)) {
            j = q[1];
            q = q[0];
        }
        let elem = par.querySelectorAll(q)?.[j];
        if (elem) {
            elem.click();
            autoClick(list, par, i + 1);
            return;
        }
        setTimeout(function () {
            autoClick(list, par, i);
        }, 100);
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
            setEvent("__save", menuSave);
            setEvent("__close", menuClose);

            setEvent("customCss", OnTabKey, "keydown");
            setEvent("resetSetting", menuReset);
            setEvent("resetBlackMemory", blacklistReset);
            setEvent("debug_viewBlacklist", function () {
                console.log(blacklist_id);
            });
            setEvent("debug_viewMsgDB", function () {
                console.log(msgDB_id, msgDB)
            });
            setEvent("debug_reInit", card_init);
        }
        menu_elem.classList.add(EX_MENU_OPEN_CLASS);
        log("メニュー表示...完了");
    }

    function setEvent(id, callback, type = "click") {
        document.getElementById(EX_MENU_ITEM_BASE_ID + id)?.addEventListener(type, callback);
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
                    case "select":
                        for (let i = 0; i < elem.length; i++) {
                            if (elem[i]?.selected) {
                                data = elem[i].value;
                                break;
                            }
                        }
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
            let _d = SETTING_LIST[key]?._data;
            if (d != null && d != _d) {
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
        let cf = lang_dict.sureReset;
        if (confirm(cf)) {
            log("リセット処理実行");
            GM_deleteValue(SETTING_SAVE_KEY);
            location.reload();
        }
    }

    function blacklistSave() {
        if (SETTING_LIST.blackMemory.data) {
            log("検知済id保存...開始");
            try {
                GM_setValue(BLACK_MEMORY_KEY, JSON.stringify(Array.from(blacklist_id)));
            }
            catch (e) {
                console.error(e);
            }
            log("検知済id保存...完了");
        }
    }

    function blacklistReset() {
        let cf = lang_dict.sureReset;
        if (confirm(cf)) {
            log("リセット処理実行");
            GM_deleteValue(BLACK_MEMORY_KEY);
            location.reload();
        }
    }

    // 正規表現リスト復元
    function regRestoration(tag, list) {
        if (!SETTING_LIST[tag]) {
            console.warn("不明なtag:" + tag);
            return;
        }
        let spText = SETTING_LIST[tag].data
            .replace(/\r\n/g, "\n")
            .replace(/\r/g, "\n")
            .split("\n");
        spText.forEach(row => {
            if (row.trim().length && !row.startsWith("!#")) {
                try {
                    list.push([new RegExp(reRegExpStr(row), "uim"), row]);
                }
                catch (e) {
                    console.error(`[${PRO_NAME}]`, e);
                    SETTING_LIST[tag].isError = true;
                }
            }
        });
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
        str = str.toString();
        spaceRegList.forEach(reg => {
            str = str.replace(reg, " ");
        });
        return str;
    }

    //全ての文字を共通化
    function othToHira(str) {
        str = uspTosp(str);
        othToHiraRegList.forEach(regs => {
            str = str.replace(...regs);
        });
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
