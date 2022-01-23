/**
 * Detects if code is running in a browser
 * @example
 *
 * isBrowser(); // true
 *
 * @return {boolean} returns true/false
 */

import { THistoryArguments } from "./typings/history";

export const isBrowser = (): boolean => typeof window !== "undefined";

/**
 * Runs function when content is rendered
 * @example
 *
 * domReady(() => {...});
 *
 * @param {Function} callback - function to be called when content is rendered
 * @return {void}
 */

export const domReady = (callback: any): void => {
  if (isBrowser()) {
    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      callback();
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  }
};

/**
 * Calls custom funtion on every history change
 * @example
 * const callback = (args, state) => {...};
 *
 * addOnChangeCallback(callback);
 *
 * @param {Function} callback - function to be called when history is updated, it receives history arguments, and state
 * @return {void}
 */

export const addOnChangeCallback = (
  callback: (args: any, state: any) => void
) => {
  if (isBrowser()) {
    // eslint-disable-next-line func-names
    (function(history) {
      const { pushState } = history;

      function newPushStateFunction(state: any) {
        // eslint-disable-next-line prefer-rest-params
        const rest = (arguments as unknown) as THistoryArguments;

        callback(rest, state);

        return pushState.apply(history, rest);
      }
      // eslint-disable-next-line no-param-reassign
      history.pushState = newPushStateFunction;
    })(window.history);
  }
};
