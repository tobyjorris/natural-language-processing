import { postDataToServer } from "../client/js/postToServer";

test("checks input for a valid URL", () => {
  expect(postDataToServer("https://www.google.com")).toBe({});
});
