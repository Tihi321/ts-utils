import { head } from "lodash";

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
export const pickFirstObjectItem = (object: object, subValue?: string) => {
  const returnObj: Record<string, any> = {};
  Object.entries(object).forEach(([key, values]) => {
    returnObj[key] = subValue
      ? head(values as Array<any>)[subValue]
      : head(values);
  });

  return returnObj as object;
};

/**
 * Update object keys with callback
 * @example
 * const object = {Service01: "someValue", Service02: "someValue"};
 *
 * // {Desktop-Service01: "someValue", Desktop-Service02: "someValue"}
 * const newObject = renameKeys(object, key => `${machineName}-${name}`);
 * @param {object} object - Object to update.
 * @param {function} callback - function that needs to return new key name - receives (key)
 * @return {object} returns object containing new keys
 */
export const renameKeys = (
  object: object,
  callback: (key: string) => string
) => {
  const returnObj: Record<string, any> = {};
  const paramObject: Record<string, any> = object;
  Object.keys(object).forEach(key => {
    returnObj[callback(key)] = paramObject[key];
  });

  return returnObj as object;
};

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
export const objectMap = (
  object: object,
  callback: (value: any, key: string) => any
) => {
  const returnObj: Record<string, any> = {};
  Object.entries(object).forEach(([key, value]) => {
    returnObj[key] = callback(value, key);
  });

  return returnObj as object;
};

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
export const swapObjectData = (loopObject: object, valuesObject: object) => {
  const paramObject: Record<string, any> = valuesObject;

  return objectMap(loopObject, (_val, key) => paramObject[key]);
};
