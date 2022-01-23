/// <reference types="web" />
export declare type TSendCustomEvent = {
    element: Element;
    name: string;
    params?: any;
};
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
export declare const dispatchEvent: ({ element, params, name }: TSendCustomEvent) => void;
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
export declare const addOnHistoryChangeEvent: (name: string, element: Element) => void;
//# sourceMappingURL=events.d.ts.map