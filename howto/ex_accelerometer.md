# 加速度センサー（ロボット拡張ユニット接続パーツ）の制御
加速度の計測により傾きや動きの変化を数値化します。X軸、Y軸、Z軸は下の写真のように定義されます。</br>

![](https://i.imgur.com/cWdS0DM.jpg)<br>
<small>(※)本加速度センサーを使用する場合、ロボット拡張ユニットが必要になります。ロボット拡張ユニットと加速度センサーの接続は、[ArtecRobo2.0取扱説明書](https://www.artec-kk.co.jp/artecrobo2/pdf/jp/82541man_K0419_J.pdf)の「6 ロボット拡張ユニット各部の機能と名称」を参照してください。<br></small>

加速度センサーの制御はArtecRobo.Accelerometerクラスに定義されています。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツを指定することで、加速度センサーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
     let sensor = new Artec.ArtecRobo.Accelerometer(atcRobo);　//加速度センサーを接続する場合
}
```

## getXWait();

加速度センサーXの値を返します。単位は$G$です。

```Javascript
// Javascript Example
while(1){
    let accelX = await　sensor.getXWait();
    console.log(accelX);   //加速度センサーXの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
加速度センサーXの値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecroboaccelerometer.html#getxwait

## getYWait();
加速度センサーYの値を返します。単位は$G$です。

```Javascript
// Javascript Example
while(1){
    let accelY = await　sensor.getYWait();
    console.log(accelY);   //加速度センサーYの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
加速度センサーYの値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecroboaccelerometer.html#getywait

## getZWait();
加速度センサーZの値を返します。単位は$G$です。
```Javascript
// Javascript Example
while(1){
    let accelZ = await　sensor.getZWait();
    console.log(accelZ);   //加速度センサーZの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
加速度センサーZの値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecroboaccelerometer.html#getzwait

## getValuesWait();
加速度センサーX,Y,Zの値を返します。単位は$G$です。

```Javascript
// Javascript Example
while(1){
    let [accelX, accelY, accelZ] =await sensor.getValuesWait();
    console.log("X:%f Y:%f Z:%f",accelX,accelY,accelZ);    //加速度センサーの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
加速度センサーX,Y,Zの値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecroboaccelerometer.html#getvalueswait


## configurationWait(Boolean: highres, Number: scale);
highresでは解像度を定義します。trueと記述すると高解像度になります。規定値はfalseです。<br>
scaleでは加速度センサーの測定可能な最大最小値（フルスケール）を定義します。2,4,8のいずれかを記述してください。既定値は2です。<br>

| Number |      フルスケール(単位：$G$)     |
|:------:|:-------------:|
|   2g   | -2～+2 |
|   4g   | -4～+4 |
|   8g   | -8～+8 |


```Javascript
// Javascript Example
await sensor.configurationWait(true,4);　　//加速度センサーの解像度、フルスケールが変更されます
while(1){
    let [accelX, accelY, accelZ] =await sensor.getValuesWait();　//加速度センサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f",accelX,accelY,accelZ);    //加速度センサーの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
加速度センサーX,Y,Zの値が-4～+4の間で表示されます。

* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecroboaccelerometer.html#configurationwait

## 加速度センサーのサンプルプログラム
加速度センサーを傾ける向きによって、LEDの色が変わるプログラムです。
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
      let sensor = new Artec.ArtecRobo.Accelerometer(atcRobo);
      
      //wifi接続／動作確認用
      atcRobo.studuinoBit.led.on();
      
      function oneColor(color) {
        atcRobo.studuinoBit.display.off();
        for (let x = 0; x < 5; x++) {
          for (let y = 0; y < 5; y++) {
            atcRobo.studuinoBit.display.setPixel(x,y,color);
          }
        }
        atcRobo.studuinoBit.display.on();
      }
    
      while(1){
        await atcRobo.studuinoBit.wait(1000);
        let [accelX, accelY, accelZ] =await sensor.getValuesWait();  //加速度センサーX,Y,Zの値を取得します
        if(accelY>0.5){
          oneColor([20, 0, 0]);  //赤色に点灯します
        }else if(accelZ>0.5){
          oneColor([0, 20, 0]);  //緑色に点灯します
        }else if(accelY<-0.5){
          oneColor([0, 0, 20]);  //青色に点灯します
        }else if(accelZ<-0.5){  
          oneColor([10, 10, 10]);  //白色に点灯します
        }else{
          atcRobo.studuinoBit.display.off();
        }
      }     
    };
  </script>
</body>
</html>
```
