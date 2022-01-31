"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineSelector = exports.generateSelector = void 0;
var isFunction_1 = __importDefault(require("lodash/isFunction"));
var map_1 = __importDefault(require("lodash/map"));
/**
 * Generates selector for reselect library
 * @example
 * const dataSelector = generateSelector({data: []});
 *
 *
 * @param {any} initialState - state that is returned as a initial state for selector
 * @returns returns initialState
 */
var generateSelector = function (initialState) { return function () { return initialState; }; };
exports.generateSelector = generateSelector;
/**
 * Allows usage of selector logic outside of reselect
 * @example
 * export const getRandomPeopleNames = (peopleNamesDataSelector) => combineSelector(
 *  peopleNamesDataSelector,
 *  (names) => {
 *    return names;
 * }
 *)
 *
 *
 * @param {any} initialState - state that is returned as a initial state for selector
 * @returns returns initialState
 */
var combineSelector = function () {
    var callbacks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        callbacks[_i] = arguments[_i];
    }
    var returnCallback = callbacks.pop();
    var data = (0, map_1.default)(callbacks, function (callback) {
        return (0, isFunction_1.default)(callback) ? callback() : callback;
    });
    if (returnCallback !== undefined) {
        return returnCallback.apply(void 0, data);
    }
    return undefined;
};
exports.combineSelector = combineSelector;
//# sourceMappingURL=selectors.js.map