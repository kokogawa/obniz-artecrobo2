# ブザー(接続パーツ)の制御
ブザー（接続パーツ）を使用します。<br>

![](https://i.imgur.com/ELcX4Sx.jpg)


ブザーの制御はArtecRoboBuzzerクラスに定義され…？</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号を指定することで、ブザーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let buzzer = new Artec.ArtecRobo.Buzzer(atcRobo, 'P13');　//P13にブザーを接続する場合
}
```



## onWait( String : frequency |String: note number, Number: duration);

ブザーから指定された音を出します。</br>
音は周波数（数字）もしくは音階（アルファベットと数字の組み合わせ）で記述します。</br>
音階はC3（130Hz）～C8（4186Hz）に対応しています。</br>

```Javascript
// Javascript Example
await buzzer.onWait("450");
```
 450Hzの音がブザーから鳴ります。


```Javascript
// Javascript Example
await buzzer.onWait("A4");
```
A4（ラ）の音がブザーから鳴ります。</br>
</br>
音の長さを数字で指定することも可能です。（単位:ms）
```Javascript
// Javascript Example
await buzzer.onWait("C4", 1000);
```
C4の音が1秒鳴ります。</br>




## off();

ブザーを止めます。

```Javascript
// Javascript Example
stubit.buzzer.off();
```


## ブザーのサンプルプログラム
Aボタンを押すと入力した音（周波数）でブザーが鳴り、Bボタンを押すとブザーが止まります。

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

<input type="number" value="440" id="hz"/>Hzの音を出す

<script>
  var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
  atcRobo.onconnect = async function () {
    let buzzer = new Artec.ArtecRobo.Buzzer(atcRobo, 'P13');
     while(1){
        let pressedA = atcRobo.studuinoBit.button_a.wasPressed();　//Aボタンが押されたときtrueを返します
        let pressedB = atcRobo.studuinoBit.button_b.wasPressed();　//Bボタンが押されたときtrueを返します
        await atcRobo.studuinoBit.wait(100);
        let hz = parseInt($("#hz").val());
        if(pressedA==true){
          await buzzer.onWait(hz);  //ブザーが鳴ります
        }
        if(pressedB==true){
          buzzer.off();　　//ブザーが止まります
        }
     }
    //wifi接続／動作確認用
    ledBlink();
  };
  async function ledBlink() {
    while (1) {
      atcRobo.studuinoBit.led.on();
      await atcRobo.studuinoBit.wait(500);
      atcRobo.studuinoBit.led.off();
      await atcRobo.studuinoBit.wait(500);
    }
  }
</script>
</body>
</html>
```


