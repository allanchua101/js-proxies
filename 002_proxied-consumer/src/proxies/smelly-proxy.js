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
  async getByIDv1(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv2(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv3(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv4(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv5(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv6(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv7(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv8(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv9(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv10(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  async getByIDv11(id) {
    try {
      let { data } = await axios.get(`http://localhost:3000/users/${id}`);

      return data.user;
    } catch (error) {
      // TODO: Implement proper logging here.
      return [];
    }
  }
  //.... grows quickly if API calls are
  //.... gobbled by entity. Saw an API file worth 1.5k lines :D
}
