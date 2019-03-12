// import axios from "axios";
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
