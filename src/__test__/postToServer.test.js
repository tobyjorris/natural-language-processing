const regeneratorRuntime = require("regenerator-runtime");
import { postDataToServer } from "../client/js/formHandler";

describe("postDataToServer", () => {
  it("works with postDataToServer", async () => {
    global.fetch = jest.fn();
    await postDataToServer("https://dummyurl.com");
    expect(global.fetch).toHaveBeenCalledWith("https://dummyurl.com", {
      body: "{}",
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });
  });
});
