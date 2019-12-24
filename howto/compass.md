# 磁気センサーの制御
Studuino:bitの磁気センサーを使用します。</br>
磁気の計測により磁力の変化を数値化します。X軸、Y軸、Z軸は下の写真のように定義されます。</br></br>
![](https://i.imgur.com/cNlPIDt.jpg)



磁気センサーの制御はStuduinoBitCompassクラスに定義され、StuduinoBitクラスでcompassにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitの磁気センサーを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```

## getXWait();

磁気センサーXの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let compassX = await　stubit.compass.getXWait();
    console.log(compassX);   //磁気センサーXの値をContentに表示します
    await stubit.wait(1000);
}
```
磁気センサーXの値を1秒ごとに表示します。

## getYWait();
磁気センサーYの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let compassY = await　stubit.compass.getYWait();
    console.log(compassY);   //磁気センサーYの値をContentに表示します
    await stubit.wait(1000);
}
```
磁気センサーYの値を1秒ごとに表示します。

## getZWait();
磁気センサーZの値を返します。小数第２位まで表示します。
```Javascript
// Javascript Example
while(1){
    let compassZ = await　stubit.compass.getZWait();
    console.log(compassZ);   //磁気センサーZの値をContentに表示します
    await stubit.wait(1000);
}
```
磁気センサーZの値を1秒ごとに表示します。


## getValuesWait();

磁気センサーX,Y,Zの値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let [compassX, compassY, compassZ] =await stubit.compass.getValuesWait();
    console.log("X:%f Y:%f Z:%f",compassX,compassY,compassZ);    //磁気センサーの値をContentに表示します
    
    await stubit.wait(1000);
}
```
磁気センサーX,Y,Zの値を1秒ごとに表示します。

## calibrateWait(): Promise<number[][]>

```Javascript
// Javascript Example

```

## clearCalibration(): void

```Javascript
// Javascript Example

```

## headingWait(): Promisenumber

```Javascript
// Javascript Example

```

## isCalibrated(): boolean

```Javascript
// Javascript Example

```



## 磁気センサーのサンプルプログラム
Studuino:bitをプログラムです。
```Javascript
// Javascript Example

```
