"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchApi = void 0;
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var query_1 = require("./query");
var fetchApi = function (_a) {
    var url = _a.url, toCall = _a.toCall, _b = _a.callFunction, callFunction = _b === void 0 ? window.fetch : _b, _c = _a.json, json = _c === void 0 ? true : _c;
    if (typeof url === "string") {
        callFunction(url)
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return json ? response.json() : response;
        })
            .then(function (response) { return toCall(response); });
    }
    else {
        var fetchUrl = void 0;
        var urlString = (0, get_1.default)(url, "url");
        var urlQuery = (0, get_1.default)(url, "query");
        if (urlQuery !== undefined && !(0, isEmpty_1.default)(urlQuery)) {
            var queryString = (0, query_1.queryStringBuilder)(urlQuery);
            fetchUrl = "".concat(urlString, "?").concat(queryString);
        }
        else {
            fetchUrl = urlString;
        }
        var sufix = (0, get_1.default)(url, "suffix");
        callFunction(!(0, isEmpty_1.default)(sufix) ? "".concat(fetchUrl).concat(sufix) : fetchUrl, (0, get_1.default)(url, "options"))
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return json ? response.json() : response;
        })
            .then(function (response) { return toCall(response); });
    }
};
exports.fetchApi = fetchApi;
//# sourceMappingURL=fetch.js.map