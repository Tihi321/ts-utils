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

export const orderedPromiseAll = async (
  promises: Array<any>,
  promiseCallback: (item: any) => Promise<any>,
  resultCallback: (item: any, result: any, index: number) => any = (
    _item: any,
    result: any
  ) => result
): Promise<any[]> => {
  let output: any[] = [];

  for (let index = 0; index < promises.length; index += 1) {
    const item = promises[index];

    // eslint-disable-next-line no-await-in-loop
    const result = await promiseCallback(item);

    output = [...output, resultCallback(item, result, index)];
  }

  return output;
};
