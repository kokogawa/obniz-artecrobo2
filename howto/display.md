
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
文字など(image,string,number)を１文字ずつ順番に表示します。(※Image[]についてはStuduinoBitImageで説明します。)<br>
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
その後、ディスプレイが消灯しますが、ここでは(2,2)に与えられたRGB値が残っていることがContentの表示で確認できます。<br>
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
写真
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
await stubit.display.showWait([image],1000);
```
写真
```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('111:010:11100:');
await stubit.display.showWait([image],1000);
```
写真
## setBaseColor( String : color | String : color code　| [Number, Number, Number]: RGB colors );
点灯させたい色を指定します。色は色名、カラーコード、RGB値で指定できます。setPixelと併せて使用します。



## setPixel(x: number, y: number, value: number): void
点灯させたい座標を指定します。点灯させたいときはvalue=0ならあとにshowWaitで点灯しない。value=1だけでは点灯しないが、あとにshowWaitすると点灯する。
```Javascript
// Javascript Example
image.setBaseColor(0,10,0);
image.setPixel(2,2,1);
image.setPixel(1,2,1);
await stubit.showWait([image],1000);
```
(2,2)と(1,2)が緑色に点灯します。

## setPixelColor(x: number, y: number, [Number, Number, Number]: color): void
点灯させたい座標と色（RGB値）を指定します。
```Javascript
// Javascript Example
image.setPixel(2,2,[10,10,10]);
await stubit.showWait([image],1000);
```
（2,2）が白色に点灯します。



## shiftLeft(shift: number): void
指定した数字分、イメージ全体を左へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftLeft(1);
await stubit.display.showWait([image]);
```
イメージ全体が２列分左へ移動したことを確認できます。

## shiftRight(shift: number): void
指定した数字分、イメージ全体を右へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftRight(1);
await stubit.display.showWait([image]);
```
イメージ全体が２列分右へ移動したことを確認できます。

## shiftUp(shift: number): void
指定した数字分、イメージ全体を上へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftUp(1);
await stubit.display.showWait([image]);
```
イメージ全体が１行分上へ移動したことを確認できます。

## shiftDown(shift: number): void
指定した数字分、イメージ全体を下へ移動します。
```Javascript
// Javascript Example
await stubit.display.showWait([image]);
image.shiftDown(1);
await stubit.display.showWait([image]);
```
イメージ全体が１行分下へ移動したことを確認できます。


## copy(): StuduinoBitImage
イメージを複製（コピー）します。
```Javascript
// Javascript Example
const newimage = image.copy();
```


## crop(src_x: number, src_y: number, w: number, h: number): StuduinoBitImage
イメージからsrc_xとsrc_yを原点として、幅と高さを決め、複製（コピー）する。

```Javascript
// Javascript Example

```

## invert(): void
点灯と消灯を逆転します。点灯しているところを消灯し、消灯しているところを点灯します。

```Javascript
// Javascript Example
const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');
await stubit.display.showWait([image],1000);
image.invert();
await stubit.display.showWait([image],1000);
```
点灯と消灯が逆転します。
写真逆転前→逆転後

## blit(src: StuduinoBitImage, src_x: number, src_y: number, w: number, h: number, xdest?: number, ydest?: number): void
指定したStuduinoBitImageにイメージを合わせる。合成。パラメータ？

```Javascript
// Javascript Example

```

## height(): number
イメージ全体の高さを表示します

```Javascript
// Javascript Example

```

## width(): number
イメージ全体の幅を表示します。
```Javascript
// Javascript Example

```

## getPixel(x: number, y: number): number
指定したx,y座標が点灯していたら1を返します。

上記のディスプレイで以下のプログラムを実行します。
```Javascript
// Javascript Example
let val_01 = image.getPixel(0,1);
let val_02 = image.getPixel(0,2);
console.log("(0,1)=%d,(0,2)=%d",val_01,val_02);
```
(0,1)=1,(0,2)=0とContentに表示されます。

## getPixelColor(Number: x, Number: y, Boolean: hex): Color | String
指定したx,y座標の色を返します。
hexがfalseならRGB値、trueならカラーコードを返します。

```Javascript
// Javascript Example

```


## str(): string
文字列でイメージの状態を表示。点灯１消灯０．reprとのちがいは？
```Javascript
// Javascript Example

```

## repr(): string
イメージの状態を文字列で返します。点灯していたら１、消灯していたら０。strとのちがいは？
```Javascript
// Javascript Example

```

## toPixels(): [number, number, number][]
ディスプレイの色（RGB値）を取得する。
(00)[0](01)[1](10)[5]
```Javascript
// Javascript Example

```

## fill(value: number): void
// 変換方法が不明と書かれている

```Javascript
// Javascript Example

```








```Javascript

```





