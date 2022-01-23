"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = require("./arrays");
test("It return true as all keys in source array are present in target", function () {
    var source = ["first", "second"];
    var target = ["first", "second", "third", "fourth"];
    expect((0, arrays_1.includesAll)(source, target)).toEqual(true);
});
test("It return false as all keys in source array are not present in target", function () {
    var source = ["first", "second", "fifth"];
    var target = ["first", "second", "third", "fourth"];
    expect((0, arrays_1.includesAll)(source, target)).toEqual(false);
});
//# sourceMappingURL=arrays.test.js.map