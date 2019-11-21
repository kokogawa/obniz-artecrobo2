import {StuduinoBitI2C} from "../bus/i2c";
import {ICMRegisterRW} from "../bus/icmRegisterRw";
import {StuduinoBit} from "../index";

export class StuduinoBitAK09916 extends ICMRegisterRW {
    private ADDR = 0x0c;

    private _WIA = (0x01);
    private _HXL = (0x11);
    private _HXH = (0x12);
    private _HYL = (0x13);
    private _HYH = (0x14);
    private _HZL = (0x15);
    private _HZH = (0x16);
    private _ST2 = (0x18);
    private _CNTL2 = (0x31);
    private _ASAX = (0x60);
    private _ASAY = (0x61);
    private _ASAZ = (0x62);

    private _MODE_POWER_DOWN = 0b00000000;
    private MODE_SINGLE_MEASURE = 0b00000001;
    private MODE_CONTINOUS_MEASURE_1 = 0b00000010; // 10Hz
    private MODE_CONTINOUS_MEASURE_2 = 0b00001000; // 100Hz
    private MODE_EXTERNAL_TRIGGER_MEASURE = 0b00000100;
    private _MODE_SELF_TEST = 0b00001000;
    private _MODE_FUSE_ROM_ACCESS = 0b00011111;

    private OUTPUT_14_BIT = 0b00000000;
    private OUTPUT_16_BIT = 0b00010000;

    private _SO_14BIT = 0.6; // per digit when 14bit mode
    private _SO_16BIT = 0.15; //  per digit when 16bit mode

    private so: number;

    private offset: [number, number, number];
    private scale: [number, number, number];

    constructor(i2c: StuduinoBitI2C) {
        super(i2c, 0x0c);

        this.offset = [0, 0, 0];
        this.scale = [1, 1, 1];
        this.so = this._SO_16BIT;
        this.registerCharWait(this._CNTL2, this.MODE_CONTINOUS_MEASURE_1);

    }

    public async magnetic(): Promise<[number, number, number]> {

        // todo 再起動して計測してる
        this.registerCharWait(this._CNTL2, this._MODE_POWER_DOWN);
        this.registerCharWait(this._CNTL2, this.MODE_CONTINOUS_MEASURE_1);

        const x: number = (await this.registerShortWait(this._HXL, null, [0, 0], "l"))!;
        const y: number = (await this.registerShortWait(this._HYL, null, [0, 0], "l"))!;
        const z: number = (await this.registerShortWait(this._HZL, null, [0, 0], "l"))!;

        const xyz: [number, number, number] = [
            (x - this.offset[0]) * this.scale[0] ,
            (y - this.offset[1]) * this.scale[1] ,
            (z - this.offset[2]) * this.scale[2] ,
        ];

        return xyz;
    }

    public async  whoamiWait(): Promise<number> {
        return this.registerCharWait(this._WIA) as Promise<number>;
    }

    public async calibrateWait(count: number= 256, delay: number= 200) {
        this.offset = [0, 0, 0];
        this.scale = [1, 1, 1];

        let reading = await this.magnetic();
        let minx = reading[0]; let maxx = reading[0];
        let miny = reading[1]; let maxy = reading[1];
        let minz = reading[2]; let maxz = reading[2];

        while (count > 0) {
            await new Promise((r) => setTimeout(r, delay));

            reading = await this.magnetic();
            minx = Math.min(minx, reading[0]);
            maxx = Math.max(maxx, reading[0]);
            miny = Math.min(miny, reading[1]);
            maxy = Math.max(maxy, reading[1]);
            minz = Math.min(minz, reading[2]);
            maxz = Math.max(maxz, reading[2]);
            count -= 1;
        }

    // Hard iron correction
        const offset_x = (maxx + minx) / 2;
        const offset_y = (maxy + miny) / 2;
        const offset_z = (maxz + minz) / 2;

        this.offset = [offset_x, offset_y, offset_z];

    // Soft iron correction
        const avg_delta_x = (maxx - minx) / 2;
        const avg_delta_y = (maxy - miny) / 2;
        const avg_delta_z = (maxz - minz) / 2;

        const avg_delta = (avg_delta_x + avg_delta_y + avg_delta_z) / 3;

        const scale_x = avg_delta / avg_delta_x;
        const scale_y = avg_delta / avg_delta_y;
        const scale_z = avg_delta / avg_delta_z;

        this.scale = [scale_x, scale_y, scale_z];

        return {offset : this.offset, scale : this.scale};
    }
}
