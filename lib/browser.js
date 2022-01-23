"use strict";
/**
 * Detects if code is running in a browser
 * @example
 *
 * isBrowser(); // true
 *
 * @return {boolean} returns true/false
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOnChangeCallback = exports.domReady = exports.isBrowser = void 0;
var isBrowser = function () { return typeof window !== "undefined"; };
exports.isBrowser = isBrowser;
/**
 * Runs function when content is rendered
 * @example
 *
 * domReady(() => {...});
 *
 * @param {Function} callback - function to be called when content is rendered
 * @return {void}
 */
var domReady = function (callback) {
    if ((0, exports.isBrowser)()) {
        if (document.readyState === "interactive" ||
            document.readyState === "complete") {
            callback();
        }
        else {
            document.addEventListener("DOMContentLoaded", callback);
        }
    }
};
exports.domReady = domReady;
/**
 * Calls custom funtion on every history change
 * @example
 * const callback = (args, state) => {...};
 *
 * addOnChangeCallback(callback);
 *
 * @param {Function} callback - function to be called when history is updated, it receives history arguments, and state
 * @return {void}
 */
var addOnChangeCallback = function (callback) {
    if ((0, exports.isBrowser)()) {
        // eslint-disable-next-line func-names
        (function (history) {
            var pushState = history.pushState;
            function newPushStateFunction(state) {
                // eslint-disable-next-line prefer-rest-params
                var rest = arguments;
                callback(rest, state);
                return pushState.apply(history, rest);
            }
            // eslint-disable-next-line no-param-reassign
            history.pushState = newPushStateFunction;
        })(window.history);
    }
};
exports.addOnChangeCallback = addOnChangeCallback;
//# sourceMappingURL=browser.js.map