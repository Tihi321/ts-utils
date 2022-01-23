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
//# sourceMappingURL=arrays.d.ts.map