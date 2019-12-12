
# image


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