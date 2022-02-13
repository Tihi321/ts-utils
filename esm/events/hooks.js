import get from "lodash/get";
import { isSlotPresent } from "./elements";
import { dispatchEvent } from "./events";
export var useAvoidElementCallback = function (_a) {
    var datasetName = _a.datasetName, slotName = _a.slotName, callback = _a.callback;
    var onEventCallback = function (event) {
        if (!isSlotPresent({
            elements: get(event, ["path"]),
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
export var useAvoidElementEvent = function (_a) {
    var datasetName = _a.datasetName, slotName = _a.slotName, dispatchEventName = _a.dispatchEventName;
    var onEventCallback = useAvoidElementCallback({
        datasetName: datasetName,
        slotName: slotName,
        callback: function (event) {
            dispatchEvent({
                element: get(event, ["target"]),
                name: dispatchEventName,
            });
        },
    }).onEventCallback;
    return {
        onEventCallback: onEventCallback,
    };
};
//# sourceMappingURL=hooks.js.map