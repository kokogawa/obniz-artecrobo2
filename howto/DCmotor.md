# DCモーターの制御
DCモーターを使用します。</br>


DCモーターの制御はArtecRoboMotorクラスに定義され…？</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、DCモーターのポート番号を指定することで、DCモーターを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
     let motor = new Artec.ArtecRobo.Motor(atcRobo, 'M1');　//DCモーターをM1に接続する場合
}
```

## cw();
DCモーターを時計回りに回転させます。
```Javascript
// Javascript Example
motor.cw();
```

## ccw();
DCモーターを反時計回りに回転させます。
```Javascript
// Javascript Example
motor.ccw();
```

## power(Number: power);

```Javascript
// Javascript Example

```


## stop();

```Javascript
// Javascript Example

```

## break();

```Javascript
// Javascript Example

```


## action(action: ArtecRoboMotorMotion);

```Javascript
// Javascript Example

```



## DCモーターのサンプルプログラム

```Javascript
// Javascript Example

```

