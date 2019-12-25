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

## calibrateWait();
磁気センサーの較正を行います。Studuino:bit本体を回転させてください。ディスプレイ上のLEDが全て点灯すると、較正完了です。
```Javascript
// Javascript Example
await stubit.compass.calibrateWait();
```

## clearCalibration();
磁気センサーの較正を初期状態に戻します。
```Javascript
// Javascript Example
stubit.compass.clearCalibration();
```

## headingWait();
方角を示す値を返します。北が0、東が90、南が180、西が270を示します。(予想。実装を確認できていない。示せていないが、精度の問題？12/25)
```Javascript
// Javascript Example
while(1){
    let compass = await stubit.compass.headingWait();
    console.log(compass);
    await stubit.wait(1000)
}
```
1秒ごとに方角（数値）を表示します。

## isCalibrated(): boolean

```Javascript
// Javascript Example

```



## 磁気センサーのサンプルプログラム
Studuino:bitが向いている方角をディスプレイに表示するプログラムです。北はN、東はE、南はS、西はWです。
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

  <script>
    var stubit = new Artec.StuduinoBit("YOUR_STUDUIOBIT_ID");
    stubit.onconnect = async function () {
      await stubit.compass.calibrateWait();
      while (1) {
        let heading = await stubit.compass.headingWait();  //方角を取得します
        await stubit.wait(1000);
        
        if(heading<45 || heading>=315){
          await stubit.display.showWait("N");  //ディスプレイにNを表示します
        }else if(heading>=45 && heading<135){
          await stubit.display.showWait("E");　//ディスプレイにEを表示します
        }else if(heading>=135 && heading<255){
          await stubit.display.showWait("S");　//ディスプレイにSを表示します
        }else if(heading>=255 && heading<315){
          await stubit.display.showWait("W");  //ディスプレイにWを表示します
        }
        
      }
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
