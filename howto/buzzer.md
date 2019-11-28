# Buzzer(stubit.buzzer)
Studino:Bitにあるブザーから音を出します。

![](./images/)

## onWait(sound: string | number, duration: number);

ブザーから指定された音を出します。音は周波数（数字）もしくは音階（アルファベットと数字の組み合わせ）で記述します。

```Javascript
// Javascript Example
stubit.buzzer.onWait("450");
```
 450Hzの音がブザーから鳴ります。


```Javascript
// Javascript Example
stubit.buzzer.onWait("A4");
```
A4（ラ）の音がブザーから鳴ります。
音階名と周波数の対応は以下のようになります。

| 音階名 | 周波数 |
| -------- | -------- | 
|C3（ド）|130| 
|CS3（ド#）|139| 
|D3（レ）|147|
|DS3（レ#）|156|



音の長さを数字で指定することも可能です。
```Javascript
// Javascript Example
stubit.buzzer.onWait("C4", 500);
```
## off();

ブザーを止めます。

```Javascript
// Javascript Example
stubit.buzzer.off();
```


