import { checkPostal } from "../index";
test("Valid Postal Code", () => {
  expect(checkPostal("018906")).toBe(true);
});

test("Invalid Postal Code", () => {
  expect(checkPostal("123456")).toBe(false);
});
