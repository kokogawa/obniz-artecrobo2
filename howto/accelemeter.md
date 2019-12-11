# 加速度センサーの制御
Studuino:Bitの加速度センサーを使用します。</br>
加速度の計測により傾きや動きの変化を数値化します。X軸、Y軸、Z軸は下の写真のように定義されます。</br></br>
![](https://i.imgur.com/cNlPIDt.jpg)



加速度センサーの制御はStuduinoBitAccelerometerクラスに定義され、StuduinoBitクラスでaccelerometerにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:Bitの加速度センサーを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```

## getXWait();

加速度センサーXの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
let accelX = await　stubit.accelerometer.getXWait();
alert(accelX);    //加速度センサーXの値をアラート表示します
```
加速度センサーXの値を表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#getxwait

## getYWait();
加速度センサーYの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
let accelY = await　stubit.accelerometer.getYWait();
alert(accelY);    //加速度センサーYの値をアラート表示します
```
加速度センサーYの値を表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#getywait

## getZWait();
加速度センサーZの値を返します。小数第２位まで表示します。
```Javascript
// Javascript Example
let accelZ = await　stubit.accelerometer.getZWait();
alert(accelZ);    //加速度センサーZの値をアラート表示します
```
加速度センサーZの値を表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#getzwait


## getValuesWait();

加速度センサーX,Y,Zの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
let [accelX, accelY, accelZ] =await stubit.accelerometer.getValuesWait();
console.log("X:%f Y:%f Z:%f",accelX,accelY,accelZ);    //加速度センサーの値をContentに表示します
```
加速度センサーX,Y,Zの値を表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#getvalueswait

## setFs(String);
加速度センサーのフルスケールを定義します。2g/4g/8g/16gのいずれかを記述してください。既定値は2gです。<br/>


| String |      FS($ms^2$)     |
|:------:|:-------------:|
|   2g   | -19.61～19.61 |
|   4g   | -39.23～39.23 |
|   8g   | -78.45～78.45 |
|   16g   | -156.91～156.91 |
```Javascript
// Javascript Example
stubit.accelerometer.setFs("4g");　　//加速度センサーのフルスケールが4gに変更されます
let [accelX, accelY, accelZ] =await stubit.accelerometer.getValuesWait();
console.log("X:%f Y:%f Z:%f",accelX,accelY,accelZ);    //加速度センサーの値をContentに表示します
```
加速度センサーX,Y,Zの値が-39.23～39.23の間で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#setfs


## setSf(String);
加速度センサーのスケールファクターを定義します。ms2/mgのいずれかを記述してください。既定値はms2です。<br/>
```Javascript
// Javascript Example
stubit.accelerometer.setSf("mg");  //スケールファクターをmgにします
let [accelX_mg, accelY_mg, accelZ_mg] =await stubit.accelerometer.getValuesWait();  //加速度センサーX,Y,Zの値を取得します
console.log("X:%f Y:%f Z:%f (mg)",accelX_mg,accelY_mg,accelZ_mg);

stubit.accelerometer.setSf("ms2");  //スケールファクターをms2にします
let [accelX_ms2, accelY_ms2, accelZ_ms2] =await stubit.accelerometer.getValuesWait();  //加速度センサーX,Y,Zの値を取得します
console.log("X:%f Y:%f Z:%f (ms2)",accelX_ms2,accelY_ms2,accelZ_ms2);
```
加速度センサーX,Y,Zの値が$mg$（ミリグラム）と$ms^2$（メートル毎秒毎秒）それぞれのスケールファクターで表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#setsf

## 加速度センサーのサンプルプログラム
Studuino:Bitを傾ける向きによって、LEDの色が変わるプログラムです。
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

<script>
  var stubit = new Artec.StuduinoBit("YOUR_STUDUIOBIT_ID");
  stubit.onconnect = async function () {

    while(1){
      let [accelX, accelY, accelZ] =await stubit.accelerometer.getValuesWait();  //加速度センサーX,Y,Zの値を取得します
      
      if(accelX>5){
        stubit.display._oneColor([10, 0, 0]);  
        stubit.display.on();
      }else if(accelZ>5){
        stubit.display._oneColor([0, 10, 0]);  
        stubit.display.on();
      }else if(-5>accelX){
        stubit.display._oneColor([0, 0, 10]);  
        stubit.display.on();
      }else if(-5>accelZ){
        stubit.display._oneColor([10, 10, 10]);  
        stubit.display.on();
      }else{
          stubit.display.off();
      }
      
    }

    //wifi接続／動作確認用
    ledBlink();
  }
  async function ledBlink() {
    while (1) {
      stubit.led.on();
      await stubit.wait(500);
      stubit.led.off();
      await stubit.wait(500);
    }
  }
</script>
</body>
</html>
```