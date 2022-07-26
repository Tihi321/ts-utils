/**
 * Retrives first element from array value of object keys, used in combination with groupBy from lodash, groupBy returns grouped values from array with provided key in callback. If key is unique array will have one value. This can be used to take out that value
 * @example
 * const services = [{name: "Service01", running: true}, {name: "Service02", running: true}, {name: "Service03", running: true}];
 *
 * // {Service01: [{name: "Service01", running: true}], Service02: [{name: "Service02", running: true}], Service03: [{name: "Service03", running: true}]}
 * const servicesGroupedByName = groupBy(services, ({ name }) => name);
 *
 * // {Service01: {name: "Service01", running: true}, Service02: {name: "Service02", running: true}, Service03: {name: "Service03", running: true}}
 * const servicesNoSubKey = pickFirstObjectItem(servicesGroupedByName);
 *
 * // {Service01: true, Service02: true, Service03: true}
 * const servicesSubKey = pickFirstObjectItem(servicesGroupedByName, "running");
 * @param {object} object - Object containing array values.
 * @param {string} subValue - (Optional) key to retrieve from array object item
 * @return {object} returns object containing data from object
 */
export declare const pickFirstObjectItem: (object: object, subValue?: string | undefined) => object;
/**
 * Update object keys with callback
 * @example
 * const object = {Service1: "someValue1", Service2: "someValue2", Service3: "someValue3"};
 *
 * // {Desktop-Service1-value-example: "someValue1", Desktop-Service2-key-example: "someValue2", Desktop-Service3: "someValue3"}
 * const newObject = renameKeys(object, (key, value) => {
 *  if (value === "someValue1") {
 *    return `${machineName}-${name}-value-example`;
 *  }
 *
 *  if (key === "Service2") {
 *    return `${machineName}-${name}-key-example`;
 *  }
 *
 *  return `${machineName}-${name}`;
 * });
 * @param {object} object - Object to update.
 * @param {function} callback - function that needs to return new key name - receives (key, value)
 * @return {object} returns object containing new keys
 */
export declare const renameKeys: (object: object, callback: (key: string, value: any) => string) => object;
/**
 * forEach with index value
 * @example
 * const object = {KeyName: {a: 4, b: 8}};
 *
 * objectLoop(object, (value, key, index) => {...});
 * @param {object} object - Object to update.
 * @param {function} callback - function that is called on every object receives (value, key)
 * @return {object} returns udapted object
 */
export declare const objectLoop: (object: object, callback: (value: any, key: string, index: number) => any) => void;
/**
 * Takes array of keys, value and object. Returns new object with updated last key with value, and all previous keys are checked if they do not exist they are created dynamically
 *
 * @example
 * const object = {first: {a: 4, b: 8}};
 * const keys = ["first", "a"];
 *
 * // {first: {a: 2, b: 8}}
 * const updatedObject = setObjectLeaf(["first", "a"], 2, object);
 *
 * // {first: {c: 5}}
 * const updatedObject = setObjectLeaf(["first", "c"], 5, {});
 *
 * @param {Array} keys array of string keys for object
 * @param  {any} value value to add into nested key
 * @param  {Object} object object to populate
 * @param  {Function} functionCallback optional function that is called when setting last key, it receives new value and old value and what is returned it is set in that key
 * @returns returns new object with new added subkey with value
 */
export declare function setObjectLeaf(keys: Array<string>, value: any, object: object | undefined, functionCallback: Function): any;
/**
 * Mapping through object keys and return object with updated values
 * @example
 * const object = {KeyName: {a: 4, b: 8}};
 *
 * // {KeyName: {a: 8, b: 16}}
 * const newObject = objectMap(object, ({a, b}) => {a: a * 2, b: b * 2});
 * @param {object} object - Object to update.
 * @param {function} callback - function that is called on every object receives (value, key)
 * @return {object} returns udapted object
 */
export declare const objectMap: (object: object, callback: (value: any, key: string) => any) => object;
/**
 * Mapping through object keys and returns new filtered object
 * @example
 * const object = {engine: "value 1", test: "value 2"};
 *
 * // {engine: "value 1"}
 * const newObject = objectFilter(object, (value, key) => key === "engine");
 * @param {object} object - Object to update.
 * @param {function} callback - function that is called on every object receives (value, key) it returns a boolean
 * @return {object} returns udapted object
 */
export declare const objectFilter: (object: object, callback: (value: any, key: string) => any) => object;
/**
 * Mapping through object keys and removing undefined values
 * @example
 * const objectToClean = {test: "different data", test02: undefined};
 *
 * // {test: "different data"}
 * const newObject = cleanObject(objectToClean);
 * @param {object} export const cleanObject = object => objectFilter(object, value => Bolean(value));
 - Object to loop.
 * @return {object} returns udapted object
 */
export declare const cleanObject: (object: object) => object;
/**
 * Mapping through object keys and taking values form second object under same key
 * @example
 * const loopObject = {KeyName01: "some data"};
 * const valuesObject = {KeyName01: "different data", KeyName02: "different data"};
 *
 * // {KeyName01: "different data"}
 * const newObject = swapObjectData(loopObject, valuesObject);
 * @param {object} loopObject - Object to loop.
 * @param {object} valuesObject - Object to take values form
 * @return {object} returns udapted object
 */
export declare const swapObjectData: (loopObject: object, valuesObject: object) => object;
/**
 * Mapping through object keys and taking values form second object under same key, all undefined values are removed
 * @example
 * const loopObject = {KeyName01: "some data"};
 * const valuesObject = {KeyName01: "different data", KeyName02: "different data"};
 *
 * // {KeyName01: "different data"}
 * const newObject = swapObjectData(loopObject, valuesObject);
 * @param {object} loopObject - Object to loop.
 * @param {object} valuesObject - Object to take values form
 * @return {object} returns udapted object
 */
export declare const swapObjectCleanedData: (loopObject: object, valuesObject: object) => object;
//# sourceMappingURL=objects.d.ts.map