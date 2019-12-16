
# ディスプレイの制御
Studuino:bitのディスプレイ（LEDマトリクス）を使用します。

![](https://i.imgur.com/076CaqI.png)




ディスプレイの制御はStuduinoBitDisplayクラスに定義され、StuduinoBitクラスでdisplsyにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:bitのディスプレイを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```

## _ctx(): CanvasRenderingContext2D


```Javascript
// Javascript Example

```

## _getIndex(x: number, y: number): number
Math.abs(x - 4) * 5 + y;<br>
![](https://i.imgur.com/Esix5Q4.png)


```Javascript
// Javascript Example

```



## _oneColor(color: Color): void
色を一つ全表示

```Javascript
// Javascript Example

```
## _preparedCanvas(): undefined | HTMLCanvasElement

```Javascript
// Javascript Example

```

## _update(): void

```Javascript
// Javascript Example

```

## clear(): void

```Javascript
// Javascript Example

```

## draw(ctx: CanvasRenderingContext2D): void

```Javascript
// Javascript Example

```

## getPixel(x: number, y: number): Color
指定したx,y座標の色を返します。
```Javascript
// Javascript Example
stubit.display.setPixel(2,2,[5,10,15]);
stubit.display.on();     //(2,2)がRGB(5,10,15)で点灯します
let color = stubit.display.getPixel(2,2);　
console.log("color(2,2):R%d,G%d,B%d",color[0],color[1],color[2]);    //colorの値をContentに表示します
```
点灯した(2,2)のRGB値をContentに表示します。

## isOn(): boolean
ディスプレイが点灯しているときにtrue,点灯していないときにfalseを返します
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
Aボタンを押すと、ディスプレイの状態をContentに表示します。はじめはディスプレイが点灯していないため、Aボタンを押すとfalseを返します。Bボタンを押すとディスプレイが点灯するので、そのあとにAボタンを押すとtrueを返します。

## off(): void
ディスプレイを消灯します。

```Javascript
// Javascript Example
stubit.display.off();
```

## on(): void
ディスプレイを点灯します。
```Javascript
// Javascript Example
//　ここに点灯させたい座標や色の情報を記述します。
stubit.display.on();
```


## scrollWait(text: string, delay?: number, wait?: boolean, loop?: boolean, monospace?: boolean, color?: Color | null): Promise

```Javascript
// Javascript Example

```

## setPixel(x: number, y: number, color: Color | string): void
座標x,yと色を定義します。座標は以下のように定義されています。<br/>
![](https://i.imgur.com/MAPKkwU.png)

```Javascript
// Javascript Example
stubit.display.setPixel(2,2,[0,0,10]);
stubit.display.on();
```
(x,y)=(2,2)が青色に点灯します。

## showImage(image: Image): void

```Javascript
// Javascript Example

```

## showNumber(number: number): void
指定した数字をディスプレイに表示します。
```Javascript
// Javascript Example
stubit.display.showNumber(2);
```
ディスプレイに2が表示されます。


## showText(text: string, x?: number, monospace?: boolean): void

```Javascript
// Javascript Example    

```


## showWait(iterable: Image[] | string[] | number[], delay?: number, wait?: boolean, loop?: boolean, clear?: boolean, color?: Color | null): Promise<void>
文字など(image,string,number)を順番に表示します。<br>
delayは一文字を表示する長さを数字で記述します。規定値は400です。（単位:ミリ秒）<br>
waitは????規定値はtrueです。<br>
loopをtrueと記述すると繰り返し実行され、falseと記述すると一度だけ実行されます。規定値はfalseです。<br>
clearをtrueと記述すると実行後ディスプレイが消灯し、falseと記述すると点灯し続けます。規定値はfalseです。<br>
colorにはRGB値を記述します。規定値は赤いろです

```Javascript
// Javascript Example
await stubit.display.showWait([1,2,3,4],1000,true,true,false,[10,10,10]);
```
ディスプレイに1,2,3,4と1秒間ずつ白色で繰り返し表示されます。




```Javascript
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
    
      // set basic
      const image = new Artec.StuduinoBit.Image('10000:01000:00100:00010:00001:');  //一行ずつ1,0で指定
      console.log('width', image.width())
      console.log('height', image.height())
      await stubit.display.showWait([image],1000); 　//1000msec待つ
      // set pixel
      image.setPixel(1, 0, 1); //(x,y)=(1,0) いちばん右の1の意味わからない（0なら消える）
      console.log('(1,0) = 1');
      console.log(image.str());
      await stubit.display.showWait([image], 1000);　//1000sec待つ
      // set pixel
      image.setPixelColor(0, 0, [0, 10, 0]);　//(x,y)=(0,0)RGB
      await stubit.display.showWait([image], 1000);　//1000sec待つ
      // getting some values
      let val = image.getPixel(0,0); //valについていたら1消えていたら0
      console.log('getPixel[0,0]', val); 
      val = image.getPixelColor(0, 0);　　//valにRGB
      console.log('getPixelColor[0,0]', val);　
      val = image.getPixelColor(0, 0, true);  //valに#00000a
      console.log('getPixelColorHex[0,0]', val);
      // changing base color
      image.setBaseColor([0, 0, 10]); //RGB
      image.setPixel(0, 1, 1); //上で指定した色を(x,y)=(0,1)色指定なかったら赤点灯、右端1点灯0消える
      await stubit.display.showWait([image], 1000);
      // shifts
      image.shiftLeft(1);
      await stubit.display.showWait([image], 1000);
      image.shiftUp(1);
      await stubit.display.showWait([image], 1000);
      image.shiftRight(1);
      await stubit.display.showWait([image], 1000);
      image.shiftDown(1);
      await stubit.display.showWait([image], 1000);
//       // crop
//       const newimage = image.crop(1, 1, 4, 4);
//       stubit.display.clear();
//       await stubit.display.showWait([newimage], 1000);
//       // invert
//       await stubit.display.showWait([image], 1000);
//       const copy = image.copy();
//       copy.invert();
//       await stubit.display.showWait([copy], 1000);
//       // merge
//       await stubit.display.showWait([image], 1000);
//       const tiny = new Artec.StuduinoBit.Image('11:11:');
//       image.blit(tiny, 0, 0, 2, 2, 2, 2);
//       await stubit.display.showWait([image], 1000);
//       // outputs
//       console.log(image.repr());
//       console.log(image.str());
//       console.log('all done');
    }
  </script>
</body>

</html>
```
