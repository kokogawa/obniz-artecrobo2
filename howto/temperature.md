
# 温度センサーの制御
Studuino:bitの温度センサーを使用します。<br>
![](https://i.imgur.com/ZRJiRGG.jpg)



温度センサーの制御はStuduinoBitTemperatureクラスに定義され、StuduinoBitクラスでtemperatureにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitの温度センサーを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```


## getValueWait();
温度センサーの値を返します。
```Javascript
// Javascript Example
while(1){
    let temp = await stubit.temperature.getValueWait();
    console.log(temp);    //温度センサーの値をContentに表示します
    await stubit.wait(1000);
}
```
温度センサーの値を表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobittemperature.html#getvaluewait

## getCelsiusWait(Number:ndigits);
温度センサーの値をセルシウス温度（℃）で返します。ndigits引数で小数点以下第何位まで表示するかを数字で指定します。既定値は小数第二位まで表示します
```Javascript
// Javascript Example
while(1){
    let temp = await stubit.temperature.getCelsiusWait(3);
    console.log(temp);    //温度センサーの値をContentに表示します
    await stubit.wait(1000);
}
```
温度センサーの値を小数第三位まで表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitlightsensor.html#getvaluewait

## 温度センサーのサンプルプログラム
現在の温度（℃）をディスプレイにスクロール表示するプログラムです。
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
        let temp = await stubit.temperature.getCelsiusWait(1);　　//温度センサーの値を返します
        await stubit.display.scrollWait(temp);　　//ディスプレイにスクロール表示します
        await stubit.wait(1000);
      } 
  }

</script>
</body>
</html>
```
