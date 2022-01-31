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
export var generateSelector = function (initialState) { return function () { return initialState; }; };
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
export var combineSelector = function () {
    var callbacks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        callbacks[_i] = arguments[_i];
    }
    var returnCallback = callbacks.pop();
    var data = map(callbacks, function (callback) {
        return isFunction(callback) ? callback() : callback;
    });
    if (returnCallback !== undefined) {
        return returnCallback.apply(void 0, data);
    }
    return undefined;
};
//# sourceMappingURL=selectors.js.map