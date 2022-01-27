"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchApi = void 0;
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var map_1 = __importDefault(require("lodash/map"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var browser_1 = require("../browser");
var fetchApi = function (url, toCall, nodeFetchCallback) {
    if (nodeFetchCallback === void 0) { nodeFetchCallback = node_fetch_1.default; }
    var fetchData = (0, browser_1.isBrowser)() && window.fetch
        ? window.fetch
        : nodeFetchCallback;
    if (typeof url === "string") {
        fetchData(url)
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (response) { return toCall(response); });
    }
    else {
        var fetchUrl = void 0;
        var urlString = (0, get_1.default)(url, "url");
        var urlQuery = (0, get_1.default)(url, "query");
        if (!(0, isEmpty_1.default)(urlQuery)) {
            var queryString = (0, map_1.default)(urlQuery, function (values) {
                var key = (0, get_1.default)(values, "key");
                var value = (0, get_1.default)(values, "value");
                return (0, isEmpty_1.default)(value) ? key : "".concat(key, "=").concat(value);
            }).join("&");
            fetchUrl = "".concat(urlString, "?").concat(queryString);
        }
        else {
            fetchUrl = urlString;
        }
        var sufix = (0, get_1.default)(url, "suffix");
        fetchData(!(0, isEmpty_1.default)(sufix) ? "".concat(fetchUrl).concat(sufix) : fetchUrl, (0, get_1.default)(url, "options"))
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (response) { return toCall(response); });
    }
};
exports.fetchApi = fetchApi;
//# sourceMappingURL=fetch.js.map