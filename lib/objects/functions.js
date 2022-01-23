"use strict";
/**
 * Promisify functions that accept callback that will be called upon resolve, example wainting for message from api
 * @example
 * const getFromApi = async (service, name, functionToCall) => {
 *   SomeService.listen(
 *     args => {
 *       functionToCall(args);
 *     }
 *   );
 *   SomeService.send(service, name);
 * }
 *
 * getFromApiPromise = (...args) => promisifyCallback(getFromApi, ...args);
 *
 * const data = await getFromApiPromise("Service", "Name");
 * @param {Function} callback - Object to update.
 * @param {any[]} args - any optional arguments callback function needs
 * @return {Promise<unknown>} returns promise that will be resoved by callback
 */
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
exports.promisifyCallback = void 0;
var promisifyCallback = function (callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new Promise(function (resolve) {
        return callback.apply(void 0, __spreadArray(__spreadArray([], args, false), [function (props) { return resolve(__assign({}, props)); }], false));
    });
};
exports.promisifyCallback = promisifyCallback;
//# sourceMappingURL=functions.js.map