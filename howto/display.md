
# ディスプレイの制御
Studuino:bitのディスプレイ（LEDマトリクス）を使用します。

![](https://i.imgur.com/076CaqI.png)


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

## setPixel(Number: x, Number: y, [Number, Number, Number]｜String: color);
座標x,yと色を定義します。座標は以下のように定義されています。<br/>
![](https://i.imgur.com/MAPKkwU.png)

```Javascript
// Javascript Example
stubit.display.setPixel(2,2,[0,0,10]);
stubit.display.on();
```
(x,y)=(2,2)が青色に点灯します。

## off();
ディスプレイを消灯します。

```Javascript
// Javascript Example
stubit.display.off();
```

## scrollWait(String: text, Number: delay, Boolean: wait, Boolean: loop, Boolean: monospace, [Number, Number, Number]: color |null);
文字をスクロール表示します。<br>
delayはスクロール表示する速さ(数字)を記述します。<br>
waitをtrueと記述すると、スクロール表示が終わるまで次の処理を実行しません。falseと記述すると、次の処理も同時に実行します。<br>
loopをtrueと記述すると、繰り返し実行されます。falseと記述すると、一度だけ実行されます。繰り返し実行するときはwaitをtrueと記述してください。<br>
monospaceをtrueと記述すると、文字が小さく表示されます。<br>
colorにはRGB値を記述します。<br>
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
ディスプレイにABCと白色でスクロール表示されます。


## showWait( Image[] | String[] | Number[]: iterable, Number: delay, Boolean: wait, Boolean: loop, Boolean: clear, [Number, Number, Number]: color |null);
文字など(Image,String,Number)を１文字ずつ順番に表示します。(※Image[]についてはStuduinoBitImageで説明します。)<br>
delayは１文字を表示する長さ（数字）で記述します。（単位:ミリ秒）<br>
waitをtrueと記述すると、表示が終わるまで次の処理を実行しません。falseと記述すると、次の処理も同時に実行します。<br>
loopをtrueと記述すると、繰り返し実行されます。falseと記述すると、一度だけ実行されます。繰り返し実行するときはwaitをtrueと記述してください。<br>
clearをtrueと記述すると、実行後ディスプレイが消灯します。falseと記述すると、点灯し続けます。<br>
colorにはRGB値を記述します。<br>
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
ディスプレイに1,2,3,4と1秒間ずつ白色で繰り返し表示されます。



## isOn();
ディスプレイが点灯しているときにtrue,消灯しているときにfalseを返します
```Javascript
// Javascript Example
stubit.display.off();
while(1){
    let pressedA = stubit.button_a.wasPressed();
    //Aボタンが押されたとき
    if(pressedA==true){
        let displayisOn = stubit.display.isOn();
        console.log(displayisOn);　//displayisOnをContentに表示します
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
Aボタンを押すと、ディスプレイの状態をContentに表示します。<br>
はじめはディスプレイが消灯しているため、Aボタンを押すとfalseを返します。<br>
Bボタンを押すとディスプレイが点灯するため、そのあとにAボタンを押すとtrueを返します。


## getPixel(Number: x, Number: y);
指定したx,y座標の色を返します。
```Javascript
// Javascript Example
stubit.display.setPixel(2,2,[5,10,15]);
stubit.display.on();     //(2,2)がRGB(5,10,15)で点灯します
let color = stubit.display.getPixel(2,2);　
console.log("color(2,2):R%d,G%d,B%d",color[0],color[1],color[2]);    //colorの値をContentに表示します
```
点灯した(2,2)のRGB値をContentに表示します。

## clear();
ディスプレイを初期の段階に戻します。
```Javascript
// Javascript Example
stubit.display.setPixel(2,2,[5,10,15]);
stubit.display.on();     //(2,2)がRGB(5,10,15)で点灯します
let color = stubit.display.getPixel(2,2);　//(2,2)のRGB値を取得します　
console.log("color(2,2):R%d,G%d,B%d",color[0],color[1],color[2]);    //colorの値をContentに表示します
    
await stubit.wait(3000);
    
stubit.display.off();  //ディスプレイを消灯します
let color_off = stubit.display.getPixel(2,2);　//(2,2)のRGB値を取得します
console.log("color_off(2,2):R%d,G%d,B%d",color_off[0],color_off[1],color_off[2]);    //off実行後のcolorの値をContentに表示します
    
stubit.display.clear();
let color_clear = stubit.display.getPixel(2,2);　//(2,2)のRGB値を取得します
console.log("color_clear(2,2):R%d,G%d,B%d",color_clear[0],color_clear[1],color_clear[2]);    //clear実行後のcolorの値をContentに表示します
```
(2,2)がRGB(5,10,15)で点灯し、Contentでも同じ値が確認できます。<br>
その後、off()によってディスプレイが消灯しますが、ここでは(2,2)に与えられたRGB値が残っていることがContentの表示で確認できます。<br>
最後に、clear()を使うことで、(2,2)が初期のRGB(0,0,0)に戻ることがContentの表示で確認できます。


<br>

> **StuduinoBitImage**<br>

はじめにStuduinoBitクラスのImageを使って、以下のようにインスタンス化を行います。
点灯させたいLEDを1、消灯させたいLEDを0で記述します。左から順に記述し、1行ずつ「:」で区切ります。
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('11111:11111:11111:11111:11111:');
await stubit.display.showWait([image],1000);
```
□全て点灯している写真
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
await stubit.display.showWait([image],1000);
```
□ななめに点灯している写真
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('111:010:11100:');
await stubit.display.showWait([image],1000);
```
□一部点灯している写真
## setBaseColor( String : color | String : color code　| [Number, Number, Number]: RGB colors );
点灯させたい色を指定します。色は色名、カラーコード、RGB値で指定できます。setPixelと併せて使用します。



## setPixel(Number: x, Number: y, Number: value);
座標x,yと状態を指定します。Valueが1で点灯、0で消灯です。
```Javascript
// Javascript Example
image.setBaseColor(0,10,0);
image.setPixel(2,2,1);
image.setPixel(1,2,1);
await stubit.showWait([image],1000);
```
(2,2)と(1,2)が緑色に点灯します。

## setPixelColor(Number: x, Number: y, [Number, Number, Number]: color);
座標x,yと色（RGB値）を指定します。
```Javascript
// Javascript Example
image.setPixel(2,2,[10,10,10]);
await stubit.showWait([image],1000);
```
（2,2）が白色に点灯します。



## shiftLeft(Number);
指定した数字分、イメージ全体を左へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftLeft(1);
await stubit.display.showWait([image]);
```
イメージ全体が２列分左へ移動したことを確認できます。

## shiftRight(Number);
指定した数字分、イメージ全体を右へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftRight(1);
await stubit.display.showWait([image]);
```
イメージ全体が２列分右へ移動したことを確認できます。

## shiftUp(Number);
指定した数字分、イメージ全体を上へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftUp(1);
await stubit.display.showWait([image]);
```
イメージ全体が１行分上へ移動したことを確認できます。

## shiftDown(Number);
指定した数字分、イメージ全体を下へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftDown(1);
await stubit.display.showWait([image]);
```
イメージ全体が１行分下へ移動したことを確認できます。


## copy();
イメージを複製（コピー）します。
```Javascript
// Javascript Example
const newimage = image.copy();
```
imageがnewimageにコピーされました。

## crop(Number: src_x, Number:src_y, Number:width, Number:height); 
イメージの(src_x,src_y)を原点として、幅と高さを指定し、その範囲を複製（コピー）します。

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('00000:11111:00000:11111:00000:');
const newimage = image.crop(1,1,3,3);
await stubit.displays.showWait([image]);
await stubit.displays.showWait([newimage]);
```
□imageの写真
□newimageの写真

## invert();
イメージの点灯と消灯を逆転します。

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
await stubit.display.showWait([image],1000);
image.invert();
await stubit.display.showWait([image],1000);
```
点灯と消灯が逆転します。
□逆転前の写真
□逆転後の写真

## blit(StuduinoBitImage, Number:src_x, Number:src_y, Number:width, Number:height, xdest?: number, ydest?: number);
指定したStuduinoBitImageの(src_x,src_y)を原点として指定した幅と高さをコピーし、イメージの(xdest,ydest)を原点として書き換えます。

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
await stubit.display.showWait([image], 1000);
const tiny = new Artec.StuduinoBit.Image('101:111:010');
image.blit(tiny, 1, 1, 2, 2, 1, 2);
await stubit.display.showWait([image], 1000);
```
□image写真
□ty写真（コピーするところを枠で囲む）
□blit後のimage写真（貼り付けられたところを枠で囲む）
## height();
イメージ全体の高さを表示します

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('111:000:111:111:');
const height=image.height();
console.log(height);
```
Contentに4と表示されます。

## width();
イメージ全体の幅を表示します。
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('111:000:111:111:');
const height=image.width();
console.log(width);
```
Contentに3と表示されます。


## getPixel(Number: x, Number: y);
指定したx,y座標の状態を返します。点灯していたら1、消灯していたら0を返します。
□01が点灯02が消灯している写真
上記のディスプレイで以下のプログラムを実行します。
```Javascript
// Javascript Example
let val_01 = image.getPixel(0,1);
let val_02 = image.getPixel(0,2);
console.log("(0,1)=%d,(0,2)=%d",val_01,val_02);
```
Contentに(0,1)=1,(0,2)=0と表示されます。

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
ContentにRGB値（0,10,0）とカラーコード#000a00が表示されます。

## str();
文字列でイメージの状態を表示します。点灯は1、消灯は0で表示します。reprとのちがいは？
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
console.log(image.str());
```

## repr();
文字列でイメージの状態を表示します。点灯は1、消灯は0で表示します。strとのちがいは？
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
console.log(image.repr());
```

## toPixels();
ディスプレイの色（RGB値）を取得し、配列に格納します。
配列番号とLEDの対応は以下のようになります。
□LEDに０～24の数字を振った写真
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
let array = [];
array = image.toPixels();
console.log(array[6]);
```
Contentに(31,0,0)と表示されます。

## fill(Number);
変換方法不明？カンブリアン社制作途中？

```Javascript
// Javascript Example

```


## ディスプレイのサンプルプログラム


```Javascript
// Javascript Example

```








