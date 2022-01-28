import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
export var queryStringBuilder = function (arg) {
    return map(arg, function (values) {
        var key = get(values, "key");
        var value = get(values, "value");
        return isEmpty(value) ? key : "".concat(key, "=").concat(value);
    }).join("&");
};
//# sourceMappingURL=query.js.map