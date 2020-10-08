import { validateInput } from "../client";

test("checks input for a valid URL", () => {
  expect(validateInput("https://www.google.com")).toBe(true);
});
