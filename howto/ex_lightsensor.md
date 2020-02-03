
# 光センサー（ロボット拡張ユニット接続パーツ）の制御
![](https://i.imgur.com/eMJrLSY.jpg)<br>
<small>(※)本光センサーを使用する場合、ロボット拡張ユニットが必要になります。ロボット拡張ユニットと光センサーの接続は、[ArtecRobo2.0取扱説明書](https://www.artec-kk.co.jp/artecrobo2/pdf/jp/82541man_K0419_J.pdf)の「6 ロボット拡張ユニット各部の機能と名称」を参照してください。<br></small>

光センサーの制御はArtecRobo.LightSensorに定義されています。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号（P0/P1/P2）を指定することで、光センサーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.LightSensor(atcRobo, 'P0');　//P0に光センサーを接続する場合
}
```


## getValueWait();
光センサーの値を返します。光センサーの値が大きいと、周囲が明るいことを示します。
```Javascript
// Javascript Example
while(1){
    let light = await sensor.getValueWait();
    console.log(light);    //光センサーの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
光センサーの値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobolightsensor.html#getvaluewait

## 光センサーのサンプルプログラム
暗くなるとディスプレイが点灯するプログラムです。
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

  <script>
    var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
     atcRobo.onconnect = async function () {
      let sensor = new Artec.ArtecRobo.LightSensor(atcRobo, 'P0');　//P0に光センサーを接続する場合

      //wifi接続／動作確認用
    　atcRobo.studuinoBit.led.on();
     
      while(1){
        let light = await sensor.getValueWait();　　//光センサーの値を返します
        if(light<300){
           atcRobo.studuinoBit.display.setPixel(2,2,[10,10,10]);  
           atcRobo.studuinoBit.display.on();  //ディスプレイが点灯します
        }else {
           atcRobo.studuinoBit.display.off();　　//ディスプレイが消灯します
        }
      } 
  }
</script>
</body>
</html>
```
