
# LEDの制御
LED（接続パーツ）を使用します。<br>

![](https://i.imgur.com/gs9SS0c.jpg)


LEDの制御はArtecRoboArtecRoboArtecRoboLedクラスに定義され…？？。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号を指定することで、LEDを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let led = new Artec.ArtecRobo.Led(atcRobo,'P13');　//P13にLEDを接続する場合
}
```

## on();
LEDを点灯します。
```Javascript
// Javascript Example
led.on();
```

## off();
LEDを消灯します。
```Javascript
// Javascript Example
led.off();
```


## LEDのサンプルプログラム
Aボタンを押すとLEDが点灯し、Bボタンを押すとLEDが消灯します。
```Javascript
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

<script>
  var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
  atcRobo.onconnect = async function () {
      let led = new Artec.ArtecRobo.Led(atcRobo,'P13');
      while(1){
        let pressedA = atcRobo.studuinoBit.button_a.wasPressed();　//Aボタンが押されたときtrueを返します
        let pressedB = atcRobo.studuinoBit.button_b.wasPressed();　//Bボタンが押されたときtrueを返します
        await atcRobo.studuinoBit.wait(100);
        if(pressedA==true){
          led.on();　　//LEDを点灯します
        }
        if(pressedB==true){
          led.off();　　//LEDを消灯します
        }
      }
    //wifi接続／動作確認用
    ledBlink();
  }
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





