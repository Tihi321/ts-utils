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
import { addOnHistoryChangeCallback, isBrowser } from "../browser";
/**
 * Dispatches custom event
 * @example
 * const domElement = document.querySelector(".dispatch-element");
 *
 * dispatchEvent({element: domElement, name: "number-of-users", params: 10});
 *
 * @param {TSendCustomEvent} args - object with parameters, element on which to distatch event, name of the event and optional parameters
 * @return {void}
 */
export var dispatchEvent = function (_a) {
    var element = _a.element, params = _a.params, name = _a.name;
    var defaultParams = {
        bubbles: true,
        cancelable: true,
        composed: true,
    };
    if (isBrowser()) {
        var event_1 = params
            ? new CustomEvent(name, __assign(__assign({}, defaultParams), { detail: params }))
            : new CustomEvent(name, defaultParams);
        element.dispatchEvent(event_1);
    }
};
/**
 * Disptaches custom event on every history change
 * @example
 * const domElement = document.querySelector(".dispatch-element");
 *
 * addOnChangeCallback("history-changed", domElement);
 *
 * @param {string} name - name of the event to be disptached
 * @param {Element} element - dom element on which to dispatch event
 * @return {void}
 */
export var addOnHistoryChangeEvent = function (name, element) {
    if (isBrowser()) {
        addOnHistoryChangeCallback(function (args, state) {
            dispatchEvent({
                name: name,
                element: element,
                params: {
                    data: args[0],
                    unused: args[1],
                    url: args[2],
                    state: state,
                },
            });
        });
    }
};
//# sourceMappingURL=events.js.map