# DCモーター（ロボット拡張ユニット接続パーツ）の制御

![](https://i.imgur.com/FUldF1K.jpg)<br>
<small>(※)本DCモーターを使用する場合、ロ
ボット拡張ユニットが必要になります。ロボット拡張ユニットとDCモーターの接続は、[ArtecRobo2.0取扱説明書](https://www.artec-kk.co.jp/artecrobo2/pdf/jp/82541man_K0419_J.pdf)の「6 ロボット拡張ユニット各部の機能と名称」を参照してください。<br></small>

DCモーターの制御はArtecRobo.Motorに定義されています。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、DCモーターのポート番号（M1/M2）を指定することで、DCモーターを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
     let motor = new Artec.ArtecRobo.Motor(atcRobo, 'M1');　//DCモーターをM1に接続する場合
}
```

## cw();
DCモーターを時計回りに回転させます。先にpowerメソッドでモーターの速さを指定してください。
```Javascript
// Javascript Example
motor.power(200);
motor.cw();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobomotor.html#cw-1

## ccw();
DCモーターを反時計回りに回転させます。先にpowerメソッドでモーターの速さを指定してください。
```Javascript
// Javascript Example
motor.power(200);
motor.ccw();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobomotor.html#ccw-1

## stop();
DCモーターをブレーキなしで止めます。
```Javascript
// Javascript Example
motor.stop();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobomotor.html#stop-1

## break();
DCモーターをブレーキありで止めます。
```Javascript
// Javascript Example
motor.break();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobomotor.html#break-1

## power(Number: power);
DCモーターの回転する速さを数字で指定します。0～255の間で定義します。
```Javascript
// Javascript Example
motor.power(155);
motor.cw();
await atcRobo.studuinoBit.wait(3000);

motor.power(255);
motor.ccw();
await atcRobo.studuinoBit.wait(3000);

motor.stop();
```
上のサンプルコードではDCモーターが時計回りに3秒間ゆっくり回転したあとに、反時計回りに3秒間速く回転します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobomotor.html#power

## action(String: action);
DCモーターの動きを指定します。
```Javascript
// Javascript Example
motor.action("cw");
await atcRobo.studuinoBit.wait(3000);
motor.action("ccw");
await atcRobo.studuinoBit.wait(3000);
motor.action("stop");
```
上のサンプルコードではDCモーターが時計回りに3秒間回転したあとに、反時計回りに3秒間回転します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecrobomotor.html#action

## DCモーターのサンプルプログラム
Aボタンを押すとDCモーターが時計回りで回転し、Bボタンで回転を止めるプログラムです。
```Javascript
// Javascript Example
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
    let motor = new Artec.ArtecRobo.Motor(atcRobo, 'M1');　　    
    //wifi接続／動作確認用
    atcRobo.studuinoBit.led.on();
    
    motor.power(200);
    while(1){
        let pressedA = atcRobo.studuinoBit.button_a.wasPressed();　//Aボタンが押されたときtrueを返します
        let pressedB = atcRobo.studuinoBit.button_b.wasPressed();　//Bボタンが押されたときtrueを返します
        await atcRobo.studuinoBit.wait(100);
        if(pressedA==true){
          motor.cw();  //DCモーターが時計回りに回転します
        }
        if(pressedB==true){
          motor.break();  //DCモーターをブレーキありで止めます
        }
      }

  };

</script>
</body>
</html>
```

