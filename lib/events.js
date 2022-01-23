"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchEvent = void 0;
var browser_1 = require("./browser");
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
var dispatchEvent = function (_a) {
    var element = _a.element, params = _a.params, name = _a.name;
    if ((0, browser_1.isBrowser)()) {
        var event_1 = params
            ? new CustomEvent(name, {
                detail: params
            })
            : new CustomEvent(name);
        element.dispatchEvent(event_1);
    }
};
exports.dispatchEvent = dispatchEvent;
//# sourceMappingURL=events.js.map