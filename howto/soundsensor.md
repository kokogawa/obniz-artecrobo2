
# 音センサー（ロボット拡張ユニット接続パーツ）の制御

![](https://i.imgur.com/H0KTdxP.jpg)<br>
<small>(※)本音センサーを使用する場合、ロボット拡張ユニットが必要になります。ロボット拡張ユニットと音センサーの接続は、[ArtecRobo2.0取扱説明書](https://www.artec-kk.co.jp/artecrobo2/pdf/jp/82541man_K0419_J.pdf)の「6 ロボット拡張ユニット各部の機能と名称」を参照してください。<br></small>

音センサーの制御はArtecRobo.SoundSensorクラスに定義されています。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号（P0/P1/P2）を指定することで、音センサーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.SoundSensor(atcRobo, 'P0');　//P0に音センサーを接続する場合
}
```

## getValueWait();
音センサーの値を返します。0～4095の値を取ります。
```Javascript
// Javascript Example
while(1){
    let sound = await sensor.getValueWait();
    console.log(sound);    //音センサーの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
上のサンプルコードは音センサーの値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobosoundsensor.html

## 音センサーのサンプルプログラム
音センサーが指定した値を超えるとディスプレイが点灯するプログラムです。
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
    let sensor = new Artec.ArtecRobo.SoundSensor(atcRobo, 'P0'); 
    
    //wifi接続／動作確認用
    atcRobo.studuinoBit.led.on();
    
    const image = new Artec.StuduinoBit.Image('00100:00110:00101:11100:11100:');
    while(1){
        let sound = await sensor.getValueWait();　//音センサーの値を返します
        if(sound>300){
          await atcRobo.studuinoBit.display.showWait([image],3000);　//ディスプレイを点灯します
        }
        await atcRobo.studuinoBit.wait(1000);
    }
  };
</script>
</body>
</html>
```




