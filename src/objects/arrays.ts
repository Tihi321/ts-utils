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

export const includesAll = (
  source: Array<string | number>,
  target: Array<string | number>
): boolean => source.every(item => target.includes(item));

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

export const rangeEach = (range: number, callback: Function) => {
  for (let index = 0; index < range; index += 1) {
    callback(index);
  }
};

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

export const rangeMap = (range: number, callback: Function) => {
  let returnArray: any[] = [];
  for (let index = 0; index < range; index += 1) {
    returnArray = [...returnArray, callback(index)];
  }

  return returnArray;
};

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

export const rangeReduce = (
  range: number,
  callback: Function,
  initialValue: any
) => {
  let returnItem = initialValue;
  for (let index = 0; index < range; index += 1) {
    returnItem = callback(returnItem, index);
  }

  return returnItem;
};
