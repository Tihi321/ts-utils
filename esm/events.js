import { isBrowser } from "./browser";
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
    if (isBrowser()) {
        var event_1 = params
            ? new CustomEvent(name, {
                detail: params
            })
            : new CustomEvent(name);
        element.dispatchEvent(event_1);
    }
};
//# sourceMappingURL=events.js.map