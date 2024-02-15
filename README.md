## Twitter(旧:𝕏)のインプレッション小遣い稼ぎ野郎どもをdisplay:none;するやつ

<sub>略して「インプレゾンビをnoneするやつ」</sub>

[English README is here](README_en.md)

### 前提条件
> [!WARNING]
> PC専用です
> <br>
> <br>
> [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)が必要です。

### 参考画像
|![before](image/before.png)||
|:---:|:---:|
|![after1](image/after1.png)|![after2](image/after2.png)|

<sub>画像は開発段階のものです。</sub>

### 使い方
Tampermonkeyに追加するだけで使用できます。

追加は[こちら](https://github.com/hi2ma-bu4/X_impression_hide/raw/main/script.user.js)から出来ます。

また、Gresy Forkのページは[こちら](https://greasyfork.org/ja/scripts/484303-twitter-%E6%97%A7-%F0%9D%95%8F-%E3%81%AE%E3%82%A4%E3%83%B3%E3%83%97%E3%83%AC%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E5%B0%8F%E9%81%A3%E3%81%84%E7%A8%BC%E3%81%8E%E9%87%8E%E9%83%8E%E3%81%A9%E3%82%82%E3%82%92display-none-%E3%81%99%E3%82%8B%E3%82%84%E3%81%A4)からどうぞ。

設定は
> 右クリック > Tampermonkey > Twitter(旧:𝕏)の(略) > 設定を開く

か、
> 右上拡張機能一覧 > Tampermonkey > Twitter(旧:𝕏)の(略) > 設定を開く(s)

で、開く事ができます。

### 設定の内容
|名前|説明|初期値|型・範囲|
|:---|:---|:---:|:---:|
|非表示ログを表示|非表示にしたログを画面から消します。<br>画面が平和になりますが、投稿を非表示にされた理由・元投稿が確認出来なくなります。|true|boolean|
|禁止する表現|非表示にするテキストを指定します[^1][^2]。<br>記述方法は正規表現[^3]で記述します。|長い為省略|string|
|許可する表現|許可するテキストを指定します。<br>一致する投稿は非表示の対象になりません。<br>指定方法などは[禁止する表現]と同じです。|長い為省略|string|
|禁止する名前|非表示にするユーザー名を指定します。<br>指定方法などは[禁止する表現]と同じです。|長い為省略|string|
|許可する言語|許可する言語を指定します。<br>記述方法は正規表現[^3]で記述します。|長い為省略|string|
|自身の引用禁止|自身を引用ツイートする投稿を非表示にします。|true|boolean|
|絵文字投稿禁止|絵文字のみで構成された投稿を非表示にします。|true|boolean|
|絵文字ユーザー名禁止|絵文字のみで構成されたユーザー名を非表示にします。|true|boolean|
|認証アカウント禁止|認証済アカウントを無差別に非表示にします。|false|boolean|
|認証アカウントのみ判定|認証済アカウントのみを検知の対象にします。<br>通常アカウントや認証マークの無いアカウントはブロックされなくなります。|false|boolean|
|認証公式アカウントを保護|公式アカウント[^7]を検知の対象から除外します。|true|boolean|
|クイックブロック表示|1クリックでブロックできるボタンを表示します。<br>検出された投稿にしか表示されません。|true|boolean|
|クイック通報表示|1クリックで通報できるボタンを表示します。<br>検出された投稿にしか表示されません。<br>(初期値はスパム報告です)|true|boolean|
|ハッシュタグの上限数|1つの投稿内でのハッシュタグの使用上限数を指定します。|6|int (1~)|
|文章類似度許可ライン|コピペ文章かを判別する為の基準値を指定します。|0.85|float (0~1)|
|比較される最大テキストサイズ|コピペ投稿の文章比較の最大文字数を指定します[^4]。<br>値を大きくするほど誤検知率は減り、検知率も減ります。|80|int (0~)|
|一時保存・比較される最小テキストサイズ|比較用文章の最小文字数を指定します[^5]。<br>値が大きくするほど誤検知率は減り、検知率も減ります。|8|int (0~)|
|一時保存される投稿の最大数|比較用文章の保持数を指定します。<br>値が小さいほど処理は軽くなりますが、検知率が減ります。|100|int (1~)|
|言語|表示言語を設定します。|ja|str (ja\|en)|
|ページ更新検知用処理待機時間(ms)|ページ更新を検知する際の検知の更新間隔を指定します。<br>値が大きいほど処理が軽くなりますが、非表示にする初速が落ちる可能性あります。|3000|int (100~)|
|ページ適用css設定|ページへ適用するcssを指定します。|長い為省略|string|
|【非推奨】自動ブロック|検出された対象を自動でブロックします[^6]。|false|boolean|
|設定のリセット|設定項目をリセットします|ボタンの為値なし||

[^1]: 半角カタカナ、カタカナはひらがなに自動変換され、<br>全角英数字は半角英数字に、改行文字は半角スペースに自動変換されます。
[^2]: "!#"を行頭に記述するとコメントアウト扱いになります。
[^3]: ここでの正規表現とは"/"の間部分の事を指します。
[^4]: 投稿の文字数が最大値以下の場合、この値は使用されません。
[^5]: [比較される最大テキストサイズ]より大きい場合、比較処理は実行されません。
[^6]: この機能はbeta版です！！<br>誤検知でも戸惑いなくブロックされます。
[^7]: 公式とは青いバッジ以外を指します。


### 設定ミス、バージョンアップによる設定更新ずれが発生した場合
まず、以下のページまで移動します。
> 右上拡張機能一覧 > ダッシュボード > インストール済UserScript > Twitter(旧:𝕏)の(略) > ストレージ

> [!TIP]
> ストレージの欄の例
> ```json
> {
>   "X_impression_hide_json": "{\"visibleLog\":true, ..."
> }
> ```

ストレージの欄に含まれている以下の記述を削除してください
> [!CAUTION]
> 設定されているCSSデータが全てリセットされます！
```
,\"customCss\":\" ---ユーザーによって異なる為省略--- \"
```

わからない・問題が解決しなかった場合は以下の記述に変更してください。
> [!CAUTION]
> 設定されているデータが全てリセットされます！

```json
{
}
```
