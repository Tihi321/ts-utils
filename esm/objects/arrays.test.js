import { includesAll } from "./arrays";
test("It return true as all keys in source array are present in target", function () {
    var source = ["first", "second"];
    var target = ["first", "second", "third", "fourth"];
    expect(includesAll(source, target)).toEqual(true);
});
test("It return false as all keys in source array are not present in target", function () {
    var source = ["first", "second", "fifth"];
    var target = ["first", "second", "third", "fourth"];
    expect(includesAll(source, target)).toEqual(false);
});
//# sourceMappingURL=arrays.test.js.map