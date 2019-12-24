# サーボモーターの制御
サーボモーターを使用します。


![](https://i.imgur.com/ILDq8WG.jpg)

DCモーターの制御はArtecRoboServoMotorクラスに定義され…？</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、サーボモーターのポート番号を指定することで、サーボモーターを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
     let servo = new Artec.ArtecRobo.ServoMotor(atcRobo, 'P13');　//サーボモーターをP13に接続する場合
}
```

## setAngle( Number : degree );
角度を指定してサーボモーターを動かします。0～180度を指定します。
```Javascript
// Javascript Example
servo.setAngle(90);
```
サーボモーターが90度になります。


## サーボモーターのサンプルプログラム
Aボタンを押すとサーボモーターの角度が0→45→90→135→180→0→...と変化するプログラムです。

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
    let servo = new Artec.ArtecRobo.ServoMotor(atcRobo, 'P13');
    var count=0;
    while(1){
       let pressedA = atcRobo.studuinoBit.button_a.wasPressed();　//Aボタンが押されたときtrueを返します
       await atcRobo.studuinoBit.wait(100);
       if(pressedA){
         servo.setAngle(count*45); 
         if(count<=3){
           count++;
         }else{
           count=0;
         }
       }
    }
      servo.setAngle()
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


