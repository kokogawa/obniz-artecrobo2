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

ボタンが押されている間はtrue、押されていない間はfalseを返します。

```Javascript
// Javascript Example
stubit.button_a.isPressedWait();
```
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#ispressedwait
## wasPressed();

ボタンが押されたときに一度だけtrueを返します。押されていない、押され続けている間はfalseを返します。

```Javascript
// Javascript Example
stubit.button_a.wasPressed();
```
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#waspressed


## getPresses();
ボタンが押された回数をカウントします。
呼び出されたあとはカウントがリセットされます。
```Javascript
// Javascript Example
stubit.button_a.getPresses();
```
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
