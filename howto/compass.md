# 磁気センサーの制御
Studuino:bitの磁気センサーを使用します。</br>
磁気の計測により磁力の変化を数値化します。X軸、Y軸、Z軸は下の写真のように定義されます。</br></br>
![](https://i.imgur.com/LoSRAr0.png)


磁気センサーの制御はStuduinoBitCompassクラスに定義され、StuduinoBitクラスでcompassにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitの磁気センサーを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```


## calibrateWait();
磁気センサーの較正を行います。下の写真のようにStuduino:bit本体を回転させてください。ディスプレイ上のLEDが全て点灯すると、較正完了です。<br>
![](https://i.imgur.com/caAekd6.png)
<br>
```Javascript
// Javascript Example
await stubit.compass.calibrateWait();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitcompass.html#calibratewait

## clearCalibration();
磁気センサーの較正を初期状態に戻します。
```Javascript
// Javascript Example
stubit.compass.clearCalibration();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitcompass.html#clearcalibration

## isCalibrated();
較正が行われていたらtrue、行われていなかったらfalseを返します。
```Javascript
// Javascript Example
stubit.compass.isCalibrated();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitcompass.html#iscalibrated

## getXWait();
磁気センサーのX軸の値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let compassX = await　stubit.compass.getXWait();
    console.log(compassX);   //磁気センサーXの値をConsoleに表示します
    await stubit.wait(1000);
}
```
上のサンプルコードは磁気センサーのＸ軸の値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitcompass.html#getxwait

## getYWait();
磁気センサーのY軸の値を返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let compassY = await　stubit.compass.getYWait();
    console.log(compassY);   //磁気センサーYの値をConsoleに表示します
    await stubit.wait(1000);
}
```
上のサンプルコードは磁気センサーのY軸の値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitcompass.html#getywait

## getZWait();
磁気センサーのZ軸の値を返します。小数第２位まで表示します。
```Javascript
// Javascript Example
while(1){
    let compassZ = await　stubit.compass.getZWait();
    console.log(compassZ);   //磁気センサーZの値をConsoleに表示します
    await stubit.wait(1000);
}
```
上のサンプルコードは磁気センサーのZ軸の値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitcompass.html#getzwait

## getValuesWait();
磁気センサーのX軸,Y軸,Z軸の値を配列で返します。小数第２位まで表示します。

```Javascript
// Javascript Example
while(1){
    let [compassX, compassY, compassZ] =await stubit.compass.getValuesWait();
    console.log("X:%f Y:%f Z:%f",compassX,compassY,compassZ);    //磁気センサーの値をConsoleに表示します
    
    await stubit.wait(1000);
}
```
上のサンプルコードは磁気センサーX軸,Y軸,Z軸の値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitcompass.html#getvalueswait

## headingWait();
方角を示す角度を返します。北が0、東が90、南が180、西が270を示します。磁気センサーの較正がすんでいない場合、本メソッド実行時に較正を行います。<br>
![](https://i.imgur.com/SenibkM.png)

```Javascript
// Javascript Example
while(1){
    let compass = await stubit.compass.headingWait();
    console.log(compass);  //方角をConsoleに表示します
    await stubit.wait(1000)
}
```
上のサンプルコードは1秒ごとに方角を示す角度を表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitcompass.html#headingwait

## 磁気センサーのサンプルプログラム
Studuino:bitが向いている方角をディスプレイに表示するプログラムです。北はN、東はE、南はS、西はWを表示します。
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
      //wifi接続／動作確認用
    　stubit.led.on();
    
      await stubit.compass.calibrateWait();
      while (1) {
        let heading = await stubit.compass.headingWait();  //方角を取得します
        await stubit.wait(1000);
        
        if(heading<45 || heading>=315){
          await stubit.display.showWait("N");  //ディスプレイにNを表示します
        }else if(heading>=45 && heading<135){
          await stubit.display.showWait("E");　//ディスプレイにEを表示します
        }else if(heading>=135 && heading<225){
          await stubit.display.showWait("S");　//ディスプレイにSを表示します
        }else if(heading>=225 && heading<315){
          await stubit.display.showWait("W");  //ディスプレイにWを表示します
        }
        
      }
    }
</script>
</body>
</html>
```
