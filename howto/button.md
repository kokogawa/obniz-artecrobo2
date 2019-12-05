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
while(1){
    let state =await stubit.button_a.isPressedWait();
    if (state == true) {
        await stubit.buzzer.onWait(410);    //ブザーから410Hzの音が鳴ります
    }else{
        await stubit.buzzer.off();    //ブザーを止めます
    }
}
```
Aボタンが押されている間はブザーから410Hzの音が鳴り、Aボタンが押されていない間はブザーの音が止まります。
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#ispressedwait
## wasPressed();
ボタンが押されたときに一度だけtrueを返します。

```Javascript
// Javascript Example
await stubit.buzzer.onWait("A5");    //ブザーからA5の音が鳴ります
while(1){
    let state = await stubit.button_a.wasPressed();
    await stubit.wait(500);
    if(state==true){
        await stubit.buzzer.off();    //ブザーを止めます
    }
    await stubit.wait(500);
}
```
Aボタンを押すと鳴っているブザーが止まります。
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#waspressed


## getPresses();
ボタンが押された回数をカウントします。
呼び出されたあとはカウントがリセットされます。
```Javascript
// Javascript Example
while(1){
    let stateA = await stubit.button_a.isPressedWait();
    if(stateA==true){
        let countB = await stubit.button_b.getPresses();
        alert(countB);     //countB（Bボタンの押された回数）をアラート表示します
        await stubit.wait(500);
    }
}

```
Aボタンが押されるまでのBボタンの押された回数を表示します。
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
