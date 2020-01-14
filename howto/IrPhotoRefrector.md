
# 赤外線フォトリフレクタ（ロボット拡張ユニット接続パーツ）の制御

![](https://i.imgur.com/a49FFJA.jpg)<br>
<small>(※)本赤外線フォトリフレクタを使用する場合、ロボット拡張ユニットが必要になります。ロボット拡張ユニットと赤外線フォトリフレクタの接続は、[ArtecRobo2.0取扱説明書](https://www.artec-kk.co.jp/artecrobo2/pdf/jp/82541man_K0419_J.pdf)の「6 ロボット拡張ユニット各部の機能と名称」を参照してください。<br></small>

赤外線フォトリフレクタの制御はArtecRobo.IrPhotoRefrectorに定義されています。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号（P0/P1/P2）を指定することで、赤外線フォトリフレクタを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.IrPhotoRefrector(atcRobo, 'P0');　//P0に赤外線フォトリフレクタを接続する場合
}
```

## 使用上の注意
赤外線フォトリフレクタは、小さな赤外線LEDから目に見えない赤外線を照射し、反射してきた赤外線を赤外線検出器で受光し、数値化します。このため、物体が近づくほど数値は大きくなりますが、近づきすぎると検出できない場合があります。また、物体の色によって赤外線の反射率が異なるため、数値が変化します。<br>
※自然光等に含まれる赤外線も感知するため、同じ扱い方でも使用環境によって数値が変化する場合があります。<br>
![](https://i.imgur.com/am1hv2l.jpg)

## getValueWait();
赤外線フォトリフレクタの値を返します。0～4095の値を取ります。赤外線フォトリフレクタの正面に物体を近づけるほど反射光が強くなり数値も大きくなります。
```Javascript
// Javascript Example
while(1){
    let photorefrector = await sensor.getValueWait();
    console.log(photorefrector);    //赤外線フォトリフレクタの値をConsoleに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
赤外線フォトリフレクタの値を表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecroboirphotorefrector.html#getvaluewait

## 赤外線フォトリフレクタのサンプルプログラム
赤外線フォトリフレクタに物体を近づけると、ブザーが鳴るプログラムです。
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
<h1>obniz instant HTML</h1>
<br/><br/>

<script>
  var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
  atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.IrPhotoRefrector(atcRobo, 'P0');　
    
    //wifi接続／動作確認用
    atcRobo.studuinoBit.led.on();
    
    while(1){
      let photorefrector = await sensor.getValueWait();　//赤外線フォトリフレクタの値を返します
      if(photorefrector>200){
         await atcRobo.studuinoBit.buzzer.onWait("D4");  //ブザーが鳴ります
      }else{
         atcRobo.studuinoBit.buzzer.off();  //ブザーが止まります
      }
    }
  };
</script>
</body>
</html>
```


