
# 赤外線フォトリフレクター(接続パーツ)の制御
赤外線フォトリフレクター（接続パーツ）を使用します。<br>
![](https://i.imgur.com/a49FFJA.jpg)


赤外線フォトリフレクターの制御はArtecRobo.IrPhotoRefrectorに定義されています。</br>
はじめに、下記のようにArtecRoboクラスをインスタンス化し、接続パーツのポート番号を指定することで、赤外線フォトリフレクターを使用できます。
```Javascript
// Javascript Example
var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
atcRobo.onconnect = async function () {
    let sensor = new Artec.ArtecRobo.IrPhotoRefrector(atcRobo, 'P0');　//P0に赤外線フォトリフレクターを接続する場合
}
```


## getValueWait();
赤外線フォトリフレクターの値を返します。0～4095の値を取ります。物体を近づけるほど数値は大きくなります。
```Javascript
// Javascript Example
while(1){
    let photorefrector = await sensor.getValueWait();
    console.log(photorefrector);    //赤外線フォトリフレクターの値をContentに表示します
    await atcRobo.studuinoBit.wait(1000);
}
```
赤外線フォトリフレクターの値を表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/artecroboirphotorefrector.html#getvaluewait

## 赤外線フォトリフレクターのサンプルプログラム
赤外線フォトリフレクターに物体を近づけると、ブザーが鳴るプログラムです。
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
    while(1){
      let photorefrector = await sensor.getValueWait();　//赤外線フォトリフレクターの値を返します
      if(photorefrector>200){
         await atcRobo.studuinoBit.buzzer.onWait("D4");  //ブザーが鳴ります
      }else{
         atcRobo.studuinoBit.buzzer.off();  //ブザーが止まります
      }
    }
    //wifi接続／動作確認用
    ledBlink();
  };
  
  async function ledBlink() {
    while (1) {
      atcRobo.studuinoBit.led.on();
      await atcRobo.studuinoBit.wait(500);
      atcRobo.studuinoBit.led.off();
      await atcRobo.studuinoBit.wait(500);
    }
  }
</script>
</body>
</html>
```


