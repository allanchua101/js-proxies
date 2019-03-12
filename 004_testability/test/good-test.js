const { expect } = require("chai");
const mock = require("mock-require");
// Wire a mock of the proxy so that test could be improved by:
// 1. No real API calls.
// 2. Behavior is wired and predictable, therefore shifting focus
//    to the specific unit to be tested.
mock("../load-all-proxy", {
  async loadAllUsers() {
    console.log("MOCKED is invoked instead of real object.");
    return [{}, {}, {}, {}, {}];
  }
});

const { countUsers } = mock.reRequire("../user-counter");

describe("Good testing demo is running", () => {
  it.only("Good Test", async () => {
    let userCount = await countUsers();

    expect(userCount).to.be.equal(5);
  });
});
