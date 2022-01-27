/**
 * Check if all keys from source array are in target array
 * @example
 * const source = ["first", "second"];
 * const target = ["first", "second", "third", "fourth"];
 *
 * const isIncluded = includesAll(source, target); // true
 *
 * @param {array} source - Source Array to check keys.
 * @param {array} target - target Array to check source Array in
 * @return {boolean} returns if target containes all keys from source
 */
export declare const includesAll: (source: Array<string | number>, target: Array<string | number>) => boolean;
/**
 * Callback is executed a range number of times
 * @example
 * const callback = (index: number) => {...};
 *
 * rangeEach(5, callback);
 *
 * @param {number} range - Range number of executions.
 * @param {Function} callback - Callback function to be executed
 * @return {void}
 */
export declare const rangeEach: (range: number, callback: Function) => void;
/**
 * Creates a range custom array
 * @example
 * const callback = (index: number) => index;
 *
 * const rangeMapOutput = rangeMap(5, callback); // [0, 1, 2, 3 ,4]
 *
 * @param {number} range - Range number of executions.
 * @param {Function} callback - Callback function to be executed
 * @return {array} returns array of items stored from each callback
 */
export declare const rangeMap: (range: number, callback: Function) => any[];
/**
 * Reduces a range array
 * @example
 * const callback = acc => acc * 2;
 *
 * rangeReduceOutput = rangeReduce(5, callback, 5); // 160
 *
 * @param {number} range - Range number of executions.
 * @param {Function} callback - Callback function to be executed
 * @return {any} returns reduced item
 */
export declare const rangeReduce: (range: number, callback: Function, initialValue: any) => any;
/**
 * Return array with all promises resolved in order, one after another
 * @example
 * const promiseCallback = (item) => new Promise(resolve => setTimeout(resolve(new Date().getSeconds() + item), 1000));
 *
 * const resultCallback = (item, result) => ({ item, result });
 *
 * // [{ item: 0, result: (0 + seconds) }, { item: 1, result: 1 + seconds }, { item: 2, result: 3 + seconds } ...]
 * const result = orderedPromiseAll([0, 1, 2, 3, 4, 5], promiseCallback, resultCallback);
 *
 * @param {Array []} promises - any Array of values
 * @param {Function} promiseCallback - callback that returns a promise to be resolved
 * @param {Function} resultCallback - callback that returns item to add to output array, it takes item and resolve of promise
 * @returns results array after all promises are resolved
 */
export declare const orderedPromiseAll: (promises: Array<any>, promiseCallback: (item: any) => Promise<any>, resultCallback?: (item: any, result: any, index: number) => any) => Promise<any[]>;
//# sourceMappingURL=arrays.d.ts.map