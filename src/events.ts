import { isBrowser } from "./browser";

export type TSendCustomEvent = {
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

export const dispatchEvent = ({
  element,
  params,
  name
}: TSendCustomEvent): void => {
  if (isBrowser()) {
    const event = params
      ? new CustomEvent(name, {
          detail: params
        })
      : new CustomEvent(name);

    element.dispatchEvent(event);
  }
};
