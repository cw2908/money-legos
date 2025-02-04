"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aave_1 = __importDefault(require("./aave"));
var balancer_1 = __importDefault(require("./balancer"));
var compound_1 = __importDefault(require("./compound"));
var curvefi_1 = __importDefault(require("./curvefi"));
var dappsys_1 = __importDefault(require("./dappsys"));
var dydx_1 = __importDefault(require("./dydx"));
var erc20_1 = __importDefault(require("./erc20"));
var idle_1 = __importDefault(require("./idle"));
var kyber_1 = __importDefault(require("./kyber"));
var maker_1 = __importDefault(require("./maker"));
var mstable_1 = __importDefault(require("./mstable"));
var onesplit_1 = __importDefault(require("./onesplit"));
var synthetix_1 = __importDefault(require("./synthetix"));
var uma_1 = __importDefault(require("./uma"));
var uniswap_1 = __importDefault(require("./uniswap"));
var uniswapV2_1 = __importDefault(require("./uniswapV2"));
exports.legos = {
    aave: aave_1.default,
    balancer: balancer_1.default,
    compound: compound_1.default,
    curvefi: curvefi_1.default,
    dappsys: dappsys_1.default,
    dydx: dydx_1.default,
    erc20: erc20_1.default,
    idle: idle_1.default,
    kyber: kyber_1.default,
    maker: maker_1.default,
    mstable: mstable_1.default,
    onesplit: onesplit_1.default,
    synthetix: synthetix_1.default,
    uma: uma_1.default,
    uniswap: uniswap_1.default,
    uniswapV2: uniswapV2_1.default,
};
