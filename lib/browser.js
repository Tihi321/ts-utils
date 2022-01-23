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
exports.domReady = exports.isBrowser = void 0;
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
//# sourceMappingURL=browser.js.map