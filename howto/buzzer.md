# ブザーの制御
Studino:Bitにあるブザーから音を出します。</br>
ブザーの制御はStudinoBitBuzzerクラスに定義されていて、StuduinoBitクラスでbuzzerにインスタンス化されています。

![](https://i.imgur.com/M83vGkU.png)

ここでは～～をstubitにインスタンス化します。
```
var stubit = new Artec.StuduinoBit("YOUR_STUDUIOBIT_ID");
```



## onWait( String : frequency |String: note number, Number: duration);

ブザーから指定された音を出します。</br>音は周波数（数字）もしくは音階（アルファベットと数字の組み合わせ）で記述します。

```Javascript
// Javascript Example
stubit.buzzer.onWait("450");
```
 450Hzの音がブザーから鳴ります。


```Javascript
// Javascript Example
stubit.buzzer.onWait("A4");
```
A4（ラ）の音がブザーから鳴ります。</br>
音階はC3（130Hz）～C8（4186Hz）に対応しています。</br>


音の長さを数字で指定することも可能です。（単位:ms）
```Javascript
// Javascript Example
stubit.buzzer.onWait("C4", 1000);
```
C4の音が1秒鳴ります。</br>
* 詳細（音階と周波数の対応は以下を参照してください。）</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbuzzer.html#onwait



## off();

ブザーを止めます。

```Javascript
// Javascript Example
stubit.buzzer.off();
```
* 詳細</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbuzzer.html#off

## ブザーのサンプルプログラム

スタートボタンを押すとブザーからC5の音が鳴り、ストップボタンで音を止めるプログラムです。

```
// Javascript Example
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://obniz.io/js/jquery-3.2.1.min.js"></script>
  <script src="https://unpkg.com/obniz@2.2.0/obniz.js"></script>
  <script script src="https://artec-kk.github.io/obniz-artecrobo2/artec.js"></script>
</head>
<body>

<div id="obniz-debug"></div>
<h1>obniz instant HTML</h1>
<br/><br/>

<button id="hz_start">start</button><button id="hz_stop">stop</button>


<script>
  var stubit = new Artec.StuduinoBit("YOUR_STUDUIOBIT_ID");
  stubit.onconnect = async function () {
    $("#hz_start").click(async () => {
      stubit.buzzer.onWait("C5");　/*C5の音を鳴らす*/
    })
    $("#hz_stop").click(async () => {
       stubit.buzzer.off();　　/*ブザーを止める*/
    })
  }

</script>
</body>
</html>
```

