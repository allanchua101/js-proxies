const { expect } = require("chai");
const { countUsers } = require("../user-counter");

describe("Bad testing demo is running", () => {
  // This test is never gonna work in production
  // coz API will more likely return variable
  // count of users. Therefore, rendering this test
  // as unreliable
  it.only("Bad Test", async () => {
    let userCount = await countUsers();

    expect(userCount).to.be.equal(4);
  });
});
