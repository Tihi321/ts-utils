/**
 * Promisify functions that accept callback that will be called upon resolve, example wainting for message from api
 * @example
 * const getFromApi = async (service, name, functionToCall) => {
 *   SomeService.listen(
 *     args => {
 *       functionToCall(args);
 *     }
 *   );
 *   SomeService.send(service, name);
 * }
 *
 * getFromApiPromise = (...args) => promisifyCallback(getFromApi, ...args);
 *
 * const data = await getFromApiPromise("Service", "Name");
 * @param {Function} callback - Object to update.
 * @param {any[]} args - any optional arguments callback function needs
 * @return {Promise<unknown>} returns promise that will be resoved by callback
 */
export declare const promisifyCallback: (callback: Function, ...args: any[]) => Promise<unknown>;
//# sourceMappingURL=functions.d.ts.map