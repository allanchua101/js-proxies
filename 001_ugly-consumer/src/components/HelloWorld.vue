
<script>
import ConsumerA from "./ConsumerA";
import ConsumerB from "./ConsumerB";
import ConsumerC from "./ConsumerC";

export default {
  name: "HelloWorld",
  components: {
    ConsumerA,
    ConsumerB,
    ConsumerC
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
  <div class="hello">
    <h1>Ugly Consumption Demo</h1>
    <ConsumerA />
    <ConsumerB />
    <ConsumerC />
  </div>
</template>