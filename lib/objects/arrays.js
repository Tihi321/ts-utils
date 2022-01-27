"use strict";
/**
 * Check if all keys from source array are in target array
 * @example
 * const source = ["first", "second"];
 * const target = ["first", "second", "third", "fourth"];
 *
 * const isIncluded = includesAll(source, target); // true
 *
 * @param {array} source - Source Array to check keys.
 * @param {array} target - target Array to check source Array in
 * @return {boolean} returns if target containes all keys from source
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderedPromiseAll = exports.rangeReduce = exports.rangeMap = exports.rangeEach = exports.includesAll = void 0;
var includesAll = function (source, target) { return source.every(function (item) { return target.includes(item); }); };
exports.includesAll = includesAll;
/**
 * Callback is executed a range number of times
 * @example
 * const callback = (index: number) => {...};
 *
 * rangeEach(5, callback);
 *
 * @param {number} range - Range number of executions.
 * @param {Function} callback - Callback function to be executed
 * @return {void}
 */
var rangeEach = function (range, callback) {
    for (var index = 0; index < range; index += 1) {
        callback(index);
    }
};
exports.rangeEach = rangeEach;
/**
 * Creates a range custom array
 * @example
 * const callback = (index: number) => index;
 *
 * const rangeMapOutput = rangeMap(5, callback); // [0, 1, 2, 3 ,4]
 *
 * @param {number} range - Range number of executions.
 * @param {Function} callback - Callback function to be executed
 * @return {array} returns array of items stored from each callback
 */
var rangeMap = function (range, callback) {
    var returnArray = [];
    for (var index = 0; index < range; index += 1) {
        returnArray = __spreadArray(__spreadArray([], returnArray, true), [callback(index)], false);
    }
    return returnArray;
};
exports.rangeMap = rangeMap;
/**
 * Reduces a range array
 * @example
 * const callback = acc => acc * 2;
 *
 * rangeReduceOutput = rangeReduce(5, callback, 5); // 160
 *
 * @param {number} range - Range number of executions.
 * @param {Function} callback - Callback function to be executed
 * @return {any} returns reduced item
 */
var rangeReduce = function (range, callback, initialValue) {
    var returnItem = initialValue;
    for (var index = 0; index < range; index += 1) {
        returnItem = callback(returnItem, index);
    }
    return returnItem;
};
exports.rangeReduce = rangeReduce;
/**
 * Return array with all promises resolved in order, one after another
 * @example
 * const promiseCallback = (item) => new Promise(resolve => setTimeout(resolve(new Date().getSeconds() + item), 1000));
 *
 * const resultCallback = (item, result) => ({ item, result });
 *
 * // [{ item: 0, result: (0 + seconds) }, { item: 1, result: 1 + seconds }, { item: 2, result: 3 + seconds } ...]
 * const result = orderedPromiseAll([0, 1, 2, 3, 4, 5], promiseCallback, resultCallback);
 *
 * @param {Array []} promises - any Array of values
 * @param {Function} promiseCallback - callback that returns a promise to be resolved
 * @param {Function} resultCallback - callback that returns item to add to output array, it takes item and resolve of promise
 * @returns results array after all promises are resolved
 */
var orderedPromiseAll = function (promises, promiseCallback, resultCallback) {
    if (resultCallback === void 0) { resultCallback = function (_item, result) { return result; }; }
    return __awaiter(void 0, void 0, void 0, function () {
        var output, index, item, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    output = [];
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < promises.length)) return [3 /*break*/, 4];
                    item = promises[index];
                    return [4 /*yield*/, promiseCallback(item)];
                case 2:
                    result = _a.sent();
                    output = __spreadArray(__spreadArray([], output, true), [resultCallback(item, result, index)], false);
                    _a.label = 3;
                case 3:
                    index += 1;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, output];
            }
        });
    });
};
exports.orderedPromiseAll = orderedPromiseAll;
//# sourceMappingURL=arrays.js.map