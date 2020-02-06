# ジャイロセンサーの制御
Studuino:bitのジャイロセンサーを使用します。</br>
角速度の計測により回転の動きを数値化します。X、Y、Zの回転方向は下の写真のように定義されます。</br></br>
![](https://i.imgur.com/kyDXkq2.png)

ジャイロセンサーの制御はStuduinoBitGyroクラスに定義され、StuduinoBitクラスでgyroにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitのジャイロセンサーを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```

## getXWait();
ジャイロセンサーのX軸の値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let gyroX = await　stubit.gyro.getXWait();
    console.log(gyroX);    //ジャイロセンサーXの値をConsoleに表示します
    await stubit.wait(1000);
}
```
上のサンプルコードはジャイロセンサーのX軸の値を1秒ごとに表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#getxwait

## getYWait();
ジャイロセンサーのY軸の値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let gyroY = await　stubit.gyro.getYWait();
    console.log(gyroY);    //ジャイロセンサーYの値をConsoleに表示します
    await stubit.wait(1000);
}
```
上のサンプルコードはジャイロセンサーのY軸の値を1秒ごとに表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#getywait

## getZWait();
ジャイロセンサーのZ軸の値を返します。小数第２位まで表示します。
```Javascript
// Javascript Example
while(1){
    let gyroZ = await　stubit.gyro.getZWait();
    console.log(gyroZ);     //ジャイロセンサーZの値をConsoleに表示します
    await stubit.wait(1000);
}
```
上のサンプルコードはジャイロセンサーのZ軸の値を1秒ごとに表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#getzwait


## getValuesWait();
ジャイロセンサーのX軸,Y軸,Z軸の値を配列で返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let [gyroX, gyroY, gyroZ] =await stubit.gyro.getValuesWait();
    console.log("X:%f Y:%f Z:%f",gyroX,gyroY,gyroZ);   //ジャイロセンサーの値をConsoleに表示します
    await stubit.wait(1000);
}
```
上のサンプルコードはジャイロセンサーX軸,Y軸,Z軸の値を1秒ごとに表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#getvalueswait

## setFs(String);
ジャイロセンサーの測定可能な最大最小値（フルスケール）を定義します。250dps、500dps、1000dps、2000dpsのいずれかを記述してください。既定値は250dpsです。<br/>


```Javascript
// Javascript Example
stubit.gyro.setFs("1000dps");　　//ジャイロセンサーのフルスケールが1000dpsに変更されます
while(1){
    let [gyroX, gyroY, gyroZ] =await stubit.gyro.getValuesWait();　 //ジャイロセンサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f",gyroX,gyroY,gyroZ);    //ジャイロセンサーの値をConsoleに表示します
    await stubit.wait(1000);
}
```
上のサンプルコードはジャイロセンサーX,Y,Zの値が-1000～1000dpsの間で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#setfs


## setSf(String);
ジャイロセンサーの単位（スケールファクター）を定義します。dpsかrpsのいずれかを記述してください。dpsは°/秒、rpsは回転/秒を意味します。既定値はdpsです。<br/>
```Javascript
// Javascript Example
while(1){
    stubit.gyro.setSf("rps");  //スケールファクターをrpsにします
    let [gyroX_rps, gyroY_rps, gyroZ_rps] =await stubit.gyro.getValuesWait();  //ジャイロセンサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f (rps)",gyroX_rps,gyroY_rps,gyroZ_rps);　//ジャイロセンサーの値をConsoleに表示します

    stubit.gyro.setSf("dps");  //スケールファクターをdpsにします
    let [gyroX_dps, gyroY_dps, gyroZ_dps] =await stubit.gyro.getValuesWait();  //ジャイロセンサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f (dps)",gyroX_dps,gyroY_dps,gyroZ_dps);　//ジャイロセンサーの値をConsoleに表示します
    await stubit.wait(1000);
}
```
上のサンプルコードはジャイロセンサーX,Y,Zの値がrpsとdpsそれぞれの単位で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#setsf

## ジャイロセンサーのサンプルプログラム
Studuino:bitを素早く時計回りに回転させると、ディスプレイが点灯し、素早く反時計回りに回転させると消灯するプログラムです。
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
      stubit.gyro.setFs("500dps");  //ジャイロセンサーのフルスケールを500dpsに変更します
      let gyroZ =await stubit.gyro.getZWait();  //ジャイロセンサーZの値を取得します
      if(gyroZ>=200){
        oneColor([10, 0, 0]);  //赤色に点灯します 
      }
      if(-200>gyroZ){
         stubit.display.off();  //ディスプレイを消灯します
      }
    }
  }

</script>
</body>
</html>
```