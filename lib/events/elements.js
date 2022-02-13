"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSlotPresent = void 0;
var get_1 = __importDefault(require("lodash/get"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var map_1 = __importDefault(require("lodash/map"));
var some_1 = __importDefault(require("lodash/some"));
var isSlotPresent = function (_a) {
    var elements = _a.elements, slotName = _a.slotName, datasetName = _a.datasetName;
    var datasets = (0, map_1.default)(elements, function (element) {
        return (0, get_1.default)(element, ["dataset"]);
    });
    return (0, some_1.default)(datasets, function (dataset) {
        return (0, isEqual_1.default)((0, get_1.default)(dataset, [datasetName]), slotName);
    });
};
exports.isSlotPresent = isSlotPresent;
//# sourceMappingURL=elements.js.map