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
Object.defineProperty(exports, "__esModule", { value: true });
exports.includesAll = void 0;
var includesAll = function (source, target) { return source.every(function (item) { return target.includes(item); }); };
exports.includesAll = includesAll;
//# sourceMappingURL=arrays.js.map