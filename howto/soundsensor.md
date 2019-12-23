
# 音センサーの制御
音センサー（接続パーツ）を使用します。<br>

![](https://i.imgur.com/H0KTdxP.jpg)





音センサーの制御はArtecRoboArtecRoboSoundSensorクラスに定義され…？？。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号を指定することで、音センサーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.SoundSensor(atcRobo, 'P0');　//P0に音センサーを接続する場合
}
```


## getValueWait();
音センサーの値を返します。
```Javascript
// Javascript Example
while(1){
    let sound = await sensor.getValueWait();
    console.log(sound);    //音センサーの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
音センサーの値を表示します。(音センサー反応しないので実装できていない12/23）

## 音センサーのサンプルプログラム
音センサーが指定した値を超えるとディスプレイが点灯するプログラムです。（音センサー反応しないので実装できていない12/23）
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
    const image = new Artec.StuduinoBit.Image('00100:00110:00101:11100:11100:');
    let state=0;
    while(1){
        let sound = await sensor.getValueWait();
        if(sound>2500){
          await atcRobo.studuinoBit.display.showWait([image],3000);
        }
        await atcRobo.studuinoBit.wait(1000);
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




