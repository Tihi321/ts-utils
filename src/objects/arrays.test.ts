import { includesAll } from "./arrays";

test("It return true as all keys in source array are present in target", () => {
  const source = ["first", "second"];
  const target = ["first", "second", "third", "fourth"];

  expect(includesAll(source, target)).toEqual(true);
});

test("It return false as all keys in source array are not present in target", () => {
  const source = ["first", "second", "fifth"];
  const target = ["first", "second", "third", "fourth"];

  expect(includesAll(source, target)).toEqual(false);
});
