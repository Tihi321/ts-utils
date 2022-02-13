import { addOnHistoryChangeCallback, isBrowser } from "./browser";
import { THistoryArguments } from "./typings/history";

export type TSendCustomEvent = {
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

export const dispatchEvent = ({
  element,
  params,
  name
}: TSendCustomEvent): void => {
  const defaultParams = {
    bubbles: true,
    cancelable: true,
    composed: true
  };

  if (isBrowser()) {
    const event = params
      ? new CustomEvent(name, {
          ...defaultParams,
          detail: params
        })
      : new CustomEvent(name, defaultParams);

    element.dispatchEvent(event);
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

export const addOnHistoryChangeEvent = (name: string, element: Element) => {
  if (isBrowser()) {
    addOnHistoryChangeCallback((args: THistoryArguments, state) => {
      dispatchEvent({
        name,
        element,
        params: {
          data: args[0],
          unused: args[1],
          url: args[2],
          state
        }
      });
    });
  }
};
