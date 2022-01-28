"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryStringBuilder = void 0;
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var map_1 = __importDefault(require("lodash/map"));
var queryStringBuilder = function (arg) {
    return (0, map_1.default)(arg, function (values) {
        var key = (0, get_1.default)(values, "key");
        var value = (0, get_1.default)(values, "value");
        return (0, isEmpty_1.default)(value) ? key : "".concat(key, "=").concat(value);
    }).join("&");
};
exports.queryStringBuilder = queryStringBuilder;
//# sourceMappingURL=query.js.map