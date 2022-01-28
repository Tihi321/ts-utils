import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { queryStringBuilder } from "./query";
export var fetchApi = function (_a) {
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
        var urlString = get(url, "url");
        var urlQuery = get(url, "query");
        if (urlQuery !== undefined && !isEmpty(urlQuery)) {
            var queryString = queryStringBuilder(urlQuery);
            fetchUrl = "".concat(urlString, "?").concat(queryString);
        }
        else {
            fetchUrl = urlString;
        }
        var sufix = get(url, "suffix");
        callFunction(!isEmpty(sufix) ? "".concat(fetchUrl).concat(sufix) : fetchUrl, get(url, "options"))
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return json ? response.json() : response;
        })
            .then(function (response) { return toCall(response); });
    }
};
//# sourceMappingURL=fetch.js.map