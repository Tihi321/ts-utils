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
exports.rangeReduce = exports.rangeMap = exports.rangeEach = exports.includesAll = void 0;
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
//# sourceMappingURL=arrays.js.map