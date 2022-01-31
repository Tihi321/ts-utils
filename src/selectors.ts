import isFunction from "lodash/isFunction";
import map from "lodash/map";

/**
 * Generates selector for reselect library
 * @example
 * const dataSelector = generateSelector({data: []});
 *
 *
 * @param {any} initialState - state that is returned as a initial state for selector
 * @returns returns initialState
 */
export const generateSelector = (initialState: any) => () => initialState;

/**
 * Allows usage of selector logic outside of reselect
 * @example
 * export const getRandomPeopleNames = (peopleNamesDataSelector) => combineSelector(
 *  peopleNamesDataSelector,
 *  (names) => {
 *    return names;
 * }
 *)
 *
 *
 * @param {any} initialState - state that is returned as a initial state for selector
 * @returns returns initialState
 */

export const combineSelector = (...callbacks: Function[]) => {
  const returnCallback = callbacks.pop();
  const data = map(callbacks, callback =>
    isFunction(callback) ? callback() : callback
  );

  if (returnCallback !== undefined) {
    return returnCallback(...data);
  }

  return undefined;
};
