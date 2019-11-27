﻿var Artec = 
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/atcrobo/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__("./src/stubit/index.ts");
const bzr_1 = __webpack_require__("./src/atcrobo/parts/bzr.ts");
const irPhtoRefrector_1 = __webpack_require__("./src/atcrobo/parts/irPhtoRefrector.ts");
const led_1 = __webpack_require__("./src/atcrobo/parts/led.ts");
const motor_1 = __webpack_require__("./src/atcrobo/parts/motor.ts");
const servomotor_1 = __webpack_require__("./src/atcrobo/parts/servomotor.ts");
const sound_1 = __webpack_require__("./src/atcrobo/parts/sound.ts");
const temperature_1 = __webpack_require__("./src/atcrobo/parts/temperature.ts");
const touch_1 = __webpack_require__("./src/atcrobo/parts/touch.ts");
const i2cPin_1 = __webpack_require__("./src/atcrobo/pin/i2cPin.ts");
const inPin_1 = __webpack_require__("./src/atcrobo/pin/inPin.ts");
const motorPin_1 = __webpack_require__("./src/atcrobo/pin/motorPin.ts");
const outPin_1 = __webpack_require__("./src/atcrobo/pin/outPin.ts");
class ArtecRobo {
    constructor(studuinoBit, options) {
        if (typeof studuinoBit === "string") {
            studuinoBit = new index_1.StuduinoBit(studuinoBit, options);
        }
        this.studuinoBit = studuinoBit;
        this.studuinoBit.onconnect = () => __awaiter(this, void 0, void 0, function* () {
            yield this._wire();
            if (this.onconnect) {
                const p = this.onconnect();
                if (p instanceof Promise) {
                    yield p;
                }
            }
        });
        this.studuinoBit.onclose = () => __awaiter(this, void 0, void 0, function* () {
            this._unWire();
            if (this.onclose) {
                const p = this.onclose();
                if (p instanceof Promise) {
                    yield p;
                }
            }
        });
    }
    getPin(port) {
        if (port === "P0") {
            return this.p0;
        }
        else if (port === "P1") {
            return this.p1;
        }
        else if (port === "P2") {
            return this.p2;
        }
        else if (port === "P13") {
            return this.p13;
        }
        else if (port === "P14") {
            return this.p14;
        }
        else if (port === "P15") {
            return this.p15;
        }
        else if (port === "P16") {
            return this.p16;
        }
        else if (port === "I2C") {
            return this.i2c;
        }
    }
    _wire() {
        this.p0 = new inPin_1.InPin(this.studuinoBit.terminal.getPin("P0"));
        this.p1 = new inPin_1.InPin(this.studuinoBit.terminal.getPin("P1"));
        this.p2 = new inPin_1.InPin(this.studuinoBit.terminal.getPin("P2"));
        this.p13 = new outPin_1.OutPin(this.studuinoBit.terminal.getPin("P13"));
        this.p14 = new outPin_1.OutPin(this.studuinoBit.terminal.getPin("P14"));
        this.p15 = new outPin_1.OutPin(this.studuinoBit.terminal.getPin("P15"));
        this.p16 = new outPin_1.OutPin(this.studuinoBit.terminal.getPin("P16"));
        this.m1 = new motorPin_1.MotorPin(this.studuinoBit.i2c);
        this.m2 = new motorPin_1.MotorPin(this.studuinoBit.i2c);
        this.i2c = new i2cPin_1.I2CPin(this.studuinoBit.i2c);
    }
    _unWire() {
        this.p0 = undefined;
        this.p1 = undefined;
        this.p2 = undefined;
        this.p13 = undefined;
        this.p14 = undefined;
        this.p15 = undefined;
        this.p16 = undefined;
        this.m1 = undefined;
        this.m2 = undefined;
        this.i2c = undefined;
    }
}
ArtecRobo.Led = led_1.ArtecRoboLed;
ArtecRobo.TouchSensor = touch_1.ArtecRoboTouchSensor;
ArtecRobo.Motor = motor_1.ArtecRoboMotor;
ArtecRobo.Buzzer = bzr_1.ArtecRoboBuzzer;
ArtecRobo.ServoMotor = servomotor_1.ArtecRoboServoMotor;
ArtecRobo.IrPhotoRefrector = irPhtoRefrector_1.ArtecRoboIrPhotoRefrector;
ArtecRobo.Temperature = temperature_1.ArtecRoboTemperature;
ArtecRobo.SoundSensor = sound_1.ArtecRoboSoundSensor;
exports.ArtecRobo = ArtecRobo;


/***/ }),

/***/ "./src/atcrobo/parts/bzr.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const bzr_1 = __webpack_require__("./src/stubit/output/bzr.ts");
class ArtecRoboBuzzer extends bzr_1.StuduinoBitBuzzer {
    constructor(artecRobo, port) {
        const options = { signal: artecRobo.getPin(port).terminalPin.pin, gnd: 16 }; // todo gndどうにかする
        const studuinoBit = artecRobo.studuinoBit;
        super(studuinoBit, options);
    }
}
exports.ArtecRoboBuzzer = ArtecRoboBuzzer;


/***/ }),

/***/ "./src/atcrobo/parts/inputParts.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ArtecRoboInputParts {
    constructor(artecRobo, inPin) {
        if (typeof inPin === "string") {
            if (inPin === "P0") {
                inPin = artecRobo.p0;
            }
            else if (inPin === "P1") {
                inPin = artecRobo.p1;
            }
            else {
                inPin = artecRobo.p2;
            }
        }
        this._inPin = inPin;
    }
}
exports.ArtecRoboInputParts = ArtecRoboInputParts;


/***/ }),

/***/ "./src/atcrobo/parts/irPhtoRefrector.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputParts_1 = __webpack_require__("./src/atcrobo/parts/inputParts.ts");
class ArtecRoboIrPhotoRefrector extends inputParts_1.ArtecRoboInputParts {
    getValueWait() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._inPin.terminalPin.readAnalogWait();
        });
    }
}
exports.ArtecRoboIrPhotoRefrector = ArtecRoboIrPhotoRefrector;


/***/ }),

/***/ "./src/atcrobo/parts/led.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const outputParts_1 = __webpack_require__("./src/atcrobo/parts/outputParts.ts");
class ArtecRoboLed extends outputParts_1.ArtecRoboOutputParts {
    constructor(artecRobo, outPin) {
        super(artecRobo, outPin);
        const options = { anode: this._outPin.terminalPin.pin };
        this._obnizLED = artecRobo.studuinoBit.obniz.wired("LED", options);
    }
    on() {
        this._obnizLED.on();
    }
    off() {
        this._obnizLED.off();
    }
}
exports.ArtecRoboLed = ArtecRoboLed;


/***/ }),

/***/ "./src/atcrobo/parts/motor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const motorParts_1 = __webpack_require__("./src/atcrobo/parts/motorParts.ts");
class ArtecRoboMotor extends motorParts_1.ArtecRoboMotorParts {
    constructor(artecRobo, motorPin) {
        super(artecRobo, motorPin);
        this._currentMotion = "stop";
        this._currentPower = 0;
        this._ADDRESS = 0x3e;
        this._COMMAND = [
            [0x00, 0x01, 0x02, 0x03, 0x04],
            [0x08, 0x09, 0x0A, 0x0B, 0x0C],
        ];
        if (this._motorPin === artecRobo.m1) {
            this._p = 0;
        }
        else {
            this._p = 1;
        }
    }
    cw() {
        this._action("cw");
    }
    ccw() {
        this._action("ccw");
    }
    stop() {
        this._action("stop");
    }
    brake() {
        this._action("brake");
    }
    power(power) {
        if (power > 255 || power < 0 || !Number.isInteger(power)) {
            throw new Error("power is in range 0-255");
        }
        const command = [this._COMMAND[this._p][4], power];
        this._motorPin.i2c.write(this._ADDRESS, command);
        this._currentPower = power;
    }
    _action(motion) {
        let index = 0;
        if (motion === "cw") {
            index = 0;
        }
        else if (motion === "ccw") {
            index = 1;
        }
        else if (motion === "stop") {
            index = 2;
        }
        else if (motion === "brake") {
            index = 3;
        }
        else {
            throw new Error("motion: DCMotor.CW/CCW/STOP/BREAK");
        }
        const command = [this._COMMAND[this._p][index]];
        if (this._currentMotion === "cw" && motion === "ccw"
            || this._currentMotion === "ccw" && motion === "cw") {
            // break
            this._motorPin.i2c.write(this._ADDRESS, [this._COMMAND[this._p][3]]);
            // @ts-ignore
            this._motorPin.i2c.obnizI2c.Obniz.wait(100);
            const power = this._currentPower;
            this.power(Math.round(power * 0.5));
            // small power
            this._motorPin.i2c.write(this._ADDRESS, command);
            // @ts-ignore
            this._motorPin.i2c.obnizI2c.Obniz.wait(100);
            this.power(power);
        }
        else {
            this._motorPin.i2c.write(this._ADDRESS, command);
        }
        this._currentMotion = motion;
    }
}
exports.ArtecRoboMotor = ArtecRoboMotor;


/***/ }),

/***/ "./src/atcrobo/parts/motorParts.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ArtecRoboMotorParts {
    constructor(artecRobo, motorPin) {
        if (typeof motorPin === "string") {
            if (motorPin === "M1") {
                motorPin = artecRobo.m1;
            }
            else if (motorPin === "M2") {
                motorPin = artecRobo.m2;
            }
            else {
                throw new Error("This parts can connect only 'M1','M2'");
            }
        }
        this._motorPin = motorPin;
    }
}
exports.ArtecRoboMotorParts = ArtecRoboMotorParts;


/***/ }),

/***/ "./src/atcrobo/parts/outputParts.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ArtecRoboOutputParts {
    constructor(artecRobo, outPin) {
        if (typeof outPin === "string") {
            if (outPin === "P13") {
                outPin = artecRobo.p13;
            }
            else if (outPin === "P14") {
                outPin = artecRobo.p14;
            }
            else if (outPin === "P15") {
                outPin = artecRobo.p15;
            }
            else if (outPin === "P16") {
                outPin = artecRobo.p16;
            }
            else {
                throw new Error("This parts can connect only 'P13','P14','P15','P16'");
            }
        }
        this._outPin = outPin;
    }
}
exports.ArtecRoboOutputParts = ArtecRoboOutputParts;


/***/ }),

/***/ "./src/atcrobo/parts/servomotor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const outputParts_1 = __webpack_require__("./src/atcrobo/parts/outputParts.ts");
class ArtecRoboServoMotor extends outputParts_1.ArtecRoboOutputParts {
    constructor(artecRobo, outPin) {
        super(artecRobo, outPin);
        this._obnizServo = artecRobo.studuinoBit.obniz.wired("ServoMotor", { signal: this._outPin.terminalPin.pin });
        this._obnizServo.range = {
            min: 0.6,
            max: 2.5,
        };
    }
    setAngle(degree) {
        this._obnizServo.angle(degree);
    }
}
exports.ArtecRoboServoMotor = ArtecRoboServoMotor;


/***/ }),

/***/ "./src/atcrobo/parts/sound.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputParts_1 = __webpack_require__("./src/atcrobo/parts/inputParts.ts");
class ArtecRoboSoundSensor extends inputParts_1.ArtecRoboInputParts {
    getValueWait() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._inPin.terminalPin.readAnalogWait();
        });
    }
}
exports.ArtecRoboSoundSensor = ArtecRoboSoundSensor;


/***/ }),

/***/ "./src/atcrobo/parts/temperature.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputParts_1 = __webpack_require__("./src/atcrobo/parts/inputParts.ts");
class ArtecRoboTemperature extends inputParts_1.ArtecRoboInputParts {
    getValueWait() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._inPin.terminalPin.readAnalogWait();
        });
    }
    getCelsiusWait() {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this._inPin.terminalPin.readAnalogWait(true);
            return (value - 500) / 10;
        });
    }
}
exports.ArtecRoboTemperature = ArtecRoboTemperature;


/***/ }),

/***/ "./src/atcrobo/parts/touch.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputParts_1 = __webpack_require__("./src/atcrobo/parts/inputParts.ts");
class ArtecRoboTouchSensor extends inputParts_1.ArtecRoboInputParts {
    getValueWait() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._inPin.terminalPin.readDigitalWait();
        });
    }
}
exports.ArtecRoboTouchSensor = ArtecRoboTouchSensor;


/***/ }),

/***/ "./src/atcrobo/pin/i2cPin.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class I2CPin {
    constructor(i2c) {
        this._i2c = i2c;
    }
}
exports.I2CPin = I2CPin;


/***/ }),

/***/ "./src/atcrobo/pin/inPin.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class InPin {
    constructor(tp) {
        this.terminalPin = tp;
    }
}
exports.InPin = InPin;


/***/ }),

/***/ "./src/atcrobo/pin/motorPin.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MotorPin {
    constructor(i2c) {
        this.i2c = i2c;
    }
}
exports.MotorPin = MotorPin;


/***/ }),

/***/ "./src/atcrobo/pin/outPin.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class OutPin {
    constructor(tp) {
        this.terminalPin = tp;
    }
}
exports.OutPin = OutPin;


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const index_1 = __webpack_require__("./src/atcrobo/index.ts");
const index_2 = __webpack_require__("./src/stubit/index.ts");
const Artec = { StuduinoBit: index_2.StuduinoBit, ArtecRobo: index_1.ArtecRobo };
module.exports = Artec;


/***/ }),

/***/ "./src/stubit/bus/i2c.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class StuduinoBitI2C {
    constructor(studuinoBit, freq = 100000, scl = 22, sda = 21) {
        this.obnizI2c = studuinoBit.obniz.getFreeI2C();
        this.obnizI2c.start({
            mode: "master",
            sda,
            scl,
            clock: freq,
        });
        studuinoBit.obniz.wait(5);
    }
    read(addr, n) {
        return this.obnizI2c.readWait(addr, n);
    }
    write(addr, buf, repeat = false) {
        this.obnizI2c.write(addr, buf);
    }
    readFromMem(addr, memAddr, length) {
        this.obnizI2c.write(addr, [memAddr]);
        return this.obnizI2c.readWait(addr, length);
    }
    writeToMem(addr, memAddr, data) {
        this.obnizI2c.write(addr, [memAddr, ...data]);
    }
    scanWait() {
        return __awaiter(this, void 0, void 0, function* () {
            const addr = [];
            const tmpFunc = this.obnizI2c.onerror;
            for (let i = 0x08; i <= 0x77; i++) {
                yield new Promise((resolve, reject) => {
                    this.obnizI2c.onerror = reject;
                    this.obnizI2c.write(i, [0x00]);
                    setTimeout(() => {
                        resolve();
                    }, 500);
                }).then(() => {
                    addr.push(i);
                }).catch((e) => {
                    console.log("not found " + i);
                });
            }
            this.obnizI2c.onerror = tmpFunc;
            return addr;
        });
    }
}
exports.StuduinoBitI2C = StuduinoBitI2C;


/***/ }),

/***/ "./src/stubit/bus/icmRegisterRw.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ICMRegisterRW {
    constructor(i2c, address) {
        this.i2c = i2c;
        this.address = address;
    }
    registerShortWait(register, value = null, buf = [0, 0], endian = "b") {
        return __awaiter(this, void 0, void 0, function* () {
            if (value === null) {
                const data = yield this.i2c.readFromMem(this.address, register, 2);
                if (endian === "b") {
                    return data[0] << 8 | data[1];
                }
                else {
                    return data[1] << 8 | data[0];
                }
            }
            if (endian === "b") {
                buf[0] = ((value >> 8) & 0xFF);
                buf[1] = ((value >> 0) & 0xFF);
            }
            else {
                buf[0] = ((value >> 0) & 0xFF);
                buf[1] = ((value >> 8) & 0xFF);
            }
            this.i2c.writeToMem(this.address, register, buf);
            return null;
        });
    }
    registerThreeShortsWait(register, value = null, buf = [0, 0, 0, 0, 0, 0], endian = "b") {
        return __awaiter(this, void 0, void 0, function* () {
            if (value === null) {
                const data = yield this.i2c.readFromMem(this.address, register, 6);
                const results = [0, 0, 0];
                results[0] = (this.char2short(data.slice(0, 2), endian));
                results[1] = (this.char2short(data.slice(2, 4), endian));
                results[2] = (this.char2short(data.slice(4, 6), endian));
                return results;
            }
            this.i2c.writeToMem(this.address, register, buf);
            return null;
        });
    }
    registerCharWait(register, value = null, buf = [0]) {
        return __awaiter(this, void 0, void 0, function* () {
            if (value === null) {
                const data = yield this.i2c.readFromMem(this.address, register, 1);
                return data[0];
            }
            this.i2c.writeToMem(this.address, register, [value]);
            return null;
        });
    }
    char2short(values, endian = "b") {
        const buffer = new ArrayBuffer(2);
        const dv = new DataView(buffer);
        dv.setUint8(0, values[0]);
        dv.setUint8(1, values[1]);
        return dv.getInt16(0, endian !== "b");
    }
}
exports.ICMRegisterRW = ICMRegisterRW;


/***/ }),

/***/ "./src/stubit/const.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinColor = {
    BLACK: [0, 0, 0],
    WHITE: [31, 31, 31],
    RED: [0xff, 0x00, 0x00],
    RIME: [0x00, 0xff, 0x00],
    BLUE: [0x00, 0x00, 0xff],
    YELLOW: [0xff, 0xff, 0x00],
    CYAN: [0x00, 0xff, 0xff],
    MAGENTA: [0xff, 0x00, 0xff],
    SILVER: [0xc0, 0xc0, 0xc0],
    GRAY: [0x80, 0x80, 0x80],
    MAROON: [0x80, 0x00, 0x00],
    OLIVE: [0x80, 0x80, 0x00],
    GREEN: [0x00, 0x80, 0x00],
    PURPLE: [0x80, 0x00, 0x80],
    TEAL: [0x00, 0x80, 0x80],
    NAVY: [0x00, 0x00, 0x80],
    CLEAR: [0x00, 0x00, 0x00],
};


/***/ }),

/***/ "./src/stubit/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const obniz_1 = __importDefault(__webpack_require__("./src/webpack-replace/obniz.js"));
// parts
const i2c_1 = __webpack_require__("./src/stubit/bus/i2c.ts");
const bzr_1 = __webpack_require__("./src/stubit/output/bzr.ts");
const dsply_1 = __webpack_require__("./src/stubit/output/dsply.ts");
const led_1 = __webpack_require__("./src/stubit/output/led.ts");
const accelerometer_1 = __webpack_require__("./src/stubit/sensor/accelerometer.ts");
const button_1 = __webpack_require__("./src/stubit/sensor/button.ts");
const gyro_1 = __webpack_require__("./src/stubit/sensor/gyro.ts");
const icm20948_1 = __webpack_require__("./src/stubit/sensor/icm20948.ts");
const light_1 = __webpack_require__("./src/stubit/sensor/light.ts");
const temperature_1 = __webpack_require__("./src/stubit/sensor/temperature.ts");
const terminal_1 = __webpack_require__("./src/stubit/terminal.ts");
class StuduinoBit {
    constructor(id, options) {
        this.obniz = new obniz_1.default(id, options);
        this.obniz.onconnect = () => __awaiter(this, void 0, void 0, function* () {
            yield this._wire();
            if (this.onconnect) {
                const p = this.onconnect();
                if (p instanceof Promise) {
                    yield p;
                }
            }
        });
        this.obniz.onclose = () => __awaiter(this, void 0, void 0, function* () {
            this._unWire();
            if (this.onclose) {
                const p = this.onclose();
                if (p instanceof Promise) {
                    yield p;
                }
            }
        });
    }
    wait(ms) {
        return this.obniz.wait(ms);
    }
    _wire() {
        return __awaiter(this, void 0, void 0, function* () {
            this.terminal = new terminal_1.StuduinoBitTerminal(this);
            this.i2c = new i2c_1.StuduinoBitI2C(this);
            this.icm20948 = new icm20948_1.StuduinoBitICM20948(this.i2c);
            yield this.icm20948.initWait();
            this.accelerometer = new accelerometer_1.StuduinoBitAccelerometer(this.icm20948);
            this.gyro = new gyro_1.StuduinoBitGyro(this.icm20948);
            this.led = new led_1.StuduinoBitLed(this, { anode: 14 });
            this.button_a = new button_1.StuduinoBitButton(this, { signal: 15 });
            this.button_b = new button_1.StuduinoBitButton(this, { signal: 27 });
            this.display = new dsply_1.StuduinoBitDisplay(this, { din: 4 });
            this.buzzer = new bzr_1.StuduinoBitBuzzer(this, { signal: 25, gnd: 16 }); // todo io16:NC gnd不要にする
            this.temperature = new temperature_1.StuduinoBitTemperature(this, { signal: 35 });
            this.lightsensor = new light_1.StuduinoBitLightSensor(this, { signal: 34 });
            this.p0 = this.terminal.getPin("P0");
            this.p1 = this.terminal.getPin("P1");
            this.p2 = this.terminal.getPin("P2");
            this.p3 = this.terminal.getPin("P3");
            this.p4 = this.terminal.getPin("P4");
            this.p5 = this.terminal.getPin("P5");
            this.p6 = this.terminal.getPin("P6");
            this.p7 = this.terminal.getPin("P7");
            this.p8 = this.terminal.getPin("P8");
            this.p9 = this.terminal.getPin("P9");
            this.p10 = this.terminal.getPin("P10");
            this.p11 = this.terminal.getPin("P11");
            this.p12 = this.terminal.getPin("P12");
            this.p13 = this.terminal.getPin("P13");
            this.p14 = this.terminal.getPin("P14");
            this.p15 = this.terminal.getPin("P15");
            this.p16 = this.terminal.getPin("P16");
            this.p19 = this.terminal.getPin("P19");
            this.p20 = this.terminal.getPin("P20");
        });
    }
    _unWire() {
        this.led = undefined;
        this.display = undefined;
        this.button_a = undefined;
        this.button_b = undefined;
        this.buzzer = undefined;
        this.terminal = undefined;
        this.temperature = undefined;
        this.lightsensor = undefined;
        this.i2c = undefined;
        this.icm20948 = undefined;
        this.accelerometer = undefined;
        this.gyro = undefined;
        this.p0 = undefined;
        this.p1 = undefined;
        this.p2 = undefined;
        this.p3 = undefined;
        this.p4 = undefined;
        this.p5 = undefined;
        this.p6 = undefined;
        this.p7 = undefined;
        this.p8 = undefined;
        this.p9 = undefined;
        this.p10 = undefined;
        this.p11 = undefined;
        this.p12 = undefined;
        this.p13 = undefined;
        this.p14 = undefined;
        this.p15 = undefined;
        this.p16 = undefined;
        this.p19 = undefined;
        this.p20 = undefined;
    }
}
exports.StuduinoBit = StuduinoBit;


/***/ }),

/***/ "./src/stubit/output/bzr.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class StuduinoBitBuzzer {
    constructor(studuinoBit, options) {
        this._TONE_MAP = {
            C3: 130,
            CS3: 139,
            D3: 147,
            DS3: 156,
            E3: 165,
            F3: 175,
            FS3: 185, G3: 196,
            GS3: 208,
            A3: 220,
            AS3: 233,
            B3: 247,
            C4: 262,
            CS4: 277,
            D4: 294,
            DS4: 311,
            E4: 330,
            F4: 349,
            FS4: 370,
            G4: 392,
            GS4: 415,
            A4: 440,
            AS4: 466,
            B4: 494,
            C5: 523,
            CS5: 554,
            D5: 587,
            DS5: 622,
            E5: 659,
            F5: 698,
            FS5: 740,
            G5: 784,
            GS5: 831,
            A5: 880,
            AS5: 932,
            B5: 988,
            C6: 1047,
            CS6: 1109,
            D6: 1175,
            DS6: 1245,
            E6: 1319,
            F6: 1397,
            FS6: 1480,
            G6: 1568,
            GS6: 1661,
            A6: 1760,
            AS6: 1865,
            B6: 1976,
            C7: 2093,
            CS7: 2217,
            D7: 2349,
            DS7: 2489,
            E7: 2637,
            F7: 2794,
            FS7: 2960,
            G7: 3136,
            GS7: 3322,
            A7: 3520,
            AS7: 3729,
            B7: 3951,
            C8: 4186,
        };
        this._obnizSpeaker = studuinoBit.obniz.wired("Speaker", options);
    }
    onWait(sound, duration) {
        return __awaiter(this, void 0, void 0, function* () {
            let hz;
            if (typeof sound === "string") {
                hz = this._TONE_MAP[sound];
            }
            else {
                hz = sound;
            }
            this._obnizSpeaker.play(hz);
            if (duration > 0) {
                yield new Promise((resolve) => {
                    setTimeout(() => {
                        this.off();
                        resolve();
                    }, duration);
                });
            }
            return null;
        });
    }
    off() {
        this._obnizSpeaker.stop();
    }
}
exports.StuduinoBitBuzzer = StuduinoBitBuzzer;


/***/ }),

/***/ "./src/stubit/output/dsply.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = __webpack_require__("./src/stubit/const.ts");
class StuduinoBitDisplay {
    constructor(studioBit, options) {
        this._enable = false;
        this._studioBit = studioBit;
        this._enablePin = studioBit.obniz.io2;
        this.off();
        this._obnizWS2812B = studioBit.obniz.wired("WS2812B", options);
        this._pixcels = [];
        for (let i = 0; i < 25; i++) {
            this._pixcels.push(const_1.BuiltinColor.CLEAR);
        }
        // this.onWait();
    }
    getPixel(x, y) {
        return this._pixcels[this._getIndex(x, y)];
    }
    setPixcel(x, y, color) {
        let c;
        if (typeof color === "string") {
            c = [0, 0, 0];
        }
        else if (Array.isArray(color)) {
            c = color;
        }
        else {
            throw new Error("color takes a [R,G,B] or #RGB");
        }
        this._pixcels[this._getIndex(x, y)] = c;
        this._update();
    }
    on() {
        this._enable = true;
        this._enablePin.output(true);
        this._studioBit.obniz.wait(1);
        this._update();
    }
    off() {
        this._enable = false;
        this._enablePin.output(false);
    }
    show(iterable, delay = 400, wait = true, loop = false, clear = false, color = null) {
        // TODO
        throw new Error("TODO");
    }
    scroll(str, delay = 150, wait = true, loop = false, monospace = false, color = null) {
        // TODO
        throw new Error("TODO");
    }
    clear() {
        this._pixcels = [];
        for (let i = 0; i < 25; i++) {
            this._pixcels.push(const_1.BuiltinColor.CLEAR);
        }
        this._update();
    }
    isOn() {
        return this._enable;
    }
    _oneColor(color) {
        this._pixcels = [];
        for (let i = 0; i < 25; i++) {
            this._pixcels.push(color);
        }
        this._update();
    }
    _getIndex(x, y) {
        return Math.abs(x - 4) * 5 + y;
    }
    _update() {
        if (!this.isOn()) {
            return;
        }
        this._obnizWS2812B.rgbs(this._pixcels);
    }
}
exports.StuduinoBitDisplay = StuduinoBitDisplay;


/***/ }),

/***/ "./src/stubit/output/led.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StuduinoBitLed {
    constructor(studuinoBit, options) {
        this._obnizLED = studuinoBit.obniz.wired("LED", options);
    }
    on() {
        this._obnizLED.on();
    }
    off() {
        this._obnizLED.off();
    }
}
exports.StuduinoBitLed = StuduinoBitLed;


/***/ }),

/***/ "./src/stubit/sensor/accelerometer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class StuduinoBitAccelerometer {
    constructor(icm20948, fs = "2g", sf = "ms2") {
        this._icm20948 = icm20948;
    }
    getXWait(ndigits = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = Math.pow(10, ndigits);
            return Math.round((yield this._icm20948.accelerationWait())[0] * d) / d;
        });
    }
    getYWait(ndigits = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = Math.pow(10, ndigits);
            return Math.round((yield this._icm20948.accelerationWait())[1] * d) / d;
        });
    }
    getZWait(ndigits = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = Math.pow(10, ndigits);
            return Math.round((yield this._icm20948.accelerationWait())[2] * d) / d;
        });
    }
    getValuesWait(ndigits = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = Math.pow(10, ndigits);
            const values = (yield this._icm20948.accelerationWait());
            return values.map((e) => Math.round(e * d) / d);
        });
    }
    setFs(value) {
        this._icm20948.accelFs(value);
    }
    setSf(value) {
        this._icm20948.accelSf(value);
    }
}
exports.StuduinoBitAccelerometer = StuduinoBitAccelerometer;


/***/ }),

/***/ "./src/stubit/sensor/ak09916.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const icmRegisterRw_1 = __webpack_require__("./src/stubit/bus/icmRegisterRw.ts");
class StuduinoBitAK09916 extends icmRegisterRw_1.ICMRegisterRW {
    constructor(i2c) {
        super(i2c, 0x0c);
        this.ADDR = 0x0c;
        this._WIA = (0x01);
        this._HXL = (0x11);
        this._HXH = (0x12);
        this._HYL = (0x13);
        this._HYH = (0x14);
        this._HZL = (0x15);
        this._HZH = (0x16);
        this._ST2 = (0x18);
        this._CNTL2 = (0x31);
        this._ASAX = (0x60);
        this._ASAY = (0x61);
        this._ASAZ = (0x62);
        this._MODE_POWER_DOWN = 0b00000000;
        this.MODE_SINGLE_MEASURE = 0b00000001;
        this.MODE_CONTINOUS_MEASURE_1 = 0b00000010; // 10Hz
        this.MODE_CONTINOUS_MEASURE_2 = 0b00001000; // 100Hz
        this.MODE_EXTERNAL_TRIGGER_MEASURE = 0b00000100;
        this._MODE_SELF_TEST = 0b00001000;
        this._MODE_FUSE_ROM_ACCESS = 0b00011111;
        this.OUTPUT_14_BIT = 0b00000000;
        this.OUTPUT_16_BIT = 0b00010000;
        this._SO_14BIT = 0.6; // per digit when 14bit mode
        this._SO_16BIT = 0.15; //  per digit when 16bit mode
        this.offset = [0, 0, 0];
        this.scale = [1, 1, 1];
        this.so = this._SO_16BIT;
        this.registerCharWait(this._CNTL2, this.MODE_CONTINOUS_MEASURE_1);
    }
    magnetic() {
        return __awaiter(this, void 0, void 0, function* () {
            // todo 再起動して計測してる
            this.registerCharWait(this._CNTL2, this._MODE_POWER_DOWN);
            this.registerCharWait(this._CNTL2, this.MODE_CONTINOUS_MEASURE_1);
            const x = (yield this.registerShortWait(this._HXL, null, [0, 0], "l"));
            const y = (yield this.registerShortWait(this._HYL, null, [0, 0], "l"));
            const z = (yield this.registerShortWait(this._HZL, null, [0, 0], "l"));
            const xyz = [
                (x - this.offset[0]) * this.scale[0],
                (y - this.offset[1]) * this.scale[1],
                (z - this.offset[2]) * this.scale[2],
            ];
            return xyz;
        });
    }
    whoamiWait() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.registerCharWait(this._WIA);
        });
    }
    calibrateWait(count = 256, delay = 200) {
        return __awaiter(this, void 0, void 0, function* () {
            this.offset = [0, 0, 0];
            this.scale = [1, 1, 1];
            let reading = yield this.magnetic();
            let minx = reading[0];
            let maxx = reading[0];
            let miny = reading[1];
            let maxy = reading[1];
            let minz = reading[2];
            let maxz = reading[2];
            while (count > 0) {
                yield new Promise((r) => setTimeout(r, delay));
                reading = yield this.magnetic();
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
            return { offset: this.offset, scale: this.scale };
        });
    }
}
exports.StuduinoBitAK09916 = StuduinoBitAK09916;


/***/ }),

/***/ "./src/stubit/sensor/button.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StuduinoBitButton {
    constructor(studuinoBit, options) {
        this._count = 0;
        this._alreadyPressed = false;
        this._obnizButton = studuinoBit.obniz.wired("Button", options);
        this._obnizButton.onchange = (pressed) => {
            if (pressed) {
                this._alreadyPressed = true;
                this._count++;
            }
        };
    }
    isPressedWait() {
        return this._obnizButton.isPressedWait();
    }
    wasPressed() {
        const tmp = this._alreadyPressed;
        this._alreadyPressed = false;
        return tmp;
    }
    getPresses() {
        const tmp = this._count;
        this._count = 0;
        return tmp;
    }
}
exports.StuduinoBitButton = StuduinoBitButton;


/***/ }),

/***/ "./src/stubit/sensor/gyro.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class StuduinoBitGyro {
    constructor(icm20948, fs = "250dps", sf = "dps") {
        this.icm20948 = icm20948;
    }
    getXWait(ndigits = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = Math.pow(10, ndigits);
            return Math.round((yield this.icm20948.gyroWait())[0] * d) / d;
        });
    }
    getYWait(ndigits = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = Math.pow(10, ndigits);
            return Math.round((yield this.icm20948.gyroWait())[1] * d) / d;
        });
    }
    getZWait(ndigits = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = Math.pow(10, ndigits);
            return Math.round((yield this.icm20948.gyroWait())[2] * d) / d;
        });
    }
    getValuesWait(ndigits = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = Math.pow(10, ndigits);
            const values = (yield this.icm20948.gyroWait());
            return values.map((e) => Math.round(e * d) / d);
        });
    }
    setFs(value) {
        this.icm20948.gyroFs(value);
    }
    setSf(value) {
        this.icm20948.gyroSf(value);
    }
}
exports.StuduinoBitGyro = StuduinoBitGyro;


/***/ }),

/***/ "./src/stubit/sensor/icm20948.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const icmRegisterRw_1 = __webpack_require__("./src/stubit/bus/icmRegisterRw.ts");
const ak09916_1 = __webpack_require__("./src/stubit/sensor/ak09916.ts");
class StuduinoBitICM20948 extends icmRegisterRw_1.ICMRegisterRW {
    constructor(i2c) {
        super(i2c, 0x69);
        this.g = 9.80665;
        this._ADDR = 0x69;
        this._WHO_AM_I = (0x00);
        this._GYRO_CONFIG = (0x01);
        this._ACCEL_CONFIG = (0x14);
        this._ACCEL_CONFIG2 = (0x15);
        this._INT_PIN_CFG = (0x0f);
        this._ACCEL_XOUT_H = (0x2d);
        this._ACCEL_XOUT_L = (0x2e);
        this._ACCEL_YOUT_H = (0x2f);
        this._ACCEL_YOUT_L = (0x30);
        this._ACCEL_ZOUT_H = (0x31);
        this._ACCEL_ZOUT_L = (0x32);
        this._GYRO_XOUT_H = (0x33);
        this._GYRO_XOUT_L = (0x34);
        this._GYRO_YOUT_H = (0x35);
        this._GYRO_YOUT_L = (0x36);
        this._GYRO_ZOUT_H = (0x37);
        this._GYRO_ZOUT_L = (0x38);
        // #_ACCEL_FS_MASK = const(0b00011000)
        this._ACCEL_FS_SEL_2G = (0b00000000);
        this._ACCEL_FS_SEL_4G = (0b00000010);
        this._ACCEL_FS_SEL_8G = (0b00000100);
        this._ACCEL_FS_SEL_16G = (0b00000110);
        this._ACCEL_SO_2G = 16384; // 1 / 16384 ie. 0.061 mg / digit
        this._ACCEL_SO_4G = 8192; // 1 / 8192 ie. 0.122 mg / digit
        this._ACCEL_SO_8G = 4096; // 1 / 4096 ie. 0.244 mg / digit
        this._ACCEL_SO_16G = 2048; // 1 / 2048 ie. 0.488 mg / digit
        this._GYRO_FS_MASK = (0b00000110);
        this._GYRO_FS_SEL_250DPS = (0b00110001);
        this._GYRO_FS_SEL_500DPS = (0b00110011);
        this._GYRO_FS_SEL_1000DPS = (0b00110101);
        this._GYRO_FS_SEL_2000DPS = (0b00110111);
        this._GYRO_SO_250DPS = 131;
        this._GYRO_SO_500DPS = 62.5;
        this._GYRO_SO_1000DPS = 32.8;
        this._GYRO_SO_2000DPS = 16.4;
        // # Used for enablind and disabling the i2c bypass access
        this._I2C_BYPASS_MASK = (0b00000010);
        this._I2C_BYPASS_EN = (0b00000010);
        this._I2C_BYPASS_DIS = (0b00000000);
        this._SF_MG = 1000; //    mg
        this._SF_M_S2 = 9.80665; // 1 g = 9.80665 m/s2 ie. standard gravity
        this._SF_DEG_S = 1; // deg / s
        this._SF_RAD_S = 57.295779578552; // 1 rad / s is 57.295779578552 deg / s;
        this._studuinoI2C = i2c;
        this._accel_so = this._accelFs(this._ACCEL_FS_SEL_2G);
        this._accel_sf = this._SF_M_S2;
        this._gyro_so = this._gyroFs(this._GYRO_FS_SEL_250DPS);
        this._gyro_sf = this._SF_DEG_S;
    }
    initWait() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._studuinoI2C.readFromMem(this._ADDR, 0x00, 1);
            if (data.length !== 1 || data[0] !== 0xea) {
                throw new Error("ICM20948 not found in I2C bus.");
            }
            this._studuinoI2C.writeToMem(this._ADDR, 0x06, [0x01]); // wake;
            this._studuinoI2C.writeToMem(this._ADDR, 0x0f, [0x02]); // passthrough;
            this._studuinoI2C.writeToMem(this._ADDR, 0x03, [0x00]);
            // await this.studuinoI2C.scanWait();
            this._studuinoI2C.writeToMem(12, 0x31, [0x00]); // power down mode
            const buf3 = yield this._studuinoI2C.readFromMem(12, 0x60, 3);
            this._ak09916 = new ak09916_1.StuduinoBitAK09916(this._studuinoI2C);
        });
    }
    accelFs(value) {
        if (value === "2g") {
            this._accel_so = this._accelFs(this._ACCEL_FS_SEL_2G);
        }
        else if (value === "4g") {
            this._accel_so = this._accelFs(this._ACCEL_FS_SEL_4G);
        }
        else if (value === "8g") {
            this._accel_so = this._accelFs(this._ACCEL_FS_SEL_8G);
        }
        else if (value === "16g") {
            this._accel_so = this._accelFs(this._ACCEL_FS_SEL_16G);
        }
        else {
            throw new Error("must be '2g'/'4g'/'8g'/'16g'");
        }
    }
    accelSf(value) {
        if (value === "mg") {
            this._accel_sf = this._SF_MG;
        }
        else if (value === "ms2") {
            this._accel_sf = this._SF_M_S2;
        }
        else {
            throw new Error("must be 'mg'/'ms2'");
        }
    }
    accelerationWait() {
        return __awaiter(this, void 0, void 0, function* () {
            /*
            Acceleration measured by the sensor. By default will return a
            3-tuple of X, Y, Z axis accelerationWait values in mG as integer.
            */
            const so = this._accel_so;
            const sf = this._accel_sf;
            const xyz = yield this.registerThreeShortsWait(this._ACCEL_XOUT_H);
            return xyz.map((e) => e / so * sf);
        });
    }
    gyroWait() {
        return __awaiter(this, void 0, void 0, function* () {
            // """
            // X, Y, Z radians per second as floats.
            // """
            const so = this._gyro_so;
            const sf = this._gyro_sf;
            const xyz = yield this.registerThreeShortsWait(this._GYRO_XOUT_H);
            return xyz.map((e) => e / so * sf);
        });
    }
    magneticWait() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._ak09916.magnetic();
        });
    }
    whoamiWait() {
        // Value of the whoamiWait register. """
        return this.registerCharWait(this._WHO_AM_I);
    }
    gyroFs(value) {
        if (value === "250dps") {
            this._gyro_so = this._gyroFs(this._GYRO_FS_SEL_250DPS);
        }
        else if (value === "500dps") {
            this._gyro_so = this._gyroFs(this._GYRO_FS_SEL_500DPS);
        }
        else if (value === "1000dps") {
            this._gyro_so = this._gyroFs(this._GYRO_FS_SEL_1000DPS);
        }
        else if (value === "2000dps") {
            this._gyro_so = this._gyroFs(this._GYRO_FS_SEL_2000DPS);
        }
        else {
            throw new Error("must be '250dps'/'500dps'/'1000dps'/'2000dps'");
        }
    }
    gyroSf(value) {
        if (value === "dps") {
            this._gyro_sf = this._SF_DEG_S;
        }
        else if (value === "rps") {
            this._gyro_sf = this._SF_RAD_S;
        }
        else {
            throw new Error("must be 'dps'/'rps'");
        }
    }
    _gyroDlpfWait(dlpfcfg = -1) {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerCharWait(0x7f, 0x20);
            // # get ICM20948 gyroWait configuration.
            let char = (yield this.registerCharWait(this._GYRO_CONFIG));
            char &= this._GYRO_FS_MASK; // clear DLDF bits
            if (dlpfcfg === -1) {
                char |= 0x00000000;
            }
            else if (dlpfcfg === 0) {
                char |= 0x00000001;
            }
            else if (dlpfcfg === 1) {
                char |= 0x00001001;
            }
            else if (dlpfcfg === 2) {
                char |= 0x00010001;
            }
            else if (dlpfcfg === 3) {
                char |= 0x00011001;
            }
            else if (dlpfcfg === 4) {
                char |= 0x00100001;
            }
            else if (dlpfcfg === 5) {
                char |= 0x00101001;
            }
            else if (dlpfcfg === 6) {
                char |= 0x00110001;
            }
            else if (dlpfcfg === 7) {
                char |= 0x00111001;
            }
            else {
                char |= 0x00000000;
            }
            this.registerCharWait(this._GYRO_CONFIG, char);
            this.registerCharWait(0x7f, 0x00);
        });
    }
    _accelFs(value) {
        this.registerCharWait(0x7f, 0x20);
        this.registerCharWait(this._ACCEL_CONFIG, value);
        this.registerCharWait(0x7f, 0x00);
        // # Return the sensitivity divider
        if (this._ACCEL_FS_SEL_2G === value) {
            return this._ACCEL_SO_2G;
        }
        else if (this._ACCEL_FS_SEL_4G === value) {
            return this._ACCEL_SO_4G;
        }
        else if (this._ACCEL_FS_SEL_8G === value) {
            return this._ACCEL_SO_8G;
        }
        else if (this._ACCEL_FS_SEL_16G === value) {
            return this._ACCEL_SO_16G;
        }
        return 0;
    }
    _gyroFs(value) {
        this.registerCharWait(0x7f, 0x20);
        this.registerCharWait(this._GYRO_CONFIG, value);
        this.registerCharWait(0x7f, 0x00);
        // # Return the sensitivity divider
        if (this._GYRO_FS_SEL_250DPS === value) {
            return this._GYRO_SO_250DPS;
        }
        else if (this._GYRO_FS_SEL_500DPS === value) {
            return this._GYRO_SO_500DPS;
        }
        else if (this._GYRO_FS_SEL_1000DPS === value) {
            return this._GYRO_SO_1000DPS;
        }
        else if (this._GYRO_FS_SEL_2000DPS === value) {
            return this._GYRO_SO_2000DPS;
        }
        return 0;
    }
}
exports.StuduinoBitICM20948 = StuduinoBitICM20948;


/***/ }),

/***/ "./src/stubit/sensor/light.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class StuduinoBitLightSensor {
    constructor(studuinoBit, options) {
        // @ts-ignore
        this.obnizAnalog = studuinoBit.obniz.getAD(options.signal);
    }
    getValueWait() {
        return __awaiter(this, void 0, void 0, function* () {
            let value = yield this.obnizAnalog.getWait();
            // console.log(value);
            value = Math.round(value / 3.3 * 4095);
            return value;
        });
    }
}
exports.StuduinoBitLightSensor = StuduinoBitLightSensor;


/***/ }),

/***/ "./src/stubit/sensor/temperature.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class StuduinoBitTemperature {
    constructor(studuinoBit, options) {
        // resistance at 25 degrees C
        this.__THERMISTORNOMINAL__ = 10000;
        // temp. for nominal resistance (almost always 25 C)
        this.__TEMPERATURENOMINAL__ = 25;
        // The beta coefficient of the thermistor (usually 3000-4000)
        this.__BCOEFFICIENT__ = 3950;
        // the value of the 'other' resistor
        this.__SERIESRESISTOR__ = 10000;
        // @ts-ignore
        this.obnizAnalog = studuinoBit.obniz.getAD(options.signal);
    }
    getValueWait() {
        return __awaiter(this, void 0, void 0, function* () {
            let value = yield this.obnizAnalog.getWait();
            // console.log(value);
            value = Math.round(value / 3.3 * 4095);
            return value;
        });
    }
    getCelsiusWait(ndigits = 2) {
        return __awaiter(this, void 0, void 0, function* () {
            let val = yield this.getValueWait();
            val = 4095 / val - 1;
            val = this.__SERIESRESISTOR__ * val;
            let steinhart = val / this.__THERMISTORNOMINAL__; // (R / Ro);
            steinhart = Math.log(steinhart); // ln(R / Ro);
            steinhart /= this.__BCOEFFICIENT__; // 1 / B * ln(R / Ro);
            steinhart += 1.0 / (this.__TEMPERATURENOMINAL__ + 273.15); // + (1 / To);
            steinhart = 1.0 / steinhart; // Invert;
            steinhart -= 273.15; // convert to C;
            steinhart = Math.round(steinhart * Math.pow(10, ndigits)) / Math.pow(10, ndigits);
            return steinhart;
        });
    }
}
exports.StuduinoBitTemperature = StuduinoBitTemperature;


/***/ }),

/***/ "./src/stubit/terminal.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:max-classes-per-file
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class StuduinoBitDigitalPinMixin {
    constructor(studuinoBit, pin) {
        this.pin = pin;
        this.studuinoBit = studuinoBit;
    }
    writeDigital(value) {
        // @ts-ignore
        this.studuinoBit.obniz.getIO(this.pin).output(value);
    }
    readDigitalWait() {
        // @ts-ignore
        return this.studuinoBit.obniz.getIO(this.pin).inputWait();
    }
    writeAnalog(value) {
        // todo
    }
    setAnalogPeriod() {
        // todo
    }
    setAnalogPeriodMicroseconds() {
        // todo
    }
    setAnalogHz() {
        // todo
    }
}
class StuduinoBitAnalogPinMixin {
    constructor(studuinoBit, pin) {
        this.pin = pin;
        this.studuinoBit = studuinoBit;
    }
    readAnalogWait(mv = false) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const voltage = yield this.studuinoBit.obniz.getAD(this.pin).getWait();
            if (mv) {
                return Math.round(voltage * 1000);
            }
            return Math.round(voltage * 4095 / 5);
        });
    }
}
class StuduinoBitDigitalPin extends StuduinoBitDigitalPinMixin {
    constructor(studuinoBit, pin) {
        super(studuinoBit, pin);
    }
}
exports.StuduinoBitDigitalPin = StuduinoBitDigitalPin;
class StuduinoBitAnalogPin extends StuduinoBitAnalogPinMixin {
    constructor(studuinoBit, pin) {
        super(studuinoBit, pin);
    }
}
exports.StuduinoBitAnalogPin = StuduinoBitAnalogPin;
// @ts-ignore
class StuduinoBitAnalogDitialPin {
    constructor(studuinoBit, pin) {
        this.pin = pin;
        this.studuinoBit = studuinoBit;
    }
    readAnalogWait() {
        // will replace by applyMixins
        throw new Error("abstcact function");
    }
    readDigitalWait() {
        // will replace by applyMixins
        throw new Error("abstcact function");
    }
    writeAnalog() {
        // will replace by applyMixins
        throw new Error("abstcact function");
    }
    writeDigital(value) {
        // will replace by applyMixins
        throw new Error("abstcact function");
    }
    setAnalogPeriod() {
        // will replace by applyMixins
        throw new Error("abstcact function");
    }
    setAnalogPeriodMicroseconds() {
        // will replace by applyMixins
        throw new Error("abstcact function");
    }
    setAnalogHz() {
        // will replace by applyMixins
        throw new Error("abstcact function");
    }
}
exports.StuduinoBitAnalogDitialPin = StuduinoBitAnalogDitialPin;
applyMixins(StuduinoBitAnalogDitialPin, [StuduinoBitDigitalPinMixin, StuduinoBitAnalogPinMixin]);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, 
            // @ts-ignore
            Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
class StuduinoBitTerminal {
    constructor(studuinoBit) {
        this.studuinoBit = studuinoBit;
        this.terminalValues = {
            P0: new StuduinoBitAnalogDitialPin(this.studuinoBit, 32),
            P1: new StuduinoBitAnalogDitialPin(this.studuinoBit, 33),
            P2: new StuduinoBitAnalogPin(this.studuinoBit, 36),
            P3: new StuduinoBitAnalogPin(this.studuinoBit, 39),
            P4: new StuduinoBitDigitalPin(this.studuinoBit, 25),
            P5: new StuduinoBitAnalogDitialPin(this.studuinoBit, 15),
            P6: new StuduinoBitDigitalPin(this.studuinoBit, 26),
            P7: new StuduinoBitDigitalPin(this.studuinoBit, 5),
            P8: new StuduinoBitAnalogDitialPin(this.studuinoBit, 14),
            P9: new StuduinoBitAnalogDitialPin(this.studuinoBit, 12),
            P10: new StuduinoBitDigitalPin(this.studuinoBit, 0),
            P11: new StuduinoBitDigitalPin(this.studuinoBit, 27),
            P12: new StuduinoBitDigitalPin(this.studuinoBit, 4),
            P13: new StuduinoBitDigitalPin(this.studuinoBit, 18),
            P14: new StuduinoBitDigitalPin(this.studuinoBit, 19),
            P15: new StuduinoBitDigitalPin(this.studuinoBit, 23),
            P16: new StuduinoBitAnalogDitialPin(this.studuinoBit, 13),
            P19: new StuduinoBitDigitalPin(this.studuinoBit, 22),
            P20: new StuduinoBitDigitalPin(this.studuinoBit, 21),
        };
    }
    getPin(pin) {
        // @ts-ignore
        return this.terminalValues[pin];
    }
}
exports.StuduinoBitTerminal = StuduinoBitTerminal;


/***/ }),

/***/ "./src/webpack-replace/obniz.js":
/***/ (function(module, exports) {


let obniz;
if (typeof Obniz !== "undefined") {
    obniz = Obniz;
} else {
    obniz = window.Obniz;
}

module.exports=obniz;


/***/ })

/******/ });