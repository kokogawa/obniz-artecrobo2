
# ディスプレイの制御
Studuino:Bitのディスプレイ（LEDマトリクス）を使用します。

![](https://i.imgur.com/076CaqI.png)




ディスプレイの制御はStuduinoBitDisplayクラスに定義され、StuduinoBitクラスでdisplsyにインスタンス化されています。</br>
はじめに、下記のようにStuduinoBitクラスをインスタンス化することで、Studuino:Bitのディスプレイを使用できます。
```Javascript
// Javascript Example
var stubit = new Artec.StuduinoBit("YOUR_STUDUINOBIT_ID");
```



## _getIndex(x: number, y: number): number
Math.abs(x - 4) * 5 + y;

```Javascript
// Javascript Example

```


## _oneColor(color: Color): void
色を一つ全表示

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

## getPixel(x: number, y: number): Color
座標を指定すると、その色が返ってくる。点灯していなかったら、[0,0,0]を返す
```Javascript
// Javascript Example

```

## isOn(): boolean

```Javascript
// Javascript Example

```

## off(): void
全て消す

```Javascript
// Javascript Example

```

## on(): void
点ける

```Javascript
// Javascript Example

```

## scroll(str: string, delay?: number, wait?: boolean, loop?: boolean, monospace?: boolean, color?: Color | null): void

```Javascript
// Javascript Example

```

## setPixcel(x: number, y: number, color: Color | string): void
座標x,y決めて、1点1color<br/>
![](https://i.imgur.com/MAPKkwU.png)

```Javascript
// Javascript Example

```

## show(iterable: [], delay?: number, wait?: boolean, loop?: boolean, clear?: boolean, color?: Color | null): void

```Javascript
// Javascript Example

```

