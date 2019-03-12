import axios from "axios";

/**
 * @class GetUserByIDProxy
 * @description Proxy used for retrieving user by ID.
 * @author Allan A. Chua
 * @version 1.0
 * @since March 12, 2019
 */
export default class GetUserByIDProxy {
  /**
   * @async
   * @function execute
   * @description Method used for pulling user by ID.
   *
   * @param {number} id ID of user to retrieve.
   *
   * @returns {Promise<User>} Promise representing target user.
   */
  async execute(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
}
