
# 温度センサー（接続パーツ）の制御
温度センサー（接続パーツ）を使用します。<br>

![](https://i.imgur.com/GWmFDrR.jpg)



温度センサーの制御はArtecRoboTemperatureクラスに定義され…？？。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号を指定することで、温度センサーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.Temperature(atcRobo, 'P0');　//P0に温度センサーを接続する場合
}
```


## getValueWait();
温度センサーの値を返します。
```Javascript
// Javascript Example
while(1){
    let temp = await sensor.getValueWait();
    console.log(temp);    //温度センサーの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
温度センサーの値を表示します。

## getCelsiusWait();
温度センサーの値をセルシウス温度（℃）で返します。
```Javascript
// Javascript Example
while(1){
    let temp = await sensor.getCelsiusWait();
    console.log(temp);    //温度センサーの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
温度センサーの値を表示します。

## 温度センサーのサンプルプログラム
温度が指定した値を超えると、ディスプレイが点灯するプログラムです。
```Javascript
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://obniz.io/js/jquery-3.2.1.min.js"></script>
  <script src="https://unpkg.com/obniz@2.2.0/obniz.js"></script>
  <script src="https://artec-kk.github.io/obniz-artecrobo2/artec.js" ></script>
</head>
<body>

<div id="obniz-debug"></div>
<h1>obniz instant HTML</h1>
<br/><br/>

<script>
  var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
  atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.Temperature(atcRobo, 'P0');
    while(1){
        let temp = await sensor.getCelsiusWait();
        if(temp>10){
           atcRobo.studuinoBit.display.setPixel(2,2,[10,10,10]);  //温度センサーの値を返します
           atcRobo.studuinoBit.display.on();  //ディスプレイが点灯します
        }else{
           atcRobo.studuinoBit.display.off();　　//ディスプレイが消灯します
        }
        await atcRobo.studuinoBit.wait(1000);
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
