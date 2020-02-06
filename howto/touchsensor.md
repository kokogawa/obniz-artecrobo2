
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
タッチセンサーが押されている場合は「0」、押されていない場合は「1」を返します。
```Javascript
// Javascript Example
while(1){
    let touch = await sensor.getValueWait();
    console.log(touch);    //タッチセンサーの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
上のサンプルコードは1秒ごとにタッチセンサーの値を表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobotouchsensor.html#getvaluewait

## isPressedWait();
タッチセンサーが押されている場合は「true」、押されていない場合は「false」を返します。
```Javascript
// Javascript Example
while(1){
    let touch = await sensor.isPressedWait();
    console.log(touch);    //タッチセンサーの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
上のサンプルコードは1秒ごとにタッチセンサーの状態を表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobotouchsensor.html#ispressedwait

## タッチセンサーのサンプルプログラム
タッチセンサーを押すと3秒間ブザーが鳴るプログラムです。
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
    
    while(1){
        if(await sensor.isPressedWait()){
        　 await atcRobo.studuinoBit.buzzer.onWait("C4",3000);  //ブザーからC4の音が3秒間鳴ります
        }
	}
  };
</script>
</body>
</html>
```



