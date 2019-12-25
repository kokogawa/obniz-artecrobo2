# ArtecRobo
## getPin(port: ArtecRoboPort): Pin | undefined
以下でContentに表示可能だが、表示された内容が理解できない
```Javascript
//Javascript
  var atcRobo = new Artec.ArtecRobo("YOUR_STUDUIOBIT_ID");
  atcRobo.onconnect = async function () {
    let buzzer = new Artec.ArtecRobo.Buzzer(atcRobo, 'P13');
    let pin = atcRobo.getPin("P13");
    console.log(pin);
  };
```
# ICMRegisterRW
使い方がわからない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/icmregisterrw.html
## registerCharWait(register: number, value?: number | null, buf?: number[]): Promise<number | null>

## registerShortWait(register: number, value?: number | null, buf?: [number, number], endian?: string): Promise<number | null>

## registerThreeShortsWait(register: number, value?: number[] | null, buf?: [number, number, number, number, number, number], endian?: string): Promise<[number, number, number] | null>


# StuduinoBit
## wait(ms: number): Promise
指定した時間（ms）が経つまで、次の処理を実行しません。
```Javascript
//Javascript
await stubit.wait(3000);
```
3秒間何もしません。

# StuduinoBitAK09916
使い方がわからない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitak09916.html
## calibrateWait(count?: number, delay?: number): Promise
## magnetic(): Promise<[number, number, number]>
## registerCharWait(register: number, value?: number | null, buf?: number[]): Promise<number | null>
## registerShortWait(register: number, value?: number | null, buf?: [number, number], endian?: string): Promise<number | null
## registerThreeShortsWait(register: number, value?: number[] | null, buf?: [number, number, number, number, number, number], endian?: string): Promise<[number, number, number] | null>
## whoamiWait(): Promise

# StuduinoBitAnalogDitialPin
使い方がわからない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitanalogditialpin.html
## readAnalogWait(): Promise
## readDigitalWait(): Promise
## setAnalogHz(hz: number): void
## setAnalogPeriod(period: number): void
## setAnalogPeriodMicroseconds(period: number): void
## writeAnalog(value: number): void
## writeDigital(value: boolean | number): void

# StuduinoBitAnalogPin
使い方がわからない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitanalogpin.html
## readAnalogWait(mv?: boolean): Promise

# StuduinoBitAnalogPinMixin
使い方がわからない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitanalogpinmixin.html
## readAnalogWait(mv?: boolean): Promise

# StuduinoBitDigitalPin
使い方がわからない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdigitalpin.html
## readDigitalWait(): Promise
## setAnalogHz(hz: number): void
## setAnalogPeriod(period: number): void
## setAnalogPeriodMicroseconds(period: number): void
## writeAnalog(value: number): void
## writeDigital(value: boolean | number): void

# StuduinoBitAnalogPin
使い方がわからない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitanalogpin.html
## readAnalogWait(mv?: boolean): Promise

# StuduinoBitAnalogPinMixin
使い方がわからない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitanalogpinmixin.html
## readAnalogWait(mv?: boolean): Promise

# StuduinoBitDigitalPin
使い方がわからない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitdigitalpin.html
## readDigitalWait(): Promise
## setAnalogHz(hz: number): void
## setAnalogPeriod(period: number): void
## setAnalogPeriodMicroseconds(period: number): void
## writeAnalog(value: number): void
## writeDigital(value: boolean | number): void

# StuduinoBitI2C
StuduinoBitでi2cにインスタンス化されている。
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiti2c.html
## read(addr: number, n: number): Promise<number[]>
## readFromMem(addr: number, memAddr: number, length: number): Promise<number[]>
## scanWait(): Promise<number[]>
加速度センサをi2cに差した状態でもnot found+iと出る
```Javascript
//Javascript
  var stubit = new Artec.StuduinoBit("YOUR_STUDUIOBIT_ID");
  stubit.onconnect = async function () {
    let scan = await stubit.i2c.scanWait();
    console.log(scan);
    
  };
```
## write(addr: number, buf: number[], repeat?: boolean): void
## writeToMem(addr: number, memAddr: number, data: number[]): void

# StuduinoBitICM20948
StuduinoBitでicm20948にインスタンス化されている。
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html
## accelFs(String);
加速度センサーの測定可能な最大最小値（フルスケール）を定義します。2g、4g、8g、16gのいずれかを記述してください。既定値は2gです。<br/>

| String |      フルスケール(単位：$m/s^2$)     |
|:------:|:-------------:|
|   2g   | -19.61～19.61 |
|   4g   | -39.23～39.23 |
|   8g   | -78.45～78.45 |
|   16g   | -156.91～156.91 |
```Javascript
// Javascript Example
stubit.icm20948.accelFs("4g");　　//加速度センサーのフルスケールが4gに変更されます
while(1){
    let [accelX, accelY, accelZ] =await stubit.icm20948.accelerationWait();　//加速度センサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f",accelX,accelY,accelZ);    //加速度センサーの値をContentに表示します
    await stubit.wait(1000);
}
```
加速度センサーX,Y,Zの値が-39.23～39.23の間で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#accelfs

## accelSf(String);
加速度センサーの単位（スケールファクター）を定義します。ms2かmgのいずれかを記述してください。ms2は$m/s^2$（メートル毎秒毎秒）、mgは$mg$（ミリジー）を意味します。既定値はms2です。<br/>
```Javascript
// Javascript Example
while(1){
    stubit.icm20948.accelSf("mg");  //スケールファクターをmgにします
    let [accelX_mg, accelY_mg, accelZ_mg] =await stubit.icm20948.accelerationWait(); //加速度センサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f (mg)",accelX_mg,accelY_mg,accelZ_mg);　//加速度センサーの値をContentに表示します

    stubit.icm20948.accelSf("ms2");  //スケールファクターをms2にします
    let [accelX_ms2, accelY_ms2, accelZ_ms2] =await stubit.icm20948.accelerationWait();  //加速度センサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f (ms2)",accelX_ms2,accelY_ms2,accelZ_ms2);　//加速度センサーの値をContentに表示します
    await stubit.wait(1000);
}
```
加速度センサーX,Y,Zの値が$mg$（ミリジー）と$ms^2$（メートル毎秒毎秒）それぞれの単位で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#accelsf

## accelerationWait();
加速度センサーX,Y,Zの値を返します。
```Javascript
// Javascript Example
while(1){
    let [accelX, accelY, accelZ] =await stubit.icm20948.accelerationWait();　//加速度センサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f",accelX,accelY,accelZ);    //加速度センサーの値をContentに表示します
    await stubit.wait(1000);
}
```
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#accelerationwait

## calibrateWait();
上手く実装しない
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#calibratewait

## gyroFs(String);
ジャイロセンサーの測定可能な最大最小値（フルスケール）を定義します。250dps、500dps、1000dps、2000dpsのいずれかを記述してください。既定値は250dpsです。<br/>

```Javascript
// Javascript Example
stubit.icm20948.gyroFs("1000dps");　　//ジャイロセンサーのフルスケールが1000dpsに変更されます
while(1){
    let [gyroX, gyroY, gyroZ] =await stubit.icm20948.gyroWait();　 //ジャイロセンサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f",gyroX,gyroY,gyroZ);    //ジャイロセンサーの値をContentに表示します
    await stubit.wait(1000);
}
```
ジャイロセンサーX,Y,Zの値が-1000～1000dpsの間で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#gyrofs

## gyroSf(String);
ジャイロセンサーの単位（スケールファクター）を定義します。dpsかrpsのいずれかを記述してください。dpsは°/秒、rpsは回転/秒を意味します。既定値はdpsです。<br/>
```Javascript
// Javascript Example
while(1){
    stubit.icm20948.gyroSf("rps");  //スケールファクターをrpsにします
    let [gyroX_rps, gyroY_rps, gyroZ_rps] =await stubit.icm20948.gyroWait();  //ジャイロセンサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f (rps)",gyroX_rps,gyroY_rps,gyroZ_rps);　//ジャイロセンサーの値をContentに表示します

    stubit.icm20948.gyroSf("dps");  //スケールファクターをdpsにします
    let [gyroX_dps, gyroY_dps, gyroZ_dps] =await stubit.icm20948.gyroWait();  //ジャイロセンサーX,Y,Zの値を取得します
    console.log("X:%f Y:%f Z:%f (dps)",gyroX_dps,gyroY_dps,gyroZ_dps);　//ジャイロセンサーの値をContentに表示します
    await stubit.wait(1000);
}
```
ジャイロセンサーX,Y,Zの値がrpsとdpsそれぞれの単位で表示されます。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#gyrosf

## gyroWait();
ジャイロセンサーX,Y,Zの値を返します。

```Javascript
// Javascript Example
while(1){
    let [gyroX, gyroY, gyroZ] =await stubit.icm20948.gyroWait();
    console.log("X:%f Y:%f Z:%f",gyroX,gyroY,gyroZ);   //ジャイロセンサーの値をContentに表示します
    await stubit.wait(1000);
}
```
ジャイロセンサーX,Y,Zの値を1秒ごとに表示します。
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#gyrowait

## initWait();
?
* 詳細<br/>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#initwait

## magneticWait();
磁気センサーX,Y,Zの値を返します。

```Javascript
// Javascript Example
while(1){
    let [compassX, compassY, compassZ] =await stubit.icm20948.magneticWait();
    console.log("X:%f Y:%f Z:%f",compassX,compassY,compassZ);    //磁気センサーの値をContentに表示します
    await stubit.wait(1000);
}
```
磁気センサーX,Y,Zの値を1秒ごとに表示します。
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#magneticwait

## registerCharWait(register: number, value?: number | null, buf?: number[]): Promise<number | null>
?
* 詳細<br>
 https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#registercharwait

## registerShortWait(register: number, value?: number | null, buf?: [number, number], endian?: string): Promise<number | null>
?
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#registershortwait

## registerThreeShortsWait
?
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#registerthreeshortswait

## whoamiWait
何しているかわからない?234とContentに表示される
```Javascript
//Javascript
let whoami = await stubit.icm20948.whoamiWait();
console.log(whoami);
```
* 詳細<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobiticm20948.html#whoamiwait


# StuduinoBitSPI
使い方がわからない artec.jsにも見当たらない<br>
https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitspi.html
## readWait(nbytes: number): Promise<number[]>
## write(buf: number[]): void
## writeReadInto(buf: number[]): void

# StuduinoBitTerminal
StuduinoBitでteminalにインスタンス化されている。使い方がわからない <br>
 https://artec-kk.github.io/obniz-artecrobo2/docs/classes/studuinobitterminal.html
## getPin<K>(pin: K): TerminnalTypeMap[K]




