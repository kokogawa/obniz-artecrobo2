# Buzzer(stubit.buzzer)
Studino:Bitにあるブザーから音を出します。

![](https://i.imgur.com/uuIXmav.png)


## onWait(sound: string | number, duration: number);

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
A4（ラ）の音がブザーから鳴ります。</br></br>
音階はC3（130Hz）～C8（4186Hz）に対応しています。</br>
音階と周波数の詳細は以下をご覧ください。</br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitbuzzer.html#onwait




音の長さを数字で指定することも可能です。（単位:ms）
```Javascript
// Javascript Example
stubit.buzzer.onWait("C4", 1000);
```
C4の音が1秒鳴ります。

## off();

ブザーを止めます。

```Javascript
// Javascript Example
stubit.buzzer.off();
```


