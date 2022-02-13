import get from "lodash/get";
import isEqual from "lodash/isEqual";
import map from "lodash/map";
import some from "lodash/some";
export var isSlotPresent = function (_a) {
    var elements = _a.elements, slotName = _a.slotName, datasetName = _a.datasetName;
    var datasets = map(elements, function (element) {
        return get(element, ["dataset"]);
    });
    return some(datasets, function (dataset) {
        return isEqual(get(dataset, [datasetName]), slotName);
    });
};
//# sourceMappingURL=elements.js.map