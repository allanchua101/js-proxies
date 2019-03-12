<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  color: #42b983;
  display: inline-block;
  margin: 32px 10px;
}
</style>

<script>
import UsersProxy from "../proxies/users-proxy.js";

export default {
  name: "ConsumerB",
  async mounted() {
    let proxy = new UsersProxy();

    this.users = await proxy.loadAllUsers();
  },
  props: {
    msg: String
  },
  data() {
    return {
      users: []
    };
  }
};
</script>

<template>
    <ul>
      <h3>User List B</h3>
      <li v-for="user in users"
        :key="user.id">{{user.first_name}} {{user.last_name}}</li>
    </ul>
</template>