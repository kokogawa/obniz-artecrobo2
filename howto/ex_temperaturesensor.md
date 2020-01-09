
# 温度センサー（ロボット拡張ユニット接続パーツ）の制御

![](https://i.imgur.com/GWmFDrR.jpg)<br>
<small>(※)本温度センサーを使用する場合、ロボット拡張ユニットが必要になります。ロボット拡張ユニットと温度センサーの接続は、[ArtecRobo2.0取扱説明書](https://www.artec-kk.co.jp/artecrobo2/pdf/jp/82541man_K0419_J.pdf)の「6 ロボット拡張ユニット各部の機能と名称」を参照してください。<br></small>

温度センサーの制御はArtecRobo.Temperatureに定義されています。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号（P0/P1/P2）を指定することで、温度センサーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.Temperature(atcRobo, 'P0');　//P0に温度センサーを接続する場合
}
```

## getValueWait();
温度センサーの値を返します。<br>
取得した値から摂氏温度（℃）に変換したい場合は、Steinhart-Hart式を用います。Rに取得した温度センサーの値を入れてください。
$$
T=\frac{1}{\frac{1}{B}ln(\frac{R}{R_0})+\frac{1}{T_0+273.15}}-273.15
$$
$$
(B=3950\,\,,\,\,R_0=1000\,\,,\,\,T_0=25)
$$
また、華氏温度（℉）に変換したい場合は、上記の摂氏温度（℃）から以下の式を用いて変換します。
$$
F=T×1.8+32
$$
```Javascript
// Javascript Example
while(1){
    let temp = await sensor.getValueWait();
    console.log(temp);    //温度センサーの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
温度センサーの値を表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobotemperature.html#getcelsiuswait

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
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobotemperature.html#getvaluewait

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
        let temp = await sensor.getCelsiusWait();　//温度センサーの値を返します
        if(temp>10){
           atcRobo.studuinoBit.display.setPixel(2,2,[10,10,10]);  
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

