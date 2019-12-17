
# ディスプレイの制御
Studuino:bitのディスプレイ（LEDマトリクス）を使用します。

![](https://i.imgur.com/076CaqI.png)


ディスプレイの制御はStuduinoBitDisplayクラスとStuduinoBitImageクラスに定義されています。StuduinoBitクラスでStuduinoBitDisplayはdisplayに、StuduinoBitImageはimageにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitのディスプレイを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```
<br>

> **StuduinoBitDisplay**
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
文字など(image,string,number)を１文字ずつ順番に表示します。<br>
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

> **StuduinoBitImage**
## blit(src: StuduinoBitImage, src_x: number, src_y: number, w: number, h: number, xdest?: number, ydest?: number): void


```Javascript
// Javascript Example

```

## copy(): StuduinoBitImage


```Javascript
// Javascript Example

```

## crop(src_x: number, src_y: number, w: number, h: number): StuduinoBitImage


```Javascript
// Javascript Example

```

## fill(value: number): void


```Javascript
// Javascript Example

```

## getPixel(x: number, y: number): number
点灯していたら1を返す消えていたら0を返す？

```Javascript
// Javascript Example

```

## getPixelColor(x: number, y: number, hex?: boolean): Color | string
RGBを返す
hextrueなら16進法?
消えていたら000000
赤1f0000
青00000a
緑000a00

```Javascript
// Javascript Example

```

## height(): number


```Javascript
// Javascript Example

```


## invert(): void


```Javascript
// Javascript Example

```

## paste(src: StuduinoBitImage, x: number, y: number): void


```Javascript
// Javascript Example

```

## pixelsFrom(str: string, color: Color): Color[][]

```Javascript
// Javascript Example

```


## pixelsFromBuffer(w: number, h: number, buffer: Array| null, color: Color): Color[][]

```Javascript
// Javascript Example

```


## repr(): string

```Javascript
// Javascript Example

```

## setBaseColor(param0: Color | string | number, param1?: number, param2?: number): void
色を指定する

```Javascript
// Javascript Example

```


## setPixel(x: number, y: number, value: number): void
場所を指定する
```Javascript
// Javascript Example

```

## setPixelColor(x: number, y: number, color: Color): void

```Javascript
// Javascript Example

```

## shiftDown(shift: number): void

```Javascript
// Javascript Example

```

## shiftLeft(shift: number): void

```Javascript
// Javascript Example

```

## shiftRight(shift: number): void

```Javascript
// Javascript Example

```

## shiftUp(shift: number): void

```Javascript
// Javascript Example

```



## str(): string

```Javascript
// Javascript Example

```
## toPixels(): [number, number, number][]

```Javascript
// Javascript Example

```

## width(): number

```Javascript
// Javascript Example

```


```Javascript

```





