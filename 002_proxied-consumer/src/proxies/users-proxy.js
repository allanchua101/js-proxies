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
  /**
   * @async
   * @function getByID
   * @description Method used for pulling user by ID.
   *
   * @param {number} id ID of user to retrieve.
   *
   * @returns {Promise<User>} Promise representing target user.
   */
  async getByID(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
}
