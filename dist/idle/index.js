"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var contracts_1 = __importDefault(require("./contracts"));
var IdleTokenV3_json_1 = __importDefault(require("./abi/IdleTokenV3.json"));
module.exports = __assign(__assign({}, contracts_1.default), { abi: IdleTokenV3_json_1.default, decimals: 18 });
