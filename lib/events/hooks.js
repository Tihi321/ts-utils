"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAvoidElementEvent = exports.useAvoidElementCallback = void 0;
var get_1 = __importDefault(require("lodash/get"));
var elements_1 = require("./elements");
var events_1 = require("./events");
var useAvoidElementCallback = function (_a) {
    var datasetName = _a.datasetName, slotName = _a.slotName, callback = _a.callback;
    var onEventCallback = function (event) {
        if (!(0, elements_1.isSlotPresent)({
            elements: (0, get_1.default)(event, ["path"]),
            datasetName: datasetName,
            slotName: slotName,
        })) {
            callback();
        }
    };
    return {
        onEventCallback: onEventCallback,
    };
};
exports.useAvoidElementCallback = useAvoidElementCallback;
var useAvoidElementEvent = function (_a) {
    var datasetName = _a.datasetName, slotName = _a.slotName, dispatchEventName = _a.dispatchEventName;
    var onEventCallback = (0, exports.useAvoidElementCallback)({
        datasetName: datasetName,
        slotName: slotName,
        callback: function (event) {
            (0, events_1.dispatchEvent)({
                element: (0, get_1.default)(event, ["target"]),
                name: dispatchEventName,
            });
        },
    }).onEventCallback;
    return {
        onEventCallback: onEventCallback,
    };
};
exports.useAvoidElementEvent = useAvoidElementEvent;
//# sourceMappingURL=hooks.js.map