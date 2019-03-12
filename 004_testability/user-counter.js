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
};
