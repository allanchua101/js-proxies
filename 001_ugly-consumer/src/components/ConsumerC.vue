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
  color: #00b3fa;
  display: inline-block;
  margin: 32px 10px;
}
</style>

<script>
import axios from "axios";

export default {
  name: "ConsumerB",
  async mounted() {
    let { data } = await axios.get("http://localhost:3000/users");

    this.users = data.users;
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
      <h3>User List C</h3>
      <li v-for="user in users"
        :key="user.id">{{user.first_name}} {{user.last_name}}</li>
    </ul>
</template>