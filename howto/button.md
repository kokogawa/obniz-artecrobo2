# ボタンの制御
Studuino:Bitにあるボタンを使用します。

![](https://i.imgur.com/kqvQO31.png)

ボタンの制御はStuduinoBitButtonクラスに定義され、StuduinoBitクラスでbutton_a、button_bにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:Bitのボタンを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```
## isPressedWait();
現在のボタンの状態を取得します。
ボタンが押されている間はtrue、押されていない間はfalseを返します。

```Javascript
// Javascript Example
let state =stubit.button_a.isPressedWait();
if (state === "true") {
  stubit.buzzer.onWait(410);
}else{
  stubit.buzzer.off();
}
```
ボタンが押されている間はブザーから410Hzの音が鳴り、Aボタンが押されていない間はブザーの音が止まります。
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#ispressedwait
## wasPressed();
ボタンが押されたときに一度だけtrueを返します。

```Javascript
// Javascript Example
let state = await stubit.button_a.wasPressed();
if (state === "true") {
  alert("Pressed");
}
```
Aボタンが押されたときに画面上に「Pressed」とポップアップ表示されます。
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#waspressed


## getPresses();
ボタンが押された回数をカウントします。
呼び出されたあとはカウントがリセットされます。
```Javascript
// Javascript Example
let count = await stubit.button_a.getPresses();
setTimeout('console.log(count);', 5000);
```
5秒間でAボタンの押された回数を表示します。
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#getpresses

## ボタンのサンプルプログラム
下記のプログラムは、Aボタンが押されたときにpressedを表示し、それ以外はnoneを表示します。
また、Bボタンが押されている間はpressedを表示して、押されていない間はnoneを表示します。
画面上のAcountボタンを押すと、Aボタンが押された回数が表示されます。
```javascript
// Javascript Example

```
画面のスクショ
