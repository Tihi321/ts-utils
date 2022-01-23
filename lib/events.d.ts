/// <reference types="web" />
export declare type TSendCustomEvent = {
    element: HTMLElement;
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
//# sourceMappingURL=events.d.ts.map