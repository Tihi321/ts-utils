/**
 * Generates selector for reselect library
 * @example
 * const dataSelector = generateSelector({data: []});
 *
 *
 * @param {any} initialState - state that is returned as a initial state for selector
 * @returns returns initialState
 */
export declare const generateSelector: (initialState: any) => () => any;
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
export declare const combineSelector: (...callbacks: Function[]) => any;
//# sourceMappingURL=selectors.d.ts.map