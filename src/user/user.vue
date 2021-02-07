<template>
  <div class="container">
    <div class="row">
      <user-item
        v-for="(data, index) in userData"
        :data="data"
        :key="data.id"
        :index="index"
      ></user-item>
    </div>
  </div>
</template>
<script>
import UserItem from "./user-item.vue";
export default {
  components: {
    UserItem
  },
  data() {
    return {
      userData: null
    };
  },
  methods: {},
  computed: {},
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(response => (this.userData = response.data))
      .catch(err => console.log(err));
  }
};
</script>
