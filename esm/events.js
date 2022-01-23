import { addOnChangeCallback, isBrowser } from "./browser";
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
        addOnChangeCallback(function (args, state) {
            dispatchEvent({
                name: name,
                element: element,
                params: {
                    data: args[0],
                    unused: args[1],
                    url: args[2],
                    state: state
                }
            });
        });
    }
};
//# sourceMappingURL=events.js.map