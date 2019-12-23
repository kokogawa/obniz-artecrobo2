# 加速度センサー（接続パーツ）の制御
加速度センサー（接続パーツ）を使用します。</br>
加速度の計測により傾きや動きの変化を数値化します。X軸、Y軸、Z軸は下の写真のように定義されます。</br>

![](https://i.imgur.com/cWdS0DM.jpg)



加速度センサーの制御はArtecRoboAccelerometerクラスに定義され…？</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号を指定することで、加速度センサーを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
     let sensor = new Artec.ArtecRobo.Accelerometer(atcRobo);　//加速度センサーを接続する場合
}
```

## getXWait();

加速度センサーXの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let accelX = await　sensor.getXWait();
    console.log(accelX);   //加速度センサーXの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
加速度センサーXの値を1秒ごとに表示します。


## getYWait();
加速度センサーYの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let accelY = await　sensor.getYWait();
    console.log(accelY);   //加速度センサーYの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
加速度センサーYの値を1秒ごとに表示します。


## getZWait();
加速度センサーZの値を返します。
```Javascript
// Javascript Example
while(1){
    let accelZ = await　sensor.getZYWait();
    console.log(accelZ);   //加速度センサーZの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
加速度センサーZの値を1秒ごとに表示します。


## getValuesWait();

加速度センサーX,Y,Zの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let [accelX, accelY, accelZ] =await sensor.getValuesWait();
    console.log("X:%f Y:%f Z:%f",accelX,accelY,accelZ);    //加速度センサーの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
加速度センサーX,Y,Zの値を1秒ごとに表示します。



## configurationWait(Boolean: highres, Number: scale);

```Javascript
// Javascript Example

```


## 加速度センサーのサンプルプログラム
加速度センサーを傾ける向きによって、LEDの色が変わるプログラムです。(加速度センサーがつながっていないと表示されて確認できていない12/23)
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
        let [accelX, accelY, accelZ] =await sensor.getValuesWait();  //加速度センサーX,Y,Zの値を取得します
      
        if(accelX>5){
          oneColor([10, 0, 0]);  //赤色に点灯します
        }else if(accelZ>5){
          oneColor([0, 10, 0]);  //緑色に点灯します
        }else if(accelX<-5){
          oneColor([0, 0, 10]);  //青色に点灯します
        }else if(accelZ<-5){  
          oneColor([10, 10, 10]);  //白色に点灯します
        }else{
          atcRobo.studuinoBit.display.off();
        }
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
