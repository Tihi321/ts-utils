"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapObjectCleanedData = exports.swapObjectData = exports.cleanObject = exports.objectFilter = exports.objectMap = exports.renameKeys = exports.pickFirstObjectItem = void 0;
var lodash_1 = require("lodash");
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
var pickFirstObjectItem = function (object, subValue) {
    var returnObj = {};
    Object.entries(object).forEach(function (_a) {
        var key = _a[0], values = _a[1];
        returnObj[key] = subValue
            ? lodash_1.head(values)[subValue]
            : lodash_1.head(values);
    });
    return returnObj;
};
exports.pickFirstObjectItem = pickFirstObjectItem;
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
var renameKeys = function (object, callback) {
    var returnObj = {};
    var paramObject = object;
    Object.keys(object).forEach(function (key) {
        returnObj[callback(key, paramObject[key])] = paramObject[key];
    });
    return returnObj;
};
exports.renameKeys = renameKeys;
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
var objectMap = function (object, callback) {
    var returnObj = {};
    Object.entries(object).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        returnObj[key] = callback(value, key);
    });
    return returnObj;
};
exports.objectMap = objectMap;
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
var objectFilter = function (object, callback) {
    var returnObj = {};
    Object.entries(object).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (callback(value, key)) {
            returnObj[key] = value;
        }
    });
    return returnObj;
};
exports.objectFilter = objectFilter;
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
var cleanObject = function (object) {
    return exports.objectFilter(object, function (value) { return Boolean(value); });
};
exports.cleanObject = cleanObject;
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
var swapObjectData = function (loopObject, valuesObject) {
    var paramObject = valuesObject;
    return exports.objectMap(loopObject, function (_val, key) { return paramObject[key]; });
};
exports.swapObjectData = swapObjectData;
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
var swapObjectCleanedData = function (loopObject, valuesObject) { return exports.cleanObject(exports.swapObjectData(loopObject, valuesObject)); };
exports.swapObjectCleanedData = swapObjectCleanedData;
//# sourceMappingURL=objects.js.map