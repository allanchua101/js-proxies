# JS API Proxy Design Pattern
This repository is a POC of JavaScript API proxy design patterns. 

## Advantages of encapsulating API calls

- Abstracts consumers from technology used to retrieve data from APIs.
- Allows re-usability of API calls across different consumers.
- Allows mocking of API layers in unit testing.

## API Proxy via ES6 Class

```js
import axios from "axios";

/**
 * @class UsersProxy
 * @description Proxy used for communicating with user endpoints.
 * @author Allan A. Chua
 * @version 1.0
 * @since March 12, 2019
 */
export default class UsersProxy {
  /**
   * @async
   * @function loadAllUsers
   * @description Method used for pulling all user records.
   *
   * @returns {Promise<User[]>} Promise representing a set of users.
   */
  async loadAllUsers() {
    try {
      let { data } = await axios.get("http://localhost:3000/users");

      return data.users;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
}
```

## API Proxy via Common JS

```js
const axios = require("axios");

/**
 * @class loadAllUsersProxy
 * @description Proxy used for communicating with get all users endpoints.
 * @author Allan A. Chua
 * @version 1.0
 * @since March 12, 2019
 */
module.exports = {
  /**
   * @async
   * @function loadAllUsers
   * @description Method used for pulling all user records.
   *
   * @returns {Promise<User[]>} Promise representing a set of users.
   */
  async loadAllUsers() {
    try {
      let { data } = await axios.get("http://localhost:3000/users");

      return data.users;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
};
```

## Proxies improve testability

Proxies provide a way to abstract away API calls from consumer modules, this improves testability because you can mock API calls from and start focusing on testing behavior that you want to target.

Imagine that you have to test the module below that counts the number of data from an API response.

```js
const { loadAllUsers } = require("./load-all-proxy");

module.exports = {
  /**
   * @async
   * @function countUsers
   * @description Method used for counting users.
   *
   * @returns {Promise<number>} Promise representing number of registered users.
   */
  async countUsers() {
    let users = await loadAllUsers();

    return users.length;
  }
```

A typical bad unit test would involve actual invocation of the API.

```js
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
```

The code above is considered bad because its not repeatable and actual response data count from a database or remote API could be subjected to change over time. You can improve this test by mocking the loadAllUsers proxy and focus on testing the accuracy of the counter module by providing a simulated behavior (Mock).

```js
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
```
