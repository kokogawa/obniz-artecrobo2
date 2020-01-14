
# LED（ロボット拡張ユニット接続パーツ）の制御

![](https://i.imgur.com/gs9SS0c.jpg)<br>
<small>(※)本LEDを使用する場合、ロボット拡張ユニットが必要になります。ロボット拡張ユニットとLEDの接続は、[ArtecRobo2.0取扱説明書](https://www.artec-kk.co.jp/artecrobo2/pdf/jp/82541man_K0419_J.pdf)の「6 ロボット拡張ユニット各部の機能と名称」を参照してください。<br></small>


LEDの制御はArtecRobo.Ledに定義されています。<br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号（P13/P14/P15/P16）を指定することで、LEDを使用できます。
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
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecroboled.html#on

## off();
LEDを消灯します。
```Javascript
// Javascript Example
led.off();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecroboled.html#off

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
    
    　//wifi接続／動作確認用
    　atcRobo.studuinoBit.led.on();
    
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
  }

</script>
</body>
</html>
```





