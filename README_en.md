## Hide the Twitter (formerly: 𝕏) impression-earning scammers with "display:none;"

<sub>The Twitter hashtag is "#インプレゾンビをnoneするやつ"</sub>

[日本語版のREADMEはこちら](README.md)

Currently not updating.
If it stops working, please report it to Issues and we will fix it.

### Prerequisite
> [!WARNING]
> <s>This is for PC use only.</s>
> <br>
> Kiwi browser compatible from v1.11.11!
> <br>
> <br>
> [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) is required.

### Reference image
|![before](image/before.png)||
|:---:|:---:|
|![after1](image/after1.png)|![after2](image/after2.png)|

<sub>Images are from the development stage.</sub>

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
|Show hidden logs|It will remove the hidden logs from the screen.<br>The screen will be peaceful, but the reasons for hiding the posts and the original posts will no longer be visible.|true|boolean|
|Prohibited expressions|Specify the text to hide[^1][^2].<br>The description should be written using regular expressions[^3].|Omitted due to length|string|
|Expressions allowed|Specify the text to allow.<br>Matching posts will not be hidden.<br>The specification method is the same as [Prohibited expressions].|Omitted due to length|string|
|Prohibited name|Specify the username to hide.<br>The specification method is the same as [Prohibited expressions].|true|boolean|
|Allowed languages|Specify the allowed languages.<br>The description should be written using regular expressions[^3].|Omitted due to length|string|
|Prohibition of self-quotation|It hides posts that quote oneself.|true|boolean|
|No emoji posting|Hide posts composed only of emojis.|true|boolean|
|Prohibit emoji usernames|Hide usernames composed only of emojis.|true|boolean|
|Prohibition of authenticated accounts|It indiscriminately hides authenticated accounts.|false|boolean|
|Authenticate accounts only|It detects only authenticated accounts.<br>Regular accounts and accounts without verification badges will no longer be blocked.|false|boolean|
|Protect your authenticated official account|Exclude official accounts[^7] from detection.|true|boolean|
|Quick block button display|Displays a button that allows you to block with one click.<br>It will only appear on detected posts.|true|boolean|
|Quick report button display|Displays a button that allows you to block with one click.<br>It will only appear on detected posts.<br>(Initial value is spam report)|true|boolean|
|Maximum number of hashtags|It specifies the maximum number of hashtags allowed in a single post.|6|int (1~)|
|Maximum number of tree replies|Specify the maximum number of replies in one post tree.<br>The value is the line of permission. (Example: 1 hides 2 or more posts)<br>Specifying 0 disables this setting.|1|int (0~)|
|Text similarity threshold|It specifies the threshold value for determining whether a text is a copied and pasted text.|0.85|float (0~1)|
|Maximum text size for comparison|It specifies the maximum number of characters for text comparison in copied and pasted posts.[^4].<br>Increasing the value reduces the false positive rate but also reduces the detection rate.|80|int (0~)|
|The minimum text size that is temporarily saved and compared|This specifies the minimum number of characters for the comparison text[^5].<br>Increasing the value reduces the false detection rate as well as the detection rate.|8|int (0~)|
|The maximum number of posts that are temporarily saved|This specifies the number of comparison texts to be retained.<br>A smaller value reduces the processing load but also decreases the detection rate.|100|int (1~)|
|Language|Set the display language.|ja|string (ja\|en)|
|Processing wait time (in milliseconds) for page update detection|This specifies the interval for detecting page updates.<br>A larger value reduces the processing load but may potentially delay the initial speed of hiding.|3000|int (100~)|
|Page-specific CSS settings|Specify the CSS to apply to the page.|Omitted due to length|string|
|[Not recommended] Automatic block|Automatically block detected targets[^6].|false|boolean|
|Reset settings|Reset the settings.|No value because it is a button||

[^1]: Half-width katakana and katakana are automatically converted to hiragana,<br>full-width alphanumeric characters are automatically converted to half-width alphanumeric characters,<br> and line feed characters are automatically converted to half-width spaces.
[^2]: If you write "!#" at the beginning of a line, it will be treated as a comment.
[^3]: The regular expression here refers to the part between "/".
[^4]: If your post's character count is less than or equal to the maximum value, this value will not be used.
[^5]: If it is larger than [Maximum text size for comparison], the comparison process will not be performed.
[^6]: This feature is in beta version! !<br>Even false positives are blocked without hesitation.
[^7]: Official means anything other than the blue badge.


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

Please delete the following description in the storage field.
> [!CAUTION]
> All set CSS data will be reset!
```
,\"customCss\":\" ---Omitted as it varies depending on the user--- \"
```

If you do not understand or the problem is not resolved, please change the description below.
> [!CAUTION]
> All set data will be reset!

```json
{
}
```
