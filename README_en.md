## Hide the Twitter (formerly: 𝕏) impression-earning scammers with "display:none;"

<sub>The Twitter hashtag is "#インプレゾンビをnoneするやつ"</sub>

[日本語版のREADMEはこちら](README.md)

### Prerequisite
> [!WARNING]
> This is for PC use only.
> <br>
> <br>
> [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) is required.

### Usage
Simply add it to Tampermonkey to use.

You can add it [here](https://github.com/hi2ma-bu4/X_impression_hide/raw/main/script.user.js).

Also, you can find the Greasy Fork page [here](https://greasyfork.org/ja/scripts/484303-twitter-%E6%97%A7-%F0%9D%95%8F-%E3%81%AE%E3%82%A4%E3%83%B3%E3%83%97%E3%83%AC%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E5%B0%8F%E9%81%A3%E3%81%84%E7%A8%BC%E3%81%8E%E9%87%8E%E9%83%8E%E3%81%A9%E3%82%82%E3%82%92display-none-%E3%81%99%E3%82%8B%E3%82%84%E3%81%A4).

The setting is
> right-click > Tampermonkey > Hide the Twitter... > 設定を開く

or
> Extensions Menu in the Upper Right Corner > Tampermonkey > Hide the Twitter... > 設定を開く(s)

and you can open it.

### Setting details
|name|explanation|initial value|type,extent|
|:---|:---|:---:|:---:|
|非表示ログを表示|非表示にしたログを画面から消します。<br>画面が平和になりますが、投稿を非表示にされた理由・元投稿が確認出来なくなります。|true|boolean|
|禁止する表現|非表示にするテキストを指定します[^1][^2]。<br>記述方法は正規表現[^3]で記述します。|Omitted due to length|string|
|許可する言語|許可する言語を指定します。<br>記述方法は正規表現[^3]で記述します。|Omitted due to length|string|
|自身の引用禁止|自身を引用ツイートする投稿を非表示にします。|true|boolean|
|認証アカウント禁止|認証済アカウントを無差別にブロックします。|false|boolean|
|認証アカウントのみ判定|認証済アカウントのみを検知の対象にします。<br>通常アカウントや認証マークの無いアカウントはブロックされなくなります。|false|boolean|
|ハッシュタグの上限数|1つの投稿内でのハッシュタグの使用上限数を指定します。|6|int (1~)|
|文章類似度許可ライン|コピペ文章かを判別する為の基準値を指定します。|0.8|float (0~1)|
|比較される最大テキストサイズ|コピペ投稿の文章比較の最大文字数を指定します[^4]。<br>値を大きくするほど誤検知率は減り、検知率も減ります。|80|int (0~)|
|一時保存・比較される最小テキストサイズ|比較用文章の最小文字数を指定します[^5]。<br>値が大きくするほど誤検知率は減り、検知率も減ります。|8|int (0~)|
|一時保存される投稿の最大数|比較用文章の保持数を指定します。<br>値が小さいほど処理は軽くなりますが、検知率が減ります。|100|int (1~)|
|ページ更新検知用処理待機時間(ms)|ページ更新を検知する際の検知の更新間隔を指定します。<br>値が大きいほど処理が軽くなりますが、非表示にする初速が落ちる可能性あります。|3000|int (100~)|
|ページ適用css設定|ページへ適用するcssを指定します。|Omitted due to length|string|
|設定のリセット|設定項目をリセットします|No value because it is a button||

[^1]: 半角カタカナ、カタカナはひらがなに自動変換され、<br>全角英数字は半角英数字に、改行文字は半角スペースに自動変換されます。
[^2]: "!#"を行頭に記述するとコメントアウト扱いになります。
[^3]: ここでの正規表現とは"/"の間部分の事を指します。
[^4]: 投稿の文字数が最大値以下の場合、この値は使用されません。
[^5]: [比較される最大テキストサイズ]より大きい場合、比較処理は実行されません。


### If there is a configuration mistake or a configuration update misalignment due to a version upgrade.
First, go to the page below.
> Extensions Menu in the Upper Right Corner > Dashboard > Installed UserScript > Hide the Twitter... > Storage

> [!TIP]
> Example of storage column
> ```json
> {
>   "X_impression_hide_json": "{\"visibleLog\":true, ..."
> }
> ```

ストレージの欄に含まれている以下の記述を削除してください
> [!CAUTION]
> All set CSS data will be reset!
```
,\"customCss\":\" ---ユーザーによって異なる為省略--- \"
```

If you do not understand or the problem is not resolved, please change the description below.
> [!CAUTION]
> All set data will be reset!

```json
{
}
```
