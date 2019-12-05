# 加速度センサーの制御
Studuino:Bitの加速度センサーを使用します。</br>
加速度の計測により傾きや動きの変化を数値化します。X軸、Y軸、Z軸は下の写真のように定義されます。</br></br>
![](https://i.imgur.com/cNlPIDt.jpg)



加速度センサーの制御はStuduinoBitAccelerometerクラスに定義され、StuduinoBitクラスでaccelerometerにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:Bitのブザーを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```

## getXWait();

加速度センサーXの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
let accelX = await　stubit.accelerometer.getXWait();
alert(accelX);    //加速度センサーxの値をアラート表示します
```
加速度センサーXの値を表示します。

## getYWait();
加速度センサーYの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
let accelY = await　stubit.accelerometer.getYWait();
alert(accelY);    //加速度センサーyの値をアラート表示します
```
加速度センサーYの値を表示します。

## getZWait();
加速度センサーZの値を返します。小数第２位まで表示します。
```Javascript
// Javascript Example
let accelZ = await　stubit.accelerometer.getZWait();
alert(accelZ);    //加速度センサーzの値をアラート表示します
```
加速度センサーZの値を表示します。


## getValuesWait();

加速度センサーの値をそれぞれ返します。小数第２位まで表示します。

```Javascript
// Javascript Example
let [accelX, accelY, accelZ] =await stubit.accelerometer.getValuesWait();
console.log("X:%d Y:%d Z:%d",accelX,accelY,accelZ);    //加速度センサーの値をContentに表示します
```
加速度センサーX,Y,Zの値を表示します。

## setFs(value: string);
？

## setSf(value: string);
？

## 加速度センサーのサンプルプログラム
プログラム内容を書く
```Javascript
// Javascript Example
ここに書く
```