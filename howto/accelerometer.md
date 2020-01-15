# 加速度センサーの制御
Studuino:bitの加速度センサーを使用します。</br>
加速度の計測により傾きや動きの変化を数値化します。X軸、Y軸、Z軸は下の写真のように定義されます。</br></br>
![](https://i.imgur.com/cF6mSBc.png)


加速度センサーの制御はStuduinoBitAccelerometerクラスに定義され、StuduinoBitクラスでaccelerometerにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitの加速度センサーを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```

## getXWait();

加速度センサーXの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let accelX = await　stubit.accelerometer.getXWait();
    console.log(accelX);   //加速度センサーXの値をConsoleに表示します
    await stubit.wait(1000);
}
```
加速度センサーXの値を1秒ごとに表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#getxwait

## getYWait();
加速度センサーYの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let accelY = await　stubit.accelerometer.getYWait();
    console.log(accelY);   //加速度センサーYの値をConsoleに表示します
    await stubit.wait(1000);
}
```
加速度センサーYの値を1秒ごとに表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#getywait

## getZWait();
加速度センサーZの値を返します。小数第２位まで表示します。
```Javascript
// Javascript Example
while(1){
    let accelZ = await　stubit.accelerometer.getZWait();
    console.log(accelZ);   //加速度センサーZの値をConsoleに表示します
    await stubit.wait(1000);
}
```
加速度センサーZの値を1秒ごとに表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#getzwait


## getValuesWait();

加速度センサーX,Y,Zの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let [accelX, accelY, accelZ] =await stubit.accelerometer.getValuesWait();
    console.log("X:%f Y:%f Z:%f",accelX,accelY,accelZ);    //加速度センサーの値をConsoleに表示します
    await stubit.wait(1000);
}
```
加速度センサーX,Y,Zの値を1秒ごとに表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#getvalueswait

## setFs(String);
加速度センサーの測定可能な最大最小値（フルスケール）を定義します。2g、4g、8g、16gのいずれかを記述してください。既定値は2gです。<br/>

| String |      フルスケール(単位：$m/s^2$)     |
|:------:|:-------------:|
|   2g   | -19.61～19.61 |
|   4g   | -39.23～39.23 |
|   8g   | -78.45～78.45 |
|   16g   | -156.91～156.91 |
```Javascript
// Javascript Example
stubit.accelerometer.setFs("4g");　　//加速度センサーのフルスケールが4gに変更されます
while(1){
    let [accelX, accelY, accelZ] =await stubit.accelerometer.getValuesWait();　//加速度センサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f",accelX,accelY,accelZ);    //加速度センサーの値をConsoleに表示します
    await stubit.wait(1000);
}
```
加速度センサーX,Y,Zの値が-39.23～39.23の間で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#setfs


## setSf(String);
加速度センサーの単位（スケールファクター）を定義します。ms2かmgのいずれかを記述してください。ms2は$m/s^2$（メートル毎秒毎秒）、mgは$mg$（ミリジー）を意味します。既定値はms2です。<br/>
```Javascript
// Javascript Example
while(1){
    stubit.accelerometer.setSf("mg");  //スケールファクターをmgにします
    let [accelX_mg, accelY_mg, accelZ_mg] =await stubit.accelerometer.getValuesWait();  //加速度センサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f (mg)",accelX_mg,accelY_mg,accelZ_mg);　//加速度センサーの値をConsoleに表示します

    stubit.accelerometer.setSf("ms2");  //スケールファクターをms2にします
    let [accelX_ms2, accelY_ms2, accelZ_ms2] =await stubit.accelerometer.getValuesWait();  //加速度センサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f (ms2)",accelX_ms2,accelY_ms2,accelZ_ms2);　//加速度センサーの値をConsoleに表示します
    await stubit.wait(1000);
}
```
加速度センサーX,Y,Zの値が$mg$（ミリジー）と$ms^2$（メートル毎秒毎秒）それぞれの単位で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitaccelerometer.html#setsf

## 加速度センサーのサンプルプログラム
Studuino:bitを傾ける向きによって、LEDの色が変わるプログラムです。
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
    
      //wifi接続／動作確認用
    　stubit.led.on();
    
      function oneColor(color) {
        stubit.display.off();
        for (let x = 0; x < 5; x++) {
          for (let y = 0; y < 5; y++) {
            stubit.display.setPixel(x,y,color);
          }
        }
        stubit.display.on();
      }
    
      while(1){
        let [accelX, accelY, accelZ] =await stubit.accelerometer.getValuesWait();  //加速度センサーX,Y,Zの値を取得します
      
        if(accelX>5){
          oneColor([10, 0, 0]);  //赤色に点灯します
        }else if(accelZ>5){
          oneColor([0, 10, 0]);  //緑色に点灯します
        }else if(accelX<-5){
          oneColor([0, 0, 10]);  //青色に点灯します
        }else if(accelZ<-5){  
          oneColor([10, 10, 10]);  //白色に点灯します
        }else{
          stubit.display.off();
        }
      }
  }

</script>
</body>
</html>
```
