/**
 * Detects if code is running in a browser
 * @example
 *
 * isBrowser(); // true
 *
 * @return {boolean} returns true/false
 */

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
