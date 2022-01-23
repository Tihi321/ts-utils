/**
 * Detects if code is running in a browser
 * @example
 *
 * isBrowser(); // true
 *
 * @return {boolean} returns true/false
 */
export declare const isBrowser: () => boolean;
/**
 * Runs function when content is rendered
 * @example
 *
 * domReady(() => {...});
 *
 * @param {Function} callback - function to be called when content is rendered
 * @return {void}
 */
export declare const domReady: (callback: any) => void;
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
export declare const addOnChangeCallback: (callback: (args: any, state: any) => void) => void;
//# sourceMappingURL=browser.d.ts.map