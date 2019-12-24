
# タッチセンサー（接続パーツ）の制御
タッチセンサー（接続パーツ）を使用します。<br>

![](https://i.imgur.com/8MitG6C.jpg)


タッチセンサーの制御はArtecRoboTouchSensorクラスに定義され…？？（ArtecRoboTouchSensor→ArtecRobo.TouchSensorを説明したい12/24）</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号を指定することで、タッチセンサーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.TouchSensor(atcRobo, 'P0');　//P0にタッチセンサーを接続する場合
}
```


## getValueWait();
タッチセンサーが押されていたらtrue、押されていなかったらfalseを返します。
```Javascript
// Javascript Example
while(1){
    let touch = await sensor.getValueWait();
    console.log(touch);    //タッチセンサーの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
タッチセンサーの状態を表示します。（タッチセンサー反応しない12/23→普通の方でも反応してない。P1なら反応するが、押したらfalseになる。逆だと思う12/24）
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobotouchsensor.html#getvaluewait

## タッチセンサーのサンプルプログラム
タッチセンサーを押すと3秒間ブザーが鳴るプログラムです。（タッチセンサー反応しない12/23→普通の方でも反応してない。P1なら反応するが、押したらfalseになる。逆だと思う12/24）
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
Touch Sensor:<span id="sensor"></span><br/>

<script>
  var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
  atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.TouchSensor(atcRobo, 'P0');
    let state=0;
    while(1){
        let touch = await sensor.getValueWait();
        console.log(touch);    //タッチセンサーの値をContentに表示します
        if(touch==true && state==0){
        　 await atcRobo.studuinoBit.buzzer.onWait("C4",3000);  //ブザーからC4の音が3秒間鳴ります
           state=1;
      　}else if(touch==false && state==1){
           state=0;
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



