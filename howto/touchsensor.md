
# タッチセンサー（接続パーツ）の制御

![](https://i.imgur.com/8MitG6C.jpg)<br>
<small>(※)本タッチセンサーを使用する場合、ロボット拡張ユニットが必要になります。ロボット拡張ユニットとタッチセンサーの接続は、[ArtecRobo2.0取扱説明書](https://www.artec-kk.co.jp/artecrobo2/pdf/jp/82541man_K0419_J.pdf)の「6 ロボット拡張ユニット各部の機能と名称」を参照してください。<br></small>

タッチセンサーの制御はArtecRobo.TouchSensorクラスに定義されています。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号（P0/P1/P2）を指定することで、タッチセンサーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.TouchSensor(atcRobo, 'P0');　//P0にタッチセンサーを接続する場合
}
```

## getValueWait();
タッチセンサーが押されていなかったらtrue、押されていたらfalseを返します。
```Javascript
// Javascript Example
while(1){
    let touch = await sensor.getValueWait();
    console.log(touch);    //タッチセンサーの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
タッチセンサーの状態を表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobotouchsensor.html#getvaluewait

## タッチセンサーのサンプルプログラム
タッチセンサーを押すと3秒間ブザーが鳴るプログラムです。（P2反応しない"TypeError: this._inPin.terminalPin.readDigitalWait is not a function"と表示される）
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
    let sensor = new Artec.ArtecRobo.TouchSensor(atcRobo, 'P0');
    
    //wifi接続／動作確認用
    atcRobo.studuinoBit.led.on();
     
    let state=0;
    while(1){
        let touch = await sensor.getValueWait();
        console.log(touch);    //タッチセンサーの値をContentに表示します
        if(touch==false && state==0){
        　 await atcRobo.studuinoBit.buzzer.onWait("C4",3000);  //ブザーからC4の音が3秒間鳴ります
           state=1;
      　}else if(touch==true && state==1){
           state=0;
      　}
        await atcRobo.studuinoBit.wait(1000);
    }
  };
</script>
</body>
</html>
```



