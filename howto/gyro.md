# ジャイロセンサーの制御
Studuino:bitのジャイロセンサーを使用します。</br>
角速度の計測により回転の動きを数値化します。X軸、Y軸、Z軸は下の写真のように定義されます。</br></br>
![](https://i.imgur.com/5AvPJQy.jpg)




ジャイロセンサーの制御はStuduinoBitGyroクラスに定義され、StuduinoBitクラスでgyroにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitのジャイロセンサーを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```

## getXWait();
ジャイロセンサーXの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
let gyroX = await　stubit.gyro.getXWait();
alert(gyroX);    //ジャイロセンサーXの値をアラート表示します
```
ジャイロセンサーXの値を表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#getxwait

## getYWait();
ジャイロセンサーYの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
let gyroY = await　stubit.gyro.getYWait();
alert(gyroY);    //ジャイロセンサーYの値をアラート表示します
```
ジャイロセンサーYの値を表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#getywait

## getZWait();
ジャイロセンサーZの値を返します。小数第２位まで表示します。
```Javascript
// Javascript Example
let gyroZ = await　stubit.gyro.getZWait();
alert(gyroZ);     //ジャイロセンサーZの値をアラート表示します
```
ジャイロセンサーZの値を表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#getzwait


## getValuesWait();
ジャイロセンサーX,Y,Zの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
let [gyroX, gyroY, gyroZ] =await stubit.gyro.getValuesWait();
console.log("X:%f Y:%f Z:%f",gyroX,gyroY,gyroZ);   //ジャイロセンサーの値をContentに表示します
```
ジャイロセンサーX,Y,Zの値を表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#getvalueswait

## setFs(String);
ジャイロセンサーの測定可能な最大最小値（フルスケール）を定義します。50dps、500dps、1000dps、2000dpsのいずれかを記述してください。既定値は250dpsです。<br/>


```Javascript
// Javascript Example
stubit.gyro.setFs("1000dps");　　//ジャイロセンサーのフルスケールが1000dpsに変更されます
let [gyroX, gyroY, gyroZ] =await stubit.gyro.getValuesWait();　 //ジャイロセンサーX,Y,Zの値を取得します
console.log("X:%f Y:%f Z:%f",gyroX,gyroY,gyroZ);    //ジャイロセンサーの値をContentに表示します
```
ジャイロセンサーX,Y,Zの値が-1000～1000dpsの間で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#setfs


## setSf(String);
ジャイロセンサーの単位（スケールファクター）を定義します。dpsかrpsのいずれかを記述してください。dpsは°/秒、rpsは回転/秒を意味します。既定値はdpsです。<br/>
```Javascript
// Javascript Example
stubit.gyro.setSf("rps");  //スケールファクターをrpsにします
let [gyroX_rps, gyroY_rps, gyroZ_rps] =await stubit.gyro.getValuesWait();  //ジャイロセンサーX,Y,Zの値を取得します
console.log("X:%f Y:%f Z:%f (rps)",gyroX_rps,gyroY_rps,gyroZ_rps);　//ジャイロセンサーの値をContentに表示します

stubit.gyro.setSf("dps");  //スケールファクターをdpsにします
let [gyroX_dps, gyroY_dps, gyroZ_dps] =await stubit.gyro.getValuesWait();  //ジャイロセンサーX,Y,Zの値を取得します
console.log("X:%f Y:%f Z:%f (dps)",gyroX_dps,gyroY_dps,gyroZ_dps);　//ジャイロセンサーの値をContentに表示します
```
ジャイロセンサーX,Y,Zの値がrpsとdpsそれぞれの単位で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitgyro.html#setsf

## ジャイロセンサーのサンプルプログラム
Studuino:bitを動かす速さによって、LEDの色が変わるプログラムです。
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
      stubit.gyro.setFs("1000dps");  //ジャイロセンサーのフルスケールを1000dpsに変更します
      let gyroZ =await stubit.gyro.getZWait();  //ジャイロセンサーZの値を取得します
      var abs_gyroZ=Math.abs(gyroZ);
      
      if(abs_gyroZ>=700){
        stubit.display._oneColor([10, 0, 0]);  
      }else if(700>abs_gyroZ&&abs_gyroZ>=500){
        stubit.display._oneColor([0, 10, 0]);  
      }else if(500>abs_gyroZ&&abs_gyroZ>=300){
        stubit.display._oneColor([0, 0, 10]);  
      }
      stubit.display.on();
      
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