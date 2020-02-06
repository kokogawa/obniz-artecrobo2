# ボタンの制御
Studuino:bitにあるボタンを使用します。

![](https://i.imgur.com/kqvQO31.png)

ボタンの制御はStuduinoBitButtonクラスに定義され、StuduinoBitクラスでbutton_a、button_bにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitのボタンを使用できます。
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
    let pressedA =await stubit.button_a.isPressedWait();
    if (pressedA == true) {
        await stubit.buzzer.onWait(410);    //ブザーから410Hzの音が鳴ります
    }else{
        stubit.buzzer.off();    //ブザーを止めます
    }
}
```
上のサンプルコードではAボタンが押されている間はブザーから410Hzの音が鳴り、Aボタンが押されていない間はブザーの音が止まります。
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#ispressedwait
## wasPressed();
ボタンが押されたときに一度だけtrueを返します。

```Javascript
// Javascript Example
await stubit.buzzer.onWait("A5");    //ブザーからA5の音が鳴ります
while(1){
    let pressedA = stubit.button_a.wasPressed();
    if(pressedA==true){
        stubit.buzzer.off();    //ブザーを止めます
    }
    await stubit.wait(500);
}
```
上のサンプルコードではAボタンを押すと鳴っているブザーが止まります。
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#waspressed


## getPresses();
ボタンが押された回数をカウントします。
呼び出されたあとはカウントがリセットされます。
```Javascript
// Javascript Example
while(1){
    let pressedA =stubit.button_a.wasPressed();
    if(pressedA==true){
        let countB = stubit.button_b.getPresses();
        alert(countB);     //countB（Bボタンの押された回数）をアラート表示します
    }
    await stubit.wait(500);
}

```
上のサンプルコードはAボタンが押されるまでのBボタンの押された回数を表示します。
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbutton.html#getpresses

## ボタンのサンプルプログラム
下記のプログラムは、Aボタンが押されたときにtrueを表示し、それ以外はfalseを表示します。
また、Bボタンが押されている間はtrueを表示して、押されていない間はfalseを表示します。
画面上のCountボタンを押すと、Aボタンが押された回数を表示します。
```Javascript
// Javascript Example
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 <script src="https://obniz.io/js/jquery-3.2.1.min.js"></script>
  <script src="https://unpkg.com/obniz@2.2.0/obniz.js"></script>
  <script src="https://artec-kk.github.io/obniz-artecrobo2/artec.js"></script>
</head>
<body>

<div id="obniz-debug"></div>
<h1>obniz instant HTML</h1>
<br/><br/>
<p>
buttonA:<span id="buttonA"></span><br/>
buttonB:<span id="buttonB"></span><br/><br/>
</p>
<button id="getpressesA">Count</button><span id="count"></span><br/>


<script>
  var stubit = new Artec.StuduinoBit("YOUR_STUDUIOBIT_ID");
  stubit.onconnect = async function () {
    //wifi接続／動作確認用
    　stubit.led.on();
    
    $("#getpressesA").click(async () => {
        let countA = stubit.button_a.getPresses();  //Aボタンが押された回数を返します
        $("#count").text(countA);
    })
    
    while(1){
        let pressedA = stubit.button_a.wasPressed();  //Aボタンが押されたときにtrueを返します
        let pressedB = await stubit.button_b.isPressedWait();  //Aボタンが押されている間はtrueを返します
        await stubit.wait(100);
        $("#buttonA").text(pressedA); 
        $("#buttonB").text(pressedB);
      

    }

  }
</script>
</body>
</html>
```


