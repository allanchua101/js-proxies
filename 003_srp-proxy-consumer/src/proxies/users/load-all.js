import axios from "axios";

/**
 * @class LoadAllUsersProxy
 * @description Proxy used for communicating with get all users endpoints.
 * @author Allan A. Chua
 * @version 1.0
 * @since March 12, 2019
 */
export default class LoadAllUsersProxy {
  /**
   * @async
   * @function execute
   * @description Method used for pulling all user records.
   *
   * @returns {Promise<User[]>} Promise representing a set of users.
   */
  async execute() {
    try {
      let { data } = await axios.get("http://localhost:3000/users");

      return data.users;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
}
