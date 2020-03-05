
# ディスプレイの制御
Studuino:bitのディスプレイ（LEDマトリクス）を使用します。

![](./image/display.png)


ディスプレイの制御はStuduinoBitDisplayクラスとStuduinoBitImageクラスに定義されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitのディスプレイを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```
<br>

> **StuduinoBitDisplay**<br>

StuduinoBitクラスでStuduinoBitDisplayはdisplayにインスタンス化されています。
## on();
ディスプレイを点灯します。
```Javascript
// Javascript Example
//　点灯させたい座標や色の情報を記述します。
stubit.display.on();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdisplay.html#on

## setPixel(Number: x, Number: y, [Number, Number, Number]｜String: color);
座標x,yと色を定義します。座標は以下のように定義されています。<br/>
![](./image/display01.png)

```Javascript
// Javascript Example
stubit.display.setPixel(2,2,"BLUE");
stubit.display.on();
```
上のサンプルコードでは(x,y)=(2,2)が青色に点灯します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdisplay.html#setpixel

## off();
ディスプレイを消灯します。

```Javascript
// Javascript Example
stubit.display.off();
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdisplay.html#off

## scrollWait(String: text, Number: delay, Boolean: wait, Boolean: loop, Boolean: monospace, [Number, Number, Number]: color |null);
文字をスクロール表示します。<br>
delayはスクロール表示する速さ(数字)を記述します。<br>
waitをtrueと記述すると、スクロール表示が終わるまで次の処理を実行しません。falseと記述すると、表示が終わるのを待たずに次の処理を実行します。<br>
loopをtrueと記述すると、繰り返し実行されます。falseと記述すると、一度だけ実行されます。<br>
monospaceをtrueと記述すると、文字が小さく表示されます。<br>
colorには表示する文字の色を設定します。RGB値を記述します。<br>
既定値は以下のようになっています。

| パラメータ | 既定値| 
| -------- | -------- | 
| delay    | 150     | 
| wait     | true     | 
| loop     | false    | 
| monospace  | false    |
| color | [31, 0, 0]   | 


```Javascript
// Javascript Example
await stubit.display.scrollWait("ABC",500,true,true,true,[10,10,10]);
```
上のサンプルコードではディスプレイにABCと白色でスクロール表示されます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdisplay.html#scrollwait

## showWait( Image[] | String[] | Number[]: iterable, Number: delay, Boolean: wait, Boolean: loop, Boolean: clear, [Number, Number, Number]: color |null);
文字など(Image,String,Number)を１文字ずつ順番に表示します。(※Image[]についてはStuduinoBitImageで説明します。)<br>
delayは１文字を表示する時間を記述します。（単位:ミリ秒）<br>
waitをtrueと記述すると、表示が終わるまで次の処理を実行しません。falseと記述すると、表示が終わるのを待たずに次の処理を実行します。<br>
loopをtrueと記述すると、繰り返し実行されます。falseと記述すると、一度だけ実行されます。<br>
clearをtrueと記述すると、実行完了後ディスプレイが消灯します。falseと記述すると、点灯し続けます。<br>
colorには表示するイメージの色を設定します。RGB値を記述します。<br>
既定値は以下のようになっています。

| パラメータ | 既定値| 
| -------- | -------- | 
| delay    | 400     | 
| wait     | true     | 
| loop     | false    | 
| clear  | false    |
| color | [31, 0, 0]   | 

```Javascript
// Javascript Example
await stubit.display.showWait([1,2,3,4],1000,true,true,false,[10,10,10]);
```
上のサンプルコードではディスプレイに1,2,3,4と1秒間ずつ白色で繰り返し表示されます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdisplay.html#showwait


## isOn();
ディスプレイが点灯しているときにtrue、消灯しているときにfalseを返します。
```Javascript
// Javascript Example
stubit.display.off();
while(1){
    let pressedA = stubit.button_a.wasPressed();
    //Aボタンが押されたとき
    if(pressedA==true){
        let displayisOn = stubit.display.isOn();
        console.log(displayisOn);　//displayisOnをConsoleに表示します
     }

    let pressedB = stubit.button_b.wasPressed();
    //Bボタンが押されたとき
    if(pressedB==true){
        stubit.display.setPixel(2,2,[10,10,10]);
        stubit.display.on();    //(2,2)が白色に点灯します
    }
      await stubit.wait(500);
}
```
上のサンプルコードを実行後、ディスプレイが消灯している状態でAボタンを押すとfalseを返します。
Bボタンを押すとディスプレイが点灯します。ディスプレイが点灯している状態でAボタンを押す
とtrueを返します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdisplay.html#ison


## getPixel(Number: x, Number: y);
指定したx,y座標の色を返します。
```Javascript
// Javascript Example
stubit.display.setPixel(2,2,[5,10,15]);
stubit.display.on();     //(2,2)がRGB(5,10,15)で点灯します
let color = stubit.display.getPixel(2,2);　
console.log("color(2,2):R%d,G%d,B%d",color[0],color[1],color[2]);    //colorの値をConsoleに表示します
```
上のサンプルコードはディスプレイの(2,2)に点灯したRGB値をContentに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdisplay.html#getpixel

## clear();
ディスプレイを初期の段階に戻します。
```Javascript
// Javascript Example
stubit.display.setPixel(2,2,[5,10,15]);
stubit.display.on();     //(2,2)がRGB(5,10,15)で点灯します
let color = stubit.display.getPixel(2,2);　//(2,2)のRGB値を取得します　
console.log("color(2,2):R%d,G%d,B%d",color[0],color[1],color[2]);    //colorの値をConsoleに表示します
    
await stubit.wait(3000);
    
stubit.display.off();  //ディスプレイを消灯します
let color_off = stubit.display.getPixel(2,2);　//(2,2)のRGB値を取得します
console.log("color_off(2,2):R%d,G%d,B%d",color_off[0],color_off[1],color_off[2]);    //off実行後のcolorの値をConsoleに表示します
    
stubit.display.clear();
let color_clear = stubit.display.getPixel(2,2);　//(2,2)のRGB値を取得します
console.log("color_clear(2,2):R%d,G%d,B%d",color_clear[0],color_clear[1],color_clear[2]);    //clear実行後のcolorの値をConsoleに表示します
```
上のサンプルコードでは、ディスプレイの(2,2)がRGB(5,10,15)で点灯し、Consoleでも(2,2)に設定されているRGB値が確認できます。
その後、off()によってディスプレイが消灯しますが、(2,2)にはRGB値が設定されていることがConsoleの表示で確認できます。
最後に、clear()で、(2,2)が初期化（RGB(0,0,0)）されていることがConsoleの表示で確認できます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdisplay.html#clear

<br>

> **StuduinoBitImage**<br>

はじめにStuduinoBitクラスのImageを使って、以下のようにインスタンス化を行います。
点灯させたいLEDを1、消灯させたいLEDを0で記述します。ディスプレイの左から順に記述し、1行ずつ「:」で区切ります。
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('11111:11111:11111:11111:11111:');
await stubit.display.showWait([image],1000);
```
以下のように点灯します。<br>
![](./image/display03.jpg)


```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
await stubit.display.showWait([image],1000);
```
以下のように点灯します。<br>
![](./image/display04.jpg)

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('111:010:11100:');
await stubit.display.showWait([image],1000);
```
以下のように点灯します。<br>
![](./image/display05.jpg)

## setBaseColor( String : color | String : color code　| [Number, Number, Number]: RGB colors );
点灯させたい色を指定します。色は色名、カラーコード、RGB値で指定できます。setPixelと併せて使用します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#setbasecolor


## setPixel(Number: x, Number: y, Number: value);
座標x,yと状態を指定します。Valueが1で点灯、0で消灯です。
```Javascript
// Javascript Example
image.setBaseColor(0,10,0);
image.setPixel(2,2,1);
image.setPixel(1,2,1);
await stubit.showWait([image],1000);
```
上のサンプルコードではディスプレイの(2,2)と(1,2)が緑色に点灯します
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#setpixel

## setPixelColor(Number: x, Number: y, [Number, Number, Number]: color);
座標x,yと色（RGB値）を指定します。
```Javascript
// Javascript Example
image.setPixel(2,2,[10,10,10]);
await stubit.showWait([image],1000);
```
上のサンプルコードではディスプレイの（2,2）が白色に点灯します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#setpixelcolor


## shiftLeft(Number);
指定した数字分、イメージ全体を左へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftLeft(1);
await stubit.display.showWait([image]);
```
上のサンプルコードではイメージ全体が1列分左へ移動したことを確認できます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#shiftleft

## shiftRight(Number);
指定した数字分、イメージ全体を右へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftRight(1);
await stubit.display.showWait([image]);
```
上のサンプルコードではイメージ全体が1列分右へ移動したことを確認できます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#shiftright

## shiftUp(Number);
指定した数字分、イメージ全体を上へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftUp(1);
await stubit.display.showWait([image]);
```
上のサンプルコードではイメージ全体が1行分上へ移動したことを確認できます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#shiftup

## shiftDown(Number);
指定した数字分、イメージ全体を下へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftDown(1);
await stubit.display.showWait([image]);
```
上のサンプルコードではイメージ全体が1行分下へ移動したことを確認できます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#shiftdown

## copy();
イメージをコピーします。
```Javascript
// Javascript Example
const newimage = image.copy();
```
上のサンプルコードではimageがnewimageにコピーされます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#copy

## crop(Number: src_x, Number:src_y, Number:width, Number:height); 
イメージの(src_x,src_y)を原点として、幅と高さを指定し、その範囲をコピーします。

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('00000:11111:00000:11111:00000:');
const newimage = image.crop(1,1,3,3);
await stubit.displays.showWait([image]);
await stubit.displays.showWait([newimage]);
```
![](./image/display06.png)
<br>[image]黄色枠の箇所をコピーします<br>
![](./image/display07.jpg)
<br>[newimage]<br>
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#crop

## invert();
イメージの点灯と消灯を逆転します。

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
await stubit.display.showWait([image],1000);
image.invert();
await stubit.display.showWait([image],1000);
```
上のサンプルコードでは点灯と消灯が逆転します。<br>
![](./image/display08.jpg)
<br>[image]逆転前<br>
![](./image/display09.jpg)
<br>[image]逆転後<br>
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#invert

## blit(StuduinoBitImage, Number:src_x, Number:src_y, Number:width, Number:height, xdest: number, ydest: number);
指定したStuduinoBitImageの(src_x,src_y)を原点として指定した幅と高さをコピーし、イメージの(xdest,ydest)を原点として書き換えます。

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
await stubit.display.showWait([image], 3000);
const tiny = new Artec.StuduinoBit.Image('101:111:010');
image.blit(tiny, 1, 1, 2, 2, 1, 2);
await stubit.display.showWait([image]);
```
![](./image/display08.jpg)
<br>書き換え前の[image]<br>
![](./image/display10.png)
<br>[tiny]黄色枠の箇所をコピーします<br>
![](./image/display11.png)
<br>書き換え後の[image]<br>
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#blit

## fill(Number:value);
イメージの明るさを0～9で指定して、白色に点灯します。数字が大きいと明るく点灯し、0は点灯しません。
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('11111:10001:10001:10001:11111:');
image.fill(9);
await stubit.display.showWait([image], 2000);
image.fill(3);
await stubit.display.showWait([image], 2000);
```
上のサンプルコードではイメージの明るさが変わります。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#fill

## height();
イメージ全体の高さを表示します

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('111:000:111:111:');
const height=image.height();
console.log(height);
```
上のサンプルコードではConsoleに4と表示されます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#height

## width();
イメージ全体の横幅を表示します。
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('111:000:111:111:');
const height=image.width();
console.log(width);
```
上のサンプルコードではConsoleに3と表示されます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#width

## getPixel(Number: x, Number: y);
指定したx,y座標の状態を返します。点灯していたら1、消灯していたら0を返します。<br>
![](./image/display12.jpg)
<br>
上のディスプレイで以下のサンプルコードを実行します。
```Javascript
// Javascript Example
let val_01 = image.getPixel(0,1);
let val_02 = image.getPixel(0,2);
console.log("(0,1)=%d,(0,2)=%d",val_01,val_02);
```
Consoleに(0,1)=1,(0,2)=0と表示されます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#getpixel

## getPixelColor(Number: x, Number: y, Boolean: hex);
指定したx,y座標の色を返します。
hexがfalseならRGB値、trueならカラーコードを返します。

```Javascript
// Javascript Example
image.setBaseColor(0,10,0);
image.setPixel(2,2,1);
let color_rgb = image.getPixelColor(2,2,false);
console.log(color_rgb);
let colorcode = image.getPixelColor(2,2,true);
console.log(colorcode);
```
上のサンプルコードではConsoleにRGB値（0,10,0）とカラーコード#000a00が表示されます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#getpixelcolor

## str();
文字列でイメージの状態を表示します。点灯は1、消灯は0で表示します。(reprとの違い説明追加予定)
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
console.log(image.str());
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#str

## repr();
文字列でイメージの状態を表示します。点灯は1、消灯は0で表示します。(strとの違い説明追加予定)
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
console.log(image.repr());
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#repr

## toPixels();
ディスプレイの色（RGB値）を取得し、配列に格納します。
配列番号とLEDの対応は以下のようになります。<br>
![](./image/display13.png)

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
let array = [];
array = image.toPixels();
console.log(array[6]);
```
上のサンプルコードではConsoleに(31,0,0)と表示されます。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitimage.html#topixels


## ディスプレイのサンプルプログラム①
下記は押すボタンによってディスプレイの表示が異なるプログラムです。REDのボタンを押すと、赤色で1,2,3,4と1秒ごとにディスプレイに表示されます。GREENのボタンを押すと、緑色で1234とスクロール表示されます。BLUEのボタンを押すと、青色で全点灯します。

```Javascript
// Javascript Example
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://obniz.io/js/jquery-3.2.1.min.js"></script>
  <script src="https://unpkg.com/obniz@2.2.0/obniz.js"></script>
  <script src="https://artec-kk.github.io/obniz-artecrobo2/artec.js" ></script>
</head>
<body>

<div id="obniz-debug"></div>
<h1>obniz instant HTML</h1>
<button id="red">RED</button>
<button id="green">GREEN</button>
<button id="blue">BLUE</button>

<script>
  var stubit = new Artec.StuduinoBit("YOUR_STUDUIOBIT_ID");
  stubit.onconnect = async function () {

    //wifi接続／動作確認用
    stubit.led.on();
    
    $("#red").click(async ()=>{
       await stubit.display.showWait([1,2,3,4],1000,true,false,true,[20,0,0]);  //赤色で1,2,3,4と1秒ごとに表示する
    })
    $("#green").click(async ()=>{
      await stubit.display.scrollWait("1234",100,true,false,true,[0,20,0]);  //緑色で1,2,3,4とスクロール表示する
      stubit.display.off();
    })
    $("#blue").click(async ()=>{
      //青色で3秒間点灯する
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          stubit.display.setPixel(x,y,[0,0,20]);
        }
      }
      stubit.display.on();
      await stubit.wait(3000);
      stubit.display.off();
    })
  }
</script>
</body>
</html>
```


## ディスプレイのサンプルプログラム②
下の写真のようにディスプレイの表示が変わるプログラムです。<br>
![](./image/display14.jpg)
<br>（写真1）<br>
![](./image/display15.jpg)
<br>（写真2）<br>
![](./image/display16.jpg)
<br>（写真3）<br>

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
    
      // set basic
      const image = new Artec.StuduinoBit.Image('11111:10001:10001:10001:11111:');
      await stubit.display.showWait([image], 2000);  //（写真1）参照
      console.log('width', image.width());  //imageの横幅をConsoleに表示します
      console.log('height', image.height());    //imageの高さをConsoleに表示します
      
      const copy = image.copy();　//imageを複製をcopyに定義します
      copy.invert();　　//copyの点灯と消灯を逆転します
      await stubit.display.showWait([copy], 2000);　　//（写真2）参照 
      console.log(copy.str());　　//copyの状態をConsoleに表示します
      
      image.setPixelColor(2, 2, [0, 0, 31]);　　//imageの(2,2)を緑色に点灯します
      await stubit.display.showWait([image]);　　//（写真3）参照 
      let val = image.getPixelColor(2, 2, true);　　//imageの(2,2)のカラーコードを取得します
      console.log('getPixelColorHex[2,2]', val);　　//imageの(2,2)のカラーコードをConsoleに表示します
  }
</script>
</body>
</html>

```







