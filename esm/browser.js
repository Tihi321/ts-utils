/**
 * Detects if code is running in a browser
 * @example
 *
 * isBrowser(); // true
 *
 * @return {boolean} returns true/false
 */
export var isBrowser = function () { return typeof window !== "undefined"; };
/**
 * Runs function when content is rendered
 * @example
 *
 * domReady(() => {...});
 *
 * @param {Function} callback - function to be called when content is rendered
 * @return {void}
 */
export var domReady = function (callback) {
    if (isBrowser()) {
        if (document.readyState === "interactive" ||
            document.readyState === "complete") {
            callback();
        }
        else {
            document.addEventListener("DOMContentLoaded", callback);
        }
    }
};
/**
 * Calls custom funtion on every history change
 * @example
 * const callback = (args, state) => {...};
 *
 * addOnHistoryChangeCallback(callback);
 *
 * @param {Function} callback - function to be called when history is updated, it receives history arguments, and state
 * @return {void}
 */
export var addOnHistoryChangeCallback = function (callback) {
    if (isBrowser()) {
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
//# sourceMappingURL=browser.js.map